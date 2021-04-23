// 변수를 찾아야 한다, 돋보기 아이콘 누르면 인풋 요소 늘어남
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

//  인풋 요소에 입력하는 통합 검색
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//  인풋 요소에 입력하는 통합 검색 제거
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});
 

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
