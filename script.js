const ramos = {
  "Primer Año - I Semestre": [
    "TECNOLOGÍA DE LA INFORMACIÓN I (ACI107)",
    "INTRODUCCIÓN A LOS NEGOCIOS (AEA011)",
    "CONTABILIDAD I (AUD100)",
    "MATEMÁTICA GENERAL (MAT100)",
    "TEC. COMUNICACIÓN Y HABILIDADES (TDE400)"
  ],
  "Primer Año - II Semestre": [
    "EMPRENDIMIENTO Y NEGOCIOS (AEA240)",
    "CONTABILIDAD PARA LA GESTIÓN (AUD222)",
    "ECONOMÍA (AEA220)",
    "ÁLGEBRA I (MAT140)",
    "INGLÉS I (LCE001)"
  ],
  "Segundo Año - I Semestre": [
    "INGLÉS II (LCE002)",
    "COSTOS (AUD444)",
    "ECON. CIRCULAR Y DESA. SOST. (ING103)",
    "DATOS Y DECISIONES (ACI309)",
    "FUNDAMENTOS DE ESTRATEGIA (AEA320)",
    "CÁLCULO DIFERENCIAL (MAT170)"
  ],
  "Segundo Año - II Semestre": [
    "MARKETING ESTRATÉGICO (AEA503)",
    "PROBABILIDAD Y ESTADÍSTICA (AES500)",
    "INGLÉS III (LCE003)",
    "INTRODUCCIÓN A LAS FINANZAS (AEA504)",
    "T. LIDER Y DESARROLLO PERSONAL (AEA420)",
    "MICROECONOMÍA I (AEA214)"
  ],
  "Tercer Año - I Semestre": [
    "DERECHO EMPRESARIAL (DER700)",
    "MARKETING OPERACIONAL (AEA364)",
    "INFERENCIA ESTADÍSTICA (AES510)",
    "GESTIÓN DE LA CALIDAD (EIN810)",
    "MACROECONOMÍA I (AEA316)"
  ],
  "Tercer Año - II Semestre": [
    "MARKETING DE SERVICIOS (AEA513)",
    "MICROECONOMÍA II (AEA315)",
    "ECONOMETRÍA (AEA425)",
    "PLANIFICACIÓN Y GESTIÓN TRIBUT (AUD814)",
    "DIRECCIÓN ESTRATÉGICA DE RRHH (AEA605)"
  ],
  "Cuarto Año - I Semestre": [
    "DIRECCIÓN ESTRATÉGICA (AEA325)",
    "MACROECONOMÍA II (AEA417)",
    "PREP. Y EVAL. DE PROYECTOS (AEA555)",
    "GESTIÓN DEL CAMBIO ORGANIZACI (AEA982)",
    "COMERCIO INTERNACIONAL (AEA891)"
  ],
  "Cuarto Año - II Semestre": [
    "CONTROL DE GESTIÓN (AEA790)",
    "ADM. DE LA PRODUCCIÓN (EIN813)",
    "FINANZAS CORPORATIVAS (AEA694)",
    "NEG. Y RESOL. DE CONFLICTOS (AEA530)",
    "INVESTIGACIÓN DE MERCADOS (AEA893)"
  ],
  "Quinto Año - I Semestre": [
    "GESTIÓN DE EMP DE NUEVOS NEGOC (AEA920)",
    "TALLER DE CONSULTORÍA (AEA980)",
    "INSTRUMENTOS DE INVERSIÓN (AEA394)",
    "GESTIÓN DE MARCAS (AEA783)",
    "ECONOMÍA PARA POLÍTICAS PÚBLIC (AEA940)",
    "T. DE DESARROLLO DE CARRERA (AEA988)"
  ],
  "Quinto Año - II Semestre": [
    "DESICIONES Y SIMULACIÓN (AEA540)",
    "TALLER APLICADO A ADMIN. (AEA040)",
    "RESPONSABILIDAD SOCIAL CORP. (AEA520)",
    "FINANCIAMIENTO DE INVERSIONES (AEA404)"
  ]
};

const requisitos = {
  "DATOS Y DECISIONES (ACI309)": ["TECNOLOGÍA DE LA INFORMACIÓN I (ACI107)"],
  "FUNDAMENTOS DE ESTRATEGIA (AEA320)": ["INTRODUCCIÓN A LOS NEGOCIOS (AEA011)"],
  "T. LIDER Y DESARROLLO PERSONAL (AEA420)": ["INTRODUCCIÓN A LOS NEGOCIOS (AEA011)", "TEC. COMUNICACIÓN Y HABILIDADES (TDE400)"],
  "DIRECCIÓN ESTRATÉGICA DE RRHH (AEA605)": ["INTRODUCCIÓN A LOS NEGOCIOS (AEA011)"],

  "CONTABILIDAD PARA LA GESTIÓN (AUD222)": ["CONTABILIDAD I (AUD100)"],
  "COSTOS (AUD444)": ["CONTABILIDAD I (AUD100)"],
  "INTRODUCCIÓN A LAS FINANZAS (AEA504)": ["CONTABILIDAD I (AUD100)", "MATEMÁTICA GENERAL (MAT100)"],
  "PLANIFICACIÓN Y GESTIÓN TRIBUT (AUD814)": ["CONTABILIDAD I (AUD100)"],

  "ECONOMÍA (AEA220)": ["MATEMÁTICA GENERAL (MAT100)"],
  "ÁLGEBRA I (MAT140)": ["MATEMÁTICA GENERAL (MAT100)"],
  "CÁLCULO DIFERENCIAL (MAT170)": ["MATEMÁTICA GENERAL (MAT100)"],
  "PROBABILIDAD Y ESTADÍSTICA (AES500)": ["MATEMÁTICA GENERAL (MAT100)"],

  "DIRECCIÓN ESTRATÉGICA (AEA325)": ["FUNDAMENTOS DE ESTRATEGIA (AEA320)", "EMPRENDIMIENTO Y NEGOCIOS (AEA240)"],
  "GESTIÓN DE EMP DE NUEVOS NEGOC (AEA920)": ["EMPRENDIMIENTO Y NEGOCIOS (AEA240)"],
  "MICROECONOMÍA I (AEA214)": ["ECONOMÍA (AEA220)", "CÁLCULO DIFERENCIAL (MAT170)"],
  "MACROECONOMÍA I (AEA316)": ["ECONOMÍA (AEA220)"],
  "INGLÉS II (LCE002)": ["INGLÉS I (LCE001)"],
  "INGLÉS III (LCE003)": ["INGLÉS II (LCE002)"],

  "MARKETING OPERACIONAL (AEA364)": ["COSTOS (AUD444)"],
  "MARKETING ESTRATÉGICO (AEA503)": ["FUNDAMENTOS DE ESTRATEGIA (AEA320)"],
  "MARKETING DE SERVICIOS (AEA513)": ["MARKETING OPERACIONAL (AEA364)", "MARKETING ESTRATÉGICO (AEA503)"],
  "GESTIÓN DE MARCAS (AEA783)": ["MARKETING OPERACIONAL (AEA364)", "MARKETING ESTRATÉGICO (AEA503)"],
  "INVESTIGACIÓN DE MERCADOS (AEA893)": ["MARKETING OPERACIONAL (AEA364)", "MARKETING ESTRATÉGICO (AEA503)", "INFERENCIA ESTADÍSTICA (AES510)"],

  "INFERENCIA ESTADÍSTICA (AES510)": ["PROBABILIDAD Y ESTADÍSTICA (AES500)"],
  "GESTIÓN DE LA CALIDAD (EIN810)": ["PROBABILIDAD Y ESTADÍSTICA (AES500)"],
  "DECISIONES Y SIMULACIÓN (AEA540)": ["PROBABILIDAD Y ESTADÍSTICA (AES500)"],

  "PREP. Y EVAL. DE PROYECTOS (AEA555)": ["INTRODUCCIÓN A LAS FINANZAS (AEA504)", "MARKETING ESTRATÉGICO (AEA503)"],
  "FINANZAS CORPORATIVAS (AEA694)": ["INTRODUCCIÓN A LAS FINANZAS (AEA504)"],
  "TALLER DE CONSULTORÍA (AEA980)": ["INTRODUCCIÓN A LAS FINANZAS (AEA504)", "PREP. Y EVAL. DE PROYECTOS (AEA555)"],

  "MICROECONOMÍA II (AEA315)": ["MICROECONOMÍA I (AEA214)"],
  "ECONOMETRÍA (AEA425)": ["MICROECONOMÍA I (AEA214)", "INFERENCIA ESTADÍSTICA (AES510)"],
  "ECONOMÍA PARA POLÍTICAS PÚBLIC (AEA940)": ["MACROECONOMÍA I (AEA316)", "MICROECONOMÍA I (AEA214)"],

  "GESTIÓN DEL CAMBIO ORGANIZACI (AEA982)": ["DIRECCIÓN ESTRATÉGICA DE RRHH (AEA605)"],
  "CONTROL DE GESTIÓN (AEA790)": ["FUNDAMENTOS DE ESTRATEGIA (AEA320)", "DIRECCIÓN ESTRATÉGICA DE RRHH (AEA605)"],

  "ADM. DE LA PRODUCCIÓN (EIN813)": ["GESTIÓN DE LA CALIDAD (EIN810)", "DIRECCIÓN ESTRATÉGICA (AEA325)"],
  "NEG. Y RESOL. DE CONFLICTOS (AEA530)": ["T. LIDER Y DESARROLLO PERSONAL (AEA420)"],
  "T. DE DESARROLLO DE CARRERA (AEA988)": ["T. LIDER Y DESARROLLO PERSONAL (AEA420)"],
  "TALLER APLICADO A ADMIN. (AEA040)": ["MARKETING OPERACIONAL (AEA364)", "DIRECCIÓN ESTRATÉGICA (AEA325)", "PREP. Y EVAL. DE PROYECTOS (AEA555)", "DIRECCIÓN ESTRATÉGICA DE RRHH (AEA605)"],

  "RESPONSABILIDAD SOCIAL CORP. (AEA520)": ["FUNDAMENTOS DE ESTRATEGIA (AEA320)"],
  "INSTRUMENTOS DE INVERSIÓN (AEA394)": ["FINANZAS CORPORATIVAS (AEA694)"],
  "FINANCIAMIENTO DE INVERSIONES (AEA404)": ["PREP. Y EVAL. DE PROYECTOS (AEA555)"],
  "MACROECONOMÍA II (AEA417)": ["MACROECONOMÍA I (AEA316)"],
  "COMERCIO INTERNACIONAL (AEA891)": ["FUNDAMENTOS DE ESTRATEGIA (AEA320)"],
};

let aprobados = [];

function puedeAprobar(ramo) {
  if (!requisitos[ramo]) return true;
  return requisitos[ramo].every(req => aprobados.includes(req));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (const [bloque, listaRamos] of Object.entries(ramos)) {
    const titulo = document.createElement("div");
    titulo.className = "titulo";
    titulo.textContent = bloque;
    contenedor.appendChild(titulo);

    listaRamos.forEach(nombre => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.dataset.nombre = nombre;
      div.textContent = nombre;
      if (aprobados.includes(nombre)) {
        div.classList.add("aprobado");
      } else if (!puedeAprobar(nombre)) {
        div.classList.add("bloqueado");
      }
      div.addEventListener("click", () => toggleAprobado(nombre));
      contenedor.appendChild(div);
    });
  }

  actualizarAvance();
}

function toggleAprobado(nombre) {
  if (!puedeAprobar(nombre)) return;
  if (aprobados.includes(nombre)) {
    aprobados = aprobados.filter(r => r !== nombre);
  } else {
    aprobados.push(nombre);
  }
  guardarAvance();
  renderMalla();
}

function actualizarAvance() {
  const total = Object.values(ramos).flat().length;
  const aprobadosCount = aprobados.length;
  const porcentaje = ((aprobadosCount / total) * 100).toFixed(1);
  document.getElementById("avance-barra").style.width = porcentaje + "%";
  document.getElementById("avance-texto").textContent = `${porcentaje}%`;
}

function guardarAvance() {
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

function cargarAvance() {
  const data = localStorage.getItem("aprobados");
  if (data) aprobados = JSON.parse(data);
}

function limpiarAvance() {
  aprobados = [];
  guardarAvance();
  renderMalla();
}

window.onload = () => {
  cargarAvance();
  renderMalla();
  document.getElementById("limpiar-btn").addEventListener("click", limpiarAvance);
};
