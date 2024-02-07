
//함수 만들기
let getAttr = (node, prop) => {
    if ( typeof node ==='string') {
        node = document.querySelector(node); //getNode함수로 바로 사용하면 된다. 
    }
    if ( typeof prop !== 'string') {
        throw new Error('getAtter 함수의 두 번째 인수는 문자 타입이어야 합니다.')
    }
    return node.getAttribute(prop);   
   
}


let setAttr = (node, prop, value) => {

    if( typeof node === 'string'){
        node = getNode(node);
    }
    if( typeof prop !== 'string') {
        throw new Error('setAtter 함수의 두 번째 인수는 문자 타입이어야 합니다. ')
    }
    if( typeof value !== 'string') {
        throw new Error('setAtter 함수의 세 번째 인수는 문자 타입이어야 합니다. ')
    }
    node.setAttribute(prop, value);
    console.log(node.getAttribute(prop));
}

// setAttr('.first', 'class', 'active');


let attr = (node, prop, value) => {

    return !value ? getAttr(node, prop) : setAttr(node, prop, value);

}

// console.log(attr('.first', 'class'));

