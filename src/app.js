let pedido = [];
let total = 0;

function agregarProducto(nombre, precio) {
    pedido.push({ nombre, precio });
    total += precio;
    renderizarPedido();
}

function renderizarPedido() {
    const lista = document.getElementById('lista-pedido');
    lista.innerHTML = '';
    pedido.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        lista.appendChild(li);
    });
    document.getElementById('total-precio').textContent = total.toFixed(2);
}

function procesarPago() {
    if (pedido.length === 0) {
        alert('El pedido está vacío');
        return;
    }
    const turno = Math.floor(Math.random() * 900) + 100;
    alert(`Pago procesado con éxito. Número de Turno: #${turno}`);
    pedido = [];
    total = 0;
    renderizarPedido();
}