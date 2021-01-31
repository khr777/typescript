// 인터페이스 : 상호간의 약속
interface User {
    age: number;
    name: string;
}

// seho라는 변수는 User interface라는 타입으로 정의가 된다.
// 변수에 인터페이스 활용 
let seho: User = {
    age: 30,
    name: '세호'
}

console.log(seho);

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 30
}

getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number ): number;
}

let sum: SumFunction;


sum = function(a: number, b: number): number{
    console.log( a + b);
    return a + b;
}
sum(30, 11111);


// 연습 
interface ConsoleFunction {
    (a: string, b: number): string
}

let test:ConsoleFunction = function(a: string, b: number ): string {
    return '제 이름은 ' + a + '이고, 나이는 ' + b + ' 입니다.';
}

let test1:string = test('해리', 30);
console.log(test1);

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = [ 'a', 'b', 'c'];
arr[0] = 'D';

console.log(arr);

