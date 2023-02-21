let Amir = "Amir";

const sayHello = (name) => console.log(`hello ${name}`);

const helloMessage = sayHello(Amir);
console.log(helloMessage);

let myName = "Amir Saunders";

sayHello(myName);

const isTwo = (number) => {
    if (number === 2) {
        console.log(true);
    }
};
var random = Math.floor(Math.random() * 3 + 1);

isTwo(2);
isTwo(random);

let bill = Number(prompt("How much is the bill?"));
let tip = Number(prompt("How much is the tip"));

const calculateTip = (tip, bill) => {
    const bills = bill * tip;
    const sum = bills + bill;
    alert(sum);
};

calculateTip(tip, bill);

let price = Number(prompt("How much did it cost?"));
let discount = Number(prompt("How much is the discount"));

const applyDiscount = (price, discount) => {
    const discountP = price * discount;
    const stuff = price - discountP;
    alert(stuff);
};

applyDiscount(price, discount);