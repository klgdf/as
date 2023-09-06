
export function discountСalc() {
  var priceBlocks = document.querySelectorAll(".price");

  priceBlocks.forEach(function (priceBlock) {
    var priceOldElem = priceBlock.querySelector(".price-old");
    var priceNewElem = priceBlock.querySelector(".price-new");
    var priceDiscountElem = priceBlock.querySelector(".price-discount");

    var priceOld = parseFloat(priceOldElem.textContent.replace(/\s+/g, ""));
    var priceNew = parseFloat(priceNewElem.textContent.replace(/\s+/g, ""));
    var discount = ((priceOld - priceNew) / priceOld) * 100;

    priceDiscountElem.textContent = "-" + discount.toFixed(0) + "%";
  });
}
