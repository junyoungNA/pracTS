//ECMAScript 2015의 Symbol입니다.
//new Symbol 로 사용할 수 없습니다.
//Symbol 을 함수로 사용해서 symbol타입을 만들어 낼 수 있습니다.
//타입으로 사용할때는 소문자로 symbol
let miniSym;
console.log(Symbol('foo') === Symbol("foo")); //false
//두개의 심볼함수는 다른 함수고 똑같은 인자를 넣었지만
//두개의 심볼은 다른 심볼임!
//심볼은 프리미티브(원시 타입)의 값을 담아서 사용합니다.
//고유하고 수정불가능한 값으로 만들어 줍니다.
//그래서 주로 접근을 제어하는데 쓰는 경우가 많았습니다.
const sym = Symbol();
//변수 sym의 갑은 고유한 값을 가지게됨!
//sym을 이용해서만 접근할 수 있는 object객체의 property속성 값을 
//만들때 심볼(Symbol)을 주로 사용함
const obj = {
    sym: 'value',
};
console.log(obj['sym']); //obj객체의 'sym'프로퍼티의 'value' 값에 접근 가능
const obj2 = {
    [sym]: 'value',
};
console.log(obj2[sym]); //obj객체의 심볼형태의 symd이라는 형태일때만 'value' 값에 접근 가능
