"use strict";

// Works - 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".works__categories");
const projectsContainer = document.querySelector(".works__projects");
const projects = document.querySelectorAll(".works__project");
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (!filter) return;

  handleSelectedCategory(event.target); // 선택한 카테고리 버튼 재설정
  filterProjects(filter); // 프로젝트 필터링
});

// 선택한 카테고리 버튼 재설정
function handleSelectedCategory(target) {
  const selected = categories.querySelector(".selected");
  selected.classList.remove("selected");
  target.classList.add("selected");
}

// 프로젝트 필터링
function filterProjects(filter) {
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    project.dataset.type;

    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 200);
}
