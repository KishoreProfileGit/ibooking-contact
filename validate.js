$(document).ready(function () {
  
//validation for First Name
$('#firstName').on('input', function () {

   var firstName = $(this).val();
   var validName = /^[a-zA-Z ]*$/;
   if (firstName.length == 0) {

      $('.first-name-msg').addClass('invalid-msg').text("First Name is required");
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else if (!validName.test(firstName)) {

      $('.first-name-msg').addClass('invalid-msg').text('only characters & Whitespace are allowed');
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else {
      $('.first-name-msg').empty();
      $(this).addClass('valid-input').removeClass('invalid-input');
   }
  });

  

// valiadtion for Last Name
$('#lastName').on('input', function () {

   var secondName = $(this).val();
   var validName = /^[a-zA-Z ]*$/;
   if (secondName.length == 0) {

     $('.last-name-msg').addClass('invalid-msg').text("Last Name is required");
     $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!validName.test(secondName)) {

     $('.last-name-msg').addClass('invalid-msg').text('only characters & Whitespace are allowed');
     $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else {
     $('.last-name-msg').empty();
     $(this).addClass('valid-input').removeClass('invalid-input');
   }
});

// valiadtion for Email
$('#email').on('input', function () {

   var emailAddress = $(this).val();
   var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if (emailAddress.length == 0) {

     $('.email-msg').addClass('invalid-msg').text('Email is required');
     $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!validEmail.test(emailAddress)) {

     $('.email-msg').addClass('invalid-msg').text('Invalid Email Address');
     $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else {
     $('.email-msg').empty();
     $(this).addClass('valid-input').removeClass('invalid-input');
  }
  });



  //validation for subject
$('#subject').on('input', function () {

   var subjects = $(this).val();
   var validsubject = /^[a-zA-Z0-9]*$/;
   if (subjects.length == 0) {

      $('.subject-msg').addClass('invalid-msg').text("Subject is required");
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else if (!validsubject.test(subjects)) {

      $('.subject-msg').addClass('invalid-msg').text('only characters, numbers & Whitespace are allowed');
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else {
      $('.subject-msg').empty();
      $(this).addClass('valid-input').removeClass('invalid-input');
   }
  });





  
  //validation for phone
$('#phone').on('input', function () {

   var phone = $(this).val();
   var validphone = /^[0-9]*$/;
   if (phone.length == 0) {

      $('.phone-msg').addClass('invalid-msg').text("phone no is required");
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else if (!validphone.test(phone)) {

      $('.phone-msg').addClass('invalid-msg').text('only numbers are allowed');
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else if (phone.length != 10) {

      $('.phone-msg').addClass('invalid-msg').text('numbers should be 10 digit');
      $(this).addClass('invalid-input').removeClass('valid-input');
      
   }
   else {
      $('.phone-msg').empty();
      $(this).addClass('valid-input').removeClass('invalid-input');
   }
  

  });






// validation to submit the form
$('input').on('input',function(e){
   if($('#myForm').find('.valid-input').length==5){

       $('#submit-btn').removeClass('allowed-submit');
       $('#submit-btn').removeAttr('disabled');
   }
  else{
       e.preventDefault();
       $('#submit-btn').attr('disabled','disabled')
       
      }
});

});