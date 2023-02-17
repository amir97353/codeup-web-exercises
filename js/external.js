console.log("Hello from Javascript")
alert("welcome to my website")
const color = prompt("What is your favorite color?")
alert(`Great ${color} is my favorite color too`)



let lilMer = Number(prompt("how many days?"))
const lm = lilMer * 3;
alert(`It cost ${lm} to rent the little Mermaid`)

let BrotherBear = Number(prompt("how many days?"))
const BB = BrotherBear * 3;
alert(`It cost ${BB} to rent Brother Bear`)

let Hercules = Number(prompt("how many days?"))
const H = Hercules * 3;
alert(`It cost ${H} to rent Hercules`)


const Price = lm + BB + H
alert(`You will have to pay ${Price} dollars`)




const facebook = Number(prompt("How many hours did you work on facebook"))
const fbPay = facebook * 350

const Google = Number(prompt("How many hours did you work on Google"))
const GPay = Google * 400

const Amazon  = Number(prompt("How many hours did you work on Amazon"))
const APay = Amazon * 380

const fullPay = APay + GPay + fbPay
alert(`Your paycheck will be ${fullPay} dollars`)



const schedule = prompt("Does the class conflict with your current schedule?")
if(schedule === "yes") {
    alert("You can not enroll")
} else {
    alert("You can enroll in to the class")
}

offerNotExpired = confirm("Is the offer expired")
items = prompt("How many items do you have?")
if(items > 2 && offerNotExpired === true) {
    alert("The product offer can be applied")
}