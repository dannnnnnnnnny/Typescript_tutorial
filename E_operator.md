# Operator

### Union Type
- OR연산자와 같이 A 이거나 B이다 라는 의미
```ts
function logText(text: string | number) {
  //..
}
```
- text 파라미터에는 string이나 number 모두 올 수 있다.

#### Union Type 장점
```ts
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixe(); // Error
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed(); // Ok
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
  return new TypeError('age must be number or string');
}
```
- any를 사용하는 경우 기본 JS를 사용하는 것처럼 동작을 함. Union Type을 사용하는 경우 타입이 number로 추론되기 때문에 숫자 관련 api를 자동완성하여 쉽게 사용할 수 있음
---
### Intersection Type
- 여러 타입을 모두 만족하는 하나의 타입
```ts
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}

type Capt = Person & Developer;
/*
{
  name: string;
  age: number;
  skill: string;
}
*/
```
---
### 주의할 점
```ts
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}

function introduce(someone: Person | Developer) {
  someone.name; // Ok
  someone.age;  // Type Error
  someone.skill; // Type Error
}
```
- someone 파라미터를 Person | Developer 유니온 타입으로 정의했지만 TS 관점에서는 introduce() 함수를 호출하는 시점에 Person Type이 올지 Developer Type이 올지 알 수 없기 때문에 어느 타입이 오든 오류가 안나는 방향으로 타입을 추론하게 됨!
- introduce() 함수 내에서 별도의 Type Guard를 이용하여 타입의 범위를 좁히지 않는 이상 두 Type의 공통으로 들어있는 속성인 name에만 접근할 수 있게 됨.



