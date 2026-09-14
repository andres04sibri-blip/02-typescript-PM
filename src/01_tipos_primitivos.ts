/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresión de Resumen
// ============================================================================

export const nombreEstudiante: string = "Marco Sibri";
export const edadEstudiante: number = 16;
export const promedioObjetivo: number = 8.5;
export let estaMatriculado: boolean = true;

export function obtenerResumenPersonal(): string {
  return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO"}`;
}

// ============================================================================
// PASO 2: Función para Calcular el Promedio
// ============================================================================

export function calcularPromedio(notas: readonly number[]): number {
  let suma = 0;

  if (notas.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];

      if (nota != undefined) {
        suma = suma + nota;
      }
    }

    let promedio: number = Number((suma / notas.length).toFixed(2));
    return promedio;
  }
}

// ============================================================================
// PASO 3: Formateador de Ficha Técnica
// ============================================================================

export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  let formato: string = `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${activo ? "MATRICULADO" : "RETIRADO"}`;
  return formato;
}