import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_producto_proveedor: {
        name: 'fk_producto_proveedor',
        entity: 'Proveedor',
        entityKey: 'id',
        foreignKey: 'id_proveedor',
      },
    },
  },
})
export class Producto extends Entity {
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
    type: 'number',
  })
  valor?: number;

  @property({
    type: 'number',
  })
  cantidad?: number;



  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
