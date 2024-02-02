/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
  console.log(resultX);
  console.log(resultY);
  console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  let calculateTotal = function(a,b,c,d,e,f,g) {
    let result = 0;
    //함수안에서만 접근 가능한 인수들의 집합 객체 = arguments
/*     console.log(arguments);
    
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    } */

/* 
    for(let i of arguments) {
        result += i;
    }
    console.log(result);
    return result;
  } */

  //빌려쓰기
/*   Array.prototype.forEach.call(arguments, function(item){
    console.log(item);

    total += item;
  }) */

  let total = 0;

//arguments의 부모를 배열로 바꿔치기 한다면? 
/*     arguments.__proto__ = Array.prototype;

    arguments.forEach(function(item, index){ //forEach 는 콜백 함수
        total+=item;
        return total;
    })
    return total; */

    const arr = [...arguments];

    arr.reduce(function(acc, cur){
        return acc + cur;
    }, 0) // ,0은 초기값이다. 
  };

  
  // 익명(이름이 없는) 함수 (표현)식
  let anonymousFunctionExpression = function();
  
  
  // 유명(이름을 가진) 함수 (표현)식
  let namedFunctionExpression = function hello(){};

  
  
  // 콜백 함수 (표현)식 -> 함수의 인자로 함수를 넣어 나중에 실행되도록 한다.
  let callbackFunctionExpression;

  let cb = function(state, success, fail) {
    console.log(success);
  };
  cb(true, function(){return '성공'}, function(){});
  



  function movePage(url,success,fail){

    if(url){
      success()
    }else{
      fail()
    }
    
  }
  
  
  movePage(
    'https://www.naver.com',
    function (){
      console.log('3초 뒤 해당 url로 넘어갑니다.');
    },
    function (){
      console.error('잘못된 url 정보를 입력하셨습니다.');
    }
  )
  
  // 함수 선언문 vs. 함수 (표현)식
  
  
  // 즉시 실행 함수 (표현)식
  // Immediately Invoked Function Expression
//   let IIFE;

//IIFE; 이피패턴
const MASTER = (function(){
    let uuid = 'asdasdasfas';

    return {
        geKey(){
            return uuid;
        }
        setKey() {
            uuid = value;
        }
    }
})(); //여기서 바로 실행시키는 것!

