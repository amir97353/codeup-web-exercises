const circle = {
    radius: 3
}


area = Math.PI * Math.pow(circle.radius, 2)
function getArea(area){
    
    console.log(area)
}



function doRounding(){
    
    if(Number.isInteger(area) !== true){
       
       let math =  Math.round(area)
        console.log(math)

    } else{
        console.log(`Area of a circle with ${circle.radius} is ${area}`)
    }
    
}


doRounding(area)
getArea(area)