/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
const first = document.querySelector('.first');
const span = document.querySelector('span');
const second = span.querySelector('.first') //h2 (context) 안에 있는 first를 찾겠다 (제한)
const spanList = document.querySelectorAll('span');

/* global getNode, getNodes */
const node = getNode('.first');
console.log(node);









// getElementById
// getElementsByTagName
// getElementsByClassName
// querySelector
// querySelectorAll
// closest









/* 문서 대상 확인 */
// - matches
first.catches('span');

// - contains
console.log(getNode('h1').contains(getNode('.second')) );
