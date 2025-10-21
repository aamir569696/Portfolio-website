// (1) hamburger aur menu select kar liye
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// (2) click hone par 'active' class toggle hogi
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//scroll button bottom top
let scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
