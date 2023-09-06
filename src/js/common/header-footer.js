// Футер абсолютно позиционирован, чтобы прижать его к нижней границе, если контента мало и футер задирается вверх. Под него в обратном случае нужен padding у родителя, чтобы если контента много, то футер не скрывал контент. Инициализируется при load и resize.
// const footer = () => {
//   if (document.querySelector(".wrapper.fix-footer .background")) {
//     document.querySelector(
//       ".wrapper.fix-footer .background"
//     ).style.paddingBottom =
//       document.querySelector(".footer").clientHeight + "px";
//   }
// };

// const header = () => {
//   if (document.querySelector(".header")) {
//     let top = document.querySelector(".header").offsetTop,
//       height = document.querySelector(".header").offsetHeight;
//     document.querySelector(".screen-1__box").style.paddingTop =
//       top + height + "px";
//   }
// };
