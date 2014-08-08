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
    url(r'^ver_cliente', 'Principal.views.ver_cliente', name='vcliente'),
    url(r'^login','Principal.views.login', name='login'),
    url(r'^listar_orden','Principal.views.listar_orden', name='listar_orden'),
    url(r'^listar_cliente','Principal.views.listar_cliente', name='listar_cliente'),
    url(r'^guardar_orden','Principal.views.guardar_orden', name='guardar_orden'),

    # url(r'^Coloso/', include('Coloso.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.MEDIA_ROOT,})
)
