function turnColor(color){
  $('.nav-main-container').css('background-color', color);
};

function production(){
  turnColor('#41f4f1');
};

function staging(){
  turnColor('#df42f4');
};

var url = window.location.href
function colorChoice(){
  if ( url.search("staging") != -1 ){
    staging();
  }
  else if ( url.search("thrivetrm") != -1 ){
    production();
  }
};

colorChoice();

document.addEventListener("turbolinks:load", function(){
  setTimeout( colorChoice(), 500);
})
