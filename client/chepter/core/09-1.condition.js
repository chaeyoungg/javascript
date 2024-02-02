/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

function watchingMovie() {
  let didWatchMovie = confirm('영화 봤니?');

  // 영화 볼거니?

  if (didWatchMovie) {
    console.log('어 나 봤어...');
  } else {
    console.log('아니 아직 안봤어!');
  }

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm('영화 볼거야?');
    if (goingToWatchMovie) {
      let withwhom = prompt('누구랑 볼건데?');
      if (withwhom == '너') console.log('어머...!');
      else console.log('내가 아니네 ㅠㅠ');
      console.log('좋은 생각이야!');
    } else {
      console.log('꼭봐 재미있어');
    }
  }
}

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

let Message =
  didWatchMovie === 'yes'
    ? '재미있었겠다'
    : goingToWatchMovie === 'yes'
      ? '누구랑볼건데?'
      : '아쉽다.';

console.log(Message);
// 멀티 조건부 연산자 식
