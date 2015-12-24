function turnRed(){
  $('.nav-main-container').css('background-color', 'red');
  };

function turnPurple(){
  $('.nav-main-container').css('background-color', 'purple');
  };

var url = window.location.href
function colorChoice(){
  if ( url.search("staging") != -1 ){
    turnPurple();
  }
  else {
    turnRed();
  };
};

colorChoice();
