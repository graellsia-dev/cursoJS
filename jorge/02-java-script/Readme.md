# Introducción

Es un lenguaje de programación creado para ser ejecutado en un navegador. Actualmente se puede usar para todo el stack tecnológico de una web (Full Stack).

Para programar en JavaScript debemos crear archivos con extensión `.js`.

## Integración en una página web

Para poder enlazar JS en una página web tenemos principalemente dos vías:

- Escribir el código JS dentro de una etiqueta HTML llamada `script`

```html
<script>
    console.log('hello world');
</script>
```

- Crear una archivo JS aparte y enlazarlo utilizando tambien la etiqueta `script`

```js
console.log('hello world');
```

```html
<script src="URL_ARCHIVO_JS" >
```
## Intrucciones previas
Hay varias instrucciones que debemos saber antes de empezar a programar:
- `document.write('Aqui dentro escribimos HTML')`: Sirve para escribir HTML y mandarlo a la página web para su visualización. Sera nuestra forma de mandar la salida de nuestro ejercicios a través de HTML.
- `alert('Escribir mensaje')`: Manda a la web un popup para enviar un mensaje al usuario.
- `prompt('Escribir aqui la pregunta')`: Esta es la forma que vamos a utilizar en esta parte del curso para solicitar información al usuario.
- `console.log('Pinta en la consola del F12 cualquier cosa que pongamos')`