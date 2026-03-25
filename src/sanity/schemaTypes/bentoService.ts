import { defineField, defineType } from 'sanity';

export const bentoService = defineType({
  name: 'bentoService',
  title: 'Bento Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Servicio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Breve',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'URL de Imagen',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'gridSize',
      title: 'Tamaño en el Grid',
      type: 'string',
      options: {
        list: [
          { title: 'Pequeño (1x1)', value: 'small' },
          { title: 'Mediano (2x1)', value: 'medium' },
          { title: 'Grande (2x2)', value: 'large' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destinationLink',
      title: 'Link de Destino',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'], allowRelative: true }),
    }),
  ],
});
