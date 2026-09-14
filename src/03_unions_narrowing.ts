
/**
 * ============================================================================
 * 🥊 RETO 03: Union Types, Type Narrowing & Discriminated Unions para UI Móvil
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ============================================================================
// PASO 1: Type Narrowing Básico con typeof
// ============================================================================

export function formatearIdentificador(id: string | number): string {
  if (typeof id === "string") {
    return `ID-ALFANUMERICO-${id.toUpperCase()}`;
  } else {
    return `ID-NUMERICO-#${id.toFixed(0).padStart(6, "0")}`;
  }
}

// ============================================================================
// PASO 2: Modelado de Estados con Discriminated Unions
// ============================================================================

export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

export type EstadoPantalla<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;

export function renderizarEstadoUI<T>(estado: EstadoPantalla<T>): string {
  switch (estado.status) {
    case "LOADING":
      return `⏳ Cargando datos (${estado.porcentaje}%)...`;

    case "SUCCESS":
      return `🎉 Datos cargados con éxito a las ${estado.hora}`;

    case "ERROR":
      return `❌ Error ${estado.codigo}: ${estado.mensaje}`;
  }
}

