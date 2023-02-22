"use strict";
//IndexSignaute 란
//property가 동적으로 바뀌는 고려해볼만 기능!
//class는 object를 만드는 청사진
// {mark : 'male', jade:'male'}
//{chloe : 'female', alex:'male', anna:'female'}
class Students {
    constructor() {
        this.mark = 'male';
    }
}
const f = new Students();
f.mark = 'male';
f.jade = 'male';
console.log(f);
const g = new Students();
g.chloe = 'female';
g.alex = 'male';
g.anna = 'female';
console.log(g);
