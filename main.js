function agregarUltimasCotizaciones() {
  var ultimsaCotizaciones = document.getElementById("ultimasCotizaciones");
  ultimsaCotizaciones.innerHTML = "";

  var cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];
  for (let i = cotizaciones.length - 1; i > 0; i--) {
    const item = cotizaciones[i];
    var li = document.createElement("li");
    var text = document.createTextNode(
      "moneda: " +
        item.moneda +
        " - cotizacion: " +
        item.cotizacion +
        " - valor: " +
        item.valor +
        " - total: " +
        item.resultado
    );
    li.appendChild(text);

    ultimsaCotizaciones.appendChild(li);
  }
}

agregarUltimasCotizaciones();

function guardarCotizacion(moneda, cotizacion, valor, resultado) {
  var key = "cotizaciones";
  var cotizaciones = JSON.parse(localStorage.getItem(key)) || [];
  cotizaciones.push({ moneda, cotizacion, valor, resultado });
  localStorage.setItem(key, JSON.stringify(cotizaciones));
}

function convertir() {
  var valores = parseInt(document.getElementById("valor").value);
  if (valores) {
    jQuery
      .ajax({
        url: "./cotizacion.json",
        dataType: "text",
      })
      .done(function (data) {
        var cotizaciones = JSON.parse(data);
        var dolar = cotizaciones.dolar;
        var euro = cotizaciones.euro;
        var resultado = 0;
        if (document.getElementById("Dolar").checked) {
          resultado = valores / dolar;
          alert("El cambio de Pesos a Dolares es de $" + resultado.toFixed(2));
          guardarCotizacion("Dolar", dolar, valores, resultado);
          agregarUltimasCotizaciones();
          return;
        } else if (document.getElementById("Euro").checked) {
          resultado = valores / euro;
          alert("El cambio de Pesos a Euros es de $" + resultado.toFixed(2));
          guardarCotizacion("Euro", euro, valores, resultado);
          agregarUltimasCotizaciones();
          return;
        }
      })
      .fail(function (error) {
        console.log("error", error);
      });
  } else {
    alert("Por favor ingresa un valor");
  }
}

$(document).ready(() => {
  $("#cotizar").click(function () {
    $("#titulo").css({ "text-shadow": "3px 3px 6px grey" });
  });
});
