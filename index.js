document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    
    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var tarjeta = document.getElementById("tarjeta").value;
    var cvv = document.getElementById("cvv").value;
    var mes = document.getElementById("mes").value;
    var año = document.getElementById("año").value;
    
    // Mostrar los valores en la consola
    console.log("Nombre:", nombre);
    console.log("Tarjeta:", tarjeta);
    console.log("CVV:", cvv);
    console.log("Mes:", mes);
    console.log("Año:", año);
  });
