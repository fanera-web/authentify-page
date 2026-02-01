const themeToggle = document.getElementById("themeToggle");
document.body.classList.add("light");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

let db = { users: [] };

const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");

loginForm.addEventListener("submit", (evenSubm) => {
  evenSubm.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = db.users.find(users => users.username === username && users.password === password);
  if (user) {
    alert("Вхід успішний!");
  } else {
    alert("Невірні дані!");
  }
});

registerBtn.addEventListener("click", () => {
  const username = prompt("Введіть ім'я користувача:");
  const password = prompt("Введіть пароль:");
  
  if (username && password) {
    db.users.push({ username, password });
    alert("Реєстрація успішна!");
  }
});