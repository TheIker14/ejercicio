let valor = 0;

function incrementar() {
    valor++;
    actualizar();
}

function decrementar() {
    valor--;
    actualizar();
}

function resetear() {
    valor = 0;
    actualizar();
}

function actualizar() {
    document.getElementById("contador").textContent = valor;
}
