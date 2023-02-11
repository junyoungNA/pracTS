interface Person1 {
    name:string;
    age:number;
}

//여기서 만든 인터페이스는 Js파일에서는 확인할 수 없다!
//이 인터페이스 문법은 컴파일타임에만 필요하게 되고
//컴파일 타임에 이 인터페이스를 이용해서
//문제가 없는지 관계를 규명하는 역할!

function hello1(person:Person1): void {
    console.log(`안녕하세요! ${person.name}입니다.`);
}

const p1 : Person1 = {
    name: 'mark',
    age: 39,

}

hello1(p1);