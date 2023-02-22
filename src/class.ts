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
  //class 기준으로 값의 할당을 알 수가 없음?
  //초기값을 할당하는 방법  property를 활용한 방법
  //값을 할당,초기화하지 않으면 initalize에러가 발생
  name: string = 'mark';
  // age!: number; //strict 모드를 false로 하고 컴파일시 undefined가 발생
  //! 느낌표를 통해서 number로 값이 할당되지 않아도 에러를 발생시키지 않겠다는 표현
  age: number;
  constructor(age?: number) {
    //constructor 안에서 초기값을 할당하는 방법
    //자바스크립트에서는 constructor를 여러개를 만드는 오버로딩이 불가능
    //타입스크립트에서는 오버로딩이 가능
    //constructor async를 붙일수 없음!
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
    // this.age = age;
  }
}

const p50: Human = new Human(39);
const p51: Human = new Human();
//new 생성자에 소괄호 안 인자가 없다면 default생성자라고 부름
//default 생성자는 인자가 없이 그냥 실행되는 constructor 생성자를 의미
// p50.age = 49; //run타임시에 값을 할당해줘도 class입장에서는 값을 모르기때문에 초기화 에러 발생

console.log(p50);
// console.log(p50.age); //strict 모드를 false로 하고 컴파일시 undefined가 발생

//생성자 함수가 없으면, 디폴트 생성자가 불린다.
//프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
//strict모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
//프로퍼티를 선언하는 곳 또는 생성자에 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.
//클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
//생성자에는 async를 설정 할 수 없다.
