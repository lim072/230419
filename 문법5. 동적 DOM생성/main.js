/*
 document.createElement("nodename");
 보통 이 인수로 넣는 노드는 "문자열로 태그이름을 작성"
 createElement 이 메소드는 단일 매개변수 값을 받고, 필수로 받아야합니다
 => 요소객체가 생성이 됩니다
*/

// let h1 = document.createElement("h1");
// let a = document.createElement("a");
// let href = document.createAttribute('href'); //href=""
// let target = document.createAttribute('target'); //target=""

// href.nodeValue = 'https://www.naver.com';
// target.nodeValue = "blank";

// a.setAttributeNode(href);
// a.setAttributeNode(target);

// // <a href="https://www.naver.com" target="_blank"></a>
// //createAttribute('target'); + setAttributeNode(target)
// //setAttribute("속성이름", "속성에 넣을 값")

// a.innerText = "네비어";
// // <a href="https://www.naver.com" target="_blank">네이버</a>

// h1.append(a);
// //h1 안쪽 마지막에 ()안의 내용을 넣어달라는 매서드

// document.body.append(h1)
//최종적으로 이어서 붙인 h1을 문서의 body태그 안에 붙여주어야 최종 생성

//1.여기까지가 node를 생성하여 동적 DOM을 만드는 방법으로써 
//어렵고,복잡하지만 알고는 있어야 하는 방법


//2. 문자열 innerHTML로 조합하여 DOM을 생성하는 방법 = 학습을 위해서 배울뿐 실무적인 내용은 아닙니다

// let href = "https://www.naver.com";
// let target = "_blank";
// let txt = "네이버";
// let tags = '';


// tags += '<h1>'; //<h1>
// tags += '<a href=' + href + 'target=' + target + '>' + txt + '</a>';
// tags += '</h1>'

// console.log(tags);

// document.body.innerHTML = tags;





//3. 템플릿 리터널을 활용한 객체형식의 DOM형성방법 = 실무적인내용입니다
// 실무에서는 자료를 복수인경우 객체나, 배열로 바인딩을 해야합니다
//또한 문자열안에 변수를 넣는경우 에크마6의 문법인 템플릿 리터널을 사용합니다
// let domInfo = {
//     href : "https://www.naver.com/",
//     target : "blank",
//     txt : "네이버" 
// }

// let tags = `<h1>
//{/* <a href="${domInfo.href}" target="${domInfo.target}">${domInfo.txt}</a>
//</h1>`; */}

// console.log(tags);

// document.body.innerHTML = tags;



//4. DOM 을 반복해서 생성해야하는 경우가 실무에서는 아주 많습니다

let dom = [{},{},{}];

let domInfo = [{
    href : "https://www.naver.com/",
    target : "blank",
    txt : "네이버" 
},{
    href : "https://www.google.com/",
    target : "blank",
    txt : "구글" 
},{
    href : "https://www.daum.net/",
    target : "blank",
    txt : "다음" 
},
{
    href : "https://www.nate.com/",
    target : "blank",
    txt : "네이트" 
},
{
    href : "https://www.yahoo.com/",
    target : "blank",
    txt : "야후!" 
}]

let tags = '';
//mpa 반복에서는 두가지의 매개변수자리가 존재합니다.  el, index 각각의 객체를 의미하는 el
//반복을 도는 각 인덱스를 의미하는 index라는 매개변수가 필요
//하지만 반복대상에 따라서 어느하나의 매개변수는 쓰지 않을때도 있습니다
//쓰지 않기에 지운다면 에러가 발생합니다 따라서 지우진 않고, 쓰지않아서 el에 색상이 변경되는 것을
//피하기 위해서 _ (언더바)로 표현하기도 합니다

domInfo.map(function(_, index){
     return tags += `
       <h1>
       <a href="${domInfo[index].href}" target="${domInfo[index].target}">${domInfo[index].txt}</a>
       </h1>
     `;
})

document.body.innerHTML = tags;

// _ (언더바) 안쓰는 매개변수자리에 넣어줌 자리차지용
