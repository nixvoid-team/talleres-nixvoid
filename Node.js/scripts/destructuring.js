const car = {
  color: 'red',
  maxSpeed: 120,
  isConvertible: true,
}

const { color, ...other } = car;

console.log(color);
console.log(other);