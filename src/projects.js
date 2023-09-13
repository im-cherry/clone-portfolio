"use strict";

// Works - 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".works__categories");
const projectsContainer = document.querySelector(".works__projects");
const projects = document.querySelectorAll(".works__project");
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (!filter) return;

  // 활성화되는 카테고리 버튼 재설정
  const selected = categories.querySelector(".selected");
  selected.classList.remove("selected");
  event.target.classList.add("selected");

  // 프로젝트 필터링
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
});
