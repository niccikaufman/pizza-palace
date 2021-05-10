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
    console.log(`size price is ${this.cost}`)
    if (this.cheese === "Light") {
      this.cost -= 1;
    } else if (this.cheese === "Extra") {
      this.cost += 2;
    } else if (this.cheese === "Double") {
      this.cost += 4;
    }
    console.log(`cheese and size price is ${this.cost}`)

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

let newCustomer, newPizza;

//populate dropdown menus with pizza option arrays
$(document).ready(function() {
  $(".dropdown").click(function(){
    $(".dropdown-menu").toggle();
    });
    // for (i = 0; i < size.length; i++) {
  //   let data = `<input type="radio" name="size" value="${size[i]}" class="size">` + size[i];
  //   $("#size").append(data);
  // }
  // for (i = 0; i < crust.length; i++) {
  //   let data = `<input type="radio" name="crust" value="${crust[i]}" class="crust">` + crust[i]
  //   $("#crust").append(data);
  // }
  // for (i = 0; i < cheese.length; i++) {
  //   let data = `<input type="radio" name="cheese" value="${cheese[i]}" class="cheese">` + cheese[i]
  //   $("#cheese").append(data);
  // }
  // for (i = 0; i < sauce.length; i++) {
  //   let data = `<input type="radio" name="sauce" value="${sauce[i]}" class="sauce">` + sauce[i]
  //   $("#sauce").append(data);
  // }
  // for (i = 0; i < meat.length; i++) {
  //   let data = `<input type="radio" name="meat" value="${meat[i]}" class="meat">`+ meat[i]
  //   $("#meat").append(data);
  // }
  // for (i = 0; i < veg.length; i++) {
  //   let data = `<input type="radio" name="veg" value="${veg[i]}" class="veg">` + veg[i]
  //   $("#veg").append(data);
  // }

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
  $("button#get-started").click(function(event) {
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
    console.log(newCustomer);
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
    let pizza1 = new Pizza(sizeSelect,crustSelect,cheeseSelect,sauceSelect,meatSelect,vegSelect,cost);
    console.log(pizza1);
    clearOptions();
    pizza1.determinePrice();
    $(".confirm-order").show();
    $(".order-settings").show();
  })
})

