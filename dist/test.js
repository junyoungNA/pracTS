// 'use strict';
const heelo = () => {};

function param(a, b) {
  //a와 b는 매개변수
  //함수 내부에 있는 인자로써 함수가 호출하면서 준 인자의 값이
  //순서대로 a,b 변수에 담기게 된다.
  console.log(a, b); // 5, 10
}

// param(5, 10); //함수를 호출 시 값을 전달할 때 사용하는 값, 전달 인자
//인수라고 부르며 호출할 때 마다 수시로 변하는 값

function exam(fn) {
  fn();
}

function exam2() {
  console.log(this);
}

// exam2();

// const exam3 = {
//   title: '제목입니다',
//   fn1: function () {
//     console.log(this.title);
//   },
// };

// exam3.fn1();

// const fnTest = exam3.fn1;
// exam3.fn1();
// fnTest(); //동적으로 결정

// var a = {
//   test: function () {
//     console.log('test');
//   },
// };

// var b = {
//   test: 'eqew',
// };

// b.test = a.test;

// b.test();
// a.test();

const exam4 = {
  title: '제목입니다',
  testFn: function () {
    const fn1 = () => {
      console.log(this.title);
    };
    fn1();
  },
};

// exam4.testFn();

const fnTest2 = exam4.fn1;
// exam4.fn1();
// fnTest2(); //동적으로 결정
