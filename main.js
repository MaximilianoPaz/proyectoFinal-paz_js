function convertir() {
  var valores = parseInt(document.getElementById("valor").value);
  var resultado = 0;
  var dolar = 104.25;
  var euro = 120;
  if (document.getElementById("Dolar").checked) {
    resultado = valores / dolar;
    alert("El cambio de Pesos a Dolares es de $" + resultado.toFixed(2));
  } else if (document.getElementById("Euro").checked) {
    resultado = valores / euro;
    alert("El cambio de Pesos a Euros es de $" + resultado.toFixed(2));
  } else {
    alert("Por favor ingresa un valor");
  }
}

$(document).ready(() => {
  $("#cotizar").click(function () {
    $("#titulo").css({ "text-shadow": "3px 3px 6px grey" });
  });
});
