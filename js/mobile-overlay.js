const modalElement = document.getElementById("mobileOverlay");
const openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", () => {
  modalElement.showModal();
  document.body.classList.add("scroll-lock");
});

modalElement.addEventListener("close", () => {
  document.body.classList.remove("scroll-lock");
})


document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuItems = document.querySelectorAll('.mobile-overlay__link');

  mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const menuItemValue = item.getAttribute('value');
      modalElement.close();
      document.body.classList.remove("scroll-lock");

      document.getElementById(menuItemValue).scrollIntoView({ behavior: "smooth" });

    });
  });
});