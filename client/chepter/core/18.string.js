/* -------------------- */
/* String Type          */
/* -------------------- */

let msg = 'Less is more.';


// length 프로퍼티
let stringTotalLength;


// 특정 인덱스의 글자 추출
let extractCharacter;


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = msg.slice(1, -1); //문자를 잘라내는데, 마이너스값이 된다. 
console.log(slice);

let subString = msg.substring(1, 5); //문자를 잘라내는데, 마이너스값이 안된다. 
console.log(subString);

let subStr;
//레거시한 아이다. 


// 문자열 포함 여부 확인
let indexOf = msg.indexOf('is'); //현재 메세지에 해당 메세지가없으면 '-1'반환, 있으면 인덱스 반환

let lastIndexOf;

let includes = msg.includes('Less'); //문자열이 있는지 확인 후 True of False가 나온다. 
console.log(includes);

let startsWith = msg.startsWith('Less');//해당 문자열로 시작하는지 확인 후 T of F
console.log(startsWith);

let endsWith = msg.endsWith('more.'); //해당 문자열로 끝나는지 확인 후 T or F 
console.log(endsWith);


let str = '       a     b       c       d  '

// 공백 잘라내기
let trimLeft = str.trimLeft();//왼쪽 코드만 제거 (레거시)
console.log(trimLeft);

let trimRight;

let trim = str.trim();
console.log(trim); // 문자의 왼쪽 오른쪽만 제거, 안쪽은 제거 못하므로 정규식을 사용한다. 

let reg = str.replace( /\s*\g, ''); //모든 공백을 찾아서 오른쪽 인자로 대체해라! (모든공백 삭제)
//replaceAll(" ", "") 도 된다. 

// 텍스트 반복
let repeat = msg.repeat(3);

// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;