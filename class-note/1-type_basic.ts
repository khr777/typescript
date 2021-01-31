//JS 문자열 선언
var str = 'Hello';

//TS 문자열 선언
let str2: string = 'Hello World';

// TS 숫자
let num: number = 3333;
//let arr = [1,2,3];
// TS 배열 선언
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
// 정의한 타입이 아닌 다른 타입을 배열에 입력했을 때 오류를 출력해주는 것은
// 초반에 설치한 플러그인 eslint 또는 tslint로 인해 vscode에서 바로 오류를 확인할 수 있다.

// TS 배열 또다른 선언 방법 
let items: number[] = [1,2,3];


//let address2: Array<string, number> = ['gangname', 100]; 
// TS 튜플
let address: [string, number] = ['gangname', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: '홍길동',
    age: 100
};

let person22: {name: string, age: number} = {
    name: '홍길순',
    age: 3333
};

// TS 진위값
let show:boolean = true;






const a = {
    num : 10,
    text : 'HI'
};

a.num = 30000;

console.log(a);
