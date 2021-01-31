let arr = [
  { gender: 'male', name: 'HI' },
  { gender: 'female', name: 'Hello' },
  { gender: 'male', name: 'Bye' },
];

let filtered = arr.filter(function (item) {
  if (item.gender === 'female') {
    return item;
  }
});

console.log(filtered);
