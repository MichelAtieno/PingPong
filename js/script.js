function pingPong(num){
  var result = [];
  for (var index=1; index <= num; index+=1) {
  if (index % 3 === 0 && index % 5 === 0 ) {
    result.push("pingpong");
  }else if (index % 3 == 0 ) {
      result.push("ping");
    }
    else if (index % 5 == 0 ) {
      result.push("pong");
  }
  else {
    result.push(index);
  }
}
  return result

}


$(document).ready(function(){
   $("form#PingPong").submit(function(){
      event.preventDefault();
      $("#result").empty();
      var num = parseInt($("input#pingpong").val());
      var result=pingPong(num);
       result.forEach(function(i){
         $("#result").append('<li>' + i + "</li>");
      });
   });
});







  // var results = ["qwerty",123,true]
//function testNum(a) {
//  if ( typeof(a) === "string") {
  //  results.push("is a string");
  //} else if(a % 2 === 0){
//    results.push("even number");
  //} else {
    //results.push(a);
  //}
  //return results
//}

//console.log(testNum(3269625));






  // jQuery user interface logic here.
