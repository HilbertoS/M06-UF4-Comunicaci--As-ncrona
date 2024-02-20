# Node.js + Express Documentation

## Introducción

## Tabla de contenidos
1. [Node.js + Express Documentation](#nodejs--express-documentation)
  1. [Tabla de contenidos](#tabla-de-contenidos)
  2. [Introducción](#introducción)
    1. [Node.js](##nodejs)
      1. [Que es Node.js](#que-es-nodejs)
      2. [Instalación](#instalación-de-nodejs)
      3. [utilidades de Node.js](#utilidades-de-nodejs)
      4. [ejemplos de Node.js](#ejemplos-de-nodejs) 
    2. [Express](##express)
      1. [Que es Express](#que-es-express)
      2. [Instalación de Express](#instalación-de-express)
      3. [utilidades de Express](#utilidades-de-express)
      3. [ejemplos de Express](#ejemplos-de-express)
  3. [utilisa de Node.js + Express](#utiliza-de-nodejs--express)
    1. [Hola Mundo en Express](#hola-mundo-en-express)
    2. [Rutas en Express](#ruta-get-en-express)
    3. [Middleware en Express](#middleware-en-express)
    4. [Manejar errores en Express](#manejando-errores-en-express)
    5. [usas de base de datos en Express](#usas-de-base-de-datos-en-express)
    6. [vistas en Express](#vistas-en-express)
    

  4. [Conclusion](#conclusion)

## Node.js
![node](https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/node/logo.png)
### Que es Node.js

[Node](https://nodejs.org/en) ***es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript. La ejecución en tiempo real está pensada para usarse fuera del contexto de un explorador web (es decir, ejecutarse directamente en una computadora o sistema operativo de servidor). Como tal, el entorno omite las APIs de JavaScript específicas del explorador web y añade soporte para APIs de sistema operativo más tradicionales que incluyen HTTP y bibliotecas de sistemas de ficheros.***

### Instalación de Node.js

[Node.js](https://nodejs.org/en/download/)

## Express

### Que es Express
[Express](https://expressjs.com/) ***es el framework web más popular de Node, y es la librería subyacente para un gran número de otros [frameworks web de Node](https://expressjs.com/en/resources/frameworks.html) populares. Proporciona mecanismos para:***
  - ***Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).***
  - ***Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.***
  - .***Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.***
  - ***Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.***
  ```	

 %% ```	
  | Request | Handler | Response |
  | -------- | ------- | -------- |
  | GET      |         |          |
  | POST     |         |          |
  | PUT      |         |          |
  | DELETE   |         |          |
  ```%%
 