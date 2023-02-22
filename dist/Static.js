"use strict";
class Air {
    hello() {
        console.log('안녕하세요', Air.CITY);
    }
    change() {
        Air.CITY = 'LA';
    }
}
//Static키워드는 서로 공유하는 개념?
Air.CITY = 'Seoul';
const p60 = new Air();
// p60.hello(); // static키워드가 들어간 메소드는 생성자를 통해 만든 변수로는 호출할 수 없다
// Air.hello(); //static키워드로는 원본 클래스로 메소드를 호출해야함
const p61 = new Air();
p60.hello();
p61.hello();
p60.change(); //p60에서 city를 바꾸면 p61에서도 값이 바뀜 같은 공간을 사용?
p60.hello();
p61.hello();
