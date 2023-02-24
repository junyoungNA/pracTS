interface IPerson {
  name: string;
  age: number;
}

// type Keys = keyof IPerson; //keyof 키워드를 통해 특정타입을 지정?
//IPerson 식별자 이름이 key의 값을 string 형태로 뽑아내주는 역할? 유니온타입으로

// const keys: Keys = 'age';

const p: IPerson = {
  name: 'mark',
  age: 39,
};

// function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
//   return obj[key];
// }

//IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number  < 최종 목표?
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//   return obj[key];
// }

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(p, 'age'); //유니온타입이 아닌 number 추론됨!
getProp(p, 'name'); //유니온 타입이 아닌 string 추론됨!

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value; //유니온 타입이 아니여서 에러가 발생하지 않음
}

// setProp(p, 'age', 'se'); age 는 number로 에러발생
setProp(p, 'name', 'eqw');
