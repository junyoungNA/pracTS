"use strict";
class Parent {
    //접근제어자 Protected
    //외부에서 접근할 수 없지만 상속 관계에서는 접근 가능
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고 , 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const y = new Parent('mark', 39);
// y._age // protected , private 이런식으로 접근 불가능
y.print(); //print 메소드는 public이기 때문에 사용 가능
// 이름은 mark 이고 , 나이는 39 입니다.
class Child extends Parent {
    constructor(age) {
        //child만의 생성자를 오버라이딩 가능
        super('mark retry', age);
        //오버라이딩 상속받은 후 변경해서 사용
        // protected _name = 'mark retry';
        // public _name = 'mark retry'; // 접근제어자도 바꿔서 사용가능
        //Child 는 Parent의 생성자를 그대로 가져옴
        this.gender = 'male';
        //자식의 생성자 안에서 this 로 무언가 호출할려고 할때에는
        //무조건 super를 먼저 호출해야함
        this.printName();
        //상속받은 child는 Parent의 생성자를 호출해야함 super키워드를 통해!
    }
}
const e = new Child(5);
e.print(); //상속 받아서 사용가능
e.gender; //상속 받은 후에 Child 따로 생성했으므로 사용가능
