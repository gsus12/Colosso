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
	# print negocios.nombre
	print cliente.nombre
	print "-----------------"
	response = { "nombre" : cliente.nombre, "apellido" : cliente.apellido, "nit" : cliente.nit }
	# return HttpResponse(json.dumps(response),mimetype="application/json")
	return render_to_response( "ver_cliente.html", {'datos':response, "negocios":negocios} , context_instance = RequestContext( request ) )

def eliminar_cliente(request):
	identificacion = request.GET['id']
	cliente = Cliente.objects.get(id = identificacion)
	cliente.delete()
	response = { "exito" : identificacion }
	return HttpResponse(json.dumps(response),mimetype="application/json")