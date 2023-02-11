"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//strict 모드는 왜 true로 해야하나
//noImlicitAny
// function noImlicitAnyFunc(arg) {
//     console.log(arg);
// }
//타입스크립트가 추론을 실패한 경우, any가 맞으면 , any라고 지정하라
//아무것도 쓰지않으면 에러를 발생
//이 오류를해결하면, any라고 지정되어 있지 않은 경우는 any가 아닌것
//(타입 추론이 되었으므로)
//noImplicitThis
//명시적이지 않게 any타입을 사용하여, this표현식에 사용하면, 에러를 발생
function noImlicitThisFunc(name, age) {
    //타입스크립트에서는 유이할에 매개변수에 this키웓를 사용가능하다!
    //첫번째 매개변수로 this의 타입을 명시해줄 수 있다
    // 'this'에는 형식 주석이 없으므로 암시적으로 'any' 형식이 포함됩니다.
    //this에 어떤타입이 들어갈지도 정해줘야한다?
    this.name = name;
    this.age = age;
    return this;
}
//첫번째 매개변수 자리에 this를 놓고, this에 대한 타입을 어떤 것이라도
//표현하지 않으면 noImlicitAny 가 오류를 발생
//javascript 에서는 매개변수에 this를 넣으면, 
//이미예약된 키워드라 SyntaxError를 발생!
//call/apply/bind 와 같이 this를 대체하여
//함수 콜을 하는 용도로도 쓰입니다.
//그래서 this를 any로 명시적으로 지정하는것은 합리적입니다.
//구체적인 사용처가 있는 경우 타입을 표현하기도 합니다.
//class에서는 this를 사용하면서, noImplicitThis와 
//관련한 에러가 나지않습니다.
//class에서 constructor를 제외한 멤버 함수의 첫번째
//매개변수도 일반 함수와 마찬가지로 this를 사용 가능!
//stictNullChecks
//stictNullChecks을 적용하지 않으면
//모든 타입은 Null, undefined 값을 가질 수 있다.
//string 으로 타입을 지정해도, null 혹은 undefined 
//값을 할당 가능해진다 이것은 큰 오류!!
//한 가지 예외는 undefined에 void할당 가능!
//strictFunctionTypes
//함수 타입에 대한 bivariant 매개변수 검사를 비활성화한다?
//함수에서 인자로 어떤 다른 함수를 받아갈때 (콜백함수?);
//함수에 타입이 맞는지 검사하는 방식이 공변과 방변
//반환 타입은 공변적(convariant)
//인자 타입은 반공변젹(contravariant)
//그런데 타입스크립트에서 인자 타입은 공변적이면서,
//반공변적인게 문제?!
//이 문제를 해결하는 옵션이 strictFunctionTypes
//옵션을 켜면, 에러가 안나던걸 에러나게함!
//strictPropertyInitialization
//정의되지 않은 클래스의 속성이 생성자에서 초기화
//되었는지 확인합니다.
//이 옵션을 사용하려면 --strictNullChecks를 사용하도록 설정!
class Man {
    //'_name'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다
    //Error
    constructor(name, age) {
        //constructor에서 대입을 해줘야
        //위에서 오류가 나지않음!
        this._name = name;
        this._age = age;
    }
    print() {
        console.log(this._name, this._age);
    }
}
//strictPropertyInitialization
class Woman {
    //name 과 age에 !를 붙여서
    //어디선가 개발자가 할당을 시킬거야
    //지금의 에러를 무시해줘 라는 의미!
    initalize(name, age) {
        return __awaiter(this, void 0, void 0, function* () {
            //async를 통해 생성자 함수를 대신해서 
            //다른 곳에서 할당가능!?
            this._name = name;
            this._age = age;
        });
    }
    print() {
        console.log(this._name, this._age);
    }
}
//strictBindCallApply
//bind/ call/ apply 에 대해 더 엄격한 검사 수행
//function 내장 함수인 bind, call, apply 를 사용할때
//엄격하게 체크하도록 하는 옵션
//bind는 해당 함수 안에서 사용할 this와 인자를 설정해주는 역할을 하고
//call 과 apply는 this와 인자를 설정한 후, 실행까지 합니다
//call 과 apply인자를 설정하는 방식에서 차이점이 있다.
//call은 함수의 인자를 여러 인자의 나열로 넣어서
//사용하고, apply는 모든 인자를 배열하나로 넣어서 사용
//alwaysStrict
//각 소스 파일에 대해 javascript의 strict mode로
//코드를 분석하고 엄격하게 사용을 해제합니다?
//syntex에러가 ts error로 나온다.
