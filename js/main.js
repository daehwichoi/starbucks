
const searchEl = document.querySelector('.search');
console.log(searchEl)
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

// blur -> focus 해제
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

// 함수가 너무 많이 실행되는 것을 방지하기 위해 막아줌 .throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY)
    if (window.scrollY > 500){// 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
    }
    else{ // 배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
    }
},300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7,
        opacity: 1

    });
});

// 생성자(클래스) new Swiper(선택자, 옵션))
new Swiper('notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
