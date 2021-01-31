let test = [
    { hello: 'HI', boolean: true },
    { hello: 'BYE', boolean: false}
]

let value = test.filter(item => item.boolean);
console.log('what is the item in true? : ' + value);


let todoItems = [
    { name: 'DO', bool: true },
    { name: 'SO', bool: false }
]

function showCompleted(): object[] {
    return todoItems.filter(item => item.bool);
  }

let obj = showCompleted();
console.log('obj : ' + obj);
