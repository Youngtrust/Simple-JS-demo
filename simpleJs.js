var leftInput = document.getElementById("leftbx");
var rightInput = document.getElementById("rightbx");
var LtoR_Interval;
var RtoL_Interval;

function LtoR(){
    stop();
    LtoR_Interval = setInterval(function(){
        var leftString = leftInput.value;
        var shiftChar =  leftString.charAt(0);
        var leftRes = leftString.substr(1);
        leftInput.value = leftRes;
        rightInput.value += shiftChar;
       },2000);
}
/*
setTimeout(function(){
    clearInterval(leftInput);
}, 8000);
*/
function RtoL(){
    stop();
    RtoL_Interval = setInterval(function(){
        var rightString = rightInput.value;
        var shiftChar = rightString.charAt(0);
        var rightRes = rightString.substr(1);
        rightInput.value = rightRes;
        leftInput.value += shiftChar

    },2000);
}
function stop(){
    clearInterval(LtoR_Interval);
    clearInterval(RtoL_Interval);
}

document.getElementById("btn3").addEventListener("click",LtoR);
document.getElementById("btn4").addEventListener("click",stop);
document.getElementById("btn5").addEventListener("click",RtoL);