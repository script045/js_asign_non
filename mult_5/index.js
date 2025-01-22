
let result = 0
console.log("5 Multiplication with for loop: ")
for(i=0; i<10; i++ ) {
    result += 5
    console.log( "5 x " + (i+1) +" = "+   result) 
}


console.log("5 Multiplication with Do -while loop: ")
let do_result = 0
i=0
while (i < 10) {
    do_result += 5
    console.log( "5 x " + (i+1) +" = "+   do_result) 
    i++;
  }