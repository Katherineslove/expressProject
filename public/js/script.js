$(document).ready(function() {

  $.ajax({
    type: 'GET',
    url: `http://192.168.33.10:3000/people`,
    dataType: 'json',
    success: function(data) {
      console.log(data);
      // console.log('success');
    },
    error: function(error){
      console.log(error);
      console.log('Something went wrong');
    }
  })

  $("#male").click(function(){
    console.log('male has been clicked');
  });

  $("#female").click(function(){
    console.log('female has been clicked');
  });

})
