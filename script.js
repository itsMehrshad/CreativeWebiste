const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically Change

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
// Event Listener for Dark Mode Switch
toggleSwitch.addEventListener("change", switchTheme);
