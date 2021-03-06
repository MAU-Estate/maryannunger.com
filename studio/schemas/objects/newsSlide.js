export default {
  name: 'newsSlide',
  title: 'News Slide',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      media: 'image.src'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subhead',
      title: 'Subhead',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link / Url',
      validation: Rule => Rule.required().uri({ allowRelative: true })
    }
  ]
}
