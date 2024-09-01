const acoordions = document.querySelectorAll(".accordion");

acoordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});
