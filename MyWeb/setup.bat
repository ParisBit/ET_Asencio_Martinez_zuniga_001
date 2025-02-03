@echo off

:: Instalar Pillow si no está instalado
pip install Pillow

:: Iniciar el servidor de desarrollo de Django
python manage.py runserver

pause
