function analyzeColor(color) {
    if (color === "red") {
        console.log("red is my favorite");
    } else if (color === "orange") {
        console.log("orange is my favorite color");
    } else if (color === "yellow") {
        console.log("yellow is my favorite color");
    } else if (color === "green") {
        console.log("Green is my favorite color");
    } else if (color === "blue") {
        console.log("Blue is my favorite color");
    } else if (color === "indigo") {
        console.log("What does indigo look like?");
    }else if (color=== "violet") {
        console.log("violent is purple")
    }
}

analyzeColor("blue");

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const userPick = prompt("What is your favorite color?");

function analyzeColor(userPick) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    switch (userPick) {
        case "red":
            console.log("red is my favorite");
            break;
        case "orange":
            console.log("orange is my favorite");
            break;
        case "yellow":
            console.log("yellow is my favorite");
            break;
        case "green":
            console.log("green is my favorite");
            break;
        case "blue":
            console.log("blue is my favorite");
            break;
        case "indigo":
            console.log("indigo is my favorite");
            break;
        case "violet":
            console.log("violet is my favorite");
            break;
    }
}

analyzeColor(userPick)





let luckyNumber = Math.floor(Math.random() * 6)

let price = prompt("How much is the orginal price")

function calculateTotal(price,luckyNumber) {
    if(luckyNumber === 0 ) {
        let discount = 0
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    } else if (luckyNumber === 1 ) {
        let discount = 0.10
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    }else if (luckyNumber === 2 ) {
        let discount = 0.25
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    }else if (luckyNumber === 3) {
        let discount = 0.35
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    }else if(luckyNumber === 4 ) {
        let discount = 0.50
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    }else if (luckyNumber === 5 ) {
        let discount = .100
        price * discount
        let discountPrice = price * discount
        price - discountPrice
        let total = price - discountPrice
        console.log(total)
    }

}

calculateTotal(price, luckyNumber)
alert(`Your lucky number is ${luckyNumber}`)
alert(`Your price before the discount ${price}`)



confirm("Would you like to enter number?")
const num = Number(prompt("What is you number?"))

if (isNaN(num)) {
    alert("It's not a number")
} else if(num % 2 === 0) {
    alert("The number is even")
}else if ( num % 2 !== 0) {
    alert("The number is odd")
}

// plus = num + 100
alert("Your number plus 100  is " + (100 + num))

if(num >= 0){
    alert("It's a positve number")
}else {
    alert("It's an even number")
}