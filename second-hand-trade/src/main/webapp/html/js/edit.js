'use strict'
var serverApiAddr = "http://192.168.0.9:8080/second-hand-trade";

$(() => {
	$('._28rsa > header').load(`${serverApiAddr}/html/editSide.html`)
	$('._75z9k > header2').load(`${serverApiAddr}/html/modifyProfilePhoto.html`)
	 $('footer').load(`${serverApiAddr}/html/footer.html`);
	
});

