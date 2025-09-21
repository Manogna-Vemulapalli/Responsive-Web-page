// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMsg = document.getElementById("form-message");

      if (!name || !email || !message) {
        formMsg.style.color = "red";
        formMsg.textContent = "Error: All fields are required!";
      } else {
        formMsg.style.color = "green";
        formMsg.textContent = "Thanks! Your message was sent (demo only).";
        form.reset();
      }
    });
  }

  // Fade-in effect for cards
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
