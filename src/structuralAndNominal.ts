//타입스크립트이 타입 체계를 이해하기
//타입스크립트는 Structral Type System을 따른다.
//구조가 같으면 같은 타입!

interface Iperson {
    name:string,
    age:number,
    speak(): string;
}
type PersonType = {
    name: string;
    age:number;
    speak(): string;
};

//위에서는 서로 같은 타입의 구조를 명시하고 있다.
//한쪽타입을 한쪽타입에 대입할 수 있다!

let personInterface: Iperson = {} as any;
let personType: PersonType = {} as any;
personInterface = personType;
personType = personInterface;


//nominal type system 
//구조가 같아도 이름이 다르면, 다른타입으로 인식!
//주로 자바언어에서 이 규칙을 따름