const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here	
let result=[]
let maxSum=n
let subArr=[]
let sum=0;
for(let t of arr)
{
  if(t+sum<=maxSum)
  {
    subArr.push(t)
    sum+=t
  }
  else{
    result.push(subArr)
    subArr=[]
    subArr.push(t)
    sum=t
  }
}
result.push(subArr)
console.log(result)
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
