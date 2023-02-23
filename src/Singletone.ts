//싱글톤 패턴
//어플리케이션이 실행되는 중간에 클래스로부터 단하나의
//오브젝트만 생성해서 사용하는 것

class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance() {
    // ClassName 으로부터 만든 object 가 있으면 그걸 리턴
    //ClassName 으로부터 만든 object 가 없으면 만든다
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
  //private로 설정하면 new로 생성자를 사용할 수 없음
}

const h = ClassName.getInstance();
const m = ClassName.getInstance();

console.log(h === m); //같은지 비교 true
