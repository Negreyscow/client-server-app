var campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade")
];

document.querySelector(".form").addEventListener("submit", function(event) {
  event.preventDefault();
  var tb = document.querySelector("tbody");
  var tr = document.createElement("tr");
  campos.forEach(function(campo) {
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVol = document.createElement("td");
  tdVol.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVol);

  tb.appendChild(tr);
});
