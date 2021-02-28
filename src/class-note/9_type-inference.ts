// # 타입 추론 기본 1

// 변수 선언에서 타이핑을 해주지 않더라도 추론이 됨
var a = 'abc';

// 파라미터 값에 타이핑을 해주면 함수 반환값을 추론
// b (number) 와 c (string)을 + 연산자로 합쳐서 return 할 시에는 합쳐져서 string이 반환됨
function getB(b = 10) {
  var c = 'hi';
  return b + c;
}


// 타입 추론 기본 2
// interface DropDown<T> {
//   value: T;
//   title: string;
// }

// // 인터페이스 제네릭을 통한 타입 추론
// var shoppingItem: DropDown<string> = {
//   value: 'abc',
//   title: 'hello'
// }



// 타입 추론 기본 3
interface InferenceDropDown<T> {
  value: T;
  title: string;
}

// 제네릭 타입 K를 정의하면 상속받은 DropDown 인터페이스의 제네릭 타입도 K로 따라옴
interface DetailedDropDown<K> extends InferenceDropDown<K> {
  description: string;
  tag: K;
}

// 인터페이스 제네릭을 통한 타입 추론
var shoppingItem: InferenceDropDown<string> = {
  value: 'abc',
  title: 'hello'
}

var detailedItem: DetailedDropDown<number> = {
  title: 'abc',
  description: 'ab',
  value: 1,
  tag: 1,
}



// # Best Common Type
// Union Type으로 묶어나가며 가장 적절한 타입을 추론

// number | boolean
var BCTarr = [1, 2, true];

// number | boolean | string
var BCTarr2 = [1, 2, true, 'str'];
