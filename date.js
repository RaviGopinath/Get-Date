var buttons = document.getElementById("button");

buttons.addEventListener('click', currentDate)

function currentDate(){

    var today = new Date();
    var day = today.getDate();

    // getMonth() retuns the value of month.like jan = 0 ;
    // feb = 1 ; so we add +1 to get the current month.

    var month = today.getMonth()+1;
    var year = today.getFullYear();

    if(day < 10){
        day = '0'+day;
    }
    if(month < 10){
        month = '0'+month;
    }

     var today = day +"/"+month+"/"+year ;
     document.getElementById("calender").innerHTML = today;
// //    
//   var  today = day +"-"+month+"-"+year ;
//    document.getElementById("calender").innerHTML = today;
//   var  today = month +"/"+day+"/"+year ;
//    document.getElementById("calender").innerHTML = today;
//   var  today = month +"-"+day+"-"+year ;
//    document.getElementById("calender").innerHTML = today;
}