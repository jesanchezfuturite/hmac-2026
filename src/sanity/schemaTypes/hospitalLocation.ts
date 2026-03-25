import { defineField, defineType } from 'sanity';

export const hospitalLocation = defineType({
  name: 'hospitalLocation',
  title: 'Hospital Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre (H3)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordenadas (Lat/Lng)',
      type: 'object',
      fields: [
        defineField({ name: 'lat', title: 'Latitud', type: 'number' }),
        defineField({ name: 'lng', title: 'Longitud', type: 'number' }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección Física',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'facadePhotoUrl',
      title: 'URL de Foto de Fachada',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
});
