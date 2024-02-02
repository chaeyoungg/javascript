function solution(my_string, overwrite_string, s) {
  var answer = '';
  let str;
  let result;

  str = my_string.slice(s, overwrite_string.length + s);
  result = my_string.replace(str, overwrite_string);
  return result;
}

let t;
t = solution("He11oWor1d", "lloWorl", 2);

console.log(t)


