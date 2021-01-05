// # 타입 별칭
// 쉽게 타입 정의 가능
// 코드 가독성 높아짐

// 타입 별칭과 인터페이스의 차이점
// 선언한 타입에 popover시, 인터페이스명만 띄워주는 인터페이스와 달리 type을 자세히 설명해줌
// 타입은 확장이 되지 않음
// 확장을 위해서 인터페이스를 사용하는 것이 좋음

interface Person {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30,
}

type PersonAs = {
  name: string;
  age: number;
}

var seho: PersonAs = {
  name: '세호',
  age: 30,
}


type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}















