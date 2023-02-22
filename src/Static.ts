class Air {
  //Static키워드는 서로 공유하는 개념?
  public static CITY = 'Seoul';
  public hello() {
    console.log('안녕하세요', Air.CITY);
  }
  public change() {
    Air.CITY = 'LA';
  }
}

const p60 = new Air();
// p60.hello(); // static키워드가 들어간 메소드는 생성자를 통해 만든 변수로는 호출할 수 없다
// Air.hello(); //static키워드로는 원본 클래스로 메소드를 호출해야함
const p61 = new Air();
p60.hello(); //안녕하세요 Seoul
p61.hello(); //안녕하세요 Seoul
p60.change(); //p60에서 city를 바꾸면 p61에서도 값이 바뀜 같은 공간을 사용?
p60.hello(); //안녕하세요 LA
p61.hello(); //안녕하세요 LA
