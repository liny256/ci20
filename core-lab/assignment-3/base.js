var pages =["home","writings","drawings","sketchbook","prints","travel","organizations","contact","links"];


var sideBar=document.createElement('div');
sideBar.className= 'sidebar';
document.getElementsByTagName('body')[0].appendChild(sideBar);

var content=document.createElement('div');
content.className= 'content';
document.getElementsByTagName('body')[0].appendChild(content);

// for(var i=0;i<pages.length;i++){
//   var a=document.createElement('a');
//   a.appendChild('linkText');
//   a.title = "pages[i]";
//   a.herf="pages[i].html"
//   var linkText=document.createTextNode("${pages[i]}.html");
//   sideBar.appendChild(a);
// }
for(let i=0;i<pages.length;i++){
  var a =`<a href ="${pages[i]}.html">${pages[i]}<br></a>`;
  sideBar.innerHTML += a;
}
