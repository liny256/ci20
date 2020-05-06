var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm= '0' + mm;
}
today = yyyy + mm + dd;
console.log("Today is " + today);

// read the JSON file
var xmlhttp = new XMLHttpRequest();
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=YOUR_API_KEY&begin_date=" + today + "&end_date=" + today;
var url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=at-home&api-key=OapR4vDnmL8ypeWJhKvl9G6xiVBYJNc6";
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    if (document.getElementById('index')) {
      printArticles(data);
    }
    else {
      printPages(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();




function printArticles(data) {
  var docs = data.response.docs;

  var cata = ['Movies', 'Cooking', 'Books', 'Meditation', 'Fitness'];
  // var topBar=document.querySelector('.top-bar');
  // var caption=document.createElement("p");
  // caption.innerText=cata[i];
  //
  // function ListOfThings(){
  //
  // }


  document.querySelector("#search-bar").oninput = function(e) {
    // no api request. api requests already happened.
    // here, we are just filtering the data.
    var string = e.target.value;

    var filteredData = docs.filter(function(el) {
      return el.headline.main.includes(string);
      return el.headline.main === string;
    });
    console.log(filteredData);

   for(i=0;i<filteredData.length;i++){
     var showtitle=document.createElement('a');
     showtitle.innerText=filteredData[i].headline.main;
     document.querySelector(".left-empty").appendChild(showtitle);
     showtitle.href=docs[i].web_url;
     showtitle.target="_blank";
     showtitle.classList.add("articles");
     showtitle.style.display="block";
     showtitle.style.paddingRight="20px";
   }
  }


  //main picture
  for (i = 0; i < 1; i++) {
    var item = document.createElement("li");
    item.classList.add('articles');

    var anchor = document.createElement("a");
    // anchor.innerText = docs[i].headline.main;
    anchor.href = docs[i].web_url;
    anchor.target = "_blank";

    var image = document.createElement("img");
    var imageUrl;
    image.style.width = "90%";
    image.style.paddingTop = "5%";
    image.style.paddingBottom = "2%";
    image.style.boxSizing = "border-box";

    for (j = 0; j < 1; j++) {
      if (docs[i].multimedia[j].type == "image") {
        imageUrl = docs[i].multimedia[j].url;
        // break;
      }
    }
    image.src = "http://www.nytimes.com/" + imageUrl;

    item.appendChild(anchor);
    anchor.appendChild(image);
    document.querySelector('.middle-image').appendChild(item);
  }

}


function printPages(data) {
  var docs = data.response.docs;
  // var url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=at-home&api-key=OapR4vDnmL8ypeWJhKvl9G6xiVBYJNc6";


  for (i = 0; i < docs.length; i++) {

    var item = document.createElement("li");
    item.classList.add('articles');

    var anchor = document.createElement("a");
    anchor.innerText = docs[i].headline.main;
    anchor.href = docs[i].web_url;
    anchor.target = "_blank";

    var image = document.createElement("img");
    var imageUrl;
    for (j = 0; j < docs[i].multimedia.length; j++) {
      if (docs[i].multimedia[j].type == "image") {
        imageUrl = docs[i].multimedia[j].url;
        break;
      }
    }
    image.src = "http://www.nytimes.com/" + imageUrl;

    item.appendChild(anchor);
    anchor.appendChild(image);
    document.querySelector('.result').appendChild(item);
  }

//sort by Title
  function rebuildPage() {
  	// clear main contents
  	document.querySelector("#left-empty").innerHTML = "";
  	// build contents by referencing the json.
  	for (var i = 0; i < json.length; i = i + 1) {
  		// var p = document.createElement("p");
  		// p.innerHTML = doc[i].headline.main;
  		// document.querySelector(".left-empty").appendChild(p);
      var toPage=document.createElement('a');
      toPage.innerText=docs[i].headline.main;
      toPage.href=docs[i].web_url;
      toPage.target="_blank";
      toPage.classList.add("articles");
      toPage.style.display="block";
      toPage.style.paddingRight="20px";

      document.querySelector('.left-empty').appendChild(toPage);
  	}
  }


  document.querySelector("#first").onclick = function () {
    console.log('hey');
  	docs.sort(function (a, b) {
  		if (a.headline.main.toLowerCase() < b.headline.main.toLowerCase()) return -1;
  		if (b.headline.main.toLowerCase() < a.headline.main.toLowerCase()) return 1;
  		return 0;
  	});
  	rebuildPage();

  };

  var grey=document.getElementsByClassName("sort");
  grey.addEventListener('mouseover',greyMe);
  function greyMe(){
  grey.style.color="#919191";
  console.log('hello');
  }

}
