// # 타입 가드
interface GuardDeveloper {
  name: string;
  skill: string;
} 

interface GuardPerson {
  name: string;
  age: number;
}

function introduce(): GuardDeveloper | GuardPerson {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();

// skill을 넣어줬음에도 tony.skill property가 없다고 나옴
// Union Type은 공통된 타입에만 접근할 수 있기 때문
// console.log(tony.skill);


// 타입 단언을 통해서 타입의 범위를 구체화하여 접근하는 방법
// Union Type이기 때문에 공통되지 않은 부분을 처리하기 위해서 as를 통해 접근함.
// 복잡해지는 단점이 존재
if ((tony as GuardDeveloper).skill) {
  console.log((tony as GuardDeveloper).skill);
} else if ((tony as GuardPerson).age) {
  console.log((tony as GuardPerson).age);
}



// # 타입 가드 정의
// 타입가드 함수는 // function is해당타입() 이런식으로 많이 쓰임
// 타입 구분 방식
function isGuardDeveloper(target: GuardDeveloper | GuardPerson): target is GuardDeveloper {
  return (target as GuardDeveloper).skill !== undefined;
}

if (isGuardDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}