function fetchItems() { // 함수 반환 타입을 작성하지 않더라도 items 변수를 보고 string[]을 추론
  var items = ['a', 'b', 'c'];
  return items;
}

var result = fetchItems();
console.log(result);



// 프로미스 반환
// 함수 반환 타입을 명시하지 않을 시, Promise 반환인 것은 알지만 제네릭 타입은 unknown
// Promise는 기본적으로 Generic을 통해 정의됨
// ex) Axios
function fetchPromiseItems(): Promise<string[]> {
  var items: string[] = ['a', 'b', 'c'];
  return new Promise(function(resolve) {
    resolve(items);
  });
}

fetchPromiseItems();