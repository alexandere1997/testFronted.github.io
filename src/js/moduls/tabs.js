import getResourse from "../services";
let tabs = (selector,url,btn, selectorTwo, selectorFri) => {
  let content__tab = document.querySelector(selector);
  let content__tabTWo = document.querySelector(selectorTwo);
  let content__tabFri = document.querySelector(selectorFri)
  let tabsBtn = document.querySelectorAll(btn);
  function dateFormat(date) {
    let Year = date.getFullYear();
    if(Year < 10) Year = "0" +  Year;
    let todayDate = date.getDate() + 1;
    if (todayDate < 10) todayDate = '0' + todayDate;
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    return `${Year}-${month}-${todayDate}`;
  }

  var day = new Date(); // завтра
  let formatDay = dateFormat(day)

  function dateFormatOne(date) {
    let Year = date.getFullYear();
    if(Year < 10) Year = "0" +  Year;
    let todayDate = date.getDate();
    if (todayDate < 10) todayDate = '0' + todayDate;
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    return `${Year}-${month}-${todayDate}`;
  }

  var dayOne = new Date(); // завтра
  let formatDayOne = dateFormatOne(dayOne)
  let count = 1;
  let countTWo = 1;
  let countFri = 1;
  getResourse(url)
  .then(res => {
    res.forEach((item) => {
        let stars = item.score === null ? "img/Star 1.png" : "img/Star 2.png";
        let str = item.time;
        let matchDate = str.slice(0,10);
        let newMatch = document.createElement("div");
        newMatch.classList.add("content__main");
        newMatch.innerHTML = `
        <div class="content__header">
          <div class="content__top">
            <img src="img/om 1.png" alt="">
            <p>Англия: Премьер-лига</p>
          </div>
        </div>
        <div class="content__wrapper">
            <div class="content__center">
            <div class="content__left">
              <p>${matchDate}</p>
              <span class="content__line"></span>
              <a href="">${item.name}</a>
            </div>
            <div class="content__right">
              <div class="content__info">
                <span class="content__number">${item.score}</span>
                <img src="${stars}" alt="stars">
                <span class="content__line"></span>
                <p>${item.status}</p>
              </div>
              <div class="content__details">
                <span class="content__line"></span>
                <a href=${item.link}>Подробнее</a>
              </div>
            </div>
            </div>
        </div>
        `;      
        if(formatDay == matchDate) {
          content__tabTWo.appendChild(newMatch);
          document.querySelectorAll(".content__link p")[1].innerHTML = count++;
        }
        else if(formatDayOne == matchDate){
          content__tab.appendChild(newMatch);
          document.querySelectorAll(".content__link p")[0].innerHTML = countTWo++;
        } 
        tabsBtn.forEach((el) => {
          el.addEventListener("click", (event) => {
            event.preventDefault();
            let tab = document.querySelector(el.getAttribute('href'));
            document.querySelector('#tabNav .act')
            .classList.remove('act');
            document.querySelector('#tabsWrap .act')
            .classList.remove('act');

            el.classList.add('act');
            tab.classList.add('act');
          })
        })
      });

      res.forEach((item, index) => {
        let stars = item.score === null ? "img/Star 1.png" : "img/Star 2.png";
        let str = item.time;
        let matchDate = str.slice(0,10);
        let newMatch = document.createElement("div");
        newMatch.classList.add("content__main");
        newMatch.innerHTML = `
        <div class="content__header">
          <div class="content__top">
            <img src="img/om 1.png" alt="">
            <p>Англия: Премьер-лига</p>
          </div>
        </div>
        <div class="content__wrapper">
            <div class="content__center">
            <div class="content__left">
              <p>${matchDate}</p>
              <span class="content__line"></span>
              <a href="">${item.name}</a>
            </div>
            <div class="content__right">
              <div class="content__info">
                <span class="content__number">${item.score}</span>
                <img src="${stars}" alt="stars">
                <span class="content__line"></span>
                <p>${item.status}</p>
              </div>
              <div class="content__details">
                <span class="content__line"></span>
                <a href=${item.link}>Подробнее</a>
              </div>
            </div>
            </div>
        </div>
        `;
        content__tabFri.appendChild(newMatch);
        document.querySelectorAll(".content__link p")[2].innerHTML = countFri++;
      });
    });
}

export default tabs;