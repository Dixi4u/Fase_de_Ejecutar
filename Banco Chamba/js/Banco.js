document.querySelector('#cajero').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const billetes = calcularBilletes(cantidad);

    document.getElementById('billetes100Resultado').textContent = billetes.billetes100;
    document.getElementById('billetes50Resultado').textContent = billetes.billetes50;
    document.getElementById('billetes20Resultado').textContent = billetes.billetes20;
    document.getElementById('billetes10Resultado').textContent = billetes.billetes10;
    document.getElementById('billetes5Resultado').textContent = billetes.billetes5;
    document.getElementById('billetes1Resultado').textContent = billetes.billetes1;

    document.getElementById('resultado').classList.remove('d-none');
});

function calcularBilletes(cantidad) {
    const billetes100 = Math.floor(cantidad / 100);
    cantidad %= 100;
    const billetes50 = Math.floor(cantidad / 50);
    cantidad %= 50;
    const billetes20 = Math.floor(cantidad / 20);
    cantidad %= 20;
    const billetes10 = Math.floor(cantidad / 10);
    cantidad %= 10;
    const billetes5 = Math.floor(cantidad / 5);
    cantidad %= 5;
    const billetes1 = cantidad;

    return {
        billetes100,
        billetes50,
        billetes20,
        billetes10,
        billetes5,
        billetes1
    };
}