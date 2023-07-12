import { cuentas } from './data.js';

window.onload = function () {
    var cuentasSelect = document.getElementById("cuentasSelect")
    for (let i = 0; i < cuentas.length; i++) {
        var opt = cuentas[i].numeroCuenta;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        cuentasSelect.appendChild(el);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var accountForm = document.getElementById('accountForm');
    accountForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        validateAccount();
    });
});

function validateAccount() {
    var numeroCuentaSeleccionada = document.getElementById("cuentasSelect").value
    var password = document.getElementById("password").value
    const cuenta = cuentas.find((c) => c.numeroCuenta == numeroCuentaSeleccionada)
    if (cuenta) {
        if (cuenta.password === password) {
            // Contraseña correcta, redirigir a "inicio.html"
            window.location.href = "inicio.html?numeroCuenta=" + encodeURIComponent(cuenta.numeroCuenta);
        } else {
            alert("Contraseña incorrecta. Inténtelo de nuevo.");
        }
    }
    // Devuelve false para evitar que el formulario se envíe automáticamente
    return false;
}




