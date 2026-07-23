CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    pin VARCHAR(10) NOT NULL
);

CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos (
    id_pedido SERIAL PRIMARY KEY,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(30) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    metodo_pago VARCHAR(30) NOT NULL,
    id_usuario INT REFERENCES usuarios(id_usuario)
);

CREATE TABLE detalle_pedidos (
    id_detalle SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES pedidos(id_pedido),
    id_producto INT REFERENCES productos(id_producto),
    cantidad INT NOT NULL,
    personalizacion TEXT,
    subtotal DECIMAL(10,2) NOT NULL
);

CREATE TABLE comprobantes (
    id_comprobante SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES pedidos(id_pedido),
    clave_acceso VARCHAR(49) NOT NULL,
    estado_sri VARCHAR(30) NOT NULL,
    fecha_emision TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, rol, pin) VALUES 
('Juan Diego Torres', 'Cajero', '1234'),
('Carlos Perez', 'Cocinero', '5678'),
('Admin General', 'Administrador', '0000');

INSERT INTO productos (nombre, precio, categoria) VALUES 
('Pollo Volador Especial', 3.50, 'Platos Fuertes'),
('Salchipapa XL', 2.50, 'Platos Fuertes'),
('Papas Lomo', 3.50, 'Platos Fuertes'),
('Gaseosa 500ml', 1.00, 'Bebidas'),
('Extra Salsa de Piña', 0.50, 'Extras');

INSERT INTO pedidos (estado, total, metodo_pago, id_usuario) VALUES 
('Entregado', 7.00, 'Efectivo', 1),
('En Preparacion', 3.50, 'Transferencia', 1);

INSERT INTO detalle_pedidos (id_pedido, id_producto, cantidad, personalizacion, subtotal) VALUES 
(1, 1, 2, 'Sin cebolla, mayonesa de ajo', 7.00),
(2, 3, 1, 'Extra salsa', 3.50);

INSERT INTO comprobantes (id_pedido, clave_acceso, estado_sri) VALUES 
(1, '2307202601179000000000120010010000000011234567811', 'AUTORIZADO');