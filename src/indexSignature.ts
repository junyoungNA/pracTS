//IndexSignaute 란
//property가 동적으로 바뀌는 고려해볼만 기능!

//class는 object를 만드는 청사진

// {mark : 'male', jade:'male'}
//{chloe : 'female', alex:'male', anna:'female'}

class Students {
  // mark: string = 'male';
  //index siganute라 불림
  //index:stirng 부분에서는 property에 식별자 이름이 string값이라면 무엇이든 올 수 있다.
  //그 값으로는 male | female 이 들어가야함
  [index: string]: 'male' | 'female';
  mark: 'male' = 'male';
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
