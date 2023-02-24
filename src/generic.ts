function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

//더 많은 반복된 함수들...

function hello(message: any): any {
  return message;
}

console.log(hello('mark').length); //string형태일때는 length를 사용할 수있지만
console.log(hello(123).length); //number일때는 여기서도 사용 가능? 에러가 뜨지 않음!
//이럴 때 사용하는게 generic?

function helloGeneric<T>(message: T): T {
  //들어오는 값들은 리터럴 타입으로 추론됨?
  return message;
}

console.log(helloGeneric('mark').length);
console.log(helloGeneric(39)); //이부분에서는 length 사용 불가능
//helloGeneric함수에서 인자를 number 타입을 추론했기 때문
console.log(helloGeneric(true));
