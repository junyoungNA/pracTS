interface IPerson2 {
  name: string;
  age?: number;
}

//IPerson2 를 상속받는 IKorean
interface IKorean extends IPerson2 {
  city: string;
}

const korea: IKorean = {
  name: '이웅재',
  city: '서울',
};
