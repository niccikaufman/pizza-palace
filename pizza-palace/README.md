
# Pizza Palace

An online pizza ordering site to practice Javascript objects, prototype methods, and class constructors.

## Authors

- [@nicckaufman](https://www.github.com/niccikaufman)

  
## Tech Stack

**Javascript, HTML, CSS**

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/niccikaufman/pizza-palace.git
```

Go to the project directory

```bash
  cd pizza-palace
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

## Test-Driven Development

**_$(document).ready(function()_**

- _Description:_ Upon page load, it will iterate through each pizza option array using a for loop and inject those elements as a radio button into the DOM.

- _Input:_ size[]; crust[]; cheese[]; sauce[]; meat[]; veg[];

- _Output:_ 
``` <input type="radio" name="size"> ' + size[i] ``` and so on

**_$("button#get-started").click(function(event)_**
- _Description:_ Upon clicking the Create Your Pizza button, it will take text and selected radio buttons inputted into the customer contact form and construct a new Customer object named newCustomer
- _Input:_ Name: Nicci Kaufman, Phone Number: 555-555-5555, email, niccikaufman@gmail.com, [x] delivery, [x] now
- _Output:_ 
- ``` Customer {name: "Nicci Kaufman", phoneNumber: "5555555555", email: "niccikaufman@gmail.com", orderOption: "delivery", orderTiming: "now"} ```

**_Object.showContact()_**
- _Description:_ It will iterate through newCustomer using a for/in loop and inject each object property as a list item into the DOM
- _Input:_ ```newCustomer.showContact();```
- _Output:_ 
    - Nicci Kaufman
    - 5555555555
    - niccikaufman@gmail.com
    - delivery
    - now
