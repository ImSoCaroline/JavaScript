$(document).ready(function(){
	$('#btn-add').on('click',function(){
		var valor = $('#new-item').val();
		$('#lista').append('<li>'+valor+'<input type="checkbox" id="tachar"><p>Tachar</p><button id="btn-borrar">Eliminar</button></li>');
		$('#new-item').val(" ");
	});

	function borrar(){
		$(this).parent().remove();
	};

	$(document).on('click','#btn-borrar',borrar);
});