
let insertBefore = (node, content) => {
    if( typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('beforeBegin', content);
}

let insertFirst = (node, content) => {
    if( typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('AfterBegin', content);
}

let insertLast = (node, content) => {
    if( typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('beforeEnd', content);
}

let insertAfter = (node, content) => {
    if( typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('AfterEnd', content);
}