/*
디폴트 파라미터란?
인수를 넣지 않고 함수를 호출하였을때를 대비하여 개발자가 디폴트값을 미리 지정하는 코드
에크마6이전에는 손수코드를 작성하는 방법으로 극복하였습니다
하지만 에크마6에서는 개선되어서 디폴트 파라미터가 생겨서 간단하게 작성할수있도록 업데이트가
되었습니다
*/

// function info(name) {
//     console.log(name)
// }
// info(); //undefined로 에러상황이 발생합니다

//1. 조건문으로 값을 처리하는 방법

// function intro(name) {
//     if (name === undefined) name = "lim07";
//     /*3항연산자로 변환해 보세요
//     (조건식) ? 참인경우 : 거짓인경우;
//     name ? name : name = "lim07";
//     */

//     return "My name is " + name;
//     /*
//     intro()함수를 호출할때 인수를 넣으면 if문은 무시되고 바로 리턴을 만나서
//     인수가 출력된 결과를 반환합니다
//     하지만 인수가 없다면 if문을 통과해서 name에 lim07라는 디폴트값이 적용된 상태로
//     밑에 리턴문을 지나 디폴트값이 출력된 결과가 반환합니다
//     */
// }
// console.log(intro());
// console.log(intro("오은택"));

/*
단락회로 평가(단축평가)

&& || (and, or)의 경우 논리연산자를 이용한 논리평가를 이용해서 단축적인 코드 작성을 하는방법

A && B => A와 B가 모두 참이어야 참이다라는 논리평가인데 이것을 조건문으로 이용할 수있습니다
즉 A가 참인지, 거짓인지에 따라서 && 뒤에있는 B가 평가될지 안될지가 결정이됩니다
A가 거짓이면 바로 종료, A가 참이면 B가 실행됩니다

단점, 단락회로평가를 if문 혹은 3항연산자를 대체할 경우
논리적으로나 실용적으로는 문제가없습니다만, 협업에서 문제가 발생합니다
따라서 가급적 3항연산자를 이용하고, 단락회로 평가는 지양하는 편입니다
*/

console.log("cat" && "dog");
console.log("cat" || "dog");
// cat이라는 문자열은 문제가 없는 자료형입니다 따라서 true로 인식이 가능한 부분,
//따라서 &&는 cat을 논리평가한 뒤에 바로 &&를 지나서 dog를 실행합니다 따라서 dog가
//콘솔로그에 남는것입니다

// function intro(name) {
//     !name && (name = 'lim07');
//     return "My name is " + name;
// }

// console.log(intro());


/*
()안의 논리평가에서 거짓이 아닌 참을 추적합니다. name이 존재하면 참으로 인식하기 때문에
존재하는 name을 반환해서 사용하고, name이 없으면 거짓으로 인식해서 참을 찾기 위해서
다음 ||을 넘어 진행이 되는데 우리가 "lim07"라고 참을 정확하게 디폴트값으로 적용하였기 때문에
name이 없으면 참으로 인식될 'lim07'를 적용합니다
*/
// function intro(name) {
//     return 'my name is ' + (name || "lim07");
// }
// console.log(intro());


// 에크마 6 문법
// 매개변수자리에다가 디폴트 값을 바로 지정합니다

// function intro(name = "lim07") {
//     return "My Name is " + name;
// }
// console.log(intro());


//매개변수가 복수개인경우 복수개의 디폴트 파라미터도 가능합니다
//복수개인 경우 매개변수자리에 , 연결해서 작성가능합니다
/*
name = "lim07", interests = "brother"
name,interests이가 존재한다면 그것을 그대로 사용을 하고,
없으면 = 이후의 값을 디폴트값으로 사용하라는 뜻입니다
*/
// function game() { }
// let game2 = function () { }

// let intro = function (name = "lim07", interests = "brother") {
//     // return "My Name is " + name + " and I Love " + interests + ".";
//     //템플릿 리터널
//     return `My Name is ${name} and I Love ${interests}.`
// }
// console.log(intro());

let defaults = {name : "lim07", interests : "brother"};

let intro = function(opt = defaults){
    return `My Name is ${opt.name} and I Love ${opt.interests}.`
}
console.log(intro());
console.log(intro({name : "072", interests: "bone"}));