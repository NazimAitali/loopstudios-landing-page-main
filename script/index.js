let MobileMenu = document.querySelector(".Hamburger");
let MobileSide = document.querySelector(".Menu-side");

MobileMenu.addEventListener("click", OpenClose);

function OpenClose() {
  if (MobileSide.classList[1] === "Close") {
    MobileSide.classList.remove("Close");
    this.src = "./assets/icon-close.svg";
    MobileSide.classList.add("Open");
  } else {
    MobileSide.classList.remove("Open");
    this.src = "./assets/icon-hamburger.svg";
    MobileSide.classList.add("Close");
  }
}
