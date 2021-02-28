# 타입 추론 (Type Inference)
- 타입스크립트가 코드를 해석해 나가는 동작

### 타입 추론 기본
```ts
let x = 3;
```
- x 에 대한 타입을 따로 지정해주지 않으면 x는 number로 간주됨

### 가장 적절한 타입 (Best Common Type)
```ts
let arr = [0, 1, null];
```
- 위 arr 변수 타입을 추론하기 위해서는 배열의 각 아이템을 살펴봐야 함
- number와 null로 구성
- 이 때 다른 타입들과 가장 잘 호환되는 타입으로 선정함

### 문맥상 타이핑 (Contextual Typing)
- 타입을 추론하는 또 하나의 방식
- 문맥상으로 타입을 결정하는 것
- 코드의 위치를 기준으로 일어남

```ts
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);   // OK
  console.log(mouseEvent.kangaroo); // Error!
};
```
- window.onmousedown 에 할당되는 함수의 타입을 추론하기위해 window.onmousedown 타입을 검사
- 타입 검사가 끝나고 나면 함수의 타입이 마우스 이벤트와 연관이 있다고 추론
- mouseEvent에 button 속성은 있지만 kangaroo 속성은 없다고 결론

```ts
const handler = function(mouseEvent) {
  console.log(mouseEvent.button);   // OK
  console.log(mouseEvent.kangaroo); // OK
};
```
- 앞의 코드와 동일하지만 함수가 할당되는 변수만으로는 타입을 추정하기 어렵기 때문에 에러가 나지 않음

### 타입 체킹
- TS의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점임 => Duck Typing, Structural Subtyping

** Duck Typing: 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 동적 타이핑의 한 종류
** Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미