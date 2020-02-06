var zero =document.getElementById('zero');
var zeroT=document.getElementById('zerot');
zero.addEventListener("click",ShowText1);
function ShowText1(){
  zeroT.style.backgroundColor="white";
}
zero.addEventListener("mouseout",HideText1);
function HideText1(){
  zeroT.style.backgroundColor="black";
}
zero.addEventListener("dblclick",ShowTextA1);
function ShowTextA1(){
  zero.removeEventListener("mouseout",HideText1);
}
zero.addEventListener("mouseover",ClockWise1);
function ClockWise1(){
  zero.className += " rotate-clock";
}
zero.addEventListener("mouseout",NoRotate1);
function NoRotate1(){
  zero.classList.remove("rotate-clock");
}


var one =document.getElementById('one');
var oneT=document.getElementById('onet');
one.addEventListener("click",ShowText2);
function ShowText2(){
  oneT.style.backgroundColor="white";
}
one.addEventListener("mouseout",HideText2);
function HideText2(){
  oneT.style.backgroundColor="black";
}
one.addEventListener("dblclick",ShowTextA2);
function ShowTextA2(){
  one.removeEventListener("mouseout",HideText2);
}
one.addEventListener("mouseover",ClockWise2);
function ClockWise2(){
  one.className += " rotate-clock";
}
one.addEventListener("mouseout",NoRotate2);
function NoRotate2(){
  one.classList.remove("rotate-clock");
}

var zero2 =document.getElementById('zero2');
var zero2T=document.getElementById('zero2t');
zero2.addEventListener("click",ShowText00);
function ShowText00(){
  zero2T.style.backgroundColor="white";
}
zero2.addEventListener("mouseout",HideText00);
function HideText00(){
  zero2T.style.backgroundColor="black";
}
zero2.addEventListener("dblclick",ShowTextA00);
function ShowTextA00(){
  zero2.removeEventListener("mouseout",HideText00);
}
zero2.addEventListener("mouseover",ClockWise00);
function ClockWise00(){
  zero2.className += " rotate-clock";
}
zero2.addEventListener("mouseout",NoRotate00);
function NoRotate00(){
  zero2.classList.remove("rotate-clock");
}

var shisan =document.getElementById('shisan');
var shisanT=document.getElementById('shisant');
shisan.addEventListener("click",ShowText13);
function ShowText13(){
  shisanT.style.backgroundColor="white";
}
shisan.addEventListener("mouseout",HideText13);
function HideText13(){
  shisanT.style.backgroundColor="black";
}
shisan.addEventListener("dblclick",ShowTextA13);
function ShowTextA13(){
  shisan.removeEventListener("mouseout",HideText13);
}
shisan.addEventListener("mouseover",ClockWise13);
function ClockWise13(){
  shisan.className += " rotate-clock";
}
shisan.addEventListener("mouseout",NoRotate13);
function NoRotate13(){
  shisan.classList.remove("rotate-clock");
}


var messup =document.getElementById('messup');
var messupT=document.getElementById('messupt');
messup.addEventListener("click",ShowTextMU);
function ShowTextMU(){
  messupT.style.backgroundColor="white";
}
messup.addEventListener("mouseout",HideTextMU);
function HideTextMU(){
  messupT.style.backgroundColor="black";
}
messup.addEventListener("dblclick",ShowTextAMU);
function ShowTextAMU(){
  messup.removeEventListener("mouseout",HideTextMU);
}
messup.addEventListener("mouseover",ClockWiseMU);
function ClockWiseMU(){
  messup.className += " rotate-clock";
}
messup.addEventListener("mouseout",NoRotateMU);
function NoRotateMU(){
  messup.classList.remove("rotate-clock");
}

var zero3 =document.getElementById('zero3');
var zero3T=document.getElementById('zero3t');
zero3.addEventListener("click",ShowText000);
function ShowText000(){
  zero3T.style.backgroundColor="white";
}
zero3.addEventListener("mouseout",HideText000);
function HideText000(){
  zero3T.style.backgroundColor="black";
}
zero3.addEventListener("dblclick",ShowTextA000);
function ShowTextA000(){
  zero3.removeEventListener("mouseout",HideText000);
}
zero3.addEventListener("mouseover",ClockWise000);
function ClockWise000(){
  zero3.className += " rotate-clock";
}
zero3.addEventListener("mouseout",NoRotate000);
function NoRotate000(){
  zero3.classList.remove("rotate-clock");
}

var two =document.getElementById('two');
var twoT=document.getElementById('twot');
two.addEventListener("click",ShowText3);
function ShowText3(){
  twoT.style.backgroundColor="white";
}
two.addEventListener("mouseout",HideText3);
function HideText3(){
  twoT.style.backgroundColor="black";
}
two.addEventListener("dblclick",ShowTextA3);
function ShowTextA3(){
  two.removeEventListener("mouseout",HideText3);
}
two.addEventListener("mouseover",ClockWise3);
function ClockWise3(){
  two.className += " rotate-clock";
}
two.addEventListener("mouseout",NoRotate3);
function NoRotate3(){
  two.classList.remove("rotate-clock");
}


var three =document.getElementById('three');
var threeT=document.getElementById('threet');
three.addEventListener("click",ShowText4);
function ShowText4(){
  threeT.style.backgroundColor="white";
}
three.addEventListener("mouseout",HideText4);
function HideText4(){
  threeT.style.backgroundColor="black";
}
three.addEventListener("dblclick",ShowTextA4);
function ShowTextA4(){
  three.removeEventListener("mouseout",HideText4);
}
three.addEventListener("mouseover",AntiClockWise4);
function AntiClockWise4(){
  three.className += " rotate-anticlock";
}
three.addEventListener("mouseout",NoRotate4);
function NoRotate4(){
  three.classList.remove("rotate-anticlock");
}



var four =document.getElementById('four');
var fourT=document.getElementById('fourt');
four.addEventListener("click",ShowText5);
function ShowText5(){
  fourT.style.backgroundColor="white";
}
four.addEventListener("mouseout",HideText5);
function HideText5(){
  fourT.style.backgroundColor="black";
}
four.addEventListener("dblclick",ShowTextA5);
function ShowTextA5(){
  four.removeEventListener("mouseout",HideText5);
}
four.addEventListener("mouseover",ClockWise5);
function ClockWise5(){
  four.className += " rotate-clock";
}
four.addEventListener("mouseout",NoRotate5);
function NoRotate5(){
  four.classList.remove("rotate-clock");
}


var five =document.getElementById('five');
var fiveT=document.getElementById('fivet');
five.addEventListener("click",ShowText6);
function ShowText6(){
  fiveT.style.backgroundColor="white";
}
five.addEventListener("mouseout",HideText6);
function HideText6(){
  fiveT.style.backgroundColor="black";
}
five.addEventListener("dblclick",ShowTextA6);
function ShowTextA6(){
  five.removeEventListener("mouseout",HideText6);
}
five.addEventListener("mouseover",AntiClockWise6);
function AntiClockWise6(){
  five.className += " rotate-anticlock";
}
five.addEventListener("mouseout",NoRotate6);
function NoRotate6(){
  five.classList.remove("rotate-anticlock");
}


var six =document.getElementById('six');
var sixT=document.getElementById('sixt');
six.addEventListener("click",ShowText7);
function ShowText7(){
  sixT.style.backgroundColor="white";
}
six.addEventListener("mouseout",HideText7);
function HideText7(){
  sixT.style.backgroundColor="black";
}
six.addEventListener("dblclick",ShowTextA7);
function ShowTextA7(){
  six.removeEventListener("mouseout",HideText7);
}
six.addEventListener("mouseover",ClockWise7);
function ClockWise7(){
  six.className += " rotate-clock";
}
six.addEventListener("mouseout",NoRotate7);
function NoRotate7(){
  six.classList.remove("rotate-clock");
}
