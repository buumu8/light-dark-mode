const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Swith Mode of Styles
function switchMode(mode) {
  localStorage.setItem("theme", mode);
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
  toggleIcon.children[0].textContent = `${mode} Mode`;
  nav.style.backgroundColor =
    mode === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    mode === "light" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  mode === "dark"
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    switchMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    switchMode("light");
  }
}
// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  switchMode(currentTheme);
  if (currentTheme === "dark") toggleSwitch.checked = true;
}
