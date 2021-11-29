# APICOLORS - Challenges
![Node.js logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg)

Este repositorio contiene el api del desafio de API de colores de Multiplica, desarrollado con Node.js y express.
Se usa MongoDB Atlas para la base de datos. Esta no permite crear el id, es por eso que se usa los IDs que arroja la base de datos.

### Características

- Ruta **/colors**: Aqui puedes obtener el listado de colores a traves del metodo GET y pueden a traves del POST crear nuevos colores en la base de datos.
- Ruta **/colors/id**: Este end point te permitira obtener sólo la información del color del id ingresado. 


## Comandos de compilación
Sobre la raíz del repositorio ejecutar los siguientes comandos:

```bash
# instalación de dependencias
$ npm install

# correr servidor con port reload en localhost:3000
$ npm run dev

# compilar para producción e iniciar servidor
$ npm run dev
$ npm run start

```

### 5.1 `/` - EJEMPLOS DE PETICIONES Y RESPUESTA

#### 5.1.3 `/colors`
Enlista todos los colores de la base de datos en formato json

* `GET /colors`

```sh
https://api-colors-app.herokuapp.com/colors

Body Response
 [
    {
        "_id": "61a47468cc400dd601e09bf4",
        "name": "cerulean",
        "color": "#98B2D1"
    },
    {
        "_id": "61a47481cc400dd601e09bf7",
        "name": "fuchsia rose",
        "color": "#C74375"
    },
    {
        "_id": "61a474e8cc400dd601e09bfa",
        "name": "true red",
        "color": "#BF1932"
    }
]

```

* `GET /colors/:id`

```sh
https://api-colors-app.herokuapp.com/colors/61a474e8cc400dd601e09bfa
(Require el id que proporciona mongoDB Atlas)


Body Response

{
    "_id": "61a474e8cc400dd601e09bfa",
    "name": "true red",
    "year": 2002,
    "color": "#BF1932",
    "pantone_value": "19-1664"
}
```


* `POST /colors`

```sh

https://api-colors-app.herokuapp.com/colors
(Permite crear colores nueva a la base de datos)

Body

{
    "name": "lila",
    "year": 2022,
    "color": "#98B2F3",
    "pantone_value": "15-6420"
}

Body Response 

{
    "_id": "61a49abe8449e21e17ce400b",
    "name": "lila",
    "year": 2022,
    "color": "#98B2F3",
    "pantone_value": "15-6420",
    "__v": 0
}
```

### Vista previa

En el siguiente link se disponibiliza el api desplegada en Heroku:

https://api-colors-app.herokuapp.com/
