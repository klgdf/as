import * as modal from "../modal.js";

const ClickSelector = (element, className) => {
  try {
    if (element.classList.contains(className)) {
      return element;
    } else {
      let el = element.closest("." + className)
        ? element.closest("." + className)
        : false;
      return el;
    }
  } catch (err) { }
};

export const init = () => {
  document.addEventListener("click", (e) => {
    // Все действия с этом блоке зависят от element
    let target = e.target,
      element = false;

    if (document.querySelector(".header__nav")) {
      element = ClickSelector(target, "e_menu");
      if (element) {
        element.classList.toggle("active")
        modal.toggle("mob_menu")
      } else {
        element = ClickSelector(target, "header");
        if (!element) {
          document.querySelector(".e_menu").classList.remove("active")
          modal.close("mob_menu")
        }
      }
    }


    if (document.querySelector(".cons")) {
      element = ClickSelector(target, "e_cons");
      if (element) {
        modal.open("cons")
      } else {
        element = ClickSelector(target, "e_cons_close");
        if (element) {
          modal.close("cons")
        }
      }
    }

    if (document.querySelector(".isyourregion")) {
      element = ClickSelector(target, "e_isyourregion");
      if (element) {
        modal.open("isyourregion")
      } else {
        element = ClickSelector(target, "e_isyourregion_close");
        if (element) {
          modal.close("isyourregion")
        }
      }
    }

    if (document.querySelector(".yourregion")) {
      element = ClickSelector(target, "e_yourregion");
      if (element) {
        modal.close("isyourregion")
        modal.open("yourregion")
      } else {
        element = ClickSelector(target, "yourregion");
        if (!element) {
          modal.close("yourregion")
        }
        element = ClickSelector(target, "e_yourregion_close");
        if (element) {
          modal.close("yourregion")
        }
      }
    }

    if (document.querySelector(".header__search")) {
      element = ClickSelector(target, "e_search");
      if (element || target.closest('.header__search')) {
        document.querySelector('input[type="search"]').focus();

        element.classList.add('active');
        document.querySelector('.header__mob').classList.add('active');
        document.querySelector('.header__logo--mobile').classList.add('hidden');
        document.querySelector('.header__phone--mob').classList.add('hidden');
        document.querySelector('.header__burger--mobile').classList.add('hidden');
      } else {
        document.querySelector(".header__search").classList.remove('active');
        document.querySelector(".header__search--mob").classList.remove('active');
        document.querySelector('.header__mob').classList.remove('active');
        document.querySelector('.header__logo--mobile').classList.remove('hidden');
        document.querySelector('.header__phone--mob').classList.remove('hidden');
        document.querySelector('.header__burger--mobile').classList.remove('hidden');
      }
    }
  });


  document.addEventListener('wpcf7mailsent', function () {
    if (document.querySelector(".cons")) {
      setTimeout(function () {
        modal.close("cons");
      }, 2000);
    }
  }, false);
};
