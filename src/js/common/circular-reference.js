// Циклические ссылки
// const circularReference = () => {
//   // Против циклических ссылок на главной
//   if (document.querySelector('.home-link')) {
//     document.querySelectorAll('.home-link').forEach(element => {
//       element.addEventListener('click', function () {
//         window.location.pathname = '/';
//       });
//     });
//   }
//   // Против циклических ссылок на других страницах
//   if (document.querySelector('.self-link')) {
//     document.querySelectorAll('.self-link').forEach(element => {
//       element.addEventListener('click', function () {
//         window.location = window.location;
//       });
//     });
//   }
// }
