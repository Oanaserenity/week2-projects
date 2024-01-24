const pet = {
    name: "Fluffy",
    typeOfPet: "Dog",
    age: 3,
    colour: "Brown",
    eat: function() {
        return `${this.name} is eating`;
    },
    drink: function() {
        return `${this.name} is drinking`;
    }
};

// Example usage:
console.log(pet.eat());  // Output: Fluffy is eating
console.log(pet.drink());  // Output: Fluffy is drinking

const person = {
    name: "John",  // Corrected property name
    age: 30,
    gender: "male",
    sayHi: function() {
        return `Hello, my name is ${this.name}`;  // Corrected property name
    }
};

const coffeeShop = {
    branch: "Be happy",
    drinks: {
        coffee: 2.5,
        latte: 3.0,
        cappuccino: 3.5,
        tea: 2.0
    },
    food: {
        sandwich: 5.0,
        pastry: 2.5,
        salad: 4.0
    },
    drinksOrdered: function(order) {
        let totalCost = 0;
        let orderDetails = `Drinks ordered at ${this.branch}:`;

        for (const drink in order) {
            if (this.drinks.hasOwnProperty(drink)) {
                const quantity = order[drink];
                const cost = this.drinks[drink] * quantity;
                orderDetails += `\n${quantity} ${drink}(s) - $${cost.toFixed(2)}`;
                totalCost += cost;
            }
        }
        orderDetails += `\nTotal cost: $${totalCost.toFixed(2)}`;
        return orderDetails;
    },
    foodOrdered: function(order) {
        let totalCost = 0;
        let orderDetails = `Food ordered at ${this.branch}:`;

        for (const item in order) {
            if (this.food.hasOwnProperty(item)) {
                const quantity = order[item];
                const cost = this.food[item] * quantity;
                orderDetails += `\n${quantity} ${item}(s) - $${cost.toFixed(2)}`;
                totalCost += cost;
            }
        }
        orderDetails += `\nTotal cost: $${totalCost.toFixed(2)}`;
        return orderDetails;
    }
};
