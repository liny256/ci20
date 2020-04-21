/* -----------------------------------------------
  Make sure you run a local server:
  1. Open Terminal
  2. "cd" into project directory
  3. Type "php -S localhost:8000"
  4. Go to "localhost:8000" from your browser
----------------------------------------------- */


// read the JSON file
var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt"; //your file name
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    if (document.getElementById('index')) {
      buildIndex(data);
    }
    else {
      buildItem(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function buildIndex(data){
  //for each row of data:
  for (i = 0; i < data.length; i++){
    var box=document.createElement("div");
    box.classList.add('box-left');

    var elem = document.createElement("a");
    elem.href = "item.html?id=" + i;

    var image=document.createElement("img");
    image.src= data[i].img;
    elem.appendChild(image);
    box.appendChild(elem);


     // elem.src = "url.jpg";
    //finally, attach to '.result' div
    document.querySelector('.result').appendChild(box);
    // image.style.width='100%';
    image.style.maxWidth="500px";
    image.style.maxHeight="500px";
    document.querySelector('#index').style.overflow="scroll";

    document.addEventListener("scroll",BgColor);
    function BgColor(){
      document.querySelector('body').classList.add('background-change');
    }


    document.querySelector('html').style.width="300%";

    //array sort part
    var NameAZ=document.querySelector('#names');
    NameAZ.addEventListener('click',AtoZ);
    console.log(NameAZ);
    function AtoZ(){
      console.log('names');
        data.sort(function(a, b) {
          return (a.Name > b.Name) ? 1 : -1;
        })
    }


    var heightR=document.querySelector('#height');
    heightR.addEventListener('click',SmalltoBig);
    function SmalltoBig(){
      console.log('height');
      data.sort(function(a, b) {
        return (a.HeightMeter > b.HeightMeter) ? 1 : -1;
      })
    }

    //try to rap a div around several elements so i can range them
    // for(i=0;i<data.length;i++){
    //
    // }
  }
}

function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);

  document.querySelector('title').innerText = data[id].Name;
  document.querySelector('h1').innerText = data[id].Number;
  document.querySelector('.name').innerText = data[id].Name;
  document.querySelector('.lifespan').innerText = "Average Lifespan: "+ data[id].AverageLifeSpan;
  document.querySelector('.watering').innerText = "Watering: "+ data[id].WateringFrequency;
  document.querySelector('.light').innerText = "Light: "+ data[id].Sunshine;
  document.querySelector('.temperature').innerText = "Temperature: "+ data[id].Temperature;
  document.querySelector('.height').innerText = "Height(m): "+data[id].HeightMeter;

  var picture=document.querySelector('.image');
  var actualPic=document.createElement('img');
  actualPic.src=data[id].img;
  picture.appendChild(actualPic);
  actualPic.style.maxWidth='450px';
  actualPic.style.maxHeight='450px';
  actualPic.style.display='block';
  actualPic.style.zIndex='-999';
  picture.style.display='block';
  picture.style.zIndex='-999';

  if(id>9){
    document.querySelector('h1').style.left="10%";
  }
  if(id<10){
    document.querySelector('h1').style.left="15%";
  }

  var nextId, prevId;
  if (id == data.length - 1) {
    nextId = 0;
  }
  else {
    nextId = id + 1;
  }

  if (id == 0) {
    prevId = data.length - 1;
  }
  else {
    prevId = id - 1;
  }
  document.querySelector('.next').href = "item.html?id=" + nextId;
  document.querySelector('.prev').href = "item.html?id=" + prevId;
}
