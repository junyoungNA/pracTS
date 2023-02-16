interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'mark',
  gender: 'male',
};

// p81.gender = 'female'; //readonly 속성으로 값을 바꿀 수 없음!;
