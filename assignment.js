// Function
// a.Print odd numbers in an array
// Input
var arr=[1,2,3,4,5,6,7,8,9,10];
   var output=[];
  function add (arr) {
       for(var i=0; i<arr.length; i++){
          if(arr[i]&1){
             output.push(arr[i]);
          }
      }
      return output;
  }
  //  output=add(arr);
  console.log(add(arr));

// output=[1,3,5,7,9]


  // b.Convert all the strings to title caps in a string array

  var input="guvi geeks privated limited";
  function upperCase(input){
    return input.toUpperCase();
  }
  console.log(upperCase(input))

// output=GUVI GEEKS PRIVATED LIMITED


// c.Sum of all numbers in an array

var input=[1,2,3,4,5,6,7,8,9,10];
function addNunber(input){
  var sum=0;
  for(var number in input){
    sum +=parseInt(input[number]);
  }
  return sum;
}
console.log(addNunber(input));

// output=55


// d.Return all the prime numbers in an array

var input=[1,2,3,4,5,6,7,8,9,10];
function prime(input){
  var output=[];
  for(var i=0; i<input.length; i++){
    var count=[];
    for(let j=1; j<=50; j++){
      if(input[i] % j==0){
        count.push(j);       
        }
     }
    if(count.length==2){
      output.push(input[i]);
    }
  }
  return output;
}
console.log(prime(input));

// output=[2,3,5,7];


// e.Return median of two sorted arrays of the same size.

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
function median(ar1,ar2){
ar1=ar1.concat(ar2);
ar1.sort((a,b)=>a-b);
var a=ar1.length/2;
var out=ar1[a-1]+ar1[a];
return out;
}
console.log(median(ar1,ar2))

// output=32;


// f.Return all the palindromes in an array

var array=[11,10,5,34,55,101,39];
var out=[];
function palindromes(array){
for(let i=0; i<array.length; i++){
  var a=array[i].toString().split('');
  var b=[...a].reverse();
  let assume=true;
  for(var j=0; j<a.length; j++){
    if(a[j]!=b[j]){
      assume=false;
    }
  }
  if(assume){
    out.push(array[i]);
  }
}
return out;
}
console.log(palindromes(array));

// output=[11.5,55,101]


// g.Remove duplicates from an array

var arr=[1,2,3,3,2,5,4,6,4];
var hash={};
function duplicates(arr){
for(let i=0; i<arr.length; i++){
  hash[arr[i]]=0;
}
return (Object.keys(hash));
}
console.log(duplicates(arr));

// output=[1,2,3,4,5,6]


//h.Rotate an array by k times

var arr=[1,2,3,4,5,6,7,8,9];
var k=3;
function rotate(arr){
for(var i=1; i<=k; i++){
  var a=arr.shift();
  arr.push(a);
}
return arr;
}
console.log(rotate(arr));

// output= [4, 5, 6, 7, 8, 9, 1, 2, 3]

