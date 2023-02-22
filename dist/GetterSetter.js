"use strict";
//Getters,Setters
class Motor {
    //readonly가 들어있는 propertys는 생성자와 이 부분에서만 값을 세팅할 수 있음
    //get 부분의 get함수 이름과 생성자의 매개변수 부분이 이름이 충돌이 나므로 _언더바를 추가
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.myname = 'qwe';
        //readonly가 들어가있는 property는 밖에서 수정시도시에 에러를 발생시킴
        this.country = 'korea';
        this.country = 'korea';
    }
    // hello() {
    //   //클래스 안 메소드에서 readonly프로퍼티를 수정시에 에러를 발생시킴
    //   this.country = 'china';
    // }
    get name() {
        //getter함수
        //getter의 경우 return 이 있어야함
        //데이터를 보내주기 위해
        console.log('get');
        return this._name;
    }
    set name(n) {
        //setter함수
        //return이 없음
        //인자를 받아야함 받은 인자로 값을 변경해주기 위해
        console.log('set');
        this._name = n;
    }
}
const p56 = new Motor('Mark', 39);
console.log(p56.name); //p56으로부터 어떤 값을 꺼내오는 것 Getter라고 부름
p56.name = 'super'; //set을 하는 함수를 Setter라고 부름
console.log(p56.name); //setter함수로 name이 super로 바뀜
