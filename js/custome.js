function banner(){
    alert("This is working");
}

new WOW().init();
function sendmail(){var name = $('#Name').val();var email = $('#Sender').val();var subject = $('#Subject').val();var message = $('#Message').val();if(name=="" || email=="" || subject=="" || message==""){alert('Please fill all the field');}
	else{var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br><br>Message: '+message;
	Email.send({SecureToken:"46760bfe-d71d-4094-a706-70f93858e11b",To: 'jsqphpdeveloper@gmail.com', From: 'qadrij688@gmail.com',Subject: "New message on Jamalsq website from "+name,Body: Body}).then(message =>{if(message=='OK')
	{swal({
		  title: "Your mail has been sent",
		  text: "Thank you for connecting us, we will contect you as soon as possible",
		  icon: "success",
		});$('#myForm')[0].reset();}else{console.error (message);alert('There is error at sending message. ')}});}}
