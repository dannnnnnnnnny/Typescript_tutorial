interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}


// 인터페이스 인덱싱
interface StringArray {
  [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'aa'; // 'a'
// arr[1] = 10  // 10은 number 이므로 Error!


// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj: StringRegexDictionary = {
  sth: /abc/,
  // cssFile: 'css' // 정규식이 와야하지만 string이므로 Error!
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
obj['tsFile'] = /\.ts$/

Object.keys(obj).forEach((value) => { // value는 자동적으로 string Type 추론

});


// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;  
}

var thor: Developer = {
  language: 'TS',
  name: '토르',
  age: 100,
}



interface CraftBeer {
  brand?: string;
}

function brewBeer(beer: CraftBeer) {
  console.log(beer); // Error: Property 'nam' does not exist on type 'Beer'
}

let myBeer = { brandon: 'what' };
brewBeer(myBeer as CraftBeer);

