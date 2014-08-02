from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
	nombre_usuario = models.CharField( max_length = 40 )
	primer_nombre = models.CharField( max_length = 40 )
	segundo_nombre = models.CharField( max_length = 40 )
	primer_apellido = models.CharField( max_length = 40 )
	segundo_apellido = models.CharField( max_length = 40 )
	direccion = models.CharField( max_length = 20 )
	telefono = models.IntegerField( )

	def __unicode__( self ):
		return self.nombre_usuario

class Cliente(models.Model):
	razon_social = models.CharField( max_length = 40 )
	telefono = models.IntegerField( )
	direccion = models.CharField( max_length = 40 )

class Trabajo(models.Model):
	nombre = models.CharField( max_length = 40 )
	dueno = models.ForeignKey( Cliente )
	emblocado = models.BooleanField( )
	perforado = models.BooleanField( )
	engrapado = models.BooleanField( )
	hoja_suelta = models.BooleanField( )
	engomado = models.BooleanField( )
	troquelado = models.BooleanField( )
	por_juego = models.IntegerField( )
	otro = models.CharField( max_length = 10 )
	original = models.CharField( max_length = 40 )
	numero_copias = models.IntegerField( )
	copias = models.CharField( max_length = 40 )
	tamano_trabajo = models.IntegerField( )
	tipo_trabajo = models.CharField( max_length = 20 )

class Orden( models.Model ):
	recibida_por = models.CharField( max_length = 30 )
	fecha_recibido = models.DateField( )
	fecha_entrega = models.DateField( )
	hora_entrega = models.TimeField( )
	razon_social = models.ForeignKey( Cliente )
	ordenado_por = models.CharField( max_length = 40 )
	medio_orden = models.CharField( max_length = 30 )
	trabajo_a_realizar = models.ForeignKey( Trabajo )
	cantidad_trabajo = models.IntegerField( )
	cantidad_de_master = models.IntegerField( )
	tamano_master = models.IntegerField( )
	cantidad_original = models.IntegerField( )
	cantidad_moldes = models.IntegerField( )
	cantidad_copias = models.CharField( max_length = 40 )
	sobrante = models.IntegerField( )
	tamano_corte = models.IntegerField( )
	tinta = models.CharField( max_length = 40 )
	tinta_opcional = models.BooleanField( )
	segun_muestra = models.BooleanField( )
	retiro = models.BooleanField( )
	prefijo = models.CharField( max_length = 40 )
	numero_inicio = models.IntegerField( max_length = 40 )
	numero_fin = models.IntegerField( max_length = 40 )
