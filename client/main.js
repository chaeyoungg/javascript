/* global gsap */


import { 
  tiger, 
  delayP,
  insertLast, 
  changeColor,
  getNode as $,
  renderSpinner,
  clearContents, 
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';




const END_POINT = 'http://localhost:3000/users'

const userCardInner = $('.user-card-inner');


// [phase-1]
// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
//    - tiger.get()

// 2. 함수 안에 넣기 ( renderUserList )
// 3. html,css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
//    - [✅] 유저 데이터(array) 순환하여 모든 아이템 뽑아내기 (forEach) 
//    - [✅] 템플릿 변수 만들기 (article) 
//    - [✅] template literal을 사용하여 데이터 집어넣기(보간 : interpolation) 
//    - [✅] insertLast(어디에,무엇을)함수를 사용하여 화면에 렌더링하기 
// 5. 함수 분리 

async function renderUserList(){


  renderSpinner(userCardInner);

  try{

    await delayP();

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()
      }
    })
    
    const response = await tiger.get(END_POINT);

    const userData = response.data;
  
    userData.forEach(user => renderUserCard(userCardInner,user))
  
    changeColor('.user-card');
  
    gsap.from('.user-card',{
      x: 100,
      opacity:0,
      stagger: 0.1,
    })

  }
  catch{
    renderEmptyCard(userCardInner)
  }
}




renderUserList()


// [phase-2]
// 1. delete 통신 이후
// 2. 기존 유저의 목록 제거
// 3. 유저 목록 fetch 이후 다시 렌더링

function handleDelete(e){

  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if(!button) return;

  const id = article.dataset.index.slice(5)

  tiger.delete(`${END_POINT}/${id}`)
  .then(()=>{

    clearContents(userCardInner);
    renderUserList();
    
  })
}


/* -------------------------------------------------------------------------- */
/*                                   post통신                                   */
/* -------------------------------------------------------------------------- */


userCardInner.addEventListener('click',handleDelete)



const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

const handleCreate = () => {
  gsap.to('.pop', {autoAlpha: 1}) // 팝업을 열겠다! 
  
}
const handleCancel = (e) => {
  e.stopPropagation();
  gsap.to('.pop', {autoAlpha:0});
}

const handleDone = (e) => {
  const name = $('#nameField').value
  const email = $('#emailField').value
  const website = $('#siteField').value

  const users = { //users의 값들이 들어가있는 객체! 
    name,
    email,
    website
  };

  tiger.post(END_POINT,users)
  .then(()=>{
    clearContents(userCardInner);
    renderUserList();
  })



  //post통신 
  //-name, email, website 담고있는 객체를 생성
  //post통신의 body에 객체 전달
  //유저 목록 지우기
  //유저 목록 랜더링하기

  //5. 팝업창 닫기 
  gsap.to('.pop', {autoAlpha: 0}) // 팝업을 닫겠다!
  
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);