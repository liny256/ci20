var systemOfCL=document.getElementById('combination-lock');
function BigTitleShowUp(){
  systemOfCL.classList.add('big-title-showup');
}


var systemD=document.getElementById('system-documentation');
function SubTitleShowUp(){
  systemD.classList.add('sub-title-showup');
}


var indexNav=document.getElementById('index-next');
function IndexNextUp(){
  indexNav.className +="next-goes-up";
}



function TitleShowUpLate(){
  setTimeout(BigTitleShowUp,1000);
  setTimeout(SubTitleShowUp,1000);
  setTimeout(IndexNextUp,900);
}
TitleShowUpLate();
