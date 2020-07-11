import {Entity, model, property} from '@loopback/repository';

@model()
export class Proveedor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono_ppal: string;

  @property({
    type: 'string',
  })
  telefono_sec?: string;

  @property({
    type: 'string',
  })
  direccion_ppal?: string;

  @property({
    type: 'string',
  })
  direccion_sec?: string;

  @property({
    type: 'string',
  })
  estado?: string;


  constructor(data?: Partial<Proveedor>) {
    super(data);
  }
}

export interface ProveedorRelations {
  // describe navigational properties here
}

export type ProveedorWithRelations = Proveedor & ProveedorRelations;
