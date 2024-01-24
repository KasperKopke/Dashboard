const split = document.querySelector(".split");
const show = document.querySelector(".show");
const ul = document.querySelector(".ull");
const fabars = document.querySelector(".fa-bars");
const left = document.querySelector(".left");

fabars.addEventListener("click", () => {
  ul.classList.toggle("active");
  console.log("click");
});

split.addEventListener("click", () => {
  left.classList.toggle("active");
  console.log("click");
  ul.classList.remove("active");
});

show.addEventListener("click", () => {
  left.classList.remove("active");
  console.log("click");
  ul.classList.remove("active");
});
