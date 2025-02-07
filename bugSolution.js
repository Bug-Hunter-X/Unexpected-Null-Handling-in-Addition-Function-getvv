function foo(a, b) {
  // Use nullish coalescing operator to provide default values if a or b is null
  const aValue = a ?? 0; 
  const bValue = b ?? 0; 
  return aValue + bValue;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null));//Output:0

//Alternative solution that throws error if either a or b is null
function foo2(a,b){
  if(a === null || b === null){
    throw new Error("Null values are not allowed");
  }
  return a+b;
}
//console.log(foo2(null,5)); //Throws error
console.log(foo2(5,5)); //Output:10