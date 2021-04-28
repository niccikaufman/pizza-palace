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

//front end logic

//populate dropdown menus with pizza option arrays
$(document).ready(function() {
  for (i = 0; i < size.length; i++) {
    let data = '<option>' + size[i] + '</option>'
    $("#size").append(data);
  }
  for (i = 0; i < crust.length; i++) {
    let data = '<option>' + crust[i] + '</option>'
    $("#crust").append(data);
  }
  for (i = 0; i < cheese.length; i++) {
    let data = '<option>' + cheese[i] + '</option>'
    $("#cheese").append(data);
  }
  for (i = 0; i < sauce.length; i++) {
    let data = '<option>' + sauce[i] + '</option>'
    $("#sauce").append(data);
  }
  for (i = 0; i < meat.length; i++) {
    let data = '<option>' + meat[i] + '</option>'
    $("#meat").append(data);
  }
  for (i = 0; i < veg.length; i++) {
    let data = '<option>' + veg[i] + '</option>'
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

  $("button#submit").click(function(event) {
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
  })
})