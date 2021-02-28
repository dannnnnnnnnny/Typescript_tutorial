# Generic
- C#, Java 등 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징.
- 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성할 때 사용

---
- 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것
```ts
function getText(text) {
  return text;
}
```
- 위 함수는 text 라는 파라미터에 값을 넘겨 받아 text를 반환해줌 (어떤 값이 오든)

```ts
function getText<T>(text: T): T {
  return text;
}
```
- 위 함수는 제네릭 기본 문법이 적용됨.
```ts
getText<string>('hi');
// string 제네릭 타입 넘겨줄 시,
function getText<string>(text: string): string {
  return text;
}
```

### 제네릭 사용 이유
```ts
function logText(text: any): any {
  return text;
}
```
- 위 함수의 동작에 문제가 생기진 않지만 함수 인자로 어떤 타입이 들어갔고 어떤 타입이 반환되는지는 알 수 없음.
- any 타입은 타입 검사를 하지 않음

```ts
function logText<T>(text: T): T {
  return text;
}
```
- 제네릭을 사용하면 함수를 호출할 때마다 넘긴 타입에 대해 타입스크립트가 추정할 수 있게 됨. 
- 함수의 입력값에 대한 타입과 출력값에 대한 타입이 동일한지 검증 가능해짐

### 제네릭 타입 변수
```ts
function logText<T>(text: T): T {
  console.log(text.length); // Error
  return text;
}
```
- text에 .length가 있다는 단서가 없기 때문에 에러가 남

```ts
function logText<T>(text: T[]): T[] {
  console.log(text.length); // Ok
  return text;
}
```
- 배열 형태의 T 타입을 인자로 받음.
- 위 방식으로 제네릭을 유연하게 사용 가능


### 제네릭 타입
```ts
function logText<T>(text: T): T {
  return text;
}
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: {<T>(text: T): T} = logText;
```
- 위 코드는 같은 의미

```ts
interface GenericLogTextFn {
  <T>(text: T): T;
}
function logText<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn = logText; // Okay
```
- 인터페이스로 구현하면 깔끔하게 사용 가능해짐
<br/>
<br/>
<br/>

- 인터페이스 인자 타입을 강조하고 싶다면
```ts
interface GenericTextFn<T> {
  (text: T): T;
}

function logText<T>(text: T): T {
  return text;
}

let myString: GenericTextFn<string> = logText;
```

### 제네릭 클래스
```ts
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
```
- 제네릭 클래스 선언시 이름 오른쪽에 <T>를 붙임. 해당 클래스로 인스턴스 생성시 타입에 어떤 값이 들어갈지 지정

### 제네릭 제약 조건
```ts
function logText<T>(text: T): T {
  console.log(text.length); // Error
  return text;
}
```
- T가 어떤 타입인지 구체적으로 정의하지 않았기때문에 length는 오류 발생
- 해당 타입을 정의하지 않고도 length 속성을 허용하고 싶다면

```ts
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}

logText(10); // Error
logText({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음
```
- 타입에 대한 강제는 아니지만 length에 대해 동작하는 인자만 넘겨받을 수 있게 됨.

### 객체의 속성을 제약하는 방법
- 두 객체 비교시 제네릭 제약 조건 사용 가능
```ts
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}
let obj = { a: 1,  b: 2, c: 3 };

getProperty(obj, "a"); // Ok
getProperty(obj, "z"); // Error
```
- <T, O extends keyof T> 를 사용하여 obj 객체에 없는 속성은 접근할 수 없게 함.
