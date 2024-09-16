// 불리언 타입으로 변환
console.log("===== 논리 타입으로 변환 =====");

// 1. boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean("javascript"));             // 출력 값 : true
console.log(Boolean(''));                       // 출력 값 : false
console.log(Boolean(1));                        // 출력 값 : true
console.log(Boolean(0));                        // 출력 값 : false
console.log(Boolean(NaN));                      // 출력 값 : false
console.log(Boolean(null));                     // 출력 값 : fasle

console.log("-----------------------------------------------------");

console.log(Boolean({}));                       // 출력 값 : true
console.log(Boolean([]));                       // 출력 값 : true

console.log("-----------------------------------------------------");

// 2. 부정 연산자를 두 번 사용하는 방법
console.log(!!'javascript');                    // 출력 값 : true
console.log(!!'');                              // 출력 값 : false
console.log(!!1);                               // 출력 값 : true
console.log(!!0);                               // 출력 값 : false
console.log(!!NaN);                             // 출력 값 : false
console.log(!!Infinity);                        // 출력 값 : true
console.log(!!null);                            // 출력 값 : false
console.log(!!{});                              // 출력 값 : true
console.log(!![]);                              // 출력 값 : true