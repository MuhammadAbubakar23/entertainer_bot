function random() {
  alert("Hello From Umair");
}

function toggleNavPanel() {
  var element = document.getElementById("left-sidebar-expand");
  element.classList.toggle("toggled");
}
const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
);

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// popover

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// offcanvas

//dropdown
const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
const dropdownList = [...dropdownElementList].map(
  (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
);

function changeTheme(color) {
  "use strict";
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  const showActiveTheme = (theme) => {
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    if (!btnToActive) {
      return;
    }

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
  };

  // Set the theme based on the passed color
  setStoredTheme(color);
  setTheme(color);
  showActiveTheme(color);
}
