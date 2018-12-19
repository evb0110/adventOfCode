const makeObject = (a, b, x, y, z) => {
  a = a + x;
  b = b + y + z;
  return {a, b};
}

let c = makeObject(1, 2, 3, 4, 5);
console.log(c);

let a;
let b;


({a, b} = c);

console.log(a);
