/* --------------- */
/* For Of Loop     */
/* --------------- */

//enumatable = 열거 가능한 
//immutable = 변하지 않는
//iterable = 반복가능한

/* 
const arrayLike = {
    0: 'body',
    1: 'head',
    2: 'div',
    length: 3,
}

for(let key of arrayLike) {
    console.log(key);
} */


//이터러블한 요소에만 of가 적용 가능하다! 문자열도 이에 해당
/* const str = '안녕하세요';

for(let key of str){
    console.log(key);
}

 */







const languages = [
    {
      id: 'ecma-262',
      name: 'JavaScript',
      creator: 'Brendan Eich',
      createAt: 1995,
      standardName: 'ECMA-262',
      currentVersion: 2022,
    },
    {
      id: 'java',
      name: 'Java',
      creator: 'James Gosling',
      createAt: 1995,
      standardName: null,
      currentVersion: 18,
    },
    {
      id: 'ecma-334',
      name: 'C#',
      creator: 'Anders Hejlsberg',
      createAt: 2000,
      standardName: 'ECMA-334',
      currentVersion: 8,
    },
  ];
  
  
  // for ~ of 문
  // - 특정 조건에서 건너띄기
  // - 특정 조건에서 중단하기
  
/*   
  for(let value of languages) {
    const name = value.name;
    if(name === 'Java') continue;
    console.table(value);
  } */
  
  
  const randomUser = {
    gender: 'female',
    name: { title: 'Ms', first: 'Carol', last: 'May' },
    location: {
      street: { number: 9162, name: 'Church Road' },
      city: 'Birmingham',
      state: 'Cumbria',
      country: 'United Kingdom',
      postcode: 'FO5E 4TN',
      coordinates: { latitude: '-4.3301', longitude: '155.0223' },
      timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
    },
    email: 'carol.may@example.com',
    login: {
      uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
      username: 'redduck745',
      password: 'picks',
      salt: '8xzqOzAn',
      md5: '7250e4042c2367cc82487f798c7c5253',
      sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
      sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
    },
    dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
    registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
    phone: '022 1280 9236',
    cell: '07653 428700',
    id: { name: 'NINO', value: 'SH 44 98 72 L' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'GB',
  };
  
  // 객체의 키, 값 순환
  // - for ~ in 문







  // - for ~ of 문

  for(let keyvalue of Object.entries(randomUser)) {
    const key = keyvalue[0];
    const value = keyvalue[1];

    console.log('L1 : ', value);

    

    console.log(key, value);
    if(typeof value ==='object') {
        for(let keyValue of Object.entries(value)){
            const key = keyvalue[0];
            const value = keyvalue[1];

            console.log('L2 : ', value);
        
        }
    }
  }

  // - 성능 비교 진단