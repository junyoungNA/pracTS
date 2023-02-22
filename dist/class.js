//object를 만드는 blueprint(청사진, 설계도)
//클래스 이전에 object를 만드는 기본적인 방법은 funciton
//javascript에도 class 는 es6 부터 사용 가능
//OOP를 위한 초석
//TypeScript에서는 클래스도 사용자가 만드는 타입의 하나
//class키워드를 이용하여 class 생성
//class이름은 보통 대문자로 만든다
//new를 이용하여 class를 통해 Object를 만들 수 있다.
//constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
//this를 이용해서 만들어진 object를 가리킬 수 있다.
//js로 컴파일되면 es5의 경우 function 변환 된다.
// class Human {
//   name;
//   constructor(name: String) {
//     //name을 property로 사용하겠다 라는 것을 명시해야함
//     this.name = name;
//   }
// }
// const p50 = new Human('mark');
// console.log(p50);
////////////////////////////////
class Human {
    constructor() {
        //class 기준으로 값의 할당을 알 수가 없음?
        //값을 할당,초기화하지 않으면 initalize에러가 발생
        this.name = 'mark';
    }
}
const p50 = new Human();
console.log(p50);
console.log(p50.age);
