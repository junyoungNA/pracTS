"use strict";
function helloArray(message) {
    //배열이 T타입으로 추론
    return message[0];
}
console.log(helloArray(['hello', 'world'])); //stirng 로 추론됨
console.log(helloArray(['hello', 5])); //stirng | number 로 추론됨
function helloTuple(message) {
    //tuple형태
    //배열안의 요소를 T,K 순서로 추론
    return message[0];
}
console.log(helloArray(['hello', 'world'])); //stirng 로 추론됨
console.log(helloArray(['hello', 5])); //
