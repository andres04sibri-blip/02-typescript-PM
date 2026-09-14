
/**
 * ============================================================================
 * 🥊 RETO 02: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ===========================================================================
// PASO 1: Define la interface `PerfilUsuario` en TypeScript
// ===========================================================================

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "Marco Sibri",
  correo: "estudiante@est.salesianos.edu.ec",
  rol: "ESTUDIANTE"
};

export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}

// ============================================================================
// PASO 2: Interface `ProductoItem` y Función de Descuento
// ============================================================================

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
    return 0;
  }

  let precioFinal = producto.precio;

  if (
    producto.descuentoPorcentaje !== undefined &&
    producto.descuentoPorcentaje > 0
  ) {
    const descuento =
      producto.precio * (producto.descuentoPorcentaje / 100);

    precioFinal = producto.precio - descuento;
  }

  return Number(precioFinal.toFixed(2));
}

