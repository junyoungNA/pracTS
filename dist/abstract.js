"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'Mark';
        //abstract 키워드가 붙으면 구현을 하지 않음
        //abstract 키워드가 들어가면 클래스에도 abstract키워드를 붙여줌
    }
}
//abstract키워드가 들어간 클래스는 new생성자를 사용할 수 없다.
// new AbstractPerson();
class Mans extends AbstractPerson {
    //AbstractPerson 클래스에서 정의되지 않은 setName메소드를 구현해야함!
    setName(name) {
        this._name = name;
    }
}
const i = new Mans();
i.setName('zoo');
