"use strict";
class Bus {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //생성자의 매개변수 부분에 접근 제어자 public를 설정하게 되면
        //this.name, this.age로 자동으로 설정된다.
        //private를 설정한 매개변수는 설정은 되지만
        //외부에서 접근은 불가능하다!
        //밑에와 같이 불필요하게 받아서 바로 할당하는 코드
        // this.name = name;
        // this.age = age;
    }
}
const p55 = new Bus('Mark', 39);
// console.log(p55.age);//private로 설정되었기 때문에 외부접근 불가능
