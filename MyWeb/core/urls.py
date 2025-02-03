from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('informacion/', views.informacion, name='informacion'),
	path('tienda/', views.tienda, name='tienda'),
    path('contacto/', views.contacto, name='contacto'),
    path('registro/', views.registro, name='registro'),
    path('carrito/', views.carrito, name='carrito'),
    path('productos/', views.listar_productos, name='listar_productos'),
    path('producto/nuevo/', views.crear_producto, name='crear_producto'),
    path('producto/editar/<int:id>/', views.editar_producto, name='editar_producto'),
    path('producto/eliminar/<int:id>/', views.eliminar_producto, name='eliminar_producto'),

]