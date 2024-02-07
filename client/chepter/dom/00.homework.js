//querySelector
const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');



//eventListener
function handleCheckId(){
    console.log(this.value);

    if(this.value === 'hello'){
        console.log('success');
        idField.classList.remove('is-active');
    }
    else {
        console.log('error!');
        idField.classList.add('is-active');
    }
}


idField.addEventListener('input', handleCheckId);
// 해당 인풋에 값이 입력될 때~마~다 함수를 호출한다. 
//idField는 해당 태그, idField.value 는 값을 가져온다. 



//classList

function handleSubmit(e){
    e.preventDefault(); //태그의 기본 동작을 다 차단시킨다. 
    console.log('제출!');
}


submit.addEventListener('click', handleSubmit);