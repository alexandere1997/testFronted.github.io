import getResourse from "../services";
import show from "../moduls/show";
let league = (selector1, url) => {
  let content__lists = document.querySelector(selector1);
  getResourse(url)
     .then(res => {
       res.forEach((item) => {
        let result = [];
         for (const str of item.items) {
          if (!result.includes(str.item)) {
            result.push(str.item);
          }
         }
        let res = result.join("</br>")
        let newEl = document.createElement("div");
        newEl.classList.add("content__lists");
        newEl.innerHTML = `
        <div class="content__head">
          <p>${item.league}</p>
          <img class="content__button" class="transformm" src="img/Triangle.png" alt="">
        </div>
        <div class="content__list">
          <p>${res}</p>
          <img src="img/Page 1.png" alt="Page">
        </div>
        `;
        content__lists.appendChild(newEl);
        show(".content__head", ".content__head img");
       });
     });
}


export default league;