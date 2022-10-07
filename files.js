//1) Array Slice
const food=["pizza","bueger","fingerchips","donuts","springrolls"];
const modifiedFood =food.slice(1,5);
console.log(modifiedFood);


//2) Array splice
const fruits=["banana","apple","orange","kiwi"]
const modifiedFruit=fruits.splice(1,1,"lemon",)
console.log(fruits);

//3)Filter
const nums=[3,5,7,8,9,0,44];
let even =nums.filter((value)=> value%2 ===0);
console.log(even);

//4)Reject
function nonPrime(arr) {
    var ans = [];
    for (i of arr) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          ans.push(i);
          break;
        }
      }
    }
    return ans;
  }


  //5)Map
  const Array = [11, 22];
var squaredArray = Array.map((val) => val * val);
console.log(squaredArray);

//6) Reduce
const Num=[11,22,33]
var num1=Num.reduce((a,value)=>a*value)
console.log(num1);