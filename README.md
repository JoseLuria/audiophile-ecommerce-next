# 🤖 Audiophile e-commerce website challenge

Una tienda con productos de audio creada con NextJs usando Static site generation, Next API, Middelwares, TypeScript, Tailwind y Mongoose para persistir la información en una base de datos de MongoDB.

[Puedes ver el sitio en línea aquí]()

## 🖼️ Screenshots

![Audiophile ecommerce](./public/preview.jpg)

## 🚀 ¿Como usar?

Primero clona el repositorio desde GitHub.

```shell
git clone https://github.com/respository-name
```

Muévete a la carpeta del proyecto.

```shell
cd folder-name
```

Instala las dependencias con el siguiente comando:

```shell
npm install
```

Por último, inicia el servidor con el siguiente comando:

```shell
npm run dev
```

## 💾 Configurando la base de datos con Docker (Opcional)

*Para realizar este paso es obligatorio tener [Docker](https://www.docker.com/products/docker-desktop/) instalado, de igual forma puedes usar tu propia base de datos local o de MongoDB Atlas.*

La aplicación hace uso de una base de datos de MongoDB, de forma opcional puedes usar el archivo docker-compose.yml para levantar una base de datos de forma local con el siguiente comando:

```shell
docker-compose up -d
```

La base de datos se iniciara en el puerto *27017* y la información de la base de datos se almacenara en la carpeta **mongo**.

Para conectarte a la base de datos desde Next JS necesitas configurar el string de conexión, para ello debes crear un archivo **.env** con una variable de entorno llamada *MONGO_URL*, puedes abrir el archivo **.env.example** para ver un ejemplo con todas las variables de entorno.

El string de conexión quedaría así:

```text
MONGO_URL=mongodb://localhost:27017/audiophiledb 
```

## 💽 Usando la API para crear los datos de los productos y categorías

Next JS te permite crear una API en la aplicación para de esta manera tener el Frontend y Backend en el mismo lugar, para crear los datos con la información de los productos y categorías puedes usar el siguiente enpoint usando una petición *POST*:

```shell
http://localhost:3000/api/seed
```

En el archivo **data.ts** en la carpeta **database** puedes encontrar el arreglo con todos los datos de los productos y categorías.

[La documentación completa de la API la puedes encontrar en la aquí]()

## ⚙️ Esta aplicación fue construida usando las siguientes tecnologías

- [Next Js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/docs/animation/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [MongoDB](https://www.mongodb.com/)

## 📄 Licencia

[MIT](https://opensource.org/licenses/MIT)
