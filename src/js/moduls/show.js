let show = (btn, img) => {
  let btn1 = document.querySelectorAll(btn);
  let images = document.querySelectorAll(img)


    btn1[btn1.length - 1].addEventListener("click", function() {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "flex") {
          panel.style.display = "none";
          images[images.length - 1].style.transform = "rotate(0deg)"
      } else {
          panel.style.display = "flex";
          images[images.length - 1].style.transform = "rotate(180deg)";
      }
  });
}

export default show;

