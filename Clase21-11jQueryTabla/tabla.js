/*$(document).ready(function(){
	$('.boton1').on('click',function(){
		$('.fila1').addClass('rm');
		//var btnId = $(this).attr('id');
						  //prop('id');
		//alert(btnId);
	});
});*/

$(document).ready(function(){
	$('.boton').on('click',function(){
		//var btnId = $(this).prop('id');
		//var trId = '#registro_'+btnId;
		//$(trId).hide(2000,function(){
		//	alert('Resgistro eliminado');
		//});
		var btnId = $(this).data('rg');
		$(btnId).hide();
	});

	$('.btnEditar').on('click',function(){
		$('input').prop('disabled',true);
		var fila = $(this).data('rg');
		$(fila).prop('disabled',false);
	});

	$('#nuevo').on('click',function(){
		var tr = '<tr id="registro_x"><td><input type="text" id="namex" class="rgx" value=" " disabled></td><td><input type="text" id="apellidox" class="rgx" value=" " disabled></td><td><input type="text" id="edadx" class="rgx" value=" " disabled></td><td><button id="bx" class="boton" data-rg="#registro_x">Borrar fila</button> <button id="ex" class="btnEditar" data-rg=".rgx">Editar fila</button></td></tr>';
		$('#registro').append(tr);
	});
});
