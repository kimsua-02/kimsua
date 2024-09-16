// 명시적 타입 변환

// 문자열 타입으로 변환
console.log("===== 문자열 타입으로 변환 =====");

// 1. String 생성사 함수를 new 없이 호출
console.log(String(10));            // 출력 값 : 10
console.log(String(NaN));           // 출력 값 : NaN
console.log(String(Infinity));      // 출력 값 : Infinity
console.log(String(true));          // 출력 값 : true

console.log("-----------------------------------------------------");

// object.prototype.toString 메소드 사용
console.log((10).toString());       // 출력 값 : 10
console.log((NaN).toString());      // 출력 값 : NaN
console.log((Infinity).toString()); // 출력 값 : Infinity