// prototype과 class 간의 관계

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var cap = new Person('캡틴', 100);

// ES2015 (ES6)
// 위 생성자 함수와 같음
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다');
    
    this.name = name;
    this.age = age;
  }
}

var dh = new Person('dh', 25); // 인스턴스 생성을 통해 '생성되었습니다' 출력
console.log(dh);


// JS prototype
/*
JS는 prototype 기반의 언어
  var user = { name: 'dh', age: 25 };
  var admin = {};
  admin.__proto__ = user;
  admin.age // 25
  admin.name  // dh
  admin.role = 'admin';
  admin // { role: 'admin' }
*/
