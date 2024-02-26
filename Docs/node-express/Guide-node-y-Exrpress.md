# Node.js + Express Documentation

## Introducción
******
## Tabla de contenidos
1.  [Introducción](#introducción)
2.  [Tabla de contenidos](#tabla-de-contenidos)
3.  [Instalaciones](#instalaciones)
    1.  [Node.js](#node-js)
        1. [Que es Node.js](#que-es-node-js)
        2. [Instalación de Node.js](#instalación-de-node-js)
    2.  [Express](#express)
        1. [Que es Express](#que-es-express)
        2. [Instalación de Express](#instalación-de-express)
    3. [Utilizacion de node + express](#utilizacion-de-node--express)
        1. [Primer hola mundo](#primer-hola-mundo)
        2. [Enviar una respuesta a la clienta](#enviar-una-respuesta-a-la-clienta)
        3. [Enviar ficheros al Client](#enviar-ficheros-al-client)
        3. [Enviar JSON Response](#enviar-json-response)
        5. [Trabajar con HTTP Headers](#como-trabajar-con-http-headers)
            1. [Acceder a los valores de los encabezados HTTP desde una request](#acceder-a-los-valores-de-los-encabezados-http-desde-una-request)
            2. [Cambiar cualquier encabezado HTTP por una respuesta](#enviar-encabezados-http-desde-una-request)
        6. [Manejar las redirecciones](#como-manejar-las-redirecciones)
        7. [Routing en Express](#routing-en-express)
        8. [Middleware en Express](#middleware-en-express)
4. [Ejercicio](#ejercicio)
### Node.js
![node](https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/node/logo.png)
#### Que es Node.js

[Node](https://nodejs.org/en) ***es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript. La ejecución en tiempo real está pensada para usarse fuera del contexto de un explorador web (es decir, ejecutarse directamente en una computadora o sistema operativo de servidor). Como tal, el entorno omite las APIs de JavaScript específicas del explorador web y añade soporte para APIs de sistema operativo más tradicionales que incluyen HTTP y bibliotecas de sistemas de ficheros.***

#### Instalación de Node.js
para instalar Node.js, sigue este enlace: [Node.js](https://nodejs.org/en/download/)

### Express

#### Que es Express
[Express](https://expressjs.com/) ***es el framework web más popular de Node, y es la librería subyacente para un gran número de otros [frameworks web de Node](https://expressjs.com/en/resources/frameworks.html) populares. Proporciona mecanismos para:***
  - ***Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).***
  - ***Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.***
  - ***Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.***
  - ***Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.***

#### Instalación de Express
***para instalar Express, sigue los seguintes pasos:***
 - cree un directorio para que contenga la aplicación y conviértalo en el directorio de trabajo.
 ```
 mkdir express
 cd express
 ```
 - creacion de un archivo package.json que contiene información sobre la aplicación.
 ```
 npm init -y 
 ```
 **(-y para que no se pida confirmación y lo entraga por defecto)**
 - instala Express
 ```
 npm install express
 ```  
### tilizacion de node + express

### Primer hola mundo
- **El primer ejemplo que vamos a crear es un servidor web Express simple.**
```
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hola mundo!");
})
app.listen(3000,()=>{
  console.log("Servidor corriendo en el puerto 3000");
})
```
- **Después de guardar esto en un archivo index.js en la carpeta root de tu proyecto, para iniciar el servidor puede usar este comando:**
```
node index.js
```
- **En este caso, el servidor se inicia en el puerto 3000 en el localhost , y deberia mostrar el mensaje: Hola mundo.**

> El código hace mucho detrás de escena.  
> Primero, importamos el paquete express al valor express.  
> Creamos una instancia de una aplicación llamando al método express().  
> Una vez que tenemos el objeto de la aplicación, le decimos que escuche las solicitudes GET en la ruta /, usando el método get().  

 ### Enviar una respuesta a la clienta
 **En el ejemplo de Hola Mundo, utilizamos el método send() del objeto Respuesta para enviar una cadena simple como respuesta y cerrar la conexión:**
```
(req, res) => {
  res.send("Hola mundo!");
}
```
>***Si pasa una String, establece el encabezado Content-Type en text/html.***  
>***Si pasa un objeto o una matriz, establece el encabezado application/json Content-Type y analiza ese parámetro en JSON.***  
>***Después de esto, send() cierra la conexión.***  
>***send() establece automáticamente el encabezado de respuesta HTTP Content-Length, a diferencia de end() que requiere que usted haga eso.***
### Enviar ficheros al Client
***Express proporciona un método útil para transferir un archivo como archivo adjunto:***
```
Response.download().
```
***Una vez que un usuario llega a una ruta que envía un archivo utilizando este método, los navegadores le pedirán que lo descargue.***
***El método Response.download() le permite enviar un archivo adjunto a el request y el navegador, en lugar de mostrarlo en la página, lo guardará en el disco.***
```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.download('./fechero.pdf'))
app.listen(3000, () => console.log('Server ready'))
```	
### Enviar JSON Response
***Cuando escucha conexiones en una ruta en Express,la función callback recibe dos argumentos: la petición y la respuesta.***
```
app.get('/', (req, res) => {
  res.send('hola mundo!')
})
```
***Aquí utilizamos el método Response.send(), que acepta cualquier cadena.***   
***Puede enviar JSON al cliente utilizando Response.json(), un método útil.***  
***Acepta un objeto o matriz y lo convierte a JSON antes de enviarlo:***
```
response.json({ color: 'amarillo' })
```
### Como trabajar con HTTP Headers
#### Acceder a los valores de los encabezados HTTP desde una request
***Puede acceder a todos los encabezados HTTP utilizando la propiedad Request.headers***
```
app.get('/', (req, res) => {
  console.log(req.headers)
})
```
***Utilice el método Request.header() para acceder al valor del encabezado de una solicitud individual:***
```
app.get('/', (req, res) => {
  req.header('Accept')
})
```
#### Cambiar cualquier encabezado HTTP por una respuesta
***Puede cambiar cualquier valor del encabezado HTTP usando Response.set():***
```
app.get('/', (req, res) => {
  res.set('Accept', 'text/html')
})
```
***hay un acceso directo para el encabezado Content-Type :***
```
res.type('.html')
// => 'text/html'

res.type('html')
// => 'text/html'

res.type('json')
// => 'application/json'

res.type('application/json')
// => 'application/json'

res.type('png')
// => image/png:
```	
### Como manejar las redirecciones
***Las redirecciones son comunes en el desarrollo web. Puedes crear una redirección usando el método Response.redirect():***
```
res.redirect('/go-to-some-where')
```
***este mecanismo redirigirá al usuario a la ruta /go-to-some-where.***
***para redirigir al 301 status, use :***
```
res.redirect(301, '/go-to-some-where')
```
>Puede especificar una ruta absoluta (/ir-allí),   una URL absoluta (https://anothersite.com),   una ruta relativa (ir-allí) o usar .. para retroceder un nivel:
> ```
> res.redirect(301, 'https://anothersite.com')
> res.redirect(301, '/go-to-some-where')
> res.redirect(301, 'go-to-some-where')
> res.redirect(301, '../go-to-some-where')
> ```	
***También puede redirigir nuevamente al valor del encabezado HTTP de referencia (por defecto / si no está configurado) usando:***
```
res.redirect('back')
```
### Routing en Express
***Routing es el proceso de determinar qué debe suceder cuando se llama a una URL, o también qué partes de la aplicación deben manejar una solicitud entrante específica.***
***En el ejemplo de Hola Mundo usamos este código:***
```
app.get('/', (req, res) => { ...})
```
***Esto crea una ruta que asigna el acceso a la URL del dominio raíz/utilizando el método HTTP GET a la respuesta que queremos proporcionar.***
### Middleware en Express
***Un middleware es una función que se conecta al proceso de enrutamiento y realiza una operación arbitraria en algún punto de la cadena (dependiendo de lo que queramos que haga).***
***Se usa comúnmente para editar los objetos de solicitud o respuesta, o finalizar la solicitud antes de que llegue al código del controlador de ruta.***
***El middleware se agrega a la pila de ejecución de la siguiente manera:***
```
app.use((req, res, next) => { /* */ })
```
***Esto es similar a definir una ruta, pero además de las instancias de los objetos Solicitud y Respuesta, también tenemos una referencia a la siguiente función de middleware, que asignamos a la variable siguiente.***
***Siempre llamamos a next() al final de nuestra función de middleware, para pasar la ejecución al siguiente controlador. Esto es a menos que queramos finalizar prematuramente la respuesta y enviarla de vuelta al cliente.***
***Normalmente se utiliza middleware prediseñado, en forma de paquetes npm. Puedes encontrar una gran lista de los disponibles aquí.***
***Un ejemplo es el analizador de cookies, que se utiliza para analizar las cookies en el objeto req.cookies. Puedes instalarlo usando npm install cookie-parser y lo usas así:***
```
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
app.get('/', (req, res) => res.send('Hello World!'))
app.use(cookieParser())
app.listen(3000, () => console.log('Server ready'))
```
***We can also set a middleware function to run for specific routes only (not for all), by using it as the second parameter of the route definition:***
```
const myMiddleware = (req, res, next) => {
  /* ... */
  next()
}
app.get('/', myMiddleware, (req, res) => res.send('Hello World!'))
```
***If you need to store data that's generated in a middleware to pass it down to subsequent middleware functions, or to the request handler, you can use the Request.locals object. It will attach that data to the current request:***
```
req.locals.name = 'John'
```
# Ejercicio
1. ***Cree un servidor web Express que responda con el mensaje "Hola, mundo!"***
2. ***amplie este codigo para tener dos rutas.***
3. ***Implementar una función middleware que registre el método de solicitud, la URL y la marca de tiempo para cada solicitud entrante. Utilice este middleware para las dos rutas creadas.***
4. ***Cree una ruta /api/info que responda con un objeto JSON que contenga información sobre su aplicación (por ejemplo, nombre, versión, descripción).***