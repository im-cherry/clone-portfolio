"use strict";

// 메뉴 클릭시, 보여지는 섹션에 해당하는 메뉴 활성화
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#works",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sections.map(() => false);
let activeNavItem = navItems[0];

const headerHeight = document.querySelector("#header").clientHeight;
const options = {
  rootMargin: `-${headerHeight}px 0px 0px 0px`,
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let isSelectLastNavItem;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    isSelectLastNavItem =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.98;

    const navIndex = isSelectLastNavItem
      ? sectionIds.length - 1
      : findFirstIntersection(visibleSections);
    selectNavItem(navIndex);
  });
}

function findFirstIntersection(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;

  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
