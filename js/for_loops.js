

/*function showMultiplicationTable() {
    numbers = [1,2,3,4,5,6,7,8,9,10]
    let numberPicked = Number(prompt("What number?"))
    numbers.forEach(number => {
        console.log(number * numberPicked)
    })
}
showMultiplicationTable()

function*/

/*function showMultiplicationTable(num) {
    
for(var i=1 ; i< 10 ; i++){
    console.log(num * i)
    }
}

showMultiplicationTable(5)*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}



/*for(let i = 0; i < 10 ; i++) {
     //let random = Math.floor(Math.random() * 180) + 20
    const random = getRandomIntInclusive(20,201)
    if(random % 2 === 0) {
        console.log("The number is even")
    }else {
        console.log("It's an odd number")
    }
}*/

for(let i = 1; i < 10 ; i++) {
    console.log(i.toString().repeat(i))
}
  // switch (i) {
  //       case 1:
  //         console.log(`${i}`);
  //         break;
  //       case 2:
  //         console.log(`${i}${i}`);
  //         break;
    

  //      case 3:
  //         console.log(`${i}${i}${i}`);
  //         break;
  //       case 4:
  //         console.log(`${i}${i}${i}${i}`);
  //         break;
  //       case 5:
  //         console.log(`${i}${i}${i}${i}${i}`);
  //         break;
  //       case 6:
  //         console.log(`${i}${i}${i}${i}${i}${i}`);
  //         break;
  //       case 7:
  //         console.log(`${i}${i}${i}${i}${i}${i}${i}`);
  //         break;
  //       case 8:
  //           console.log(`${i}${i}${i}${i}${i}${i}${i}${i}`);
  //           break;
  //       case 9:
  //           console.log(`${i}${i}${i}${i}${i}${i}${i}${i}${i}`);
  //           break;
        
  //     }
  //   }

    for(let i = 100;i>4;i-=5){
        console.log(i)
    }

