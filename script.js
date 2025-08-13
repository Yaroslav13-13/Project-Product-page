const burgerBtn = document.querySelector(".menu-btn-mob");
const modalMenu = document.getElementById("modalMenu");
const closeModal = document.getElementById("closeModal");

burgerBtn.addEventListener("click", () => {
  modalMenu.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modalMenu.style.display = "none";
});

modalMenu.addEventListener("click", (e) => {
  if (e.target === modalMenu) {
    modalMenu.style.display = "none";
  }
});
