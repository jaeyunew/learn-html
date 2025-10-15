## 변수

#### 1. 다음 중 재할당이 불가능한 선언은?

A)`var a = 1` B)` let a = 1` C) `const a = 1`

정답) C

---

#### 2. 아래 코드의 출력결과는?

```
console.log(x);
var x = 10;
```

정답) undefined

---

#### 3. 아래 코드에서 에러가 나는 줄은? 이유는?

```
1 console.log(y);
2 let y = 3;
```

정답) y가 선언되지 않았기 때문에 첫번째 줄에서 에러가 난다.

---

#### 4. `const obj = { n: 1 }; `

obj 객체의 속성 n 의 값을 2로 변경하세요.

정답) obj.n = 2;

---

#### 5. 다음 중 올바른 식별자(변수명)가 아닌 것은?

A) `_count` B)`$value` C)`2nd` D)`camelCase`

정답) C

---

#### 6. 다음 코드의 결과?

```
let a = 1;
a = a + 2;
console.log(a);
```

정답) 3

---

## 문자열

#### 7. 템플릿 리터럴로 “Hello, JS!”를 만들 올바른 코드는?

A) `'Hello, ${"JS"}!'` B) `` `Hello, ${"JS"}!` `` C) `"Hello, ${"JS"}!"`

정답) B

---

#### 8. `"abc".length` 값은?

정답) 3

---

#### 9. `"Hello".toLowerCase()` 결과는?

정답) hello

---

#### 10. `"  hi  ".trim()` 결과는?

정답) hi

---

#### 11. `"a,b,c".split(",")`결과는?

정답) (3) ['a', 'b', 'c']

---

#### 12. `"abc".includes("b")` 는 `true`?

정답) true

---

#### 13. `"cat".replace("c","b")` 결과는?

정답) bat

---

## 조건문

#### 14. 아래 출력결과는?

```
console.log(2 == "2", 2 === "2");
```

정답) true false

---

#### 15. 삼항연산자 결과는?

```
const n = 5;
const r = n % 2 === 0 ? "even" : "odd";
```

정답) odd

---

#### 16. `switch` 기본형에서 일치 비교에 쓰이는 것은?

A) `==` B) `===` C) 둘 다

정답) B

---

#### 17. `&&` 단축 평가 결과:

```
const ok = true && "DONE";
```

정답) DONE

---

## Object

#### 18. 속성 접근 결과?

```
const user = { name: "Ann", age: 17 };
console.log(user["name"]);
```

정답) Ann

---

#### 19. 키를 추가한 다음 코드의 결과는?

```
const k = "score";
const obj = {};
obj[k] = 100;
console.log(obj.score);
```

정답) 100

---

#### 20. 다음의 출력결과는?

```
const a = { n: 1 };
const b = { n: 1 };
console.log(a === b);
```

정답) false

---

#### 21. `const arr = [1,2,3]; arr.push(4);` 이후 `arr`는?

정답) [1,2,3,4]

---

#### 22. `pop()`이 반환하는 것은?

정답) 4

---

#### 23. `slice(1,3)`의 의미와 arr에 적용한 결과는?

정답) 위치가 1에서 3 앞까지의 값을 반환 [2,3]

---

#### 24. `splice(1,2)`의 의미와 arr에 적용한 결과는?

정답) 1에서 시작해서 2개 제거 [1,4]

---

#### 25. `map` 결과?

```
[1,2,3].map(x => x * 2)
```

정답) [2,4,6]

---

#### 26. `filter` 결과?

```
[1,2,3,4].filter(x => x % 2 === 0)
```

정답) [2,4]

---

#### 27. `includes` 사용한 결과는?

```
[1,2,3].includes(2)
```

정답) true

---

#### 28. `reduce` 결과는?

```
[1,2,3].reduce((acc, cur) => acc + cur, 0)
```

정답) 6

---

## Loop

#### 29. `for (let i=0; i<3; i++) console.log(i);` 출력?

정답) 0 1 2

---

#### 30. `for...of`는 어떤 것을 순회할때 효과적인가?

정답) 반복가능한 속성을 가지는 컬렉션에 사용하기 적합하다.

---

#### 31. `for...in`은 주로 무엇을 순회할때 효과적인가?

정답) 객체의 키 또는 속성 이름에 사용하기 적합하다.

---

#### 32. 다음 코드의 마지막 `sum의 결과값`은?

```
let i=1, sum=0;
while(i<=3){ sum+=i; i++; }
```

정답) 6

---

#### 33. `for...of` 출력 결과는?

```
for (const ch of "Hi") console.log(ch);
```

정답) H i

---

#### 34. 빈칸에 들어갈 키워드는 무엇인가?

```
const arr = [10, 20, 30];
for (const num ___ arr) {
  console.log(num);
}
```

정답) of

---

#### 35. 아래 colors 배열의 요소값을 순서대로 출력하는 반복문을작성하세요

```
const colors = ["red", "green", "blue"];
```

정답)

```
for (const color of colors) {
  console.log(color);
}

```

---

#### 36. 아래 str의 요소를 순회하여 출력하는 반복문을 작성하세요.

```
const str = "JS";
```

정답)

```
for (const char of str) {
  console.log(char);
}
```

---

#### 37. 배열 scores의 점수에 대한 총점과 평균을 구하여 출력하는 코드를 작성하세요.

```
const scores = [90, 80, 70];
```

정답)

```
for (const score of scores) {
  sum += score;
}

const avg = sum/scores.length;
```

---

#### 38. 배열 nums 의 요소값 출력을 2번째 인덱스의 값까지만 출력하는 코드를 작성하세요

```
const nums = [1, 2, 3];
```

정답)

```
for (let i = 0; i <= 2; i++) {
   console.log(nums[i]);
 }
```

---

#### 39. user 객체의 정보를 출력하는 반복문을 작성하세요.

```
const user = { name: "Yumi", age: 20 };
```

정답)

```
for (const key in user) {
  console.log(key+':' +user[key]);
}
```

---

#### 40. arr 배열의 요소값을 forEach문을 이용하여 출력하세요.

```
const arr = [1, 2, 3];
```

정답)

```
arr.forEach(
    function (value) {
        console.log(value)
    }
)
```

---

#### 41. `Map` 이란?

정답) 키와 값을 한쌍으로 이루어진 컬렉션 이다.

---

#### 42. `Set`이란?

정답) 중복되지 않는 값들의 집합 이다.

---

#### 43. 아래 `Map`의 결과는?

```
const m = new Map();
const k = {};
m.set(k, 123);
console.log(m.get(k));
```

정답) 123

---

#### 44. 아래 `Set`의 결과는?

```
const s = new Set([1,2,2,3]);
s.add(3);
console.log(s.size);
```

정답) 3

---

#### 45. `Map` 크기 확인 프로퍼티는?

정답) size
