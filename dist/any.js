//어떤 타입이나 들어올 수 있는 타입 any
//잘 알고 사용하지않으면 문재를 일으킬 수 있음!
//이걸 최대한 쓰지 않는게 핵심!
//왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
//그래서 컴파일 옵션중에는 any를 써야하는데 쓰지않으면 오류를 뱉도록 하는 옵션이 있음
//noImplicitAny
//any는 계속해서 개체를 통해 전파된다
//모든 편의는 타입 안정성을 잃는 대가로 온다는 것을 기억해야한다!
//타입 안정성은 TypeScript를 사용하는 주요 동기 중 하나이며 필요하지 않은
//경우에는 any를 사용하지 않도록 해야한다.
function returnAny(message) {
    //any는 어떤 타입이든 가능하다 라는 의미!
    //이 함수에 인자 message는 console만 찍고있다
    //그렇기 때문에  어떤 타입이든 상관없이 받아줘도 상관없다.
    //하지만 그게 아니라면!
    //그 타입에 대한 가이드라인 처럼 타입을 적어주는 것이 중요하다!
    console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
const looselyTyped = {};
const d = looselyTyped.a.b.c.d;
//looselyTyped은 any타입으로 적용되어서
//d 는 looselyTyped를 전파받고 있고
//any라는 타입이 계속해서 전파되고있다. 위험!!
function leakingAny(obj) {
    //unknown같은 형식을 쓰는것을 추천!
    const a = obj.num;
    //a는 number라는 타입으로 설정해주었다
    //여기서 이함수 인자에 설정된 any가 전파되는 것을
    //막는다!
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// c.indexOf('0'); //Error
// number' 형식에 'indexOf' 속성이 없습니다.
