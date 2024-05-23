const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
//all subarray
//sum for all
//if sum<n then push
let result=[]
let maxSum=n
//console.log(arr);
for(let i=0;i<arr.length;i++)
{
  for(let j=i+1;j<arr.length+1;j++)
  { 
     let sum=0
     let subArr=arr.slice(i,j)
     sum=Sum(subArr);
  if(sum<=maxSum) result.push(subArr)
  // console.log(subArr)
  }
}
console.log(result)
//console.log(arr);

function Sum(arr)
{
  let sum=0
  for(let t of arr) sum+=t
  return sum;
}	
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
