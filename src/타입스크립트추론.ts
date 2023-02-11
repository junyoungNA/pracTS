//타입을 명시적으로 지정하지 않은 경우
//타입스크립트는 any로 추론됩니다!
//함수의 리턴 타입은 number 로 추론됩니다.

//strictNullChecks 옵션을 켜면
//모든 타입에 자동으로 포함되어 있는 
//'null'과 undefined'를 제거해줍니다.

//noimplicitReturns 옵션을 켜면
//함수 내에서 모든 코드가 값을 리턴하지 않으면
//컴파일 에러를 발생시킨다.

// function f3(a) {
//     //타입이 명시적으로 설정되어 있지 않음
//     // noimpolicitAny의해 오류!
//     // 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다
//     // 올바른 함수 사용법을 사용자에게 전달하지 못할 가능성이 높다!
//     return a * 38;
// }

// noimpolicitAny옵션을 켜면
// 타입을 명시적으로 지정하지 않은 경우,
// 타입스크립트가 추론중 'any' 라고 판단하게 되면
// 컴파일 레러를 발생시켜
//명시적으로 지정하도록  유도한다.

//매개변수의 타입은 명시적으로 지정
//명시적으로 지정하지 않은 함수의 티런 타입은 number로 추청
function f4(a:number) {
    // 이 함수의 리턴타입은 지정되지 않았다!
    // function f4(a: number): number | undefined
    // a가 0 보다 커서 number형태로 타입을 설정하더라도
    // a는 number 혹은 undefined가 된다!
    // a는 런타임상에서 어떤 값이 들어올지 
    // 컴파일 타임은 판단할 수 없다!
    // 그래서 a는 Number 혹은 undefined로 리턴되는게 맞다!
    if(a > 0) {
        return a * 38;
    }
}
//사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행
//해당 함수의 리턴 타입은 number 이기 때문에 
//타입에 따르면 이어진 연산을 바로 할 수 있습니다.
//하지만 실제 undefined + 5가 실행되어 NaN이 출력
console.log(f4(5))
// console.log(f4(-5) + 5); //NaN Error출력
//타입스크립트에서는 undefined도 number로 처리할 수 있다?
// 개체가 'undefined'인 것 같습니다

// function f4(a:number):number {
//     //함수의 리턴 값이 number라고 타입 설정
//     //이 함수는 에러가 발생
//     //if부분만 return되기 때문에
//     //if가 아닌부분의 대한 설정은 안되어있기때문에
//     //에러가 발생!
//     if(a > 0) {
//         return a * 38;
//     }
// }

//매개변수가 object객체 타입인 경우
function f5(a: {name: string, age: number}) : string {
    return `이름은 ${a.name} 이고 연령대는 ${Math.floor(a.age / 10) * 10} 
    대 입니다.`;
}

console.log(f5({name:'zo', age:35}));
// 이름은 zo 이고 연령대는 30 대 입니다.
// console.log(f5('mark')); //Error
// 'string' 형식의 인수는 '{ name: string; age: number; }'
//  형식의 매개 변수에 할당될 수 없습니다

//나만의 타입 만들기
//interface키워드를 이용
// interface PersonInterface {
//     name: string,
//     age: number;
// }

// type키워드를 이용
type PersonInterface = {
    name: string;
    age: number;
}

function f6(a: PersonInterface) : string {
    return `이름은 ${a.name} 이고 연령대는 ${Math.floor(a.age / 10) * 10} 
    대 입니다.`;
}

console.log(f6({name:'zo', age:35}));
// 이름은 zo 이고 연령대는 30 대 입니다.
// console.log(f6('mark')); //Error
// 'string' 형식의 인수는 'PersonInterface'
//  형식의 매개 변수에 할당될 수 없습니다.