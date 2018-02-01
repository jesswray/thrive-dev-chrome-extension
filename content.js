function turnColor(color){
  $('.nav-main-container').css('background-color', color);
};

function production(){
  turnColor('#FF0000');
};

function staging(){
  turnColor('#b5f441');
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
