from Principal.models import Cliente, Empresa
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
import json
def inicio(request):
	return render_to_response( 'index.html', context_instance = RequestContext( request ) )

def orden(request):
	return render_to_response( "orden_de_trabajo.html", context_instance = RequestContext( request ) )

def login(request):
	return render_to_response( "login.html", context_instance = RequestContext( request ) )

def listar_orden(request):
	return render_to_response( "listar_orden.html", context_instance = RequestContext( request ) )
def listar_cliente(request):
	cliente = Cliente.objects.all()
	return render_to_response( "listar_cliente.html",{'cliente':cliente}, context_instance = RequestContext( request ) )
def cliente(request):
	return render_to_response( "cliente.html", context_instance = RequestContext( request ) )


def guardar_cliente(request):
	nit = request.GET['nit']
	nombre_cliente = request.GET['nombre_cliente']
	apellido_cliente = request.GET['apellido_cliente']
	cliente = Cliente(nombre = nombre_cliente, apellido = apellido_cliente, nit = nit)
	cliente.save()
	razon_social = request.GET['razon_social']
	telefono = request.GET['telefono']
	direccion = request.GET['direccion']
	ciudad = request.GET['ciudad']
	empresa = Empresa( dueno = cliente, razon_social = razon_social, telefono = telefono, direccion = direccion, ciudad = ciudad) 
	empresa.save()
	return HttpResponseRedirect('/listar_cliente')

def ver_cliente(request, id_persona):
	identificacion = id_persona
	cliente = Cliente.objects.get(id = identificacion)
	negocios =  Empresa.objects.all().filter( dueno = id_persona)
	ne = Empresa.objects.all()
	for i in negocios:
		print i.razon_social
	print cliente.nombre
	print "-----------------"
	response = { "id":cliente.id,"nombre" : cliente.nombre, "apellido" : cliente.apellido, "nit" : cliente.nit }
	return render_to_response( "ver_cliente.html", {'datos':response, "negocios":negocios} , context_instance = RequestContext( request ) )
def guardar_empresa(request):
	tipo = request.GET['tipo']
	razon_social = request.GET['razon_social']
	telefono = request.GET['telefono']
	direccion = request.GET['direccion']
	ciudad = request.GET['ciudad']
	print tipo
	response = { "id_cliente":"" }

	if tipo == "1":
		id_empresa = request.GET[ 'id_empresa' ]
		empresa = Empresa.objects.get( id= id_empresa )
		empresa.telefono = telefono
		empresa.direccion = direccion
		empresa.ciudad = ciudad
		empresa.save()
		print empresa.dueno.id
		response = { "id_cliente" : empresa.dueno.id }

	elif tipo == "2":
		id_cliente = request.GET['id_cliente']
		print '---------------'
		print id_cliente
		cliente = Cliente.objects.get(id = id_cliente)
		empresa = Empresa( dueno = cliente , razon_social = razon_social, telefono = telefono, direccion = direccion, ciudad = ciudad)
		empresa.save()
		response = {"id_cliente" : id_cliente}
	return  HttpResponse(json.dumps(response), mimetype = "application/json")
def buscar_empresa(request):
	id_empresa = request.GET['id_empresa']
	empresa = Empresa.objects.get(id = id_empresa)
	response = {"id":empresa.id,"razon_social":empresa.razon_social,"telefono":empresa.telefono,"direccion":empresa.direccion,"ciudad":empresa.ciudad}
	print response
	return HttpResponse(json.dumps(response), mimetype = "application/json")
def eliminar_cliente(request):
	identificacion = request.GET['id']
	cliente = Cliente.objects.get(id = identificacion)
	cliente.delete()
	response = { "exito" : identificacion }
	return HttpResponse(json.dumps(response),mimetype="application/json")
def catalogo(request):
	
	return render_to_response( "catalogo.html", context_instance = RequestContext( request ) )
