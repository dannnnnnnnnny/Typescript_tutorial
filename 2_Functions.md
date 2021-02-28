### 파라미터 타입 정의
```ts
function sum(a: number, b: number) {
  return a + b;
}
sum(5, 10);
```

### Rest 문법 사용
```ts
function sum(a: number, ...b: number[]): number {
  const total = 0;
  for (let i = 0; i < b.length; i++) {
    total += b[i];
  }

  return a + total;
}
```


### 함수 반환 값 타입 정의
```ts
function number(): number {
  return 10;
}
number();
```

### Optional Parameter
```ts
function optional(a: string, b?: string) {

}
optional('hello');
optional('hello', 'TS');
```
