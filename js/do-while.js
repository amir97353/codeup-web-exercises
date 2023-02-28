var allCones = Math.floor(Math.random() * 50) + 50;
var conesBought = Math.floor(Math.random() * 5) + 1;


do {
    //let conesLeft = allCones - conesBought
    allCones = allCones - conesBought
    console.log(`I have ${allCones} left you bought${conesBought} cones`)
    if(allCones < conesBought){
        console.log("there are not enough cones left")
        break
    }
} while(allCones > 0)



