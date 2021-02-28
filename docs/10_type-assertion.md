# 타입 단언
- 개발자가 TS보다 그 타입에 대해 잘 알고 있을 것이기 때문에
- 개발자가 정의한 타입으로 간주하게 만드는 것

```ts
var one;
one = 20;
one = 'one';
var two = one;
```
- number를 저장하고 string으로 바꿨지만 ts는 any 타입으로 간주함.

```ts
var one;
one = 20;
one = 'one';
var two = one as string;
```
- as {Type} 을 통해 단언하여 two는 string으로 간주됨

```ts
interface GuardDeveloper {
  name: string;
  skill: string;
} 

interface GuardPerson {
  name: string;
  age: number;
}
```

```ts
function introduce(): GuardDeveloper | GuardPerson {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();
```
- skill을 넣었지만 tony.skill property에는 접근할 수 없음
- Union Type 이기 때문

```ts
if ((tony as GuardDeveloper).skill) {
  console.log((tony as GuardDeveloper).skill);
} else if ((tony as GuardPerson).age) {
  console.log((tony as GuardPerson).age);
}
```
- 타입 단언을 통해서 타입의 범위를 구체화하여 접근하는 방법
- Union Type이기 때문에 공통되지 않은 부분을 처리하기 위해서 as를 통해 접근함.
- 복잡해지는 단점이 존재