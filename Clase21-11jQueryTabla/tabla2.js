/*
Base de datos (?)
 */
var datos = [
    ['Claudia', 'Perez', 30],
    ['Roberto', 'Rodriguez', 40],
];

$(document).ready(function() {
    for (var i = 0; i < datos.length; i++) {
        var tr = '<tr id="registro_' + i + '"><td><input type="text" id="name' + i + '" class="rg' + i +
            '" value="' + datos[i][0] + '" disabled></td><td><input type="text" id="apellido' + i +
            '" class="rg' + i + '" value="' + datos[i][1] + '" disabled></td><td><input type="text" id="edad' + i + 
            '" class="rg' + i +'" value="' +  datos[i][2] + '" disabled></td><td><button id="borrar' + i + 
            '" class="btnBorrar" data-rg="#registro_'+i+'">Borrar fila</button>' +
            '<button id="editar' + i + '" class="btnEditar" data-rg=".rg' + i + '">Editar fila</button>';
        $('#tabla').append(tr);
    }

	$('.btnEditar').on('click',function(){
		$('input').prop('disabled',true);
		var fila = $(this).data('rg');
		$(fila).prop('disabled',false);
	});

	$('.btnBorrar').on('click',function(){
		var btnId = $(this).data('rg');
		$(btnId).hide();
	});

	$('#nuevo').on('click',function(){
		var array = [];
		array.push($('#nn').val());
		array.push($('#an').val());
		array.push($('#en').val());
		console.log(array);
	});
});