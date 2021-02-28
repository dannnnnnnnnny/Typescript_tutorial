# Class

### readonly
```ts
class Developer {
  readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let john = new Developer("John");
john.name = "John"; // Error
```
- 클래스의 속성에 readonly 키워드 사용

```ts
// 위의 코드를 이렇게 줄일 수 있음
class Developer {
  readonly name: string;
  constructor(readonly name: string) {
  }
}
```

### Accessor
- TS는 객체의 특정 속성의 접근과 할당에 대해 제어할 수 있음
- 이를 위해선 해당 객체가 클래스로 생성한 객체여야 함
```ts
class Developer {
  name: string;
}
const josh = new Developer();
josh.name = 'Josh Bolton';
```

- name이라는 속성에 제약 사항을 추가하고 싶다면 get, set을 활용
- get만 선언하고 set을 선언하지 않았을 경우 자동으로 readonly로 인식함.
```ts
class Developer {
  private name: string;

  get name(): string {
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error('이름이 길다');
    }
    this.name = newValue;
  }
}

const josh = new Developer();
josh.name = 'Josh Bolton'; // Error 이름이 길다
josh.name = 'Josh'; // Ok
```

### Abstract Class
- 추상클래스는 인터페이스와 비슷한 역할을 하면서도 다른 특징을 가짐. 
- 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메소드 모양을 정의

```ts
abstarct class Developer {
  abstract coding(): void; // abstract가 붙으면 상속받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log('drink');
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log('Develop');
  }
  design(): void {
    console.log('Design');
  }
}

const dev = new Developer(); // Error
const josh = new FrontEndDeveloper();
josh.coding(); // Develop
josh.drink(); // drink
josh.design(); // Design
```
