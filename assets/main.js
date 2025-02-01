document.addEventListener("DOMContentLoaded", function () {
    loadHeaderAndFooter();
    initSearch();
    initLanguageSwitcher();
});

/**
 * 헤더와 푸터를 로드하는 함수
 */
function loadHeaderAndFooter() {
    let pathPrefix = "";

    // 현재 파일 경로가 /pages/ 아래에 있다면 한 단계 위로 올라가서 header, footer 로드
    if (window.location.pathname.includes("/pages/")) {
        pathPrefix = "../";
    }

    fetch(pathPrefix + "header.html")
        .then(response => response.text())
        .then(data => {
            const header = document.getElementById("header");
            if (header) header.innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    fetch(pathPrefix + "footer.html")
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById("footer");
            if (footer) footer.innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}


/**
 * 검색 기능 초기화
 */
function initSearch() {
    const searchInput = document.getElementById("search");

    if (!searchInput) return; // 검색창이 없는 페이지에서는 실행 안 함

    searchInput.addEventListener("input", function () {
        console.log("Search query:", searchInput.value);
        // 검색 기능 추가 가능
    });
}

/**
 * 언어 변경 기능 초기화
 */
function initLanguageSwitcher() {
    const languageSelect = document.getElementById("language-select");
    if (!languageSelect) return; // 언어 선택이 없는 페이지에서는 실행 안 함

    const elementsToTranslate = document.querySelectorAll("[data-key]");
    const translations = {
        en: { "title": "Engineering Mathematics", "overview-math": "Overview of engineering mathematics." },
        ko: { "title": "공업수학", "overview-math": "공업수학 개요입니다." }
    };

    function changeLanguage(lang) {
        if (!translations[lang]) return;
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem("selectedLanguage", lang);
    }

    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);

    languageSelect.addEventListener("change", function () {
        changeLanguage(this.value);
    });
}
