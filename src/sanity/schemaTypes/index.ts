import { type SchemaTypeDefinition } from 'sanity'
import { hero } from './hero'
import { bentoService } from './bentoService'
import { trustSignal } from './trustSignal'
import { hospitalLocation } from './hospitalLocation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, bentoService, trustSignal, hospitalLocation],
}
