
(function () {
  // Highlight active navigation item
  var path = (window.location.pathname || "").split("/").pop();
  if (!path) path = "index.html";

  var map = {
    "index.html": "products",
    "services.html": "services",
    "about.html": "about",
    "staff-login.html": "staff",
    "contact.html": "contact",
    "privacy.html": "privacy"
  };

  var active = map[path];
  var links = document.querySelectorAll(".nav a[data-page]");
  links.forEach(function (a) {
    if (a.getAttribute("data-page") === active) {
      a.classList.add("active");
    }
  });
})();
