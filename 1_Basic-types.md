# Typescript - (string, number, array)

### 기본 타입
- [Boolean](#boolean)
- [Number](#number)
- [String](#string)
- [Object](#object)
- [Array](#array)
- [Tuple](#tuple)
- [Enum](#enum)
- [Any](#any)
- [Null](#null)
- [Undefined](#undefined)
- [Never](#never)

#### Boolean<a id="boolean"></a>
```ts
const show: boolean = true;
```

#### Number<a id="number"></a>
```ts
const num: number = 10;
```

#### String<a id="string"></a>
```ts
const str: string = 'hello';
```

#### Object<a id="object"></a>
```ts
const obj: object = {};
```
```ts
const person: { name: string, age: number } = {
  name: 'kdh',
  age: 25,
};
```

#### Array<a id="array"></a>
```ts
const arr: Array<number> = [1, 2, 3];
const arr: number[] = [1, 2, 3];
```
```ts
const Alphabets: Array<string> = ['A', 'B', 'C'];
```

#### Tuple<a id="tuple"></a>
```ts
const address: [string, number] = ['guro', 10];
```

#### Enum<a id="enum"></a>
- 기본 0부터 시작
```ts
enum Color {
  Red, 
  Green, 
  Blue
}
```
OR
- 1부터 시작하게
```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
const c: Color = Color.Green;
```
OR
- 모든 값을 수동으로 설정
```ts
enum Color {
  Red = 1, 
  Green = 2, 
  Blue = 4
}
const colorName: string = Color[4]; // Blue
```

#### Any<a id="any"></a>
```ts
const any_type: any[] = [1, 2, 'A', 'B', true];
const any: any = 'anytype';
```

#### Undefined / Null<a id="undefined"></a><a id="null"></a>
- 이 밖에 이 변수에 할당할 수 있는 값은 없음.
```ts
let u: undefined = undefined;
let n: null = null;
```

#### Never<a id="never"></a>
- 절대 발생할 수 없는 타입
- ex) 1. 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
-     2. 타입 가드에 의해 아무 타입도 얻지 못하게 될 때
```ts
function error(message: string): never {
    throw new Error(message);
}
```
```ts
function infiniteLoop(): never {
    while (true) {
    }
}
```