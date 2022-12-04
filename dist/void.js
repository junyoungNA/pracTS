"use strict";
//어떤 타입도 가지지않는 빈 상태 void
//값은 없고 타입만 있음
//void라는 값을 쓸 수없음
//값을 반환하지 않는 return undefined 상태?
//주로 사용되지는 않으며
//다른 언어에서도 주로 사용하고 있기 때문에 추가되었다?
function returnVoid(message) {
    //이 함수의 return값은 없다는 것을 명시적으로 보여줌!
    // returnVoid(message: string): void
    console.log(message);
    //return 값이 없으므로 undefined
    return undefined;
}
const r = returnVoid('리턴이없다');
// const r: void r의 타입은 void
