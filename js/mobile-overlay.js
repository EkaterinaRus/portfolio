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
    item.addEventListener('click', function () {
      modalElement.close();
      document.body.classList.remove("scroll-lock");
    });
  });
});