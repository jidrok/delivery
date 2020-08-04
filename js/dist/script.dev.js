"use strict";

$(function main() {
  var basketButton = $("#button-basket");
  var basket = $("#basket");
  var canceling = $("#canceling");
  var close = $("#close");
  var quantity = $("#basket-quantity");
  var plus = $("#plus");
  var minus = $("#minus");
  var number = 0; //окрыть

  $(function openBasket() {
    basketButton.click(function () {
      basket.toggleClass("show");
    });
  }); //закрыть

  $(function closeBasket() {
    close.click(function () {
      basket.removeClass("show");
    });
    canceling.click(function () {
      basket.removeClass("show");
    });
  });
  /*   $(function increase () {
      plus.click(function () {
        number = ++number;
      });
  
    }); */

  document.getElementsByClass("ics").innerHTML = number;
});
//# sourceMappingURL=script.dev.js.map
