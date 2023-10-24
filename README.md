# ShibuyaGo_Mendoza_008D

Pasos a seguir:
primero asegurarse de que este instalado ionic 6 abriendo la consola y poniendo primero
npm uninstall -g ionic
y luego
npm install -g @ionic/cli@6

Luego en la carpeta data instalar json server con el siguiente comando:
npm install -g json-server
para despues abrir el server de json con:
json-server --watch tellevoapp.json --host 0.0.0.0 --port 3300

finalmente ejecutar aplicacion con:
ionic lab
