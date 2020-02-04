$("#subscribeform").submit(function(e) {
	e.preventDefault();
  
	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function() {
	  alert("Que bom que você está aqui, fique atento(a) ao seu e-mail!");
	});
  
	$("#subscribeform")[0].reset();
  });
  