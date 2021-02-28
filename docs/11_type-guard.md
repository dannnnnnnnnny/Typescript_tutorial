# 타입 가드
- 타입가드 함수는 'function is 해당타입' 이런식으로 많이 쓰임
```ts
function isGuardDeveloper(target: GuardDeveloper | GuardPerson): target is GuardDeveloper {
  return (target as GuardDeveloper).skill !== undefined;
}
```
```ts
if (isGuardDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
```