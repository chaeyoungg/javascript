/* ---------------- */
/* For In Loop      */
/* ---------------- */



 const js = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,

 }
  /*
  // 객체의 속성(property) 포함 여부 확인 방법
 const key = 'valueOf';

  console.log( key in js );

  console.log(Object.prototype.hasOwnProperty.call(js, key); */
  //진짜 객체의 프로토타입의 hasOwnProprty를 빌려쓴다(call -> js에 있는 key값들을 조회할거야 )! 
  
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  
  // for ~ in 문
  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?


  for (let key in js) {
    if(Object.prototype.hasOwnProperty.call(js.key)){
        console.log(key);
    }
  }