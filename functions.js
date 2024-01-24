const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(33));

let orderCount = 0;
const takeOrder = (topping, crust) => {
    console.log(`Pizza with ${topping} and ${crust} crust`);
    orderCount++;
};

takeOrder("pineapple", "thin");
console.log(`Total orders: ${orderCount}`);
