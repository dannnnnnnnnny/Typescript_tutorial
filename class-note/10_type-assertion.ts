// # 타입 단언
// 개발자가 TS보다 그 타입에 대해 잘 알고 있기 때문에
// 개발자가 정의한 타입으로 간주하게 만드는 것

var one;
one = 20;
one = 'one';
var two = one as string;

// DOM API 조작
// <div id="app">hi</div>


// HTMLDivElment | null
var div = document.querySelector('div');
// div.innerText // 바로 접근해서 쓰게되면 null일 수 있기때문에 보장해줘야 함

// 방법 1.
// if (div) {
//   div.innerText;
// }

// 방법 2.
// var div = document.querySelector('div') as HTMLDivElment;