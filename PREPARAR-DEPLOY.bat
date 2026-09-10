@echo off
chcp 65001 >nul
title Lucmar - Preparar carpeta para subir a produccion
cd /d "%~dp0"

echo.
echo  ============================================
echo   LUCMAR - Preparar la web para subirla
echo  ============================================
echo.
echo  [1 de 4] Subiendo la version de los archivos (para que el navegador
echo           de tus clientes vea los cambios y no una copia guardada)...
echo.
python herramientas\subir-version.py
if errorlevel 1 goto error

echo.
echo  [2 de 4] Actualizando las fichas de producto...
echo.
node herramientas\exportar-catalogo.js
if errorlevel 1 goto error
python herramientas\generar-fichas.py
if errorlevel 1 goto error

for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd"') do set FECHA=%%i
set DESTINO=%USERPROFILE%\Downloads\lucmar-deploy-%FECHA%

echo.
echo  [3 de 4] Copiando la web a:
echo    %DESTINO%
echo.

robocopy "%CD%" "%DESTINO%" /MIR /XD ".git" ".claude" ".vscode" "_originales" "herramientas" /XF "admin.html" ".gitignore" "README.md" "escalabilidad-lucmar.md" "esc" "desktop.ini" "Thumbs.db" "ACTUALIZAR-FICHAS.bat" "PREPARAR-DEPLOY.bat" /NFL /NDL /NJH /NP >nul
if errorlevel 8 goto error

rem La fecha de la carpeta se pone a hoy: si no, Windows copia la del proyecto
rem y la carpeta aparece agrupada en un dia viejo dentro de Descargas.
powershell -NoProfile -Command "$d=Get-Date; (Get-Item '%DESTINO%').LastWriteTime=$d; Get-ChildItem '%DESTINO%' -Directory -Recurse | ForEach-Object { $_.LastWriteTime=$d }" >nul

echo.
echo  [4 de 4] Comparando con lo que ya esta publicado en lucmar.net...
echo.
node herramientas\comparar-con-produccion.js

echo.
echo  ============================================
echo   LISTO
echo  ============================================
echo.
echo   La carpeta esta en Descargas:
echo     lucmar-deploy-%FECHA%
echo.
echo   Sube TODO lo que hay DENTRO de esa carpeta
echo   a public_html en Hostinger.
echo.
echo   Ojo: incluye el archivo .htaccess, que esta
echo   oculto. Sin el se pierden la compresion y
echo   la cache.
echo.
explorer "%DESTINO%"
pause
exit /b 0

:error
echo.
echo   *** Algo fallo. Copia el mensaje de arriba y enviaselo a Claude. ***
echo.
pause
exit /b 1
