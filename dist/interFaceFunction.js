//인자에 age ? 물음표를 추가 하지않으면 에러
// const helloPerson: HelloPerson = function (name: string, age?: number) {
//   console.log(`안녕하세요! ${name}입니다.`);
// };
//age를 인자에 적지 않아도 에러가 발생하지 않음?
const helloPerson = function (name) {
    console.log(`안녕하세요! ${name}입니다.`);
};
//함수가 정의된 곳에서 number를 받지 않는데도 에러가 발생하지않는 이유는
//HelloPerson 인터페이스와의 관계만 중요하게 작용!
helloPerson('mark', 32);
