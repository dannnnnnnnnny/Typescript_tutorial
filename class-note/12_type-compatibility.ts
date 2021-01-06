// # 타입 호환성

// 인터페이스
interface compDeveloper {
  name: string;
  skill: string;
}

interface compPerson {
  name: string;
}

var developer: compDeveloper;
var person: compPerson;

// Error! 왼쪽에 있는 타입이 구조적으로 더 큰 관계를 갖고 있음
// 오른쪽에 있는 타입이 구조적으로 더 큰 관계를 갖고 있어야 호환이 됨. (부분집합)
// developer = person; 

// 인터페이스가 아닌 클래스여도 동일
// 내부적인 속성과 타입으로 결정되는 것임.

person = developer; // 가능



// 함수
// sumAdd 함수는 구조적으로 add보다 큼
var add = function(a: number) {
  // ...
}
var sumAdd = function(a: number, b: number) {
  // ...
}
// add = sumAdd;  // Error!
sumAdd = add;



// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;  // 양쪽 다 호환됨.


interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2; // Error1 구조적으로 number와 string으로 타입이 달라지므로 서로 호환이 되지 않음
// notempty2 = notempty1;
