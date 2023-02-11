//sub1 타입은 sup1 타입의 서브 타입이다.
let sub1:1 = 1; //sub에는 1값만 넣을 수 있다.
let sup1: number = sub1;
// sub1 = sup1; //error! 'number' 형식은 '1' 형식에 할당할 수 없습니다.

//sub2타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
// sub2의 배열 타입은 객체타입도 가능하다
// sup2는 object객체 타입으로 sup2에 sub2를 할당가능하다!
// sub2 = sup2; //error!
//sub2의 배열형태는 sup2의 객체에서 사용되는 범위보다 작기때문에
// {}' 형식에 'number[]' 형식의 length, pop, push, concat 외 26개 속성이 없습니다

//sub3 타입은 sup3타입의 서브 타입이다.
let sub3: [number, number] = [1, 2]; //tuple타입
let sup3: number[] = sub3; 
//sup3
// sub3 = sup3;
//sup3의 범위가 더 크기때문에 sub3에 sup3 할당 불가능!
// number[]' 형식은 '[number, number]' 형식에 할당할 수 없습니다.
//   대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.

//sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

//sub 5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5; //Error
// number' 형식은 'never' 형식에 할당할 수 없습니다.

class Animal {}
class Dog extends Animal {
    eat() {}
}

//sub6타입은 sup6타입의 서브 타입이다.
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
// sub6 = sup6;//Error
//sub6에는 sup6을 할당할 수 없다
//Dog에는 eat이라는 메소드가 있지만
//Animal에는 없기때문
// 'eat' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.

//1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
//원시 타입 primitive type
let sub7: string = '';
let sup7: string| number = sub7;

//object- 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: {a: string; b: number} = {a:'', b: 1}
let sup8: {a: string|number ,b: number} = sub8;

//array = object 와 마찬가지
let sub9 : Array < {a : string; b: number} > = [{a:'', b: 1}];
let sup9 : Array < {a : string| number; b: number} > = sub9;

//2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => 반병
class Person{}
class Developer extends Person {
    coding() {}
}
class StartDeveloper extends Developer {
    burning(){};
}

function tellme(f: (d: Developer) => Developer){};

//Developer => Developer 에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
    return new Developer();
});

//Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d: Person): Developer {
    //person이 super타입인 경우!
    return new Developer();
});

//Developer => Developer 에다가 StartDeveloper => Developer 를 할당하는 경우
// tellme(function sToD(d: StartDeveloper): Developer {
//     //tellme 함수는 인자로 Developer형태의 인자를 받고
//     //return 값도 Developer 형태로 리턴한다
//     //그렇기때문에 StartDeveloper의 burning() 메소드는 알 수 없다
//     //strictFunctionTypes 옵션이 체크되었다면 에러가 발생한다!
//     //함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌경우,
//     //에러를 통해경고한다.
//     return new Developer();
// });