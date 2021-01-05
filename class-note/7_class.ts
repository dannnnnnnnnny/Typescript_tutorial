// 기존 JS class와의 차이점
class PersonClass {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class PersonClass2 {

  constructor(private name: string, public age: number, readonly log: string) {
    this.name = name;
    this.age = age;
  }
}