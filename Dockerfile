# 1. Imagen base (Node.js)
FROM node:20-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --only=production

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Definir el puerto que expone la app (mismo que usa server.js)
EXPOSE 8080

# 7. Comando para iniciar la aplicación
CMD [ "npm", "start" ]
