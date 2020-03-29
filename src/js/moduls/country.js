import getResourse from "../services";
let country = (selector1, url) => {
  let content__inner = document.querySelector(selector1);
  getResourse(url)
     .then(res => {
       res.forEach((item, index1) => {
         let newCountry = document.createElement("div");
         newCountry.classList.add("content__items");
         newCountry.innerHTML = `
         <p>${item.country}</p>
         `;
         content__inner.appendChild(newCountry);
       });
     });
}

export default country;