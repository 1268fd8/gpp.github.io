// 设置图片切换
let myimage = document.querySelector('img');

myimage.onclick = function(){
    let mySrc = myimage.getAttribute('src');
    if(mySrc === 'images/img1.jpg') {
        myimage.setAttribute('src','images/img2.jpg');
    } else {
        myimage.setAttribute('src','images/img1.jpg');
    }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息函数设置
function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Welcome:' + myName;
    }   
}

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome:' + storedName;
}

// 为按钮设置onclick事件处理器：
myButton.onclick = function(){
    setUserName();
};





/* document.querySelector("html").addEventListener("click",function(){
    alert("别戳我,我是空的")
})
*/
