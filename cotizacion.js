// ── Datos de la empresa (fijos) ───────────────────────────────────────────────
const EMPRESA = {
  nombre: 'ARJONA S.A.S',
  nit: '860046904-1',
  direccion: 'CALLE 63 BIS # 71 A 31',
  telefono: '601 2510753  601 5657188',
  email: 'info@jabonesarjona.com',
  ciudad: 'Bogotá',
  vendedor: 'Eva Morales',
  cargo: 'Líder de Mercadeo',
  telVendedor: '(601)2510753  Cel 3008612476',
  emailVendedor: 'mercadeo@jabonesarjona.com',
};

const LOGO_BASE64 = 'data:image/jpeg;base64,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';

// ── Estado global ─────────────────────────────────────────────────────────────
let proformas = [];
let proformaActual = null;
let contador = 1;

// ── Persistencia (localStorage) ───────────────────────────────────────────────
function guardar() {
  localStorage.setItem('arjona_proformas', JSON.stringify(proformas));
  localStorage.setItem('arjona_contador', String(contador));
}

function cargar() {
  try {
    const p = localStorage.getItem('arjona_proformas');
    const c = localStorage.getItem('arjona_contador');
    if (p) proformas = JSON.parse(p);
    if (c) contador = parseInt(c) || 1;
  } catch (e) {
    proformas = [];
    contador = 1;
  }
}

// ── Utilidades ────────────────────────────────────────────────────────────────
function formatCOP(n) {
  return '$' + Math.round(n || 0).toLocaleString('es-CO');
}

function fechaHoy() {
  return new Date().toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function generarNumero() {
  const num = String(contador).padStart(3, '0');
  contador++;
  return '555-' + num;
}

// ── Crear nueva proforma ──────────────────────────────────────────────────────
function nuevaProforma() {
  const p = {
    id: Date.now(),
    numero: generarNumero(),
    tipoDocumento: 'Proforma',
    fecha: fechaHoy(),
    estado: 'borrador', // 'borrador' | 'finalizado'
    cliente: {
      empresa: '',
      nit: '',
      nombre: '',
      direccion: '',
      email: '',
      telefono: '',
    },
    items: [
      { id: Date.now() + 1, cantidad: '', detalle: '', nota: '', vrUnit: '', total: 0 },
    ],
    notas: ['', '', ''],
    solicitud: 'Orden de Compra.',
    fechaEntrega: '2 días después de la orden de compra.',
    formaPago: 'De contado.',
    vigencia: '30 días a partir de la fecha.',
    firma: {
      nombre: EMPRESA.vendedor,
      cargo: EMPRESA.cargo,
      telefono: EMPRESA.telVendedor,
      email: EMPRESA.emailVendedor,
    },
  };
  proformas.unshift(p);
  guardar();
  renderSidebar();
  abrirProforma(p.id);
}

// ── Abrir proforma ────────────────────────────────────────────────────────────
function abrirProforma(id) {
  proformaActual = id;
  renderSidebar();
  const p = proformas.find((x) => x.id === id);
  if (p) renderFormulario(p);
}

// ── Finalizar ticket ──────────────────────────────────────────────────────────
function finalizarProforma(id) {
  if (!confirm('¿Finalizar este ticket? No podrás editarlo después.')) return;
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  p.estado = 'finalizado';
  guardar();
  renderSidebar();
  renderFormulario(p);
}

// ── Eliminar proforma ─────────────────────────────────────────────────────────
function eliminarProforma(id) {
  if (!confirm('¿Eliminar esta proforma del historial?')) return;
  proformas = proformas.filter((x) => x.id !== id);
  proformaActual = null;
  guardar();
  renderSidebar();
  mostrarEstadoVacio();
}

function eliminarProformasSeleccionadas() {
  const checkboxes = document.querySelectorAll('.chk-proforma:checked');
  if (checkboxes.length === 0) {
    alert('Selecciona al menos una proforma para eliminar.');
    return;
  }
  if (!confirm('¿Eliminar las proformas seleccionadas del historial?')) return;
  
  const ids = Array.from(checkboxes).map(chk => parseInt(chk.dataset.id));
  proformas = proformas.filter((x) => !ids.includes(x.id));
  
  if (proformaActual && ids.includes(proformaActual)) {
    proformaActual = null;
    mostrarEstadoVacio();
  } else if (!proformaActual) {
    mostrarEstadoVacio();
  }
  
  guardar();
  renderSidebar();
}

function eliminarTodasProformas() {
  if (proformas.length === 0) return;
  if (!confirm('¿Estás seguro de que deseas eliminar TODAS las proformas del sistema? Esta acción no se puede deshacer.')) return;
  proformas = [];
  proformaActual = null;
  guardar();
  renderSidebar();
  mostrarEstadoVacio();
}

// ── Actualizar campo del cliente ──────────────────────────────────────────────
function updateCliente(id, campo, val) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  p.cliente[campo] = val;
  guardar();
  renderSidebar();
}

// ── Actualizar campo general ──────────────────────────────────────────────────
function updateCampo(id, campo, val) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  p[campo] = val;
  guardar();
}

function updateTipoDocumento(id, val) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  p.tipoDocumento = val;
  guardar();
  renderSidebar();
  renderFormulario(p);
}

// ── Actualizar, Agregar y Eliminar nota ─────────────────────────────────────
function updateNota(id, idx, val) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  p.notas[idx] = val;
  guardar();
}

function agregarNota(pid) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  p.notas.push('');
  guardar();
  renderFormulario(p);
}

function eliminarNota(pid, idx) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  p.notas.splice(idx, 1);
  guardar();
  renderFormulario(p);
}

function eliminarNotasSeleccionadas(pid) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  const checkboxes = document.querySelectorAll('.chk-nota:checked');
  if (checkboxes.length === 0) {
    alert('Selecciona al menos una nota para eliminar.');
    return;
  }
  if (!confirm('¿Eliminar las notas seleccionadas?')) return;
  
  const indices = Array.from(checkboxes).map(chk => parseInt(chk.dataset.idx)).sort((a, b) => b - a);
  indices.forEach(idx => {
    p.notas.splice(idx, 1);
  });
  guardar();
  renderFormulario(p);
}

function eliminarTodasNotas(pid) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  if (!confirm('¿Estás seguro de que deseas eliminar TODAS las notas?')) return;
  p.notas = [];
  guardar();
  renderFormulario(p);
}

// ── Actualizar item y recalcular totales ──────────────────────────────────────
function updateItem(pid, iid, campo, val) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  const item = p.items.find((x) => x.id === iid);
  if (!item) return;
  item[campo] = val;
  recalcularTotales(p);
  guardar();
  renderSidebar();
  actualizarTotalesDOM(p);

  // Actualizar total de la fila
  const fila = document.getElementById('fila-' + iid);
  if (fila) {
    fila.querySelector('.col-total').textContent = formatCOP(item.total);
  }
}

function recalcularTotales(p) {
  p.items.forEach((item) => {
    const cant = parseFloat(item.cantidad) || 0;
    const vr = parseFloat(item.vrUnit) || 0;
    item.total = cant * vr;
  });
}

function actualizarTotalesDOM(p) {
  const subtotal = p.items.reduce((s, i) => s + (i.total || 0), 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;
  const elSub = document.getElementById('val-subtotal');
  const elIva = document.getElementById('val-iva');
  const elTot = document.getElementById('val-total');
  if (elSub) elSub.textContent = formatCOP(subtotal);
  if (elIva) elIva.textContent = formatCOP(iva);
  if (elTot) elTot.textContent = formatCOP(total);
}

// ── Agregar fila de item ──────────────────────────────────────────────────────
function agregarItem(pid) {
  const p = proformas.find((x) => x.id === pid);
  if (!p) return;
  const newId = Date.now();
  p.items.push({ id: newId, cantidad: '', detalle: '', nota: '', vrUnit: '', total: 0 });
  guardar();

  const tbody = document.getElementById('tbody-items');
  if (tbody) {
    const idx = p.items.length - 1;
    const tr = document.createElement('tr');
    tr.id = 'fila-' + newId;
    tr.innerHTML = htmlFilaItem(pid, p.items[idx], idx);
    tbody.appendChild(tr);
    // Renumerar
    renumerarFilas();
  }
}

// ── Eliminar fila de item ─────────────────────────────────────────────────────
function eliminarItem(pid, iid) {
  const p = proformas.find((x) => x.id === pid);
  if (!p || p.items.length <= 1) return;
  p.items = p.items.filter((x) => x.id !== iid);
  recalcularTotales(p);
  guardar();
  renderSidebar();
  renderFormulario(p);
}

function renumerarFilas() {
  const filas = document.querySelectorAll('#tbody-items tr');
  filas.forEach((tr, i) => {
    const celda = tr.querySelector('.num-item');
    if (celda) celda.textContent = i + 1;
  });
}

// ── HTML de una fila de item ──────────────────────────────────────────────────
function htmlFilaItem(pid, item, idx) {
  return `
    <td class="col-item"><span class="num-item">${idx + 1}</span></td>
    <td class="col-cant">
      <input type="number" value="${item.cantidad}" min="0"
        oninput="updateItem(${pid},${item.id},'cantidad',this.value)"
        placeholder="0">
    </td>
    <td>
      <input value="${item.detalle}"
        oninput="updateItem(${pid},${item.id},'detalle',this.value)"
        placeholder="Descripción del producto">
      <input value="${item.nota}"
        oninput="updateItem(${pid},${item.id},'nota',this.value)"
        placeholder="Nota adicional (opcional)"
        class="nota-producto">
    </td>
    <td class="col-vr">
      <input type="number" value="${item.vrUnit}" min="0"
        oninput="updateItem(${pid},${item.id},'vrUnit',this.value)"
        placeholder="0">
    </td>
    <td class="col-total">${formatCOP(item.total)}</td>
    <td class="col-del">
      <button class="btn-del" onclick="eliminarItem(${pid},${item.id})" title="Eliminar fila">✕</button>
    </td>
  `;
}

// ── Render sidebar ────────────────────────────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById('ticketList');
  if (!proformas.length) {
    list.innerHTML = '<div class="sidebar-empty">Sin documentos aún.<br>Crea uno nuevo.</div>';
    return;
  }
  list.innerHTML = proformas
    .map((p) => {
      const subtotal = p.items.reduce((s, i) => s + (i.total || 0), 0);
      const total = subtotal * 1.19;
      const badge =
        p.estado === 'finalizado'
          ? '<span class="badge badge-finalizado">Finalizado</span>'
          : '<span class="badge badge-borrador">Borrador</span>';
      return `
        <div class="ticket-item ${p.id === proformaActual ? 'activo' : ''}" style="position:relative;">
          <input type="checkbox" class="chk-proforma" data-id="${p.id}" style="position:absolute; top:15px; right:15px; width:18px; height:18px; cursor:pointer; z-index:10;" title="Seleccionar proforma" onclick="event.stopPropagation()">
          <div onclick="abrirProforma(${p.id})">
            <div class="t-num">${p.tipoDocumento || 'Proforma'} ${p.numero}</div>
            <div class="t-cliente">${p.cliente.empresa || 'Sin cliente'}</div>
            <div class="t-fecha">${p.fecha}</div>
            <div class="t-total">${formatCOP(total)}</div>
            ${badge}
          </div>
        </div>`;
    })
    .join('');
}

// ── Render formulario completo ────────────────────────────────────────────────
function renderFormulario(p) {
  const main = document.getElementById('mainContent');
  const readonly = p.estado === 'finalizado';
  const subtotal = p.items.reduce((s, i) => s + (i.total || 0), 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  main.innerHTML = `
    <!-- Toolbar -->
    <div class="toolbar">
      <span class="toolbar-titulo">
        ${p.tipoDocumento || 'Proforma'} ${p.numero} &mdash; ${p.estado === 'finalizado' ? 'Finalizado ✓' : 'En edición'}
      </span>
      ${p.estado !== 'finalizado'
      ? `<button class="btn btn-finalizar" onclick="finalizarProforma(${p.id})">Finalizar ticket</button>`
      : ''
    }
      <button class="btn btn-pdf" onclick="descargarPDF(${p.id})">⬇ Descargar PDF</button>
      <button class="btn btn-imprimir" onclick="imprimirProforma(${p.id})">🖨 Imprimir</button>
      <button class="btn btn-eliminar" onclick="eliminarProforma(${p.id})">Eliminar</button>
    </div>

    <!-- Formulario -->
    <div class="form-area ${readonly ? 'readonly' : ''}">

      <!-- Encabezado empresa -->
      <div class="empresa-header">
        <img src="${LOGO_BASE64}" alt="Logo Arjona" class="logo-img">
        <div class="empresa-info">
          <div class="empresa-nombre">${EMPRESA.nombre}</div>
          <div class="empresa-dato">NIT ${EMPRESA.nit}</div>
          <div class="empresa-dato">${EMPRESA.direccion}</div>
          <div class="empresa-dato">Tels ${EMPRESA.telefono}</div>
          <div class="empresa-dato"><a href="mailto:${EMPRESA.email}">${EMPRESA.email}</a></div>
          <div class="empresa-dato">${EMPRESA.ciudad}</div>
        </div>
        <div class="proforma-num">
          <label>Documento No.</label>
          <div class="num-grande">${p.numero}</div>
          <label style="margin-top:10px;display:block;">Tipo de documento</label>
          <select style="margin-top:5px; padding:5px; border-radius:4px; border:1px solid #ccc; width:100%; font-family: inherit; font-size: 13px;" onchange="updateTipoDocumento(${p.id}, this.value)" ${readonly ? 'disabled' : ''}>
            <option value="Proforma" ${p.tipoDocumento === 'Proforma' || !p.tipoDocumento ? 'selected' : ''}>Proforma</option>
            <option value="Cotización" ${p.tipoDocumento === 'Cotización' ? 'selected' : ''}>Cotización</option>
            <option value="Orden de compra" ${p.tipoDocumento === 'Orden de compra' ? 'selected' : ''}>Orden de compra</option>
          </select>
          <label style="margin-top:10px;display:block;">Fecha</label>
          <div class="fecha-display">${p.fecha}</div>
        </div>
      </div>

      <!-- Datos del cliente -->
      <div class="seccion">
        <div class="seccion-titulo">Datos del cliente</div>
        <div class="grid-2">
          <div class="campo">
            <label>Empresa</label>
            <input value="${p.cliente.empresa}"
              oninput="updateCliente(${p.id},'empresa',this.value)"
              placeholder="Nombre de la empresa">
          </div>
          <div class="campo">
            <label>NIT</label>
            <input value="${p.cliente.nit}"
              oninput="updateCliente(${p.id},'nit',this.value)"
              placeholder="NIT">
          </div>
          <div class="campo">
            <label>Nombre contacto</label>
            <input value="${p.cliente.nombre}"
              oninput="updateCliente(${p.id},'nombre',this.value)"
              placeholder="Nombre y apellido">
          </div>
          <div class="campo">
            <label>Ciudad / Dirección</label>
            <input value="${p.cliente.direccion}"
              oninput="updateCliente(${p.id},'direccion',this.value)"
              placeholder="Ciudad o dirección">
          </div>
          <div class="campo">
            <label>E-mail</label>
            <input value="${p.cliente.email}"
              oninput="updateCliente(${p.id},'email',this.value)"
              placeholder="correo@empresa.com">
          </div>
          <div class="campo">
            <label>Teléfono</label>
            <input value="${p.cliente.telefono}"
              oninput="updateCliente(${p.id},'telefono',this.value)"
              placeholder="Teléfono">
          </div>
        </div>
      </div>

      <!-- Productos -->
      <div class="seccion">
        <div class="seccion-titulo">Productos / Servicios</div>
        <table class="tabla-productos">
          <thead>
            <tr>
              <th class="col-item">Ítem</th>
              <th class="col-cant">Cantidad</th>
              <th>Detalle</th>
              <th class="col-vr">Vr. Unit. ($)</th>
              <th class="col-total">Total</th>
              <th class="col-del"></th>
            </tr>
          </thead>
          <tbody id="tbody-items">
            ${p.items
      .map(
        (item, idx) => `
              <tr id="fila-${item.id}">
                ${htmlFilaItem(p.id, item, idx)}
              </tr>`
      )
      .join('')}
          </tbody>
        </table>
        <button class="btn-agregar-fila" onclick="agregarItem(${p.id})">+ Agregar producto</button>

        <div class="totales-box">
          <div class="total-fila">
            <span class="etiqueta">Subtotal</span>
            <span class="valor" id="val-subtotal">${formatCOP(subtotal)}</span>
          </div>
          <div class="total-fila">
            <span class="etiqueta">IVA (19%)</span>
            <span class="valor" id="val-iva">${formatCOP(iva)}</span>
          </div>
          <div class="total-final-caja" id="val-total">${formatCOP(total)}</div>
        </div>
      </div>

      <!-- Notas y condiciones -->
      <div class="seccion">
        <div class="seccion-titulo">Notas y condiciones</div>
        <div class="notas-lista">
          ${p.notas
      .map(
        (n, i) => `
            <div class="nota-fila" style="display:flex; gap:10px; margin-bottom:8px; align-items:center;">
              <input type="checkbox" class="chk-nota" data-idx="${i}" style="width:18px; height:18px; cursor:pointer;" title="Seleccionar nota">
              <input value="${n}" style="flex:1;"
                oninput="updateNota(${p.id},${i},this.value)"
                placeholder="Nota ${i + 1}">
              <button class="btn-del-nota" style="padding:0 10px; background:#ff4d4f; color:white; border:none; border-radius:4px; cursor:pointer;" onclick="eliminarNota(${p.id},${i})" title="Eliminar nota">✕</button>
            </div>`
      )
      .join('')}
          <div style="display:flex; gap:10px; margin-bottom:15px; margin-top:5px; flex-wrap:wrap;">
            <button class="btn-agregar-fila" style="width:auto; padding:8px 15px;" onclick="agregarNota(${p.id})">+ Agregar otra nota</button>
            <button style="width:auto; padding:8px 15px; background:#ff4d4f; color:white; border:none; border-radius:4px; cursor:pointer;" onclick="eliminarNotasSeleccionadas(${p.id})">Eliminar seleccionadas</button>
            <button style="width:auto; padding:8px 15px; background:#d9363e; color:white; border:none; border-radius:4px; cursor:pointer;" onclick="eliminarTodasNotas(${p.id})">Eliminar todas</button>
          </div>
          <div class="nota-fila">
            <span class="nota-etiqueta">Solicitud:</span>
            <input value="${p.solicitud}"
              oninput="updateCampo(${p.id},'solicitud',this.value)">
          </div>
          <div class="nota-fila">
            <span class="nota-etiqueta">Fecha de entrega:</span>
            <input value="${p.fechaEntrega}"
              oninput="updateCampo(${p.id},'fechaEntrega',this.value)">
          </div>
          <div class="nota-fila">
            <span class="nota-etiqueta">Forma de pago:</span>
            <input value="${p.formaPago}"
              oninput="updateCampo(${p.id},'formaPago',this.value)">
          </div>
          <div class="nota-fila">
            <span class="nota-etiqueta">Vigencia:</span>
            <input value="${p.vigencia}"
              oninput="updateCampo(${p.id},'vigencia',this.value)">
          </div>
        </div>
      </div>

      <!-- Firma -->
      <div class="seccion">
        <div class="seccion-titulo">Atentamente</div>
        <div class="firma-grid">
          <div class="campo">
            <label>Nombre</label>
            <input value="${p.firma ? p.firma.nombre : EMPRESA.vendedor}"
              oninput="updateFirma(${p.id},'nombre',this.value)"
              placeholder="Nombre del responsable">
          </div>
          <div class="campo">
            <label>Teléfono</label>
            <input value="${p.firma ? p.firma.telefono : EMPRESA.telVendedor}"
              oninput="updateFirma(${p.id},'telefono',this.value)"
              placeholder="Teléfono">
          </div>
          <div class="campo">
            <label>Cargo</label>
            <input value="${p.firma ? p.firma.cargo : EMPRESA.cargo}"
              oninput="updateFirma(${p.id},'cargo',this.value)"
              placeholder="Cargo">
          </div>
          <div class="campo">
            <label>E-mail</label>
            <input value="${p.firma ? p.firma.email : EMPRESA.emailVendedor}"
              oninput="updateFirma(${p.id},'email',this.value)"
              placeholder="correo@empresa.com">
          </div>
        </div>
      </div>

    </div><!-- /form-area -->
  `;
}


// ── Actualizar campo de firma ─────────────────────────────────────────────────
function updateFirma(id, campo, val) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;
  if (!p.firma) {
    p.firma = {
      nombre: EMPRESA.vendedor,
      cargo: EMPRESA.cargo,
      telefono: EMPRESA.telVendedor,
      email: EMPRESA.emailVendedor,
    };
  }
  p.firma[campo] = val;
  guardar();
}

// ── Estado vacío ──────────────────────────────────────────────────────────────
function mostrarEstadoVacio() {
  document.getElementById('mainContent').innerHTML = `
    <div class="estado-vacio">
      <div class="icono">📋</div>
      <p>Selecciona un documento o crea uno nuevo</p>
      <button class="btn-crear-grande" onclick="nuevaProforma()">+ Nuevo documento</button>
    </div>`;
}

// ── Generar HTML de la proforma para PDF/impresión ────────────────────────────
function generarHTMLProforma(p) {
  const subtotal = p.items.reduce((s, i) => s + (i.total || 0), 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  const filas = p.items
    .map(
      (item, idx) => `
      <tr>
        <td style="text-align:center;padding:7px 5px;border-bottom:1px dashed #c5d8ef;">${idx + 1}</td>
        <td style="padding:7px 5px;border-bottom:1px dashed #c5d8ef;text-align:center;">${item.cantidad || ''}</td>
        <td style="padding:7px 5px;border-bottom:1px dashed #c5d8ef;">
          <div style="font-weight:bold;">${item.detalle || ''}</div>
          ${item.nota ? `<div style="font-size:11px;color:#888;font-style:italic;">${item.nota}</div>` : ''}
        </td>
        <td style="padding:7px 5px;border-bottom:1px dashed #c5d8ef;text-align:right;">
          ${item.vrUnit ? '$ ' + parseFloat(item.vrUnit).toLocaleString('es-CO') : ''}
        </td>
        <td style="padding:7px 5px;border-bottom:1px dashed #c5d8ef;text-align:right;font-weight:bold;">
          ${formatCOP(item.total)}
        </td>
      </tr>`
    )
    .join('');

  const notas = p.notas
    .filter((n) => n.trim())
    .map((n) => `<div style="padding:5px 10px;border-bottom:1px solid #dce8f5;font-size:12px;">${n}</div>`)
    .join('');

  return `
    <div style="font-family:'Georgia',serif;max-width:760px;margin:0 auto;padding:24px;color:#1a1a1a;background:#fff;">

      <!-- Encabezado -->
      <table style="width:100%;margin-bottom:20px;">
        <tr>
          <td style="width:100px;vertical-align:middle;">
            <img src="${LOGO_BASE64}" alt="Logo Arjona" style="width:90px;height:90px;border-radius:50%;object-fit:cover;display:block;">
          </td>
          <td style="text-align:center;vertical-align:middle;">
            <div style="font-size:20px;font-weight:bold;color:#185FA5;letter-spacing:0.05em;">ARJONA S.A.S</div>
            <div style="font-size:11px;color:#555;margin-top:3px;">NIT 860046904-1</div>
            <div style="font-size:11px;color:#555;">CALLE 63 BIS # 71 A 31</div>
            <div style="font-size:11px;color:#555;">Tels 601 2510753  601 5657188</div>
            <div style="font-size:11px;color:#185FA5;">info@jabonesarjona.com</div>
            <div style="font-size:11px;color:#555;">Bogotá</div>
          </td>
          <td style="text-align:right;vertical-align:middle;min-width:160px;">
            <div style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${p.tipoDocumento || 'Proforma'} No.</div>
            <div style="font-size:22px;font-weight:bold;color:#1a1a1a;">${p.numero}</div>
            <div style="font-size:11px;color:#888;margin-top:6px;">Fecha</div>
            <div style="font-size:12px;color:#555;">${p.fecha}</div>
          </td>
        </tr>
      </table>

      <!-- Datos cliente -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;background:#EAF2FB;border-radius:8px;overflow:hidden;">
        <tr>
          <td style="padding:8px 12px;width:50%;border-bottom:1px solid #c5d8ef;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">Empresa</div>
            <div style="font-size:14px;font-weight:bold;">${p.cliente.empresa || '—'}</div>
          </td>
          <td style="padding:8px 12px;border-bottom:1px solid #c5d8ef;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">NIT</div>
            <div style="font-size:14px;font-weight:bold;">${p.cliente.nit || '—'}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #c5d8ef;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;">Nombre contacto</div>
            <div style="font-size:13px;">${p.cliente.nombre || '—'}</div>
          </td>
          <td style="padding:8px 12px;border-bottom:1px solid #c5d8ef;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;">Ciudad / Dirección</div>
            <div style="font-size:13px;">${p.cliente.direccion || '—'}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 12px;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;">E-mail</div>
            <div style="font-size:13px;color:#185FA5;">${p.cliente.email || '—'}</div>
          </td>
          <td style="padding:8px 12px;">
            <div style="font-size:10px;color:#888;text-transform:uppercase;">Teléfono</div>
            <div style="font-size:13px;">${p.cliente.telefono || '—'}</div>
          </td>
        </tr>
      </table>

      <!-- Intro -->
      <div style="font-size:12px;color:#555;margin-bottom:10px;font-style:italic;">
        De acuerdo a su solicitud nos permitimos enviar cotización:
      </div>

      <!-- Tabla productos -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:13px;">
        <thead>
          <tr style="background:#185FA5;color:#fff;">
            <th style="padding:8px 5px;text-align:center;font-weight:bold;font-size:11px;">Ítem</th>
            <th style="padding:8px 5px;text-align:center;font-weight:bold;font-size:11px;">Cantidad</th>
            <th style="padding:8px 5px;text-align:left;font-weight:bold;font-size:11px;">Detalle</th>
            <th style="padding:8px 5px;text-align:right;font-weight:bold;font-size:11px;">Vr. Unit.</th>
            <th style="padding:8px 5px;text-align:right;font-weight:bold;font-size:11px;">Total</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>

      <!-- Totales -->
      <table style="width:100%;margin-bottom:20px;">
        <tr>
          <td></td>
          <td style="text-align:right;width:280px;">
            <table style="width:100%;font-size:13px;">
              <tr>
                <td style="padding:5px 10px;color:#555;">Subtotal</td>
                <td style="padding:5px 10px;text-align:right;font-weight:bold;">${formatCOP(subtotal)}</td>
              </tr>
              <tr>
                <td style="padding:5px 10px;color:#555;">IVA (19%)</td>
                <td style="padding:5px 10px;text-align:right;font-weight:bold;">${formatCOP(iva)}</td>
              </tr>
              <tr>
                <td colspan="2" style="padding:0;">
                  <div style="background:#FAC775;color:#412402;font-size:17px;font-weight:bold;
                    text-align:right;padding:8px 12px;border-radius:6px;margin-top:4px;">
                    ${formatCOP(total)}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Notas y Condiciones -->
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:bold;color:#185FA5;text-transform:uppercase;margin-bottom:8px;border-bottom:2px solid #185FA5;padding-bottom:4px;letter-spacing:0.05em;">
          Notas y/o Condiciones
        </div>
        ${notas ? `<div style="background:#EAF2FB;border-radius:8px;overflow:hidden;margin-bottom:12px;">${notas}</div>` : ''}

        <div style="background:#EAF2FB;border-radius:8px;overflow:hidden;">
          <div style="padding:5px 10px;border-bottom:1px solid #c5d8ef;font-size:12px;">
            <strong>Solicitud:</strong> ${p.solicitud}
          </div>
          <div style="padding:5px 10px;border-bottom:1px solid #c5d8ef;font-size:12px;">
            <strong>Fecha de Entrega:</strong> ${p.fechaEntrega}
          </div>
          <div style="padding:5px 10px;border-bottom:1px solid #c5d8ef;font-size:12px;">
            <strong>Forma de Pago:</strong> ${p.formaPago}
          </div>
          <div style="padding:5px 10px;font-size:12px;">
            <strong>Vigencia:</strong> ${p.vigencia}
          </div>
        </div>
      </div>

      <!-- Firma -->
      <div style="margin-top:16px;">
        <div style="font-size:12px;color:#555;margin-bottom:10px;">Agradecemos su atención.</div>
        <div style="font-size:12px;color:#555;margin-bottom:6px;font-weight:bold;">Atentamente,</div>
        <table style="width:100%;font-size:12px;">
          <tr>
            <td style="padding:4px 0;width:50%;">
              <div style="font-size:10px;color:#888;">Nombre</div>
              <div style="font-weight:bold;">${p.firma ? p.firma.nombre : EMPRESA.vendedor}</div>
            </td>
            <td style="padding:4px 0;">
              <div style="font-size:10px;color:#888;">Teléfono</div>
              <div style="color:#185FA5;">${p.firma ? p.firma.telefono : EMPRESA.telVendedor}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0;">
              <div style="font-size:10px;color:#888;">Cargo</div>
              <div>${p.firma ? p.firma.cargo : EMPRESA.cargo}</div>
            </td>
            <td style="padding:4px 0;">
              <div style="font-size:10px;color:#888;">E-mail</div>
              <div style="color:#185FA5;">${p.firma ? p.firma.email : EMPRESA.emailVendedor}</div>
            </td>
          </tr>
        </table>
      </div>

    </div>
  `;
}

// ── Abrir ventana de impresión/PDF ────────────────────────────────────────────
function abrirVentanaImpresion(id, modoPDF) {
  const p = proformas.find((x) => x.id === id);
  if (!p) return;

  const contenido = generarHTMLProforma(p);
  const titulo = `${p.tipoDocumento || 'Proforma'}_${p.numero}_${p.cliente.empresa || 'Arjona'}`;

  const ventana = window.open('', '_blank');
  ventana.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f0f0f0; font-family: 'Georgia', serif; }

    /* Barra superior — solo visible en pantalla */
    .barra {
      position: fixed; top: 0; left: 0; right: 0; height: 50px;
      background: #185FA5; color: #fff;
      display: flex; align-items: center; gap: 10px; padding: 0 20px;
      z-index: 999; font-family: Arial, sans-serif; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .barra .titulo { flex: 1; font-size: 13px; opacity: 0.9; }
    .barra button {
      padding: 7px 18px; border-radius: 6px; border: none;
      cursor: pointer; font-size: 13px; font-family: Arial, sans-serif; font-weight: bold;
    }
    .btn-accion { background: #FAC775; color: #412402; }
    .btn-accion:hover { background: #f5b84a; }
    .btn-cerrar { background: rgba(255,255,255,0.15); color: #fff; }
    .btn-cerrar:hover { background: rgba(255,255,255,0.25); }

    /* Instrucción PDF */
    .instruccion {
      position: fixed; top: 50px; left: 0; right: 0;
      background: #FFF3CD; color: #856404; font-family: Arial, sans-serif;
      font-size: 12px; padding: 8px 20px; text-align: center;
      border-bottom: 1px solid #ffc107; z-index: 998;
    }

    /* Área de contenido */
    .contenido-wrap {
      margin-top: ${modoPDF ? '88px' : '56px'};
      padding: 20px;
      display: flex; justify-content: center;
    }
    .pagina {
      background: #fff;
      width: 794px;
      min-height: 1123px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      padding: 0;
    }

    /* Estilos de impresión */
    @media print {
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      body { background: #fff !important; }
      .barra, .instruccion { display: none !important; }
      .contenido-wrap { margin-top: 0 !important; padding: 0 !important; }
      .pagina { box-shadow: none !important; width: 100% !important; min-height: auto !important; }
    }
  </style>
</head>
<body>

  <div class="barra">
    <span class="titulo">${titulo}</span>
    <button class="btn-accion" onclick="window.print()">
      ${modoPDF ? '⬇ Guardar como PDF' : '🖨 Imprimir'}
    </button>
    <button class="btn-cerrar" onclick="window.close()">✕ Cerrar</button>
  </div>

  ${modoPDF ? `
  <div class="instruccion">
    📄 En el diálogo de impresión selecciona <strong>"Guardar como PDF"</strong> en el campo <strong>Destino / Impresora</strong>, luego clic en <strong>Guardar</strong>.
  </div>` : ''}

  <div class="contenido-wrap">
    <div class="pagina">
      ${contenido}
    </div>
  </div>

  <script>
    // Si es modo PDF, abrir el diálogo automáticamente tras cargar
    ${modoPDF ? `window.addEventListener('load', function() {
      setTimeout(function() { window.print(); }, 400);
    });` : ''}
  <\/script>

</body>
</html>`);
  ventana.document.close();
} 

// ── Descargar PDF ─────────────────────────────────────────────────────────────
function descargarPDF(id) {
  abrirVentanaImpresion(id, true);
}

// ── Imprimir proforma ─────────────────────────────────────────────────────────
function imprimirProforma(id) {
  abrirVentanaImpresion(id, false);
}

// ── Inicialización ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  cargar();
  renderSidebar();
  mostrarEstadoVacio();
});