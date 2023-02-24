class Test<T, K> {
  //class에서 제네릭 타입을 지정
  private _name: T;
  private _age: K;
  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Test('mark', 32);
// new Test<string>(39);
//제네릭을 설정하지않으면 자동으로 인자의 값의 타입으로 추론되고
//설정하게되면 인자를 체크하게됩니다
new Test<string, number>('test', 22);
//제네릭설정을 하게 되면 컴파일 타임에 미리 에러를 체크가능하다
