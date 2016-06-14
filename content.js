function turnColor(color){
  $('.nav-main-container').css('background-color', color);
  };

function production(){
  turnColor('#FF0000');
};

function staging(){
  turnColor('#D290D4');
};

function beta(){
  turnColor('#6BB7FA');
};

function demo(){
  turnColor('#FAAE6B');
};

var url = window.location.href
function colorChoice(){
  if ( url.search("staging") != -1 ){
    staging();
  }
  else if ( url.search("beta") != -1 ){
    beta();
  }
  else if ( url.search("demo") != -1 ){
    demo();
  }
  else {
    production();
  };
};

colorChoice();

document.addEventListener("turbolinks:load", function(){
  setTimeout( colorChoice(), 500);
})
