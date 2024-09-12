
// 숫자 타입으로 변환

console.log("=== 숫자 타입으로 변환 ===");

// 산술 연산자
console.log(10 - '5');          // 출력 값 : 5
console.log(10 * '5');          // 출력 값 : 50
console.log(10 / '5');          // 출력 값 : 2
console.log(10 % "java");       // 출력 값 : NaN
// 5 => 10 - 5 이므로 5가 출력됨.
// 50 => 10 * 5 이므로 50이 출력됨.
// 2 => 5 * 2 가 10 이므로 2가 출력됨.
// NaN => 따옴표에 정수를 넣어 문자열로 만들수는 있지만 따옴표에 숫자가 아닌 정말 문자가 들어가면 숫자 타입으로도 변환할 수가 없기 때문에 아무것도 출력될 수가 없음.
// 그래서 NaN 가 출력됨.


console.log("----------------------------------------")


// 비교 연산자
console.log(10 > '5');          // 출력 값 : true

console.log("----------------------------------------")

// 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');               // 출력 값 : 0 
console.log(+'1');              // 출력 값 : 1
console.log(+"javascript");     // 출력 값 : NaN
console.log(+true);             // 출력 값 : 1
console.log(+false);            // 출력 값 : 0
console.log(+null);             // 출력 값 : 0
console.log(+undefined);        // 출력 값 : NaN
console.log(+[]);               // 출력 값 : 0
