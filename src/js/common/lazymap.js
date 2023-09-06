// Ленивая загрузка карты в iframe
export const init = () => {
  // Запрет скролла на все iframe с классом map до клика.
  if (document.querySelector(".map")) {
    let maps = document.querySelectorAll(".map");
    for (let i = 0; i < maps.length; i++) {
      maps[i].style.pointerEvents = "none";
      maps[i].onclick = function () {
        this.style.pointerEvents = "all";
        // Если есть класс .img, то из data-src вставляем ссылку в src фрейма и скрываем изображение.
        if (this.querySelector(".img")) {
          let data_src = this.querySelector("iframe").getAttribute("data-src");
          this.querySelector("iframe").setAttribute("src", data_src);
          this.querySelector(".img").classList.add("hidden");
        }
      };
    }
  }
};
