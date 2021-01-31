console.clear();
class Person {
    name: string;
    age: number;
    city: string;
    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const person = new Person('홍길동', 30, '대전');
console.log(person);
let personName: string = person.name;
let personAge: number = person.age;
let personCity: string = person.city;
console.log('이름 : ' + personName);
console.log('나이 : ' + personAge);
console.log('지역 : ' + personCity);

let arr: object[] = new Array;
arr.push(person);
const person2 = new Person('홍길순', 20, '서울');
arr.push(person2);
console.log(arr);