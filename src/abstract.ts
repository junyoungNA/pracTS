abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
  //abstract 키워드가 붙으면 구현을 하지 않음
  //abstract 키워드가 들어가면 클래스에도 abstract키워드를 붙여줌
}
