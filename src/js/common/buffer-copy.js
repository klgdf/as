export const init = () => {
  if (document.querySelector(".buffer_copy")) {
    let copy_buttons = document.querySelectorAll(".buffer_copy");
    copy_buttons.forEach((element) => {
      element.addEventListener("click", (e) => {
        let element = e.currentTarget,
          span = element.querySelector("span"),
          span_text = span.innerText,
          input = element.querySelector("input");
        input.select();
        document.execCommand("copy");
        element.classList.add("active");
        span.innerText = span_text.replace("Click", "Copied");
        setTimeout(() => {
          element.classList.remove("active");
          span.innerText = span_text;
        }, 5000);
      });
    });
  }
};
