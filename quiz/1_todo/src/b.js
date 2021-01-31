let test = [
  { name: 'HI', age: 20 },
  { name: 'HI', age: 10 },
  { name: 'HI', age: 10 },
];

let filterd = test.filter(function (item) {
  if (item.age == 20) {
    return item;
  }
});

console.log(filterd);
