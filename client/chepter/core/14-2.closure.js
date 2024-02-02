function earth(){

    let water = true;
  
    let apple = {
      founder:'Steve Jobs',
      ceo:'Tim Cook',
      product: ['iphone','macbook','macStudio','appleWatch']
    }
  
    return function (value){
      water = value
      // return apple
    }
  }
  
  const UFO = earth()
  
   
  UFO(0)









  //도대체 어디에 쓰이는 건가 ?

const first = document.querySelector('.first');


function handleClick(){
    
    let isClicked = false;

return () => {

    if(!isClicked){
        document.body.style.background = 'seashell';
        }
        else {
        document.body.style.background = 'dodgerblue';
        }
    
        isClicked = !isClicked;
    }
}

first.addEventListener('click',handleClick());


/* 
  const handleClick = (()=>{

    let isClicked = false;
  
    return function(){
  
      if(!isClicked){
        document.body.style.background = 'orange'
      }else{
        document.body.style.background = 'white'
      }
    
      isClicked = !isClicked; 
  
    }
  })()
  
  
  
  first.addEventListener('click',handleClick) */



  function useState(initValue) {
    let value = initValue; 

    function read() {
        return value;
    }

    function write(newValue) {
        value = newValue;
    }

    return[read, write];

  }

//   const read = state(111)[0];
//   const write = state()[1];

const [read, write] = useState(111);