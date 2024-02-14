// [phase-1]
// 1. 주사위 굴리기 버튼을 누르면 diceAnimation() 실행될 수 있도록
// 2. 같은 버튼 toggle 만들기 (isClicked)
// 3. setInterval 재생 / 정지
// 4. 바깥 변수 보호하기 (closure)
// 5. button 활성화 여부 

// [phase-2]
// 1. recordButton 이벤트 바인딩
// 2. recordListWrapper show / hidden
// 3. renderRecordItem 함수 만들기
//    - 주사위 눈 가져오기
//    - 템플릿 랜더링하기
//    - 값 계산하기


// 미니 과제 => 만들어주는 함수, 초기화 버튼 클릭시 모든 데이터 날리기 



import {diceAnimation, getNode, getNodes} from './lib/index.js'

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button'); //queryselectorAll로, 유사배열에 구조분해할당 받기 
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');


function handleRollingDice(){

    let isClicked = false;
    let stopAnimation;
    
        return () => { //클로저 사용
            if(!isClicked){
                stopAnimation = setInterval(diceAnimation, 300);
                console.log('시작');
                recordButton.disabled = true; //버튼 활성화 여부 
                resetButton.disabled = true;
            }
    
            else {
                clearInterval(stopAnimation);
                console.log('종료')
                recordButton.disabled = false;
                resetButton.disabled = false;
            }
        isClicked = !isClicked;
        }
}



let count = 0;
let total = 0;


function renderRecordItem() {
    const cube = getNode('#cube');
    const diceValue = +cube.dataset.dice;

    let template = `
    <tr>
        <td> ${++count} </td>
        <td> ${diceValue} </td>
        <td> ${total += diceValue} </td>
    </tr>`


  //랜더링
  tbody.insertAdjacentHTML('beforeend',template);

}

function handleRecord() {
    recordListWrapper.hidden = false;
    renderRecordItem();
}




function handleReset() {
    // child.remove();
    // const child = document.querySelectorAll('.recordList tbody tr');
    tbody.innerHTML = '';

    count = 0;
    total = 0;
}

rollingButton.addEventListener('click', handleRollingDice());
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);