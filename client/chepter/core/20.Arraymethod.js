/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Array.isArray(data);

function isArray2(data) {
    return Array.isArray(data)
}

const people = [
    {
        id: 0,
        name: '박가희',
        age: 25,
        job: '명탐정코난 범인',
        imageSrc: 'FAkq31'
    },

    {
        id: 1,
        name: '김보미',
        age: 64,
        job: '짜요짜요 마케터',
        imageSrc: 'Gakz34',
    },

    {
        id: 2,
        name: '한태희',
        age: 13,
        job: '삐돌이',
        imageSrc: 'Fkzoq81'
    },

    {
        id: 3,
        name: '이원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Tq9z1i'
    }
]




/* 요소 순환 ---------------------------- */

// forEach는 값을 반환하지 않는다. 연산 처리만 한다. 
let nameArray = [];

people.forEach((item, index)=> { //forEach 는 매개변수로 콜백함수를 사용하는 것이다! 
    nameArray.push(item.name) //이름만 따로 넣어 배열을 만들겠다~
})


const list = document.querySelectorAll('span'); //유사배열이지만 forEach를 사용할 수 있다. 
//모든 span들을 꺼내! 

list.forEach(item=> {
    item.addEventListener('click', function(item){// 화살표함수는 this와 바인딩되지 않으니까 일반함수
        console.log(this); //클릭하면 this를 출력한다! (item을 출력)
    })
})

/* 원형 파괴 ----------------------------- */


const arr = [10, 100, 1000, 10_000];
// push
// pop
// unshift
// shift
// reverse
const reverse = [...arr].reverse();


// splice

console.log('여기가 splice');
const splice = arr.splice(1, 2, 'ㅈㅈㅈ'); // 1부터 2까지 뽑고 arr에서는 삭제됨
console.log(arr);
//slice 와 다른 점 : 1번째부터~ 2개까지 뽑아줘 라는 뜻

// sort
arr.sort((a,b)=> {
    return a - b
})

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted  , 원본을 파괴하지 않고 sorting된 배열을 반환
// toReversed , 원본을 파괴하지 않고 변환된 배열을 반환
// toSpliced, 원본을 파괴하지 않고 변환된 배열을 반환
// map 배열을 반환한다. (forEach와 다른 점) 퉤!
/* const job = people.map((item, index)=> {
    return item.job
})

console.log(job); */

//html에 랜더링 시키기~
const card = people.map((item,index)=> {

    return /* html */ `
    <div class="userCard">
    <img src="${item.imageSrc}" alt= "" />
    <span>이름 : ${item.name}</span>
    <span>나이 : ${item.age}</span>
    <span>직업 : ${item.job}</span>
  </div>
    `


})

// card.forEach((item)=> document.body.insertAdjacentHTML('beforeend',item))



const newAge = people.map(item=> item.age + 1);









const 젊은이들 = people.filter((item) => {
    return item.age < 30;
})

console.log(젊은이들)


//
/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const find = people.find((item)=> {
    return item.job ==='삐돌이';
})




// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */
 
const total = people.reduce((acc, item) => {
    acc += item.age;
    return acc;
}, 0)

console.log(total);






// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */


// split : 문자 → 배열

const str = '원명 가희 소정 설아 경민 진욱'

const stringToArray = str.split(' ');
console.log( stringToArray );



// join : 배열 → 문자

const arrayToString = stringToArray.join('/');
console.log( arrayToString );