# Hollow Knight Web 

Aplicación web temática basada en el videojuego **Hollow Knight**, desarrollada con **Node.js y Express**, contenerizada con **Docker**, desplegada en **Render** y con **Integración Continua (CI)** mediante **GitHub Actions**.

Este proyecto forma parte de una práctica académica orientada a la implementación de **contenedores**, **despliegue en la nube** y **automatización de pruebas**.

---

## Enlace a la aplicación desplegada

**URL pública (Render):**  
https://hollow-knight-web.onrender.com

---

## Características principales

- Aplicación web funcional sin dependencias externas.
- Interfaz temática con personajes de Hallownest.
- Imágenes locales servidas desde `public/img`.
- Funciona de forma idéntica en:
  - entorno local,
  - contenedor Docker,
  - hosting en la nube (Render).
- Pipeline de Integración Continua con GitHub Actions.
- Repositorio organizado y documentado.

---

## Tecnologías utilizadas

- Node.js
- Express
- HTML / CSS / JavaScript
- Docker
- Render
- GitHub
- GitHub Actions
- Jest / Supertest (pruebas unitarias)
- Terraform (Infraestructura como Código – evidencia académica)

---

## Estructura del proyecto

```text
hollow-knight-web/
├─ public/
│  ├─ index.html
│  └─ img/
│     ├─ Grimm_Idle.webp
│     ├─ hollow.webp
│     ├─ Hornet_Idle.webp
│     ├─ vessel.webp
│     └─ zote.jpg
├─ server.js
├─ package.json
├─ Dockerfile
├─ .dockerignore
├─ tests/
│  └─ server.test.js
├─ .github/
│  └─ workflows/
│     └─ ci.yml
└─ infra-hollow-knight/
   └─ scripts Terraform

## Ejecucion de forma local
Requisitos previos

Node.js (versión 18 o superior recomendada)
Clonar el repositorio
git clone https://github.com/AetherLynch/hollow-knight-web.git
cd hollow-knight-web

Instalar dependencias

Desde la raíz del proyecto, ejecutar:

npm install


Esto instalará todas las dependencias necesarias definidas en package.json.

Ejecutar la aplicación localmente

Iniciar el servidor con el siguiente comando:

node server.js