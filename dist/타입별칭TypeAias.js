//타입 별칭 (별명)
//interface랑 유사
//Primitive, union Type, Tuple, Function
//기타 직접 작성해야하는 타입을 다른이름을 지정할 수 있습니다.
//만들어진 타입 refer 로 사용하는 것이지 타입을 만드는것은 아닙니다.
const str = 'world';
let myStr = 'hello';
myStr = str;
//별의미가 없다?
let numOrStr = 0;
numOrStr = 'zoo';
let another = 0;
another = 'Anna';
//유니온 타입은 A도 가능하고 B도 가능한 타입
//유니온타입을 사용하면 긴 코드가 나오지만
//타입 별칭 설정을 해주고 그 변수에 할당하면
//코드량을 줄일 수 있다.
let man = ['mark', 35];
let woman = ['anna', 24];
