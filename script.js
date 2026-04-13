const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
  overlay.style.display = "block";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  loginPopup.style.display = "none";
  overlay.style.display = "none";
  document.body.classList.remove("modal-open");
}