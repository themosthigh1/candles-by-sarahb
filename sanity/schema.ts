import { type SchemaTypeDefinition } from 'sanity'
import category from './schemas/category'
import game from './schemas/game'
import order from './schemas/order'
import dimension from './schemas/dimension'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, game, order, dimension, contact],
}
