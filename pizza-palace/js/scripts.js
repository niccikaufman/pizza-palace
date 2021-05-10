//back end logic
// let size = ["small", "medium", "large", "x-large"];
// let crust = ["brooklyn style", "hand-tossed"];
// let cheese = ["light", "normal", "extra", "double"];
// let sauce = ["tomato", "marinara", "bbq", "garlic parmesan", "alfredo", "ranch"];
// let meat = ["ham", "beef", "salami", "pepperoni", "italian sausage", "bacon"];
// let veg = ["diced tomato", "black olive", "mushroom", "onion", "pineapple", "jalapeno pepper", "spinach"];
let cost = 0;

class Pizza {
  constructor(sizeSelect, crustSelect, cheeseSelect, sauceSelect, meatSelect, vegSelect, cost) {
    this.size = sizeSelect;
    this.crust = crustSelect;
    this.cheese = cheeseSelect;
    this.sauce = sauceSelect;
    this.meat = meatSelect;
    this.veg = vegSelect;
    this.cost = cost;
  }
  determinePrice(){
    if (this.size === "Small") {
      this.cost += 10;
    } else if (this.size === "Medium") {
      this.cost += 12;
    } else if (this.size === "Large") {
      this.cost += 15;
    } else if (this.size === "X-large") {
      this.cost += 17;
    }
    if (this.cheese === "Light") {
      this.cost -= 1;
    } else if (this.cheese === "Extra") {
      this.cost += 2;
    } else if (this.cheese === "Double") {
      this.cost += 4;
    }
  }
  getSubtotal() {
    let costData = 'Your Subtotal is: $' + this.cost + '<br>';
    $(".pizza-order").append(costData);
  }   
  showOrder() {
    for (const property in this) {
      let data = '<li> ' + this[property] + "</li>"
      $(".pizza-order").append(data);
    } 
  }
}



class Customer {
  constructor(name, phoneNumber, email, serviceMethod, orderTiming) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.orderOption = serviceMethod;
    this.orderTiming = orderTiming;
  }
  showContact() {
    for (const property in this) {
      let data = '<li class="contact-info"> ' + this[property] + "</li>"
      $("#confirmed-contact").append(data);
    }    
  }
}
//front end logic

let pizzaOrder = [];
let newCustomer;

function getFinalTotal() {
  const pizzaTotal = pizzaOrder.reduce((prev, cur) => prev + cur.cost, 0);
  $(".pizza-order").append('Your Total is: $' + pizzaTotal);
}

$(document).ready(function() {
  //returns dropdown menus to default option
  function clearOptions() {
    $('#size option:eq(0)').attr('selected','selected');
    $('#crust option:eq(0)').attr('selected','selected'); 
    $('#cheese option:eq(0)').attr('selected','selected'); 
    $('#sauce option:eq(0)').attr('selected','selected'); 
    $('#meat option:eq(0)').attr('selected','selected'); 
    $('#veg option:eq(0)').attr('selected','selected'); 
  }

  //after contact info is filled out
  $("button.get-started").click(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let phoneNumber = $("#phone").val();
    let email = $("#email").val();
    let orderOption = $("#service-method :selected").text();
    let orderTiming = $("#order-timing :selected").text();
    let newCustomer = new Customer(name,phoneNumber,email,orderOption,orderTiming);
    $(".pizza-maker").show();
    $("form#contact").hide();
    newCustomer.showContact();
  }) 

  //after pizza order is made
  $("button#submit-order").click(function(event) {
    event.preventDefault();
    let sizeSelect = $("#size :selected").text();
    let crustSelect = $("#crust :selected").text();
    let cheeseSelect = $("#cheese :selected").text();
    let sauceSelect = $("#sauce :selected").text();
    let meatSelect = $("#meat :selected").text();
    let vegSelect = $("#veg :selected").text();
    let pizza1 = new Pizza(sizeSelect,crustSelect,cheeseSelect,sauceSelect,meatSelect,vegSelect, cost);
    pizzaOrder.push(pizza1);
    console.log(pizzaOrder);
    clearOptions();
    pizza1.determinePrice();
    pizza1.getSubtotal();
    pizza1.showOrder();
    $(".pizza-maker").hide();
    $(".pizza-order").show();
    $(".order-settings").show();
  })
  $("button.finalize-order").click(function(event) {
    event.preventDefault();
    getFinalTotal();
  })
  $("button#create-another").click(function(event) {
    $(".pizza-order").hide();
  })
})
