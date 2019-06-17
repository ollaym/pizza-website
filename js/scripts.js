$('#gallery-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<i class= "fa fa-angle-left"></i>', '<i class= "fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
// business logic
function Pizza(pizza, topping, crust) {
    this.pizza = pizza;
    this.topping = topping;
    this.crust = crust;
}

Concat.prototype.wholePizza = function () {
    return this.pizza + " " + this.topping + " " + this.crust;
}

// user ntyerface logic
$(document).ready(function () {
    $(".button").click(function (event) {
        event.preventDefault();

        var inputPizza = $(".button").val();
        var inputTopping = $(".button").val();
        var inputCrust = $(".button").val();

        var myPizza = new Pizza(inputPizza, inputTopping, inputCrust);

        $("ul#pizzas").append("<li><span class='pizza'>" + myPizza.wholePizza() + "</span></li>");
        $(".button").val("");
        $(".button").val("");
        $(".button").val("");
        $(".pizza").last().click(function () {
            $("#show-pizza").show();
            $("#show-pizza h4").show();
            $(".pizza").text(myPizza.pizza);
            $(".topping").text(myPizza.topping);
            $(".crust").text(myPizza.crust);
        })
    });
})