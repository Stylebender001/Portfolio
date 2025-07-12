// Initialize EmailJS
(function () {
  emailjs.init("zfRO76yQMS9huBeGb"); // Replace with your actual public key
})();

// Contact form logic
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/disable submit button based on validity
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// EmailJS form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_3b7urrc", "template_gcbnmhm", form)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
      formBtn.setAttribute("disabled", "");
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
      alert("❌ Failed to send message.");
    });
});

// Sidebar toggle logic
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebarMore = document.querySelector(".sidebar-info_more");

sidebarBtn.addEventListener("click", () => {
  const expanded = sidebarBtn.getAttribute("aria-expanded") === "true";
  sidebarBtn.setAttribute("aria-expanded", String(!expanded));
  sidebarMore.classList.toggle("active");
  sidebarBtn.querySelector("span").textContent = sidebarMore.classList.contains(
    "active"
  )
    ? "Hide Contacts"
    : "Show Contacts";
});

// Navigation between sections
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((btn) => btn.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    link.classList.add("active");
    pages[index].classList.add("active");
  });
});
