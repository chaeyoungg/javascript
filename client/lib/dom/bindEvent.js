function bindEvent(node,type,handler){

    if(typeof node === 'string') node = getNode(node);
    node.addEventListener(type,handler);

    return () => node.removeEventListener(type, handler);
    //값을 리턴할 때 삭제하는 함수를 내보내고 있다. 

}