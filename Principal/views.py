from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext

def inicio(request):
	return render_to_response( 'index.html', context_instance = RequestContext( request ) )

def orden(request):
	return render_to_response( "orden_de_trabajo.html", context_instance = RequestContext( request ) )

def login(request):
	return render_to_response( "login.html", context_instance = RequestContext( request ) )

def listar_orden(request):
	return render_to_response( "listar_orden.html", context_instance = RequestContext( request ) )