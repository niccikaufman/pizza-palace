//back end logic
let size = ["small", "medium", "large", "x-large"];
let crust = ["brooklyn style", "hand-tossed"];
let cheese = ["light", "normal", "extra", "double"];
let sauce = ["tomato", "marinara", "bbq", "garlic parmesan", "alfredo", "ranch"];
let meat = ["ham", "beef", "salami", "pepperoni", "italian sausage", "bacon"];
let veg = ["diced tomato", "black olive", "mushroom", "onion", "pineapple", "jalapeno pepper", "spinach"];


class Pizza {
  constructor(sizeSelect, crustSelect, cheeseSelect, sauceSelect, meatSelect, vegSelect) {
    this.size = sizeSelect;
    this.crust = crustSelect;
    this.cheese = cheeseSelect;
    this.sauce = sauceSelect;
    this.meat = meatSelect;
    this.veg = vegSelect;
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
}
//front end logic

//populate dropdown menus with pizza option arrays
$(document).ready(function() {
  for (i = 0; i < size.length; i++) {
    let data = '<input type="radio" name="size"> ' + size[i]
    $("#size").append(data);
  }
  for (i = 0; i < crust.length; i++) {
    let data = '<input type="radio" name="crust"> ' + crust[i]
    $("#crust").append(data);
  }
  for (i = 0; i < cheese.length; i++) {
    let data = '<input type="radio" name="cheese"> ' + cheese[i]
    $("#cheese").append(data);
  }
  for (i = 0; i < sauce.length; i++) {
    let data = '<input type="radio" name="sauce"> ' + sauce[i]
    $("#sauce").append(data);
  }
  for (i = 0; i < meat.length; i++) {
    let data = '<input type="radio" name="meat"> ' + meat[i]
    $("#meat").append(data);
  }
  for (i = 0; i < veg.length; i++) {
    let data = '<input type="radio" name="veg"> ' + veg[i]
    $("#veg").append(data);
  }

  //returns dropdown menus to default option
  function clearDropdowns() {
    $('#size option:eq(0)').attr('selected','selected');
    $('#crust option:eq(0)').attr('selected','selected'); 
    $('#cheese option:eq(0)').attr('selected','selected'); 
    $('#sauce option:eq(0)').attr('selected','selected'); 
    $('#meat option:eq(0)').attr('selected','selected'); 
    $('#veg option:eq(0)').attr('selected','selected'); 
  }

  //after contact info is filled out
  $("button#get-started").click(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let phoneNumber = $("#phone").val();
    let email = $("#email").val();
    let orderOption = $("input.service-method").val();
    let orderOption = $("input.service-method").val();
    let newCustomer = new Customer(name,phoneNumber,email,orderOption,orderTiming);
    console.log(newCustomer);
    $(".pizza-maker").show();
  }) 

  //after pizza order is made
  $("button#submit-order").click(function(event) {
    event.preventDefault();
    let sizeSelect = $("#size").val();
    let crustSelect = $("#crust").val();
    let cheeseSelect = $("#cheese").val();
    let sauceSelect = $("#sauce").val();
    let meatSelect = $("#meat").val();
    let vegSelect = $("#veg").val();
    let newPizza = new Pizza(sizeSelect,crustSelect,cheeseSelect,sauceSelect,meatSelect,vegSelect);
    console.log(newPizza);
    clearDropdowns();
    $(".confirm-order").show();
    $(".order-settings").show();
  })
})