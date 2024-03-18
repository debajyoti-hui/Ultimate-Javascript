// Arrow Functions

// 1. Syntax
const sayHello = () => {
  //Arrow Functions
  console.log("Hey");
};

sayHello();

const add = (num1, num2) => {
  return num1 + num2;
};

//another way to write the above arrow funtion
const addV2 = (num1, num2) => num1 + num2; //One Liner

console.log(add(10, 20));
console.log(addV2(10, 20));

// 2. 'arguments' keyword
/*
   we can not use arguments is arrow function, this is
   only for normal funtion. we can use spread operator 
   in arrow funtion.
*/
const addNumbers = (...nums) => {
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        ans+=nums[i];
    }
    return ans;
}

console.log(addNumbers(10, 20, 30, 40));



// 3. Hoisting

// 4. This keyword
