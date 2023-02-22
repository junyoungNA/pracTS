//return에 사용되는 never타입 설정
//never 타입은 모든 타입의 subtype 이며,
//모든 타입에 할당 할 수 있습니다.
//하지만 never에는 그 어떤 것도 할당할 수 없습니다.
//any 조차도 never에 할당 할 수 없습니다!
//잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 합니다!
function error(message) {
    //never를 리턴한다는 것은 
    //아무것도 리턴되지 않는다는 것을 의미!
    //함수의 몸통부분이 끝나지 않아야 한다?
    throw new Error(message);
    //에러를 보내줌으로써 never타입을 사용할 수 있음?
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
        //함수의 몸통부분이 무한루프가 되기때문에
        //함수에 타입에 never타입을 사용 가능!
    }
}
let a = 'hello';
if (typeof a !== 'string') {
    a;
    //이 블록은 a변수가 string타입이
    //아닐때만 들어온다
    //그러므로 a는 naver타입이 된다!?
}
if (typeof b !== 'string') {
    b;
    //이 블록에서는
    //b는 무조건 number타입이 된다!
    //그래서 이부분도 타입가드라고 볼 수 있다!
}
//조건부 타입이라 부른다 구문에서 never를 사용!
//T가 만약에 string타입이면  T를 {[index: string]} 형태로 만들고
//아니라면 T를 never타입으로 설정!
// const b : Indexable<{}> = ''; //Error
//다음과 같이 잘못된 타입을 넣는 실수를 막고자할때
//never를 사용한다!
// 블록 범위 변수 'b'을(를) 다시 선언할 수 없습니다
// string' 형식은 'never' 형식에 할당할 수 없습니다.
