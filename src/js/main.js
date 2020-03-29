import menu from "../js/moduls/navbar";
import league from "../js/moduls/league";
import country from "../js/moduls/country";
import tabs from "../js/moduls/tabs"
window.addEventListener("DOMContentLoaded", () => {
  menu(".menu", ".menu__header img", ".header__menu");
  league(".content__league", "http://u0362146.plsk.regruhosting.ru/league");
  country(".content__inner", "http://u0362146.plsk.regruhosting.ru/country");
  tabs(".content__tab","http://u0362146.plsk.regruhosting.ru/match", ".content__link a", ".content__tabTWo", ".content__tabFri")
});