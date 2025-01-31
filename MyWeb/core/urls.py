from django.urls import path
from django.contrib.auth.views import LogoutView
from .views import ProductoListView, ProductoCreateView, ProductoUpdateView, ProductoDeleteView, CustomLoginView, registro_usuario

urlpatterns = [
    path('productos/', ProductoListView.as_view(), name='producto_lista'),
    path('productos/nuevo/', ProductoCreateView.as_view(), name='producto_crear'),
    path('productos/editar/<int:pk>/', ProductoUpdateView.as_view(), name='producto_editar'),
    path('productos/eliminar/<int:pk>/', ProductoDeleteView.as_view(), name='producto_eliminar'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='producto_lista'), name='logout'),
    path('registro/', registro_usuario, name='registro'),
]