/* jQuery */
	$(function () {
	$('.carousel').carousel({
		interval: 4000
	});
})
/* Fim jQuery */
	
	/* JS */
function validar() {
	var email = formContact.email.value;
	var mensagem = formContact.mensagem.value;

	if ((email != "") &&  (mensagem != "")) {
		alert("Mensagem enviada com sucesso! 📨📨");
	} else {
		alert("🛑🛑 Para que a mensagem seja enviada, deves preencher os campos corretamente. 🛑🛑");
	}
}
function despedida() {
	alert("Obrigado por ter visitado o meu portfolio. 🙏🙏")
}

