document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const menuNav = document.getElementById('menu-nav');

  if (hamburger && menuNav) {
    hamburger.addEventListener('click', function () {
      menuNav.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }
});

function placeOrder() {
  const checkedItems = document.querySelectorAll(".menu-checkbox:checked");
  if (checkedItems.length === 0) {
    alert(
      "Por favor, selecciona al menos un ítem del menú para hacer el pedido."
    );
    return;
  }
  let message = "Hola! quiero hacer un pedido:%0A";
  checkedItems.forEach((item) => {
    message += `- ${item.value}%0A`;
  });
  const waLink = `https://wa.me/569888812341?text=${encodeURIComponent(
    message
  )}`;
  window.open(waLink, "_blank");
}

function orderPizza(pizzaName) {
  const message = `Hola! quiero hacer un pedido:%0A- ${pizzaName}`;
  const waLink = `https://wa.me/569888812341?text=${encodeURIComponent(
    message
  )}`;
  window.open(waLink, "_blank");
}
