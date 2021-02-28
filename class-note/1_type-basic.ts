// JS 문자열 선언 방식
// var str = 'hello';

// TS 문자열 선언 방식
let str: string = 'hello';

let num: number = 10; // 숫자

let arr: Array<number> = [1, 2, 3]; // (number만 가능한) 배열
let items: number[] = [1, 2, 3]; 

// (string만 가능한) 배열
let heroes: Array<string> = ['capt', 'thor', 'hulk'];

// 튜플 (배열의 특정 index 순서까지 정의한 것)
let address: [string, number] = ['gangnam', 100];

// 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };

// 구체적으로 타입을 명시할 수 있음
let person: { name: string, age: number } = {
  name: 'capt',
  age: 100,
};

// 진위값
let show: boolean = true;

const any_type: any[] = [1, 2, 'A', 'B', true];

class PersonType {
  name: string;
  age: number;
}

let pt: PersonType = {
  name: "a",
  age: 10
}