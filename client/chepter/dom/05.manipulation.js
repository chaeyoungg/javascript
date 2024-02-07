/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

const div = document.createElement('div'); //div 태그를 만들고
div.className = 'tiger';// tiger 클래스를 만들고
div.textContent = '멋쟁이 사자처럼'; //값을 넢는다. 

document.body.insertAdjacentHTML('beforeend', '<div class= "tiger"> 멋쟁이 사자처럼 </div>'); //html에 삽입한다. 
console.log(div);

















/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입



/* const h1 = getNode('h1');

//h1 태그 바깥으로
h1.insertAdjacentHTML('beforeBegin','<li calss= "List">beforeBegin영화보기</li>');

//h1 태그 안쪽으로
h1.insertAdjacentHTML('afterBegin','<li calss= "List">afterBegin영화보기</li>');

//h1 태그 안쪽 아래로
h1.insertAdjacentHTML('beforeEnd','<li calss= "List">beforeEnd영화보기</li>');

//h1 태그 안쪽으로
h1.insertAdjacentHTML('afterEnd','<li calss= "List">afterEnd영화보기</li>');
 */





// insertLast('h1', '<li calss= "List">영화보기</li>' )

// insertBefore()
//insertLast