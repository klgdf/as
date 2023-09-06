"use strict";
//import { path } from "../../gulp/config/path.js";
//import * as flsFunc from "./common/isWebp.js";

//import * as lazymap from "./common/lazymap.js";
import * as modal from "./common/modal.js";

import * as click from "./common/event/click.js";

import { initSliders } from "./common/sliders.js";
import { initializeTabs } from "./common/tabs.js";
import { addToggleEventListeners } from "./common/toggle-content.js";
import { discountСalc } from "./common/discount.js";
import { calculateReadingTime } from './common/reading-time.js';
import { setCookieC, getCookieC } from './common/cookie.js';

// Основной код после загрузки страницы.
document.addEventListener("DOMContentLoaded", (e) => {
  initSliders();
  initializeTabs();
  addToggleEventListeners();
  click.init();

  if (document.querySelector('.price')) {
    discountСalc();
  }
  if (document.querySelector('.article') && document.querySelector('.reading-time')) {
    calculateReadingTime('.article', '.reading-time');
  }

  if (getCookieC('isyourregion') == "") {
    setCookieC('isyourregion', true, document.querySelector('#isyourregion').dataset.days);
    setTimeout(() => {
      modal.open('isyourregion');
    }, 1000);
  }

  if (document.documentElement.clientWidth < 1280) {
    const subMenuParents = document.querySelectorAll(' .menu-item-has-children');
    subMenuParents.forEach(subMenuParent => {
      let el = document.createElement('div');
      el.className = "toggle-button";
      subMenuParent.append(el);
      subMenuParent.querySelector('.toggle-button').addEventListener('click', e => {
        e.currentTarget.previousElementSibling.classList.toggle('active');
        e.currentTarget.classList.toggle('active');
      })
    })
  };

  (function () {
    if (document.querySelector('#menu-glavnoe-menyu-novoe')) {
      let menu = document.querySelector('.mega-menu');

      let parentdiv = document.createElement('div');
      parentdiv.classList.add('sub-menu', 'fix');
      parentdiv.appendChild(menu.querySelector('.sub-menu'));
      parentdiv.querySelector('.sub-menu').classList.remove('sub-menu');

      let childdiv = document.createElement('div');
      childdiv.classList.add('col2');
      parentdiv.appendChild(childdiv);
      menu.appendChild(parentdiv);

      document.querySelector('div.sub-menu').addEventListener('mouseover', function (e) {
        let
          target = e.target,
          menu = e.currentTarget,
          item = target.closest('.menu-item');

        let has_children = target.closest('.menu-item-has-children');
        if (!target.closest('.col2')) {
          if (has_children && !has_children.classList.contains('mega-menu')) {
            document.querySelectorAll('.mega-menu div.sub-menu .menu-item-has-children').forEach(element => {
              element.classList.remove('active');
            });
            has_children.classList.add('active');
            document.querySelector('.col2').innerHTML = has_children.querySelector('ul').innerHTML;
          }
        }
      });
      // document.querySelector('div.sub-menu').addEventListener('mouseout', function (e) {
      //   let
      //     menu = e.currentTarget,
      //     item = e.target.closest('.menu-item');
      // });
    }

    let style = document.createElement('style');
    style.innerHTML = `
        .header__menu .menu .sub-menu.fix {
          display: flex;
        }
        @media (max-width: 1280px) {
          .header__menu .menu .col2 {
            display: none;
          }
        }
    `;
    document.querySelector('body').appendChild(style)
  })();


  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      if (document.querySelector("html").scrollTop > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }

    const buttonTop = document.querySelector(".top");
    if (buttonTop) {
      const screenHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > screenHeight) {
        buttonTop.classList.add("active");
      } else {
        buttonTop.classList.remove("active");
      }
    }

  });
});
