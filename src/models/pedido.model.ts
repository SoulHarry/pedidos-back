import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_pedido_cliente: {
        name: 'fk_pedido_cliente',
        entity: 'Cliente',
        entityKey: 'id',
        foreignKey: 'id_cliente',
      },
      fk_pedido_producto: {
        name: 'fk_pedido_producto',
        entity: 'Producto',
        entityKey: 'id',
        foreignKey: 'id_producto',
      },
    },
  },
})
export class Pedido extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_ingreso: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_entrega: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;


  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
