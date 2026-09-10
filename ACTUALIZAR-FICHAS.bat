@echo off
chcp 65001 >nul
title Lucmar - Actualizar fichas de producto
cd /d "%~dp0"
echo.
echo   Actualizando las fichas de /p/ y sus vistas previas de WhatsApp...
echo.
node herramientas\exportar-catalogo.js
if errorlevel 1 goto error
python herramientas\generar-fichas.py
if errorlevel 1 goto error
echo.
echo   Listo. Ya puedes pedir el deploy y subir la web.
echo.
pause
exit /b 0
:error
echo.
echo   *** Algo fallo. Copia el mensaje de arriba y enviaselo a Claude. ***
echo.
pause
exit /b 1