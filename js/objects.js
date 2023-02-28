// person = {
//     firstName: "Amir",
//     lastName: "saunders"
// }

// person.sayHello = function () {
//     console.log(`Hello my name is ${person.firstName} ${person.lastName}`)
// }

// person.sayHello()

// function totalPrice(price) {
// if(price >= 200) {
//     let discAmount = price * 0.12
//     let total = price - discAmount
//     console.log(total)
//     }else {
//         console.log("You didnt spend enough to get the discount")
//     }
// }


// var shoppers = [
//         {name: 'Cameron', 
//         amount: 180,
//         discount: 36,
//         finalPrice: 144
//     },
//         {name: 'Ryan', 
//         amount: 250,
//         discount: 30,
//         finalPrice: 220
//     },
//         {name: 'George', 
//         amount: 320,
//         discount: 64,
//         finalPrice: 256
//         }
//     ];
//  shoppers.forEach(shopper => {
//     console.log(`${shopper.name} has spent ${shopper.amount}. the discount was ${shopper.discount} and the final price is ${shopper.finalPrice}`)
//  })


 const Books = [
    {
        title: "the art of living",
        author: {
            fName: "Sharon",
            lName: "lebell"
        }
    },
    {
        title: "No longer Human",
        author: {
            fName: "Dazai",
            lName: "Osamu"
        }
    },
    {
        title: "Crime and Punishment",
        author: {
            fName: "Fydor",
            lName: "Dostoyevsky"
        }
    },
    {
        title: "Poems",
        author: {
            fName: "Chuuya",
            lName: "Nakahara"
        }
    },
    {
        title: "Rashomon",
        author: {
            fName: "Ryunosuke",
            lName: "Aktugawa"
        }
    }

    ]
     

    Books.forEach(book => {
        console.log(book)
        
    })
