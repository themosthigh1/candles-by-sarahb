import { type SchemaTypeDefinition } from 'sanity'
import category from './schemas/category'
import game from './schemas/game'
import order from './schemas/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, game, order],
}
