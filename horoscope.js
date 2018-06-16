//Zodiac signs

//user selects month and day

//user clicks button

//event listener

//Function
//will get value from the dom of month and day
//pull horoscope related to date entered using conditions
//computer will display the search result



//event listener
document.getElementById('submitSign').onclick = zodiacSearch


//Function
function zodiacSearch (){
  var months = document.getElementsByClassName('month')[0].value;
  var days= document.getElementsByClassName('day')[0].value;
  if( (days >=21 && months==3) || (days<=20 && months==4) ){
    display("Aries");

  }else if ( (days>=21 && days<=30 && months==4) || (days<=21 && months==5) ){
    display("Taurus");

  }else if ( (days>=22 && months==5) || (days<=21 && months==6) ){
    display("Gemini");

  }else if( (days>=22 && days<=30 && months==6)|| (days<=22 && months==7) ){
    display("Cancer");

  }else if ( (days>=23 && months==7) || (days<=21 && months==8) ){
    display("Leo");

  }else if ( (days>=22 && months==8) || (days<=23 && months==9) ){
    display("Virgo");

  }else if ( (days>=24 && days<=30 && months==9) || (days<=23 && months==10) ){
    display("Libra");

  }else if ( (days>=24 && months==10) || (days<=22 && months==11) ){
    display("Scorpio");

  }else if ( (days>=23 && days<=30 && months==11) || (days<=22 && months==12) ){
    display("Sagittarius");

  }else if ( (days>=23 && months==12) || (days<=20 && months==1) ){
    display("Capricorn");

  }else if ( (days>=21 && months==1) || (days<=19 && months==2) ){
    display("Aquarius");

  }else if ( (days<=29 && days>=20 && months==2) || (days<=20 && months==3) ){
    display("Pisces");

  }else{
    display("Not Valid");
  }

}

function display(msg) {
  document.getElementsByTagName('h2')[0].innerHTML=msg;
}





// var month=document.getElementsByClassName('month').value
// var day=document.getElementsByClassName('day').value
//
