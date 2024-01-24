const element = document.getElementById('login-1');
const sign_page = document.getElementById('sign-page');
const sign = document.getElementById('sign');
const otp = document.getElementById('requestOTP');
const numberOTP = document.getElementById('numberOTP');
const verifyInput = document.getElementById('verifyInput');
const verifyBtn = document.querySelector(".verifyOTP");
const input_number_of_OTP = document.getElementById('input-Number-of-OTP');
const counterOTP = document.getElementById('counter');


function addAnimation(){
    console.log("interval");
    element.classList.toggle('animation');
}
const interval = setInterval(addAnimation , 650);
setTimeout(()=>{
    console.log("clearInterval");
    clearInterval(interval);
} , 9000);
setTimeout(()=>{
    console.log("timeout");
    element.classList.add('close');
} , 12000);

console.log(sign_page);
const openSign = ()=>{
    sign_page.style.visibility="visible";
    // document.body.style.overflowY = "hidden";
}
function closeSign(){
    sign_page.style.visibility="hidden";
    // document.body.style.overflowY = "scoll";
}

let input_number = document.querySelector(".input-Number");
const sign_form = document.querySelector(".sign-form");

const arr=[];

function submit_sign(){
    if(arr.includes(input_number.value) == 1){
        //print meassage
    }else{

        arr.push(input_number.value);
    }
    input_number.value = "";
    sign_page.style.visibility="hidden";
    // document.body.style.overflowY = "scoll";
}

function openLogin(){
    console.log("openLogin");
    sign.classList.remove('activesign');
}
function closeLogin(){
    console.log("closeLogin");
    sign.classList.add('activesign');
}

// console.log(sign_page);
// sign_page.addEventListener('click' , (event)=>{
//     console.log(event);
//     console.log(event.target);
// })

function openOTP(){
    verifyBtn.innerHTML = "Verify";
    numberOTP.innerText = input_number_of_OTP.value;
    console.log(input_number_of_OTP.value);
    input_number_of_OTP.value= "";
    otp.classList.remove('activeOTP');
    let num = 4;
    const intervel = setInterval(()=>{
        counterOTP.innerText = `00:0${num}`;
        num -= 1;
    },1000);
    setTimeout(()=>{
        clearInterval(intervel);
        alert(`Your OTP will be ${randomNumber()}`);
    } , 5000);
}

let result;
function randomNumber(){
    let arr = [];
    for(let i =0 ; i< 4 ; i++){
        value = Math.floor(Math.random() * 9);
        arr.push(value);
    }
    console.log(arr);
    let ans = arr.join('');
    result = ans;
    console.log(ans);
    return ans;
}

function closeOTP(){
    otp.classList.add('activeOTP');
}

verifyBtn.addEventListener("click" , ()=>{
    console.log(result);
    console.log(verifyInput.value);
    if(verifyInput.value === result){
        verifyBtn.innerText = "Valid";
        verifyInput.value = "";
        closeOTP();
        closeLogin();
        closeSign();
        // document.body.style.overflowY = "scoll";
    }
    else{
        verifyBtn.innerText = "Not Valid";
    }
})