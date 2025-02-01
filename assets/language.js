document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const languageSelect = document.getElementById("language-select");

        if (!languageSelect) {
            console.error("Error: Language select element not found!");
            return;
        }

        const elementsToTranslate = document.querySelectorAll("[data-key]");

        // 번역 데이터
        const translations = {
            en: {
                title: "SJ's Wiki",
                "search-placeholder": "Enter a search term...",
                "nav-math": "Engineering Mathematics",
                "nav-linear-algebra": "Linear Algebra",
                "nav-discrete-math": "Discrete Mathematics",
                "nav-signals": "Signals and Systems",
                "nav-software": "Software Engineering",
                "nav-os": "Operating System",
                "desc-math": "Organizing and learning engineering mathematics concepts.",
                "desc-linear-algebra": "A space to learn matrix and vector operations.",
                "desc-discrete-math": "Covers logic, graph theory, and set theory.",
                "desc-signals": "Learn Fourier transforms and Laplace transforms.",
                "desc-software": "Learn software development processes and principles.",
                "desc-os": "Covers operating system concepts and process management.",
                "view-more": "Learn More",
                "title-math": "Engineering Mathematics",
                "overview-math": "Engineering mathematics covers mathematical techniques including differential equations, Laplace transforms, Fourier analysis, and more.",
                "chapter-differential": "Differential Equations",
                "chapter-laplace": "Laplace Transform",
                "chapter-fourier": "Fourier Transform",
                "chapter-vector": "Vector Calculus",
                "chapter-complex": "Complex Analysis",
                "title ode": "Differential Equations | Engineering Mathematics",
                "exact-differential-equation": "Exact Differential Equation",
                "exact-definition": "The total differential of a function \( u(x, y) \) with two variables is defined as follows:",
                "exact-definition-conclusion": "If the above equation holds, it is called an exact differential equation, and to find \( u \), integrate \( M \) and \( N \) separately so that the results match.",
                "integrating-factor": "Integrating Factor",
                "integrating-factor-description": "In this case, an appropriate integrating factor \( F(x, y) \) can be multiplied to convert the equation into an exact differential equation form.",
                "linear-odes": "Linear ODEs",
                "homogeneous-odes": "Homogeneous ODEs",
                "nonhomogeneous-odes": "Nonhomogeneous ODEs",
                "wronskian-method": "Wronskian Method",
                "wronskian-definition": "Wronskian is used to verify the linear independence of functions.",
                "wronskian-conclusion": "If the Wronskian is 0, the functions are linearly dependent.",
                "title lt": "Laplace Transform | Engineering Mathematics",
                "laplace-overview": "Laplace Transform Overview",
                "laplace-overview-description": "Laplace Transform is a powerful tool for solving differential equations. Unlike traditional methods that require predicting the form of the solution, Laplace Transform can solve problems without any prediction.",
                "laplace-overview-introduction": "Before understanding the Laplace Transform, let's review a few basic assumptions.",
                "laplace-basics": "Basic Assumptions of Laplace Transform",
                "laplace-time-variable": "We use 'time' as the fundamental variable, so we use \( t \) instead of \( x \).",
                "laplace-dimension-change": "Laplace Transform changes dimensions.",
                "laplace-transform": "Laplace Transform: \( t \to s \)",
                "inverse-laplace-transform": "Inverse Laplace Transform: \( s \to t \)",
                "laplace-formula": "Laplace Transform Formula:",
                "laplace-memorization": "Famous function transformations should be memorized.",
                "laplace-formulas": "Laplace Transform Formulas",
                "first-push-method": "1st Push Method",
                "first-push-method-description": "For \( \mathcal{L} \{ e^{ax} f(t) \} \), we can organize it as follows:",
                "first-push-method-application": "This concept is effective when applied in problem-solving.",
                "second-push-method": "2nd Push Method",
                "second-push-method-description": "We can transform using the unit step function (Unit Step Function).",
                "laplace-transform-second-method": "Laplace transform is as follows:",
                "second-push-method-conclusion": "Using this, we can organize as follows:",
                "laplace-function": "Laplace Transform of Functions",
                "laplace-derivative": "Laplace Transform of derivatives:",
                "laplace-derivative-general": "Generalizing this, we get:",
                "laplace-differential-equations": "This can be used to solve differential equations.",
                "laplace-applications": "Applications",
                "laplace-applications-description": "Laplace transforms are used in various fields such as circuit analysis, control systems, and signal processing.",
                "title ss" : "Signal and System | SJ's Wiki",
                "overview-ss" : "Signals and Systems is a course that covers the basic concepts of signals and the Fourier and Laplace transforms using them.",
                "chapter-ss-zero" : "Chapter 0. What are Signals and Systems?",
                "chapter-ss-one" : "Chapter 1. Linear Systems and Impulse Response",
                "chapter-ss-two" : "Chapter 2. First Order Differential Equations",
                "chapter-ss-three" : "Chapter 3. Fourier Series",
                "chapter-ss-four" : "Chapter 4. Fourier Transforms",
                "chapter-ss-five" : "Chapter 5. Laplace Transforms"
            },
            ko: {
                title: "SJ의 위키",
                "search-placeholder": "검색어를 입력하세요...",
                "nav-math": "공업수학",
                "nav-linear-algebra": "선형대수학",
                "nav-discrete-math": "이산수학",
                "nav-signals": "신호 및 시스템",
                "nav-software": "소프트웨어공학",
                "nav-os": "운영체제",
                "desc-math": "공업 수학 개념을 정리하고 학습할 수 있습니다.",
                "desc-linear-algebra": "행렬과 벡터 연산을 배우는 공간입니다.",
                "desc-discrete-math": "논리, 그래프 이론, 집합론을 다룹니다.",
                "desc-signals": "푸리에 변환, 라플라스 변환 개념 학습",
                "desc-software": "소프트웨어 개발 프로세스와 원칙을 배웁니다.",
                "desc-os": "운영체제의 개념과 프로세스 관리를 다룹니다.",
                "view-more": "자세히 보기",
                "title-math": "공업수학",
                "overview-math": "공업 수학은 미분방정식, 라플라스 변환, 푸리에 분석 등을 포함하는 수학적 기법을 다룹니다.",
                "chapter-differential": "미분방정식",
                "chapter-laplace": "라플라스 변환",
                "chapter-fourier": "푸리에 변환",
                "chapter-vector": "벡터 미적분학",
                "chapter-complex": "복소해석학",
                "title ode": "미분방정식 | 공업수학",
                "exact-differential-equation": "완전 미분방정식",
                "exact-definition": "두 변수로 이루어진 함수 \( u(x, y) \)의 전미분은 다음과 같이 정의된다:",
                "exact-definition-conclusion": "위의 식이 성립하면 완전 미분방정식이라 하며, \( u \)를 구하기 위해 \( M \), \( N \)을 각각 적분하여 동일한 결과가 나오도록 한다.",
                "integrating-factor": "적분인자",
                "integrating-factor-description": "이 경우, 적절한 적분인자 \( F(x, y) \)를 곱하여 식을 완전 미분방정식 형태로 만들 수 있다.",
                "linear-odes": "선형 미분방정식",
                "homogeneous-odes": "동차 방정식",
                "nonhomogeneous-odes": "비동차 방정식",
                "wronskian-method": "Wronskian 방법",
                "wronskian-definition": "Wronskian은 함수들의 선형 독립성을 확인하는데 사용된다.",
                "wronskian-conclusion": "Wronskian이 0이면 함수들이 선형 종속이다.",
                "title lt": "라플라스 변환 | 공업수학",
                "laplace-overview": "라플라스 변환 개요",
                "laplace-overview-description": "라플라스 변환은 미분방정식을 푸는 강력한 도구이다. 기존의 방식은 해의 형태를 예측하고 풀어야 했지만, 라플라스 변환은 예측 없이 문제를 해결할 수 있다.",
                "laplace-overview-introduction": "라플라스 변환을 이해하기 전에 몇 가지 기본적인 전제를 확인하자.",
                "laplace-basics": "라플라스 변환의 기본 전제",
                "laplace-time-variable": "우리는 '시간'을 기본적인 변수로 사용한다. 따라서 수학적 변수 \( x \) 대신 \( t \)를 사용한다.",
                "laplace-dimension-change": "라플라스 변환은 차원을 변환하는 것이다.",
                "laplace-transform": "라플라스 변환: \( t \to s \)",
                "inverse-laplace-transform": "역 라플라스 변환: \( s \to t \)",
                "laplace-formula": "라플라스 변환 공식:",
                "laplace-memorization": "유명한 함수들의 변환 공식은 암기해야 한다.",
                "laplace-formulas": "라플라스 변환 공식 정리",
                "first-push-method": "1st Push Method",
                "first-push-method-description": "\( \mathcal{L} \{ e^{ax} f(t) \} \)의 경우, 다음과 같이 정리할 수 있다:",
                "first-push-method-application": "이 개념을 잘 익히고 문제 풀이에서 활용하면 효과적이다.",
                "second-push-method": "2nd Push Method",
                "second-push-method-description": "단위 계단 함수(Unit Step Function)를 이용하여 변환할 수 있다.",
                "laplace-transform-second-method": "라플라스 변환은 다음과 같다.",
                "second-push-method-conclusion": "이를 이용하면 다음과 같이 정리할 수 있다.",
                "laplace-function": "함수의 라플라스 변환",
                "laplace-derivative": "도함수의 라플라스 변환:",
                "laplace-derivative-general": "이를 일반화하면 다음과 같다.",
                "laplace-differential-equations": "이를 활용하여 미분방정식을 풀 수 있다.",
                "laplace-applications": "응용",
                "laplace-applications-description": "라플라스 변환은 회로 해석, 제어 시스템, 신호 처리 등 다양한 분야에서 활용된다.",
                "title ss" : "신호 및 시스템 | Sj's Wiki",
                "overview-ss" : "신호및시스템은 신호의 기본 개념과 이를 이용하여 푸리에변환과 라플라스 변환에 대해 다루는 과목입니다.",
                "chapter-ss-zero" : "Chapter 0. 신호및시스템이란?",
                "chapter-ss-one" : "Chapter 1. 선형 시스템과 임펄스 응답",
                "chapter-ss-two" : "Chapter 2. 일차 미분 방정식",
                "chapter-ss-three" : "Chapter 3. 푸리에 급수",
                "chapter-ss-four" : "Chapter 4. 푸리에 변환",
                "chapter-ss-five" : "Chapter 5. 라플라스 변환"
            }
        };

        // 언어 변경 함수
        function changeLanguage(lang) {
            if (!translations[lang]) {
                console.error(`Error: Language '${lang}' not supported!`);
                return;
            }

            elementsToTranslate.forEach((element) => {
                const key = element.getAttribute("data-key");
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            localStorage.setItem("selectedLanguage", lang);
        }

        // 저장된 언어 불러오기
        const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);

        // 언어 변경 이벤트 리스너 추가
        languageSelect.addEventListener("change", function () {
            changeLanguage(this.value);
        });

    }, 200);
});
