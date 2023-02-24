type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunctionGeneric1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunctionGeneric2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};
