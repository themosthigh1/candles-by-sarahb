// Category Schema

export default {
    name: 'dimension',
    type: 'document',
    title: 'Dimension',
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
      {
        name: 'weightPerVessel',
        type: 'string',
      },
    ],
  }
  