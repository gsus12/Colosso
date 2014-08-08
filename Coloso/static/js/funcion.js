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
	$(".ver").click(function(){
		alert($(this).attr("id"));
		$.ajax({
			url:'/ver_cliente/',
			type:"get",
			data:"id="+$(this).attr("id"),
			success: function (data){
				var url='/agregar_cliente/';
				$(location).attr('href',url);
				for(var i in data){
					contener = data[i];
					$("#nit").val("contener.nit");
					$("#nombre_cliente").val(contener.nombre);
					$("#apellido_cliente").val(contener.apellido);
				}					
			}
		})
	});
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
		// alert(arguments[i].attr("id"));
		// datos="nit="+arguments[0]+"&&nombre_cliente="+arguments[1]+"&&apellido_cliente="+arguments[2]+"&&razon_social="+arguments[3]+"&&telefono="+arguments[4]+"&&direccion="+arguments[5]+"&&ciudad="+arguments[6];
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

});
