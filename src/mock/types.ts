export interface Fotos {
  id: number;
  url: string;
  descripcion?: string;
}

export interface Proyectos {
  id: number;
  title: string;
  obra: string;
  portada: string;
  url: string;
  description?: string;
  fecha?: string;
  fotos?: Fotos[];
}
