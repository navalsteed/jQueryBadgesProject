$(function() {

  // your code will go here
  $.ajax({
  url:'https://www.codeschool.com/users/4443145.json',
  datatype:'jsonp',
  success:function(response){
  console.log('response',response);
  }  
  });

});
