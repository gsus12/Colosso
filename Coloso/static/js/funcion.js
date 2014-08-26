$(document).ready(function() {
	var estado = 0;
	$("#barra_nav ul li").click(function(){
		$("#barra_nav ul li").removeClass("active");
		$(this).addClass("active");
	})
	$("#guardar_orden").click(function(){
		
		if ($("#recibida_por").val() == "") {
			$("#recibida_por").focus();
		}else{
			if ($("#fecha_recibido").val() == "") {
				$("#fecha_recibido").focus();
			}else{
				if ($("#fecha_entrega").val() == "") {
					$("#fecha_entrega").focus();
				}else{
					if ($("#hora_entrega").val() == "") {
						$("#hora_entrega").focus();
					}else{
						if ($("#razon_social").val() == "") {
							$("#razon_social").focus();
						}else{
							if ($("#telefono_cliente").val() == "") {
								$("#telefono_cliente").focus();
							}else{
								if ($("#responsable").val() == "") {
									$("#responsable").focus();
								}else{
									if ($("#tipo_orden").val() == "") {
										$("#tipo_orden").focus();
									}else{
										if ($("#cantidad_trabajo").val() == "") {
											$("#cantidad_trabajo").focus();
										}else{
											if ($("#trabajo_realizar").val() == "") {
												$("#trabajo_realizar").focus();
											}else{
												if ($("#cantidad_master").val() == "") {
													$("#cantidad_master").focus();
												}else{
													if ($("#tamano_master").val() == "") {
														$("#tamano_master").focus();
													}else{
														if ($("#cantidad_moldes").val() == "") {
															$("#cantidad_moldes").focus();
														}else{
															if ($("#tamano_corte").val() == "") {
																$("#tamano_corte").focus();
															}else{
																if ($("#tamano_trabajo").val() == "") {
																	$("#tamano_trabajo").focus();
																}else{
																	var recibida_por = $("#recibida_por").val();	
																	var fecha_recibido = $("#fecha_recibido").val();	
																	var fecha_entrega = $("#fecha_entrega").val();	
																	var hora_entrega = $("#hora_entrega").val();	
																	var razon_social = $("#razon_social").val();	
																	var telefono_cliente = $("#telefono_cliente").val();	
																	var responsable = $("#responsable").val();	
																	var tipo_orden = $("#tipo_orden").val();	
																	var cantidad_trabajo = $("#cantidad_trabajo").val();	
																	var trabajo_realizar = $("#trabajo_realizar").val();	
																	var cantidad_master = $("#cantidad_master").val();	
																	var tamano_master = $("#tamano_master").val();	
																	var cantidad_moldes = $("#cantidad_moldes").val();	
																	var tamano_corte = $("#tamano_corte").val();	
																	var tamano_trabajo = $("#tamano_trabajo").val();	
																	var emblocado =$('#emblocado').prop('checked');
																	var perforado =$('#perforado').prop('checked');
																	var engrapado =$('#engrapado').prop('checked');
																	var suelta =$('#suelta').prop('checked');
																	var engomado =$('#engomado').prop('checked');
																	var troquelado =$('#troquelado').prop('checked');
																	var juegos = $("#juegos").val();	
																	var otro_acabado = $("#otro_acabado").val();	
																	var original = $("#original").val();	
																	var cantidad_original = $("#cantidad_original").val();
																	var copia = "pendiente";
																	var cantidad_copia = "pendiente";	
																	var otro_papel = $("#otro_papel").val();	
																	var cantidad_otro = $("#cantidad_otro").val();	
																	var sobrante = $("#sobrante").val();	
																	var tamano_corte = $("#tamano_corte").val();	
																	var tamano_trabajo = $("#tamano_trabajo").val();	
																	var color_tinta = $("#color_tinta").val();	
																	var opcional =$('#opcional').prop('checked');
																	var segun_muestra =$('#segun_muestra').prop('checked');
																	var retiro =$('#retiro').prop('checked');
																	var numero_inicio = $("#numero_inicio").val();	
																	var numero_fin = $("#numero_fin").val();	
																	// var  = $("#").val();	
																	// var  =$('#').prop('checked');
																	guardar_orden(recibida_por,fecha_recibido,fecha_entrega,hora_entrega,responsable,tipo_orden,cantidad_trabajo,trabajo_realizar,cantidad_master,tamano_master,cantidad_moldes,tamano_corte,tamano_trabajo,emblocado,perforado,engrapado,suelta,engomado,troquelado,juegos,otro_acabado,original,cantidad_original,copia,cantidad_copia,otro_papel,cantidad_otro,sobrante,tamano_corte,tamano_trabajo,color_tinta,opcional,segun_muestra,retiro,numero_inicio,numero_fin);
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
	
	$("#guardar_cliente").click(function(){
		if ($("#nit").val() == ""){
			$("#nit").focus();
		}else{
			if ($("#nombre_cliente").val() == ""){
				$("#nombre_cliente").focus();
			}else{
				if ($("#apellido_cliente").val() == "") {
					$("#apellido_cliente").focus();
				}else{
					var razon_social = $("#razon_social");
					var telefono = $("#telefono");
					var direccion = $("#direccion");
					var ciudad = $("#ciudad");
					var nit = $("#nit");
					var nombre_cliente = $("#nombre_cliente");
					var apellido_cliente = $("#apellido_cliente");
					guardar_cliente(nit,nombre_cliente,apellido_cliente,razon_social,telefono,direccion,ciudad);
				}
			}
		}
	});
	$(".modificar_empresa").click(function(){
		id_empresa = $(this).attr("id");
		$.ajax({
			url:'/buscar_empresa/',
			type:'GET',
			data:"id_empresa="+id_empresa,
			success: function(data){
				$("#formulario_nueva_empresa").css("display","block");
				$("#razon_social").val(data.razon_social);
				$("#telefono").val(data.telefono);
				$("#direccion").val(data.direccion);
				$("#ciudad").val(data.ciudad);
				$("#razon_social").prop("disabled","disabled");
				$(".guardar_modificacion_empresa").css('display','inline-block');
				$(".guardar_modificacion_empresa").attr("id",id_empresa);
				$("#guardar_nueva_empresa").css("display","none");
			}
		})
	});
	$(".guardar_modificacion_empresa").click(function(){
		
		var razon_social = $("#razon_social");
		var telefono = $("#telefono");
		var direccion = $("#direccion");
		var ciudad = $("#ciudad");
		var id_empresa = $(this).attr("id");
		var tipo = {
			attr : "id",
			val : "1"
		};
		alert(id_empresa);
		guardar_empresa(id_empresa,razon_social,telefono,direccion,ciudad,tipo);
	})
	$(".ver").click(function(){
		alert($(this).attr("id"));
		$.ajax({
			url:'/ver_cliente/',
			type:"get",
			data:"id="+$(this).attr("id"),
			success: function (data){
				var url='/agregar_cliente/';
				redirigir(url, function(){
					alert("-_-");	
				});
				// for(var i in data){
				// 	contener = data[i];
				// 	$("#nit").val(contener.nit);
				// 	$("#nombre_cliente").val(contener.nombre);
				// 	$("#apellido_cliente").val(contener.apellido);
				// }					
			}
		})
	});
	$("#mas_empresa").click(function(){
		$("#formulario_nueva_empresa").css("display","block");
		$("#guardar_nueva_empresa").css("display","inline-block");
		$(".guardar_modificacion_empresa").css("display","none");
		limpiador();
		$("#razon_social").prop("disabled",false);

	})
	$("#guardar_nueva_empresa").click(function(){
		var razon_social = $("#razon_social");
		var telefono = $("#telefono");
		var direccion = $("#direccion");
		var ciudad = $("#ciudad");
		var id_cliente = $("#id_cliente");
		
		var tipo = {
			attr : "id",
			val : "2"
		};
		guardar_empresa(id_cliente,razon_social,telefono,direccion,ciudad,tipo);
		
	})
	function limpiador(){
		$("#razon_social").val("");
		$("#telefono").val("");
		$("#direccion").val("");
		$("#ciudad").val("");
		
	}
	
	function guardar_empresa(){
		var tipo = arguments[5].val;
		var datos = "tipo="+tipo+"&&";
		var tope= arguments.length;
		var i = 0;
		if (tipo == "1") {
			i = 1;
			datos = datos + "id_empresa="+arguments[0]+"&&";
		}
		for ( i ; i<tope-1; i ++)
		{	
			datos = datos + arguments[i].attr("id")+"="+arguments[i].val() +"&&";
		}
		alert(datos);
		$.ajax({
			url:'/guardar_empresa/',
			type:'GET',
			data:datos,
			success: function(data){
				
				var url = "/ver_cliente/"+data.id_cliente;				
				redirigir(url);
			}
		})
	}
	$("#cancelar_nueva_empresa").click(function(){
		$("#formulario_nueva_empresa").css("display","none");
	})
	$(".eliminar").click(function(){
		id = $(this).attr("id");
		$.ajax({
			url:"/eliminar_cliente/",
			data: "id="+id,
			type: "GET",
			success: function(respuesta){
				var url = '/listar_cliente/';
				redirigir(url);
				contener = data;
				alert ('se elimino correctamente el usuario con el id '+contener.exito);
			}
		});
	})
	function guardar_orden(){
		for (var i = 0; i < arguments.length; i++) {
			datos = datos + arguments[i].attr("id")+"="+arguments[i].val() + "&&";
		}
		$.ajax({
			url:'/guardar_orden/',
			type:'GET',
			data:'',

			success: function(data){
				alert('todo bien');
			},
		});
	}
	function guardar_cliente(){
		datos = ""
		for (var i = 0; i < arguments.length; i++) {
			datos = datos + arguments[i].attr("id")+"="+arguments[i].val() + "&&";
		}
		alert(datos);
		$.ajax({
			url:'/guardar_cliente/',
			type:'GET',
			data:datos,
			success: function(data){
				var url='/listar_cliente/';
				$(location).attr('href',url);
			}
		})
	}
	function redirigir(url){
		$(location).attr('href',url);
		
	}

});
