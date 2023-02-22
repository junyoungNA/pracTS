//자바스크립트에서의 array는 객체입니다.
const arr = [1, 2, 3];
//arr변수에 들어갈 요소들은 숫자이며 number 배열타입이다 [] 를 붙여줌!
const list = [1, 2, 3];
//이런식으로도 사용가능하지만 사용을 권장하지 않는다!
// const numArr:number[] = [1,2,3 ,'']; 
//number만 들어갈 배열 변수에 string값을 넣으면 오류가 발생
//이럴땐 union타입을 사용할 수 있다
const numStrArr = [1, 2, 3, ''];
//number 또는 string값을 넣을 수 있는 배열 numStrArr변수
