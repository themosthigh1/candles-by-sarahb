import { defineType, defineField } from "sanity";

const contact = defineType ({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField
    ({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
});

export default contact