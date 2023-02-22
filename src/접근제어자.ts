//접근제어자 Access Modifiers
//생성자, 프로퍼티 메소드에 접근제어자를 붙여서
//외부에서 접근할 수 있는지, 상속 간의 접근 할 수 있는지
//내부에서만 접근할 수 있는지 설정가능하다.

//접근 제어자에는 public,private,protected가 있다.
//설정하지 않으면 public이다.
//클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
//private으로 설정하면 클래스 외부에서 접근 할 수 없다.
//자바스크립트에서 private 지원하지 않아 오랫동안 프로퍼티나 메서드 이름앞에 _를 붙여서 표현했다.

// class Car {
//   //접근제어자는 property, 생성자(constructor), 메소드가 작성 가능
//   public name: string = 'mark';
//   public age: number;

//   public constructor(age?: number) {
//     if (age === undefined) {
//       this.age = 20;
//     } else {
//       this.age = age;
//     }
//   }
//   public async init() {}
// }

// //Car클래스는 현재 모두 public제어자 이기 때문에
// //new생성자로 생성이 가능하다.
// //클래스 안에 있는 메소드에 접근 가능
// const p52: Car = new Car(39);
// const p53: Car = new Car();

class Car {
  //접근제어자는 property, 생성자(constructor), 메소드가 작성 가능
  //private로 작성한 클래스는 외부에서 접근이 불가능하다
  //private작성한 부분은 이름에 _언더바로 시작하는 컨벤션이 있다.
  private _name: string = 'mark';
  private _age: number;

  private constructor(age?: number) {
    if (age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }
  private async init() {}
}

//Car클래스는 private접근 제어자이기 때문에
//new생성자로 생성이 불가능하다.
//싱글톤 패턴등 구현이 가능?
// const p52: Car = new Car(39);
// const p53: Car = new Car();
