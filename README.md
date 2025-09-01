# Pagina-web-Actividad-4
Solucion a la Actividad 4 de Lenguajes Para la WEB

## ⚙️ Requisitos

- PHP 7.4 o superior
- MySQL 5.7 o superior
- Servidor local (XAMPP, WAMP, MAMP o Laragon)

---

## 📂 Instalación

1. Clonar o descargar este proyecto y colocarlo en la carpeta `htdocs` de tu servidor local (ejemplo: `C:\xampp\htdocs\ColTech`).

2. Iniciar **Apache** y **MySQL** desde el panel de control de tu servidor (XAMPP, WAMP, etc.).

3. Crear la base de datos en MySQL:

   - Abre [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   - Crea una nueva base de datos llamada **coltech_db**
   - Dentro de la base de datos crea una tabla llamada cotizaciones

---

O si lo prefieres aqui tiene el Script de SQL

## 📑 Script SQL

```sql
CREATE DATABASE IF NOT EXISTS coltech_db;
USE coltech_db;

CREATE TABLE cotizaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    celular VARCHAR(20) NOT NULL,
    producto VARCHAR(50) NOT NULL,
    cantidad INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

