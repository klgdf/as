// Модальные окна.
export const open = (eID) => {
  if ((eID !== isyourregion) && document.documentElement.clientWidth > 1280) {
    document.querySelector("body").classList.add("overflow-hidden");
  }
  let element = document.getElementById(eID);
  element.classList.remove("hidden");
};

export const close = (eID) => {
  document.querySelector("body").classList.remove("overflow-hidden");
  let element = document.getElementById(eID);
  element.classList.add("hidden");
};

export const toggle = (eID) => {
  document.querySelector("body").classList.toggle("overflow-hidden");
  let element = document.getElementById(eID);
  element.classList.toggle("hidden");
};
