export default {
    name: 'scent',
    type: 'document',
    title: 'Scent',
    fields: [
      {
        name: 'name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
        },
        validation: (Rule: any) => Rule.required(),
      },
    ],
  }