let getCss = (node, prop) => {
    if(typeof node ==='string')node = getNode(node);
    
    console.log(getComputedStyle(node)[prop]);
}

let setCss = (node, prop) => {
    if(typeof node ==='string')node = getNode(node);

    node.style.background = prop
}

// getCss('.first', 'backgroundColor');
// setCss('.first', 'green');


function css(node, prop, value) {
    !value ? getCss(node, prop) : setCss(node, prop, value);
}

