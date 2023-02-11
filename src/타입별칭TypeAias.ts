//타입 별칭 (별명)
//interface랑 유사
//Primitive, union Type, Tuple, Function
//기타 직접 작성해야하는 타입을 다른이름을 지정할 수 있습니다.
//만들어진 타입 refer 로 사용하는 것이지 타입을 만드는것은 아닙니다.

//타입과 인터페이스의 구분?
//어떤 타입이 타입으로써 목적이랑 존재가치가 명확하면
//인터페이스를 사용?
//어떤 대상이나 별명으로써만 사용된다면
//타입 알리아스를 사용!

//Aliasing primitive

type MyStringType = string;
const str = 'world';

let myStr : MyStringType = 'hello';
myStr = str;

//별의미가 없다?

let numOrStr : string | number = 0;
numOrStr = 'zoo';

type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = 'Anna';
//유니온 타입은 A도 가능하고 B도 가능한 타입
//유니온타입을 사용하면 긴 코드가 나오지만
//타입 별칭 설정을 해주고 그 변수에 할당하면
//코드량을 줄일 수 있다.

let man: [string, number] = ['mark', 35];
type manTuple = [string, number];
let woman :manTuple = ['anna', 24];
//튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게된다.

//Aliasing function
type EatType = (food: string) => void;


