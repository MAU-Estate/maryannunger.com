export default {
  name: 'richTextSingle',
  title: 'Rich Text',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'text',
      title: 'Rich Text',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [],
          styles: [],
          marks: {
            decorators: [{ title: 'Emphasis', value: 'em' }],
          },
        },
      ],
    },
  ],
}
