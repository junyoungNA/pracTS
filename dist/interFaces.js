"use strict";
//여기서 만든 인터페이스는 Js파일에서는 확인할 수 없다!
//이 인터페이스 문법은 컴파일타임에만 필요하게 되고
//컴파일 타임에 이 인터페이스를 이용해서
//문제가 없는지 관계를 규명하는 역할!
function hello1(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
function hello2(person) {
    console.log(`안녕하세요! ${person.name}`);
}
function hello3(person) {
    console.log(`안녕하세요! ${person.name}`);
}
const p1 = {
    name: 'mark',
    age: 39,
};
const p3 = {
    name: 'zo',
    age: 32,
};
const p4 = {
    name: 'no',
    systers: ['sung', 'chan'],
};
const p5 = {
    name: 'qo',
    father: p3,
    person: p4,
};
const p41 = {
    name: 'mark',
    age: 39,
    hello() {
        console.log(`안녕하세요 ${this.name}`);
    },
    // hello: function (): void {
    //   console.log(`안녕하세요 ${this.name}`);
    // },
};
// const p42: Person4 = {
//   name: 'mark',
//   age: 39,
//   hello(): void => {
//     console.log(`안녕하세요 ${this.name}`);
//     //화살표 함수에서는 this 사용 불가능 함수가 정의된 블록에서의 this.name을 찾기 때문
//   }
// };
hello1(p1);
hello2({ name: 'Anaa', age: 39 });
hello2({ name: 'Mark' }); //age가 없어도 호출가능
p41.hello();
// p42.hello();
