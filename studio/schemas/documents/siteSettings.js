export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image'
    },
    {
      name: 'menuBgImage',
      title: 'Menu Background Image',
      type: 'image'
    },
    {
      name: 'backToTopButtonLabel',
      title: 'Back to top button label',
      type: 'string'
    }
  ]
}
