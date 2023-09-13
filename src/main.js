// Header - 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home - 페이지 아래로 스크롤시 투명하게 처리
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up - 페이지 위로 스크롤시 투명하게 처리
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    arrowUp.style.bottom = "32px";
  } else {
    arrowUp.style.bottom = "-50px";
  }
});

// Header__Menu - 햄버거 버튼 클릭 처리
const headerMenu = document.querySelector(".header__menu__items");
const headerToggle = document.querySelector(".header__toggle");
headerToggle.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});

// Header__Menu - 메뉴 클릭시 메뉴를 자동으로 닫기
headerMenu.addEventListener("click", () => {
  headerMenu.classList.remove("open");
});
