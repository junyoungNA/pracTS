//class는 interface 컴파일 타임에만 사용하는 기능이라면
//자바스크립트의 피처로 들어가 있다
//implemets 키워드로 인터페이스를 클래스로 만들어 낼 수 있음
class Person10 {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const human = new Person10('mark');
//생성자 함수를 통해 Person10클래스를 'mark' 인자를 넣어서 human 변수에 할당
//Person10은 IPerson1을 implements 키워드로 만들어졌기 때문에
//human 변수에 타입은 IPerson1 이 될 수 있다.
human.hello();
