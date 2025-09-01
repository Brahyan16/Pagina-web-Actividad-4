<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";   
$password = "";      
$dbname = "coltech_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Datos del formulario
$nombres = $_POST['nombres'];
$ciudad = $_POST['ciudad'];
$direccion = $_POST['direccion'];
$celular = $_POST['celular'];

// Procesar productos
if (isset($_POST['producto'])) {
    foreach ($_POST['producto'] as $key => $value) {
        if (!empty($_POST['cantidad'][$key])) {
            $producto = $value; // El nombre del producto
            $cantidad = $_POST['cantidad'][$key];

            // Insertar en la base de datos
            $sql = "INSERT INTO cotizaciones (nombres, ciudad, direccion, celular, producto, cantidad)
                    VALUES ('$nombres', '$ciudad', '$direccion', '$celular', '$producto', '$cantidad')";

            if ($conn->query($sql) === TRUE) {
                echo "Cotización registrada: $producto - Cantidad: $cantidad<br>";
            } else {
                echo "Error: " . $conn->error;
            }
        }
    }
} else {
    echo "No seleccionaste ningún producto.";
}

header("Location: index.html");
exit();

$conn->close();
?>


