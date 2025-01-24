from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
	path('tienda/', views.tienda, name='tienda'),
    path('informacion/', views.informacion, name='informacion'),
    path('contacto/', views.contacto, name='contacto'),
    path('registro/', views.registro, name='registro'),
    path('productos/', views.listar_productos, name='listar_productos'),
    path('producto/nuevo/', views.crear_producto, name='crear_producto'),
    path('producto/editar/<int:id>/', views.editar_producto, name='editar_producto'),
    path('producto/eliminar/<int:id>/', views.eliminar_producto, name='eliminar_producto'),
]
