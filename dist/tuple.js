"use strict";
//tuple은 array배열의 들어갈 요소의 순번과 그 타입도 맞아야한다!
let x;
//첫번째 요소에는 string 두번째 요소에는 number타입
x = ['hello', 39];
// x = [10, 'mark']//Error 순서의 타입이 맞지않음!
// x[3] = 'world' //Error
// '"world"' 형식은 'undefined' 형식에 할당할 수 없습니다.
// 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '3'에 요소가 없습니다.
const person = ['mark', 39];
const [first, second] = person;
//구조분해 할당
// const [first, second , third] = person;
// 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.
console.log(first, second); //mark 39
