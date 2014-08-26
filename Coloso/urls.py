from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'Principal.views.inicio', name='inicio'),
    url(r'^orden_de_trabajo', 'Principal.views.orden', name='orden'),
    url(r'^agregar_cliente', 'Principal.views.cliente', name='cliente'),
    url(r'^guardar_cliente', 'Principal.views.guardar_cliente', name='gcliente'),
    url(r'^guardar_empresa', 'Principal.views.guardar_empresa', name='gempresa'),
    url(r'^buscar_empresa', 'Principal.views.buscar_empresa', name='bempresa'),
    url(r'^ver_cliente/(?P<id_persona>\w+)$', 'Principal.views.ver_cliente', name='vcliente'),
    url(r'^eliminar_cliente', 'Principal.views.eliminar_cliente', name='ecliente'),
    url(r'^login','Principal.views.login', name='login'),
    url(r'^listar_orden','Principal.views.listar_orden', name='listar_orden'),
    url(r'^listar_cliente','Principal.views.listar_cliente', name='listar_cliente'),
    url(r'^guardar_orden','Principal.views.guardar_orden', name='guardar_orden'),
    url(r'^catalogo','Principal.views.catalogo', name='catalogo'),
     
    # url(r'^Coloso/', include('Coloso.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.MEDIA_ROOT,})
)
