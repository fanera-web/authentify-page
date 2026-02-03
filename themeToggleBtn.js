const themeToggle = document.getElementById("themeToggle");
document.body.classList.add("light");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
