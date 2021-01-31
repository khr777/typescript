var arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'sarah' },
    { gender: 'male', name: 'bone' },
]

// 특정 조건에 해당하는 아이템만 골라내는 filter
let filtered2 = arr.filter(function(item) {
    console.log(item);
});

filtered2;
console.log('------------------')

let filtered = arr.filter(function (item) {

    if ( item.gender === 'male' ) {
        return item;
    }
    
});

console.log(filtered);