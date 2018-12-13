const xmas = () => {
  let day = 25;
  let month = "December";
  const date = [day, month];
  return date;  
}



let a = xmas();
console.log(a[0]);

a[0]++;

console.log(xmas());
