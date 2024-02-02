/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
    maker: 'fromB',
    brand: 'FD221',
    type: 'neckband',
    photos: {
      static: 'https://bit.ly/3OS50UD',
      animate: 'https://bit.ly/3P8646q'
    },
    getFullName() {
      return `${this.brand}, ${this.maker}`;
    },
  };
  
  // 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
  console.log(portableFan.photos.animate);
  
  // 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
  if ('photos' in portableFan) {
    if ('animate' in portableFan.photos) {
      console.log(portableFan.photos.animate);
    }
  }
  
  
  // 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

  portableFan && portableFan.photos && portableFan.photos.animate

  // 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
  
  portableFan.photos?.animate

  
  // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
  
  const fullName = portableFan.getFullName?.();
  console.log(fullName);
  
  // 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.
  
  
/* 
  console.clear();


const timer=  setTimeout(() => { //setTimer는 랜덤한 값이 리턴된다. 
    console.log(2);
  }, 3000) //3초 뒤에 콜백이 실행된다! 

  console.log(1);
  console.log(3);
  console.log(timer);
 */
  let count = 0;
  const timer = setInterval(()=> {
    console.log('안녕!');
    count++;

    if(count == 100) {
        clearInterval(timer);
    }
  }, 10)





  setTimeout(() => {
    const template = /*HTML */`
    <button type="button" class="click">click</button>`


    document.body.insertAdjacentHTML('beforeend', template)
  }, 3000);

  button?.addEventListener('click, ()=>{}')