
//this is kind of like an array, called by saying, var y = object.name
// var object = {
//   name: 'apple' ,
//   color: 'red',
//   size: 200
// }

// var y = object.name;

//jelly defauts
//


var options = {
    paths: '#irregular1', // Shape we want to draw
    pointsNumber: 15,            // Number of points
    maxDistance: 70,             // Max distance among points
    color: 'rgba(255, 255, 255, 0.40)',
    centroid: '.centroid-text',  // Element to move accordingly with the centroid of the shape
    // debug: true               // Uncomment this to see the points
};

var options2 = {
  paths: '#irregular2', // Shape we want to draw
  pointsNumber: 20,            // Number of points
  maxDistance: 70,             // Max distance among points
  color: 'rgba(255, 255, 255, 0.40)',
  centroid: '.centroid-text',  // Element to move accordingly with the centroid of the shape
  // debug: true               // Uncomment this to see the points
}

var options3 = {
  paths: '#irregular3', // Shape we want to draw
  pointsNumber: 10,            // Number of points
  maxDistance: 70,             // Max distance among points
  color: 'rgba(255, 255, 255, 0.40)',
  centroid: '.centroid-text',  // Element to move accordingly with the centroid of the shape
  // debug: true               // Uncomment this to see the points
}

var options4 = {
  paths: '#irregular4', // Shape we want to draw
  pointsNumber: 10,            // Number of points
  maxDistance: 70,             // Max distance among points
  color: 'rgba(255, 255, 255, 0.40)',
  centroid: '.centroid-text',  // Element to move accordingly with the centroid of the shape
  // debug: true               // Uncomment this to see the points
}

/* Initializing jelly */
var jellyone = new Jelly('.jelly-canvas1',options);
var jellytwo = new Jelly('.jelly-canvas2',options2);
var jellythree = new Jelly('.jelly-canvas3',options3);
var jellyfour=new Jelly('.jelly-canvas4',options4);
//color definitions;

// rgb(255, 243, 59)
var a1=[255,243,59];
//rgb(249, 190, 44)
var b1=[249,190,44];
//rgb(242, 148, 25)
var c1=["242","148","25"];
//rgb(240, 131, 38)
var d1=["240","131","38"];
//rgb(153, 68, 0)
var e1=["152","68","0"];
//rgb(236, 93, 64)
var f1=["236","93","64"];
//rgb(217, 49, 39)
var g1=["217","49","39"];
var h1='#e60045';
var i1='#e83e69';
var j1='#93255d';
var k1='#6d0b7a';
var l1='#45177e';
var m1='#152a8c';
var n1='#0050a4';
var o1='#4787c7';
var p1='#7acdf3';
var q1='#00a8d7';
var r1='#00a9c3';
var s1='#006b7c';
var t1='#009d91';
var u1='#006857';
var v1='#008565';
var w1='#009857';
var x1='#89c568';
var y1='#81a034';
var z1='#b8d200';
var black='#000000';
var white='#ffffff';







//refresh the stuff with rewrittened one
//typing defaults
var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  span.innerHTML = key;
  cursor.parentNode.insertBefore(span, cursor);
}

function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

var body=document.getElementById('gradient');
var targetColor1="rgb(247, 102, 82)";//color second last letter
var targetColor2="rgb(70, 145, 223)";
body.style.backgroundImage="linear-gradient(90deg, rgba(0,0,0) 3%, rgb(247, 102, 82) 35%, rgb(70, 145, 223) 90%, rgba(255,255,255) 100%)";
document.onkeydown = function(e) {
  //backspace
  if (e.keyCode == 8) {
    deleteElement();
  }
  //enter
  if (e.keyCode == 13) {
    createLetter("<br>");
  }
  //space
  if (e.key == " ") {
    createLetter("&nbsp;");
  }
  //a
  if (e.keyCode == 65) {
    body.style.backgroundImage="linear-gradient(rgb(0,0,0) 3%, #fff297 35%, #e83a53 98%, rgb(255,255,255) 100%)";
  }

  //b
  if (e.keyCode == 66) {
    body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #b7cf73 35%, #00a0e9 90%, rgb(255,255,255) 100%)";
  }

  //c
  if (e.keyCode == 67) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #fa8284 35%, #b35573 90%, rgb(255,255,255) 100%)";
  }

  //d
  if (e.keyCode == 68) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #ec7856 35%, #63465a 90%, rgb(255,255,255) 100%)";
  }

  //e
  if (e.keyCode == 69) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #80aecd 35%, #874461 90%, rgb(255,255,255) 100%)";
  }

  //f
  if (e.keyCode == 70) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #a7ab90 35%, #ffb288 90%, rgb(255,255,255) 100%)";
  }

  //g
  if (e.keyCode == 71) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #a6f5b9 35%, #26a6c8 90%, rgb(255,255,255) 100%)";
  }

  //h
  if (e.keyCode == 72) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #ceb46e 35%, #d26440 90%, rgb(255,255,255) 100%)";
  }

  //i
  if (e.keyCode == 73) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #7b9768 35%, #31827a 90%, rgb(255,255,255) 100%)";
  }

  //j
  if (e.keyCode == 74) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #bbf1e4 35%, #fa3b5a 90%, rgb(255,255,255) 100%)";
  }

  //k
  if (e.keyCode == 75) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #a3b4c0 35%, #f7cfcb 90%, rgb(255,255,255) 100%)";
  }

  //l
  if (e.keyCode == 76) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #8796c3 35%, #253868 90%, rgb(255,255,255) 100%)";
  }

  //m
  if (e.keyCode == 77) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #253868 35%, #6b9b3b 90%, rgb(255,255,255) 100%)";
  }

  //n
  if (e.keyCode == 78) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #4bad90 35%, #cb2212 90%, rgb(255,255,255) 100%)";
  }

  //o
  if (e.keyCode == 79) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #f56a1e 35%, #3e6577 90%, rgb(255,255,255) 100%)";
  }

  //p
  if (e.keyCode == 80) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #c6b3a7 35%, #fd8076 90%, rgb(255,255,255) 100%)";
  }

  //q
  if (e.keyCode == 81) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #bfbf62 35%, #0ec7bc 90%, rgb(255,255,255) 100%)";
  }

  //r
  if (e.keyCode == 82) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #b22145 35%, #9693aa 90%, rgb(255,255,255) 100%)";
  }

  //s
  if (e.keyCode == 83) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #b8b467 35%, #454212 90%, rgb(255,255,255) 100%)";
  }

  //t
  if (e.keyCode == 84) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #fff297 35%, #8c454d 90%, rgb(255,255,255) 100%)";
  }

  //u
  if (e.keyCode == 85) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #f86664 35%, #ccc0dc 90%, rgb(255,255,255) 100%)";
  }

  //v
  if (e.keyCode == 86) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #d74f13 35%, ##8d8ee2 90%, rgb(255,255,255) 100%)";
  }

  //w
  if (e.keyCode == 87) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #a47974 35%, #ad4e01 90%, rgb(255,255,255) 100%)";
  }

  //x
  if (e.keyCode == 88) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #a8c3ac 35%, #7d3342 90%, rgb(255,255,255) 100%)";
  }

  //y
  if (e.keyCode == 89) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #caa35b 35%, #d68595 90%, rgb(255,255,255) 100%)";
  }

  //z
  if (e.keyCode == 90) {
  body.style.backgroundImage="linear-gradient(90deg, rgb(0,0,0) 3%, #cfb8a2 35%, #123643 90%, rgb(255,255,255) 100%)";
  }

  var target="";
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    createLetter(e.key);
    Floatdelays();
    // var targetLetter1=target.slice(target.length-1,target.length);//last1 letters
    // var targetLetter2=target.slice(target.length-2,target.length-1);//second last letter

  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}

}






//float up
function Float1(){
  var jelly1=document.getElementById('jellyc1');
  jellyc1.className += " float-up";
}

function Float2(){
  var jelly2=document.getElementById('jellyc2');
  jellyc2.className += " float-up";
}

function Float3(){
  var jelly3=document.getElementById('jellyc3');
  jellyc3.className += " float-up";
}

function Float4(){
  var jelly4=document.getElementById('jellyc4');
  jellyc4.className += " float-up";
}

function Floatdelays(){
  Float1();
  setTimeout(Float2,1000);
  setTimeout(Float3,2000);
  setTimeout(Float4,3000);
}
