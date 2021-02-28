# Type Alias
- 쉽게 타입 정의 가능
- 코드 가독성 ↑

```ts
interface Person {
  name: string;
  age: number;
}
var seho: Person = {
  name: '세호',
  age: 30,
}
```

```ts
type PersonAs = {
  name: string;
  age: number;
}
var seho: PersonAs = {
  name: '세호',
  age: 30,
}
```

```ts
type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}
```

#### Type과 Interface의 차이점
- 선언한 타입에 popover시, Interface는 인터페이스명만 띄워주지만 Type은 자세히 설명해줌
- 타입은 확장이 되지 않음

=> 확장을 위해 타입보다는 인터페이스 사용이 좋음