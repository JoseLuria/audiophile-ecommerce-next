# 🤖 Audiophile e-commerce website challenge

Una tienda con productos de audio creada con NextJs usando Static site generation, Next API, Next Middelwares, TypeScript, Tailwind y Mongoose para persistir la información en una base de datos de MongoDB.

[Puedes ver el sitio en línea aquí](https://github.com/joseluria/audiophile-ecommerce-next.git)

## 🖼️ Screenshots

![Audiophile ecommerce](./public/preview.jpg)

## 🚀 ¿Como usar?

Primero clona el repositorio desde GitHub.

```shell
git clone https://github.com/joseluria/audiophile-ecommerce-next.git
```

Muévete a la carpeta del proyecto.

```shell
cd audiophile-ecommerce-next
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

_Para realizar este paso es obligatorio tener [Docker](https://www.docker.com/products/docker-desktop/) instalado, de igual forma puedes usar tu propia base de datos local o de MongoDB Atlas._

Puedes usar el archivo **docker-compose.yml** para levantar una base de datos de forma local con el siguiente comando:

```shell
docker-compose up -d
```

La base de datos se iniciara en el puerto _27017_ y la información de la base de datos se almacenara en la carpeta **mongo**.

Para conectarte a la base de datos desde Next JS necesitas configurar el string de conexión, para ello debes crear un archivo **.env** con una variable de entorno llamada _MONGO_URL_, puedes abrir el archivo **.env.example** para ver un ejemplo con todas las variables de entorno.

El string de conexión quedaría así:

```text
MONGO_URL=mongodb://localhost:27017/audiophiledb
```

## 💽 Usando la API para crear los datos de los productos y categorías

Next JS te permite crear una API en la aplicación para de esta manera tener el Frontend y Backend en el mismo lugar, para crear los datos con la información de los productos y categorías puedes usar el siguiente enpoint usando una petición _POST_:

🚨 Esta funcionalidad solo sirve en el entorno de desarrollo.

```shell
http://localhost:3000/api/seed
```

En el archivo **data.ts** en la carpeta **database** puedes encontrar el arreglo con todos los datos de los productos y categorías.

## 🧾 Creando las órdenes

Puedes crear una orden al momento de realizar la compra con el siguiente endpoint usando una petición _POST_:

```bash
http://localhost:3000/api/order
```

A considerar:

- 🚨 Ninguno de los datos proporcionados por el usuario se guardarán en la base de datos a excepción del nombre del usuario. La lista de productos y el total de la orden.

- 📨 En caso de que el email sea válido, deberías de recibir un correo de confirmación de la compra.

## ⚙️ Esta aplicación fue construida usando las siguientes tecnologías

- [Next Js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/docs/animation/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Yup](https://github.com/jquense/yup)
- [Nodemailer](https://nodemailer.com/about/)
- [MongoDB](https://www.mongodb.com/)

## 📄 Licencia

[MIT](https://opensource.org/licenses/MIT)
