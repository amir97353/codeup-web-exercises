num = Number(prompt("Pick an number between 1 and 50"))
while(num % 2 === 0) {
   num = prompt("Pick another number")
}


for(let i = 1 ;i < 51;i++ ){
    if( i % 2 === 1) {
        if(num === i){
            continue
        }
        console.log(i)
    }
    
}

