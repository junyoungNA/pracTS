//TypeScript에서 , undefined 와 null은 실제와 각각
//undefined와 및 null 타입을 가집니다.
//void와 같이 그 자체로는 유용하지 않습니다.
//둘다 소문자만 존재합니다.
//이 변수에 할당할 수 있는 값들은 거의 없다.
let u = undefined;
let n = null;
//null타입은 null이라는 값만 가질 수 있습니다.
//런타임에서 typeof 연산자로 이용해서 null의 타입을 찍으면
//object입니다!
//런타임에서 typeof 연산자를 이용해서 undefined를 찍으면
//undefined입니다!
//undefined 와 null은 다른 모든 타입의
//서브 타입으로 subtype 으로 존재합니다.
//number타입에 값에 null 또는 undefined를 할당할 수 있다는 의미
//이렇게 사용하게되면 문제가 될 수 있다!!;
//그래서 컴파일 옵션에서 '--strictNullChecks'를 사용하면
//null 과 undefined는 void나 자기 자신들에게만 할당할 수 있습니다.
//이경우 null 과 undefined를 할당할 수 있게 하려면
//union type을 사용해야 합니다.
//현재 '--strictNullChecks' 옵션이 체크되어 있습니다.
// let str:string = null;
// 'null' 형식은 'string' 형식에 할당할 수 없습니다.
// let age :number = undefined; //
// 'undefined' 형식은 'number' 형식에 할당할 수 없습니다.
// let non:undefined = null;
// 'null' 형식은 'undefined' 형식에 할당할 수 없습니다.
let v = undefined; //void형태는 가능!
// let v2 : void = null; //null은 불가능!
// 'null' 형식은 'void' 형식에 할당할 수 없습니다.
let union = null;
//위와 같이 union타입을 이용해야한다. union타입은 조건식??
//나중에 배울 타입가드와 연관되어 있다
