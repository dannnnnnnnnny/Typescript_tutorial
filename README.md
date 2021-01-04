# LEARN TYPESCRIPT

## 타입스크립트란?

- 자바스크립트에 타입을 부여한 언어
- 자바스크립트의 확장된 언어
- 타입스크립트는 자바스크립트와 다르게 브라우저에서 실행하기 위해서 파일을 한번 변환 해줘야 함 (컴파일)

## 타입스크립트의 이점 (/why-typescript)

1. 에러의 사전 방지 (화면으로 출력되기 이전에 코드 상에서 문제점을 찾아낼 수 있음)

```js
// JS Definition (예상 반환 값과 속성을 지정함으로써 코드 자동완성 가능)
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.street;
  response.address.city;
});
```

```js
// JS 사용
function sum(a, b) {
  return a + b;
}

sum(10, 20);
sum(10, '20'); // 숫자와 문자이기 때문에 1020 결과값이 나올 것임
```

```ts
// TS 사용 (타입 명시)
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);
```

2. 코드 가이드 및 자동 완성(개발 생산성 향상)

```ts
function add(a: number, b: number): number {
  return a + b;
}

var result = add(10, 20);
result.toLocaleString();
// result. 을 찍으면 ts가 result의 값을 number로 인식하여 number 타입에서 사용 가능한 method를 보여줌 (타입 추론, 자동 완성)
```

### JS를 TS처럼 사용하기

```js
// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}

sum(10, 20);
sum(10, '20');
```

- JSdoc을 통해 타입 추론 및 파라미터 설명까지 추가 가능
