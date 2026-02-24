document.addEventListener("DOMContentLoaded", () => {

// Load shared header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Highlight active nav link
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  });

// Load shared footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });