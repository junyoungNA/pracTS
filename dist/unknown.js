//컴파일러와 미래의 코드를 읽는 사람에게 이 변수가
//무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로
//unknown타입을 제공합니다.
//컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
//타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
//unknown을 사용할때는 타입가드를 통해
//타입을 한정시켜야지 쓸 수있는 형태!
//만약 unknown이 아니라 any였다면 에러를 발생시키지 않음!
//unknown을 통해 타입가드를 사용하고 그 타입의 한계를 지정해준다면
//실수를 줄일 수 있다!
// const aNumber: number = maybe; //Error
// unknown' 형식은 'number' 형식에 할당할 수 없습니다
if (maybe === true) {
    //이런형태를 타입가드라고 칭한다!
    const aBoolean = maybe;
    maybe;
    //maybe는 이 블록에 들어온다면 
    //boolean값 true일 것이다!
    // const aString : string = maybe; //Error
    // 'aString'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.
    // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다
}
if (typeof maybe === 'string') {
    //이 블록또한 타입가드!
    //이 블록에서 maybe는
    //string타입이 된다!
    const aString = maybe;
    // const aBoolean: boolean = maybe; //Error
    // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다
}
