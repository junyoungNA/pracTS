//Compilation Context
//컴플레이션 콘텍스트
//어떠한 파일을 컴파일 할자 , 하지않을지
//어떠한 방식으로?
//tsconfig ?

//tsconfig파일에 설정들에 대해 공부해보자!
//최상위 프로퍼티
//compileOnSave
//extends
//compileOptuins
//files
//include
//exclude
//references

// "compileOnSave": true, 기본값은 false
//true일때 누가 컴파일을 시켜주나?
//Visual Studio 2015 with Typescirpt 1.8.4 이상 일떼
//atom-typesciprt플러그인 사용할 때?

//"extends"  : "파일경로"
//typeScript 2.1 이상부터 extends 프로퍼티 사용가능
//extends 프로퍼티를 사용할때는 stringr값을 설정해 줄 수 있고 파일경로
//json파일 등의 파일을 상속받을 수 있다.
//extends를 통해 설정할 수 있는 파일을 타입스크립트에서 공개했다
//bases 라는 이름의 여러가지 형태의 설정할 수 있는 모든 부모설정들이 있다.
//버젼의 따른node 설정등
//npm install --save-dev @tsconfig/deno

//files, include, exclude
//3가지가 중요한 역할을 함
//프로젝트안에서 어떤파일을 컴파일할건지 결정해주는 역할
//만약에 files,include,exclude가 tsconfig파일에 없다면
//모든 파일을 컴파일하개 된다.
//exclude는 컴파일을 제외시킬 파일을 설정
//하지만 files 설정되어있는 파일이라면
//exclude에 설정되더라도 무시하고 컴파일한다!

//files
//상대 혹은 절대 경로의 리스트 배열
//exclude영향을 받지 않음?

//incldue, exclude
//glob 패턴 (마치 gitIgnore);

//incdlue
//exclude의 영향을 받음!
// * 같은걸 사용하면 .ts/.tsx/.d.ts/만 include(allowJs);

//exclude
// 설정 안하면 4가지 (node_modules, bowser_components, jspm_packages,
//  <outDir>를 default를 제외합니다)
//  <outDir>은 항상 제외합니다. include에 있어도!)

//compileOptuons 와 typeRoots, @types
//npm i --save-dev @types/react
//compileOptios의 설정을 해주지않는다면
//리액트를 import했을때 위에서 설치한 type/react로
//설치한 index.d.ts파일이 react에 타입설정을 해준다.
// @types란?
//TypeScript 2.0 부터 사용 가능하진 내장
//type definition 시스템
//아무 설정을 안하면?
//node_modules/@types 라는 모든 경로를 찾아서 사용
//tpyeRoots 를 사용시에?
//배열 안에 들어있는 경로들 아래에서만 가져옵니다.
//types를 사용하면
//배열안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾습니다.
//[] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것입니다.
//typeRoots 와 types를 같이 사용하지 않습니다.

//target 과 lib
//타입스크립트가 어떤 런타임에서 실행이 가능한지 의문?
//target
//빌드의 결과물을 어떤 버전으로 할 것이냐
//지정을 안하면 es3 입니다.
//lib
//기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
//lib를 지정하지 않을 때
//target 이 es3이고, 디폴트로 lib.d.ts 를 사용합니다.
//target 이 es5이고 디폴트로 dom, ex5, scripthost 를 사용합니다
//target 이 es5이고 디폴트로 dom, ex6, scripthost 를 사용합니다
//lib를 지정하면 그 lib 배열로만 라이브러리를 사용합니다.
//빈 [] => no definition found 어쩌구

//outDir, outFile, rooDir
//outDir로 파일을 설정하면 편하게 파일을 컴파일 할 수 있다?
//rooDir 내소스 폴더를 dir로 지정할 수 있다
//src같은 폴더를 rootDir로 설정해 준 뒤에
//outDir로 컴파일 가능하다?

//strict 옵션
