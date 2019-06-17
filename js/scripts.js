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

$(document).ready(function () {

    function Pizza (name, size, crust, topping, location, orderNo) {
        this.orderNo = orderNo;
        this.name = name;
        this.size = size;
        this.crust = crust;
        // this.topping = topping;
        // this.location = location;
    };
    $("#submit").submit(function (event) {
        event.preventDefault();
        var nName = $(".pizza option:selected").val();
        var nSize = $(".size option:selected").val();
        var nCrust = $(".crust option:selected").val();
        // var nTopping = $(".toppings option:selected").val();
        // var nLocation = $(".delivery option:selected").val();
        var total = parseInt(nSize) + parseInt(nCrust);
        var order = 1;
        order = order + 1;
        var newPizza = new Pizza(nName, nSize, nCrust);
        var newRow = '<tr> <th scope = "row" > ' + order + '<td id = "name" > ' + newPizza.name + '<td id = "size" > ' + newPizza.size + '<td id = "crust" > ' + newPizza.crust + '<td id = "topping" > ' + newPizza.topping + '<td id = "delivery" > ' + newPizza.delivery + '<td id = "total" > ' + total

        $("#pizza").append(newRow);

       
    });


});