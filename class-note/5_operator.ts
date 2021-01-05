// # Union Type (|)

function logMessage(value: string) {
  console.log(value);
}
logMessage('hello');

// logMessage(100); 
  // number 타입이므로 Error 발생
  // string이 아닌 다른 타입도 쓰고 싶다면 | 연산자를 통해서 추가할 수 있음

var dh: string | number | boolean;

function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString(); 
    // 타입 추론을 통해 number로서 사용가능한 api나 속성을 바로 사용 가능
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}



interface TestDeveloper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Union Type을 선언했음에도 불구하고 skill, age에 접근하지 못하고 
// name이라는 공통 부분에만 접근가능
// => 보장된 공통된 속성에 대해서만 property를 제공함
function askSomeone(someone: TestDeveloper | Person) {
  someone.name
}



// # Intersection Type (&)

// never Type으로 정의됨 (string, number, boolean을 모두 만족할 수 없음)
var captain: string & number & boolean;

// 다 포함하는 모든 속성과 타입을 사용 가능
function askSomeone2(someone: TestDeveloper & Person) {
  someone.age,
  someone.name,
  someone.skill
}


// union, intersection 차이
// union은 넘기는 타입에 대해 선택지가 생기고
// intersection은 두 타입의 합집합을 통해 새로운 타입을 만들게 됨.
askSomeone({ name: '테스트디벨로퍼', skill: '웹 개발' }); // TestDeveloper
askSomeone({ name: 'dh', age: 100 }); // Person

// askSomeone2({ name: '테스트디벨로퍼', skill: '웹 개발' });  // Error (age 속성이 없음)
askSomeone2({ name: '테스트디벨로퍼', skill: '웹 개발', age: 30 });
