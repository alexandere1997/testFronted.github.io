let menu = (selector, btn1, btn2) => {
  let boxMenu = document.querySelector(selector);
  let btnOne = document.querySelector(btn1);
  let btnTwo = document.querySelector(btn2);

  btnTwo.addEventListener("click", () => {
    boxMenu.style.transform = "translateX(0px)";
  });
  btnOne.addEventListener("click", () => {
    boxMenu.style.transform = "translateX(-278px)";
  });
}

export default menu;