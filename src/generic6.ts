//generic with extends
//제네릭에서 사용되는 extends는 상속과 조금 거리가 멀다?

class PersonExtends<T extends string | number> {
  //extends 통해 타입을 더 설정 가능
  //string과 number 유니온 타입의 상속을 받음? T는 string과 number만 가능!
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('mark');
new PersonExtends(39);
// new PersonExtends(true); 에러 발생!
