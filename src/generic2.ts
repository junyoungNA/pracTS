function helloBasic<T, U, K>(message: T, comment: U): T {
  return message;
}

// helloBasic<string>(39); 에러 발생
helloBasic<string, boolean, unknown>('mark', true);
//사용할 때 T 타입을 지정 가능 <> 괄호에 string, number 입력가능
helloBasic(36, true); //<> 호출시 generic 설정을 하지않으면 인자에 맞는 타입이 자동으로 T에 들어감
