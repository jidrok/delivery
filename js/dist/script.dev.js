"use strict";

$(function main() {
  var basketButton = $("#button-basket");
  var basket = $("#basket");
  var canceling = $("#canceling");
  var close = $("#close");
  var quantity = $(".basket-quantity");
  var plus = $("#plus");
  var minus = $("#minus");
  var num = 0; //окрыть

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

  while (num < 7) {
    document.querySelectorAll(".basket-quantity")[num].innerHTML = number;
    num++;
  }

  ;
});
//# sourceMappingURL=script.dev.js.map
