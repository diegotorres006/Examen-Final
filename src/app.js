let pedido = [];
let total = 0;

let comandas = [
    { turno: 101, items: ['2x Pollo Volador Especial (Sin cebolla)'], estado: 'En Preparación' },
    { turno: 102, items: ['1x Salchipapa XL (Extra salsa)'], estado: 'En Preparación' }
];

let facturas = [
    { turno: 101, fecha: '2026-07-23 18:10', total: 7.00, clave: '2307202601179000000000120010010000000011234567811', estado: 'AUTORIZADO' },
    { turno: 102, fecha: '2026-07-23 18:15', total: 2.50, clave: '2307202601179000000000120010010000000021234567811', estado: 'AUTORIZADO' }
];

function cambiarTab(tabName, evt) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    evt.currentTarget.classList.add('active');
    if (tabName === 'kds') renderizarKDS();
    if (tabName === 'sri') renderizarSRI();
}

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
    const itemsNombres = pedido.map(i => i.nombre);
    comandas.push({ turno, items: itemsNombres, estado: 'En Preparación' });
    
    const fechaActual = '2026-07-23 18:30';
    const claveAcceso = '230720260117' + Math.floor(Math.random() * 10000000000000000);
    facturas.push({ turno, fecha: fechaActual, total, clave: claveAcceso, estado: 'AUTORIZADO' });

    alert(`Pago procesado con éxito. Turno #${turno}`);
    pedido = [];
    total = 0;
    renderizarPedido();
}

function renderizarKDS() {
    const grid = document.getElementById('grid-cocina');
    grid.innerHTML = '';
    comandas.forEach((c, index) => {
        const card = document.createElement('div');
        card.className = `kds-card ${c.estado === 'Listo' ? 'listo' : ''}`;
        card.innerHTML = `
            <h3>Turno #${c.turno}</h3>
            <p><strong>Estado:</strong> ${c.estado}</p>
            <ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <button onclick="cambiarEstadoComanda(${index})">${c.estado === 'En Preparación' ? 'Marcar Listo' : 'Entregado'}</button>
        `;
        grid.appendChild(card);
    });
}

function cambiarEstadoComanda(index) {
    if (comandas[index].estado === 'En Preparación') {
        comandas[index].estado = 'Listo';
    } else {
        comandas.splice(index, 1);
    }
    renderizarKDS();
}

function renderizarSRI() {
    const tabla = document.getElementById('tabla-sri');
    tabla.innerHTML = '';
    facturas.forEach(f => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${f.turno}</td>
            <td>${f.fecha}</td>
            <td>$${f.total.toFixed(2)}</td>
            <td><small>${f.clave}</small></td>
            <td><span class="badge-autorizado">${f.estado}</span></td>
        `;
        tabla.appendChild(tr);
    });
}