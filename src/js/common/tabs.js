export function initializeTabs() {
  const tabs = document.querySelectorAll(".tab");
  if (tabs) {
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");
        openTab(tabName);
        this.classList.add("active");
      });
    });
  }

  function openTab(tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tabContent => {
      tabContent.style.display = "none";
    });

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    const selectedTabContent = document.getElementById(tabName);
    selectedTabContent.style.display = "block";
  }

  // По умолчанию открываем первый таб при загрузке страницы
  const defaultTab = document.querySelector(".tab");
  if (defaultTab) {
    const defaultTabName = defaultTab.getAttribute("data-tab");
    openTab(defaultTabName);
    defaultTab.classList.add("active");
  }
}
