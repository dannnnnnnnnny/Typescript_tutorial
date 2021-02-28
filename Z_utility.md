### Partial<T>
```ts
type Partial<T> = { [P in keyof T]?: T[P] }
```
```ts
interface User {
  name: string;
  age: number;
}

let user1: User = { name: 'harry', age: 23}; // Ok
let user2: User = { age: 23 }; // Error

let user3: Partial<User> = { age: 23 }; // Ok
```
- 타입 T의 property 키값에 해당하는 P를 전부 옵셔널(?)형태로 감싸 리턴함.

### Required<T>
```ts
type Required<T> = { [P in keyof T]-?: T[P] }
```
- -(마이너스) 연산자는 옵셔널을 제거해주는 연산자
```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // Ok
const obj2: Required<Props> = { a: 5 }; // Error
```

### Readonly<T>
```ts
type Readonly<T> = { readonly [P in keyof T]: T[P] }
```
- 모든 프로퍼티 값을 참조만 할 수 있도록 바꿈

### Record<K, T>
```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```
- K 타입을 key 값 타입으로, T 타입을 value 값 타입으로 갖는 타입 리턴
```ts
interface Car {
  name: string;
  price: number;
}

const productList: Record<"S"|"A", Car> = {
  S: { name: "Sonata", price: 10 },
  A: { name: "Avante", price: 10 },
}

const productList: Record<string, Car> = {
  S1: { name: "Sonata", price: 10 },
  A2: { name: "Avante", price: 10 },
}
```

### Pick<T, K>
```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```
- T 타입으로부터 K 프로퍼티만 추출
- T의 키값에 속하는 유니온 타입 K를 받아 매칭 되는 프로퍼티만 리턴
```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Pick<Todo, 'title' | 'completed'> = {
    title: 'Clean room',
    completed: false,
};
```

### Exclude<T, U>
```ts
type Exclude<T, U> = T extends U ? never : T;
```
- T 타입 중 U 타입과 겹치는 타입 제외
```ts
type T0 = Exclude<"a"|"b"|"c", "a">;  // "b" | "c"
type T1 = Exclude<"a"|"b"|"c", "a"|"b">;  // "c"
type T2 = Exclude<string|number|(()=> void), Function>;  // string | number
```

### Extract<T, U>
```ts
type Extract<T, U> = T extends U ? T : never;
```
- T타입에서 U 타입과 겹치는 타입만 가져옴 (Exclude와 반대되는 개념)
```ts
type T0 = Extract<"a"|"b"|"c", "a"|"f">;  // "a"
type T1 = Extract<string|number|(() => void), Function>;  // () => void
```

### Omit<T, K>
```ts
type Omit<T, K extends T> = Pick<T, Exclude<keyof T, K>>
```
- Pick과 반대로 T 타입으로부터 K 프로퍼티 제거
```ts
type Car = {
    name: string;
    price: number;
    brand: string;
};

type RemainingKeys = Exclude<keyof Car, "brand">;
type NoBrandCard = Pick<Car, RemainingKeys>;
// { name: string; price: number; };
```

### NonNullable<T>
```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```
- null / undefined 타입을 상속한다면 무시, 아니면 타입 리턴
``` ts
type T0 = NonNullable<string|number|undefined>; // string | number
type T1 = NonNullable<string[]|null|undefined>;  // string[]
```

### Parameters<T>
```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```
- 함수 파라미터를 타입으로 리턴
```ts
declare function f1(arg: { a: number, b: string }): void
type T0 = Parameters<() => string>;  // []
type T1 = Parameters<(s: string) => void>;  // [string]
type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
type T4 = Parameters<typeof f1>;  // { a: number, b: string }
type T5 = Parameters<any>;  // unknown[]

// never는 any를 제외한 모든 타입의 원시타입이기때문에
// 함수타입 T에 never로 주어도 에러가 발생하지 않고
// 인자값으로도 어떠한 값이든 올 수 있기때문에 any가 리턴
type T6 = Parameters<never>;  // any

// T extends (...args: any) => any에서
// never 타입을통해 에러를 막지않았기떄문에 함수가 아니라면 에러가 발생
type T7 = Parameters<string>;  // Error
type T8 = Parameters<Function>;  // Error
```
- any와 never 모두 함수를 대신하여 파라미터 타입으로 사용할 수 있기 때문에 에러가 발생하지 않음.

### ConstructorParameters<T>
```ts
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
```
- 생성자를 갖는 함수 타입의 생성자 파라미터를 리턴. 함수가 아니라면 never 리턴
```ts
class Person {
    private _firstname: string
    private _lastname: string

    constructor(firstname: string, lastname: string) {
        this._firstname = firstname
        this._lastname = lastname
    }
}

type constructuinArgsType = ConstructorParameters<typeof Person>;
let personConstructionArgs: constructuinArgsType = ['first', 'last']
```

### ReturnType<T>
```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```
- 함수의 리턴타입을 가져옴
```ts
let f1 = () => ({ a: 23, b: 33 });
type T0 = ReturnType<() => string>;  // string
type T1 = ReturnType<(s: string) => void>;  // void
type T2 = ReturnType<(<T>() => T)>;  // {}
type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
```

### InstanceType<T>
```ts
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
```
- 생성자로 초기화된 인스턴스 타입을 리턴
```ts
let funTest = () => ({ a: 23, b: 33 });

type T0 = ReturnType<() => string>;  // string
type T1 = ReturnType<(s: string) => void>;  // void
type T2 = ReturnType<(<T>() => T)>;  // {}
type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T4 = ReturnType<typeof funTest>;  // { a: number, b: string }
type T5 = ReturnType<any>;  // any
type T6 = ReturnType<never>;  // any
```
