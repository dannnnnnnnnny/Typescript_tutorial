# Enum

### 숫자형 Enum
```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

enum Direction {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right // 4
}
```
- 위와 같은 숫자형 Enum은 초기값을 주지 않았으므로 0부터 시작하여 차례대로 1씩 증가함
- auto-incrementing

```ts
enum Response {
  No = 0,
  Yes = 1,
}

function resEnum(title: string, message: Response): void {
  // ...
}

resEnum("Enum Response", Response.Yes);
```

### 문자형 Enum
- 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 해줘야 함
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

### 복합 Enum
- 기술적으로 문자와 숫자를 혼합 생성
- 권장하지 않음.
```ts
enum HeterogeneousEnum {
  No = 0,
  Yes = "YES";
}
```

### 리버스 매핑
- 숫자형 Enum에만 존재하는 특징
- key로 value를 얻을 수 있고, value로 key를 얻을 수 있음
```ts
enum Enum {
  A
}

let a = Enum.A; // key로 value 획득
let keyName = Enum[a]; // value로 key 획득
```
