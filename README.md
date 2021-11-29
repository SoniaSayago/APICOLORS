# APICOLORS
 
#### 1.1.5 `/colors`

* `GET /colors`

```sh
https://nodejs-bq-api.herokuapp.com/orders?limit=2&page=1
https://api-colors-app.herokuapp.com/colors
 
``` 

* `GET /colors/:id`

```sh
https://api-colors-app.com/colors/60daadaefc51e50015689eda

 

Body Response

{
}

``` 

* `POST /colors`

```sh
https://nodejs-bq-api.herokuapp.com/colors


Body 

{
    "name": "azul",
    "year": 2012,
    "color": "#98B2D2",
    "pantone_value": "15-4420"
}


Body Response

{
    "id": ,
    "name": "azul",
    "year": 2012,
    "color": "#98B2D2",
    "pantone_value": "15-4420"  
}

``` 

### Vista previa

En el siguiente link se disponibiliza una compilación de sitio estático para demostración desplegado en Heroku:

https://api-colors-app.herokuapp.com/
