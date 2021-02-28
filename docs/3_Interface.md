# Interface
: 상호 간 정의한 약속 혹은 규칙

- 객체 스펙 (속성과 속성의 타입)
- 함수 파라미터
- 함수 스펙 (파라미터, 반환 타입)
- 배열과 객체를 접근하는 방식
- 클래스

---
### Interface
```ts
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}

let person = { name: 'dh', age: 25 };
logAge(person);
```
- 인터페이스를 함수 파라미터의 인자로 받아서 사용할 때 항상 인터페이스의 속성 갯수와 인자로 받는 객체의 속성 갯수를 일치시키지 않아도 됨.
- 인터페이스에 정의된 속성, 타입의 조건만 만족하면 객체 속성 갯수가 더 많아도 문제 없음. (속성 순서도 문제 X)


### Option property
```ts
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Saporo'
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
}
brewBeer(myBeer);
```
- beer.nam 을 호출했을 때 오탈자 오류를 표시해주거나 없는 속성을 호출할 때 오류를 표시해줌

### 읽기 전용 속성
```ts
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer {
  brand: 'Belgian Monk'
};

myBeer.brand = 'Korean Carpenter'; // Error
```

### 번외) 읽기 전용 배열
```ts
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1); // error
arr.push(4); // error
arr[0] = 100; // error
arr = [10, 20, 30]; // error
```

### Type Checking
```ts
interface CraftBeer {
  brand?: string;
}

function brewBeer(beer: CraftBeer) {
  // ..
}

brewBeer({ brandon: 'what' }); // Error
```
- brand 이 아닌 brandon를 넘겼기 때문에 Error

### 인터페이스에 정의하지 않은 속성들 추가로 사용하고 싶을 때
```ts
interface CraftBeer {
  brand?: string;
  [propName: string]: any;
}
```

### 함수타입
```ts
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function(id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
}
```

### 클래스타입
```ts
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}
```

### 인터페이스 확장
```ts
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
```
```ts
interface Person {
  name: string;
}
interface Drinker {
  drink: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';
```

### 하이브리드 타입
```ts
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = (function(beer: string) {}) as CraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function() {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
```
- 함수타입이면 객체 타입을 정의할 수 있음

