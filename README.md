# Hollow Knight Web 🌑🦗

Aplicación web temática de **Hollow Knight**, desarrollada con **Node.js + Express**, 
empaquetada en **Docker** y desplegada en **Render**.  
Incluye **Infraestructura como Código** (Terraform) y **pipeline de CI** con pruebas automáticas.

---

##  Enlace a la aplicación desplegada

- URL pública: `https://hollow-knight-web.onrender.com/`


## Estructura del repositorio

```text
hollow-knight-web/
├─ public/                  # Frontend estático (HTML, CSS, JS)
├─ server.js                # Servidor Express
├─ package.json             # Dependencias y scripts
├─ Dockerfile               # Imagen Docker de la app
├─ README.md                # Este archivo
├─ tests/
│  └─ server.test.js        # Pruebas unitarias con Jest + Supertest
└─ infra-hollow-knight/     # Terraform para infraestructura en la nube (AWS)
   ├─ main.tf
   ├─ network.tf
   ├─ ecs.tf
   ├─ rds.tf
   ├─ security.tf
   ├─ acm.tf
   ├─ route53.tf
   ├─ variables.tf
   └─ outputs.tf
