# 타입 호환
- TS 코드에서 특정 타입이 다른 타입에 잘맞는지를 의미
```ts
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK
```

### 구조적 타이핑 (structural typing)
- 코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것

```ts
interface Avengers {
  name: string;
}

let hero: Avengers;
let capt = { name: "Captain", location: "Pangyo" };
hero = capt; // OK
```
- capt가 hero에 호환될 수 있는 이유는 capt 속성 중, name이 있기 때문
- Avengers Interface가 name 속성을 갖고 있기 때문에 호환됨

```ts
function assemble(a: Avengers) {
  console.log("어벤져스 모여라", a.name);
}

assemble(capt);
```
- 함수 호출도 마찬가지

### Soundness
- TS는 컴파일 시점에서 타입을 추론할 수 없는 특정 타입에 대해 일단 안전하다고 보는 특성이 있음
- 이를 "들리지 않는다"라고 표현함

### Enum 타입 호환 주의 사항
- number 타입과 호환되지만 Enum 타입끼리 호환되지 않음
```ts
enum Status { 
  Ready, 
  Waiting 
};

enum Color { 
  Red, 
  Blue, 
  Green 
};

let status = Status.Ready;
status = Color.Green;  // Error
```

### Class 타입 호환 주의 사항
- 클래스 타입은 클래스 타입끼리 비교할 때 스태틱 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교
```ts
class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) { }
}

class Captain {
  handSize: number;
  constructor(numHand: number) { }
}

let a: Hulk;
let s: Captain;

a = s;  // OK
s = a;  // OK
```

### Generics
- 제네릭은 제네릭 타입 간의 호환 여부를 판단할 때 타입 인자 <T>가 속성에 할당 되었는지를 기준
```ts
interface Empty<T> {
}

let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK
```
- 인터페이스에 속성이 없기 때문에 x, y는 같은 타입으로 간주됨
<br/>
<br/>
<br/>
```ts
interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y;
```
- 인터페이스 NotEmpty에 넘긴 제네릭 타입<T>이 data 속성에 할당되었으므로 x와 y는 서로 다른 타입으로 간주