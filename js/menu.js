  document.querySelectorAll(".menu-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const items = btn.nextElementSibling;
      items.classList.toggle("show");
    });
  });