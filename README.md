# Sistema de Gestión "Pollo Express" - El Pollo Volador

Sistema de gestión de pedidos, pantalla de turnos y facturación electrónica desarrollado para el restaurante de comida rápida "El Pollo Volador" ubicado en la ciudad de Cuenca, Ecuador.

## Arquitectura del Sistema
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Base de Datos:** PostgreSQL / SQLite
- **Despliegue:** Microsoft Azure Cloud (BD) + Servidor Local POS

## Módulos Principales
1. **Punto de Venta (POS):** Toma de pedidos, personalización de ingredientes y cobro.
2. **Pantalla de Cocina (KDS):** Visualización y cambio de estados de comandas en tiempo real.
3. **Visor de Turnos:** Proyección visual de turnos listos para el cliente.
4. **Facturación Electrónica:** Generación y envío de comprobantes al SRI.

## Estructura de la Base de Datos
El respaldo completo de la base de datos con las tablas `usuarios`, `productos`, `pedidos`, `detalle_pedidos` y `comprobantes` se encuentra en la carpeta `/database/backup.sql`.

## Instalación y Ejecución Local
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/diegotorres006/Examen-Final.git](https://github.com/diegotorres006/Examen-Final.git)