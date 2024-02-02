/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* let i = 0;

do {
    console.log(i);
    i++;
} while(i < 5); */



// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
/* let input = prompt('순환 횟수를 입력하세요.');

do {
    console.log(input);
    input--;
}while(input>0)
 */


// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


/* 
let first = document.querySelector('.first'); //span의 클래스 태그
console.log(first);

do {
    first = first.nextSibling;

} while(first.nodeType !== document.ELEMENT_NODE) */

// console.log(first);

/* let first = document.querySelector('.first'); //span의 클래스 태그
console.log(first);

function next(node) {
    do {
        node = node.nextSibling;
    }while(node.nodeType !== 1) // 1 == ElementNode

    return node;
}

const second = next(first);
console.log(second); */


/* let second = document.querySelector('.second'); //span의 클래스 태그

function prev(node) {
    do {
        node = node.previousSibling;
    }while(node.nodeType !== 1) // 1 == ElementNode

    return node;
}


const first = prev(second);
console.log(first);

*/

for(let j = 0; j <= 10; j++) {
    if(j % 2 !==0) continue;
    console.log(j);
} 


/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기



const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.







//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)