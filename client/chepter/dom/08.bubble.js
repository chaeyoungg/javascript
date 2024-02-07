/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');



section.addEventListener('click',function(e){
console.log(this === e.currentTarget);

    // console.log('%c section','color:orange'); //콘솔 글자 색을 다른 색으루! 
})
/* 

article.addEventListener('click',()=>{
    console.log('%c article','color:dodgerblue');
})


p.addEventListener('click',()=>{
    console.log('%c p','color:hotpink');
}) */


/* 캡처링 ----------------------------------------------------------------- */