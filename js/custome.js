function banner(){
    alert("This is working");
}

// new WOW().init();
function sendmail(){var name = $('#Name').val();var email = $('#Sender').val();var subject = $('#Subject').val();var message = $('#Message').val();if(name=="" || email=="" || subject=="" || message==""){alert('Please fill all the field');}
	else{var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br><br>Message: '+message;
	Email.send({SecureToken:"46760bfe-d71d-4094-a706-70f93858e11b",To: 'jsqphpdeveloper@gmail.com', From: 'qadrij688@gmail.com',Subject: "New message on Jamalsq website from "+name,Body: Body}).then(message =>{if(message=='OK')
	{swal({
		  title: "Your mail has been sent",
		  text: "Thank you for connecting us, we will contect you as soon as possible",
		  icon: "success",
		});$('#myForm')[0].reset();}else{console.error (message);alert('There is error at sending message. ')}});}}
		
		
		// Download the pdf file 
		// document.getElementById('workbtn').addEventListener('click', function() {
		// 	const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
		// 	const pdfUrl = baseUrl+'/cv.pdf?download=1'; // Path to the PDF in your assets folder
		// 	const link = document.createElement('a');
		// 	link.href = pdfUrl;
		// 	link.download = 'cv.pdf'; // Name of the file to be downloaded
		// 	document.body.appendChild(link);
		// 	link.click();
		// 	document.body.removeChild(link); // Clean up after clicking
		// });

		document.getElementById('workbtn').addEventListener('click', function() {
			const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
			const pdfUrl = baseUrl + '/cv.pdf';
			
			fetch(pdfUrl)
				.then(response => response.blob())
				.then(blob => {
					const link = document.createElement('a');
					link.href = window.URL.createObjectURL(blob);
					link.download = 'cv.pdf'; // File name to download
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link); // Clean up after clicking
				})
				.catch(err => console.error('Error fetching the file:', err));
		});
		