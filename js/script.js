$(function main() {

  let basketButton = $("#button-basket");
  let basket = $("#basket");
  let canceling = $("#canceling");
  let close = $("#close");
  let quantity = $(".basket-quantity");
  let plus = $(".plus");
  let minus = $("#minus");
  var number = 0;
  var num = 0;
  let add = $(".Add");


  //окрыть
  $(function openBasket () {
    basketButton.click(function  () {
      basket.toggleClass("show");
    });
  });


  //закрыть
  $(function closeBasket (){
    close.click(function () {
      basket.removeClass("show");
    });
    canceling.click(function () {
      basket.removeClass("show");
    });
  });


  $(function increase () {
    plus.click(function () {
      number++;
    });
    while (num < 7){
      document.querySelectorAll(".basket-quantity")[num].innerHTML = number;
      num++;
    };
  }); 




});