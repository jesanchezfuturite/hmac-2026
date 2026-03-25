import { defineField, defineType } from 'sanity';

export const trustSignal = defineType({
  name: 'trustSignal',
  title: 'Trust Signal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Beneficio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Nombre del Ícono (Lucide)',
      type: 'string',
      description: 'Nombre del componente en Lucide React (ej., "HeartPulse", "ShieldCheck")',
      validation: (rule) => rule.required(),
    }),
  ],
});
