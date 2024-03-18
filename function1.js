let firstName = "Debajyoti";
// function
function sayHello() {
  console.log("hey " + firstName);
}

sayHello(); //calling of function

//funtion definition variables->arguments
function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10); //actual value pass -> parameters

function multiply(num1, num2) {
  //console.log(num1 * num2);
  return num1*num2;
}

let ans = multiply(10, 2);
console.log("the answer is "+ans);

// Q: I want a function which can accept unlimited arguments and add them
// Unlimited Arguments Accept
function addNumbers(){
    // console.log(arguments);
    let ans = 0;
    for(let i=0;i<arguments.length;i++){
        ans+=arguments[i];
    }
    return ans;
}

// Second Method : spread operator
function addNumberV2(...numbers){
    let ans = 0;
    for(let i=0; i<numbers.length;i++){
        ans+=numbers[i];
    }
    return ans;
}

let result = addNumbers(100, 200, 300, 400, 500);
console.log("the result of addNumber() funtion is "+result);
console.log("the result of addNumberV2() funtion is "+result);