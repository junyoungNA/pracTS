//object
//primitive type 원시값 타입이 아닌 것을 나타내고 싶을때 사용!
//number, string, boolean, bigint, symbol, null, undefined 
//가 아닌 경우에만 사용!
//리터럴
const person1 = { name: 'Mark1', age: 39 };
const person2 = Object.create({ name: 'mark', age: 39 });
// ObjectConstructor.create(o: object | null
//Object.create 인자는 object객체 혹은 null값만 들어갈 수 있다.
console.log(person1); //{ name: 'Mark1', age: 39 }
console.log(person2); //{}
let obj1 = {};
obj1 = { name: 'mark' };
obj1 = [{ name: 'mark' }];
// obj1 = 39;//Error
// obj1 = 'Mark' //Error
// obj1 = true //Error
// obj1 = Symbol(); //Error
// obj1 = null //Error
// obj1 = undefined //Error
