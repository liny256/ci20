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
    var item = document.createElement("li");
    item.classList.add('items');


    var elem = document.createElement("a");
    elem.href = "item.html?id=" + i;

    var image=document.createElement("img");
    image.src= data[i].img;
    elem.appendChild(image);
     // elem.src = "url.jpg";

    item.appendChild(elem);
    //finally, attach to '.result' div
    document.querySelector('.result').appendChild(item);
  }
}

function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);

  document.querySelector('h1').innerText = data[id].Number;
  document.querySelector('.name').innerText = data[id].Name;
  document.querySelector('.lifespan').innerText = "Average Lifespan: "+ data[id].AverageLifeSpan;
  document.querySelector('.watering').innerText = "Watering: "+ data[id].WateringFrequency;
  document.querySelector('.light').innerText = "Light: "+ data[id].Sunshine;
  document.querySelector('.temperature').innerText = "Temperature: "+ data[id].Temperature;
  document.querySelector('.height').innerText = "Height(m): "+data[id].HeightMeter;

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

function show(target){
  var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++){
    items[i].style.display = "none";
  }
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++){
    selected[i].style.display = "inline-block";
  }
  var filters = document.querySelectorAll('.filters');
  for (i = 0; i < filters.length; i++){
    filters[i].classList.remove('selected');
  }
  if (target !== ".items"){
    event.target.classList.add('selected');
  }
}
