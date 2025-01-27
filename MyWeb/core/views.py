from django.shortcuts import render, get_object_or_404, redirect
from .models import Producto
from .forms import ProductoForm

# Create your views here.
		
from django.shortcuts import render

def inicio(request):
    return render(request, 'inicio.html')

def informacion(request):
    return render(request, 'informacion.html')

def contacto(request):
    return render(request, 'contacto.html')

def registro(request):
    return render(request, 'registro.html')


# Vistas para CRUD de productos


def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos/lista.html', {'productos': productos})

def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('listar_productos')
    else:
        form = ProductoForm()
    return render(request, 'productos/formulario.html', {'form': form})

def editar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    if request.method == 'POST':
        form = ProductoForm(request.POST, request.FILES, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('listar_productos')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'productos/formulario.html', {'form': form})

def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    if request.method == 'POST':
        producto.delete()
        return redirect('listar_productos')

def tienda(request):
    # Aquí podrías agregar lógica relacionada con los productos, por ejemplo.
    productos = Producto.objects.all()  # O cualquier lógica que necesites para la tienda.
    return render(request, 'tienda.html', {'productos': productos})
