console.log("This is the output of Question 1")

function mainFunction(func) {
    let age = 25;
    console.log(`Your age is ${age}.`)
    func(age);
  }
function checkFunction(age) {
        if(age>18)
    {
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");

    }
  }
mainFunction(checkFunction);

console.log("This is the output of Question 2")


const extraction = (x,y)=> x[0]+y[0];
console.log(extraction('Roger','Walter'))