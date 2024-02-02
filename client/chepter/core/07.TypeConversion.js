/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(String(YEAR)); //명시적 형 변환
console.log(YEAR + ''); //암시적 형 변환

// undefined, null
let days = null;
let weekend; //undeined 가 나온다.

console.log(days);
console.log(weekend + '');

// boolean
let hello = true;
console.log(String(hello));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));

let cutie2 = false;
console.log(Number(cutie2));

// string
let num = '250';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

console.log(num + 1); // 이것은 문자열로의 형변환이 일어난다.

// numeric string
const width = '105.3px';
console.log(Number(width));
console.log(parseInt(width)); //parse~ 함수를 사용해야 변환이 올바르게 일어남
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(friend));

// 위에 나열한 것 이외의 것들

const value = prompt('값을 입력해주세요');
console.log(Number(value) + 50);
console.log(value * 1 + 50);
