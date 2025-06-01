// import React from 'react'

// const SerifStyle = props => (
//   <span style={{ fontFamily: 'times new roman' }}>{props.children}</span>
// )

export default {
  name: 'richText',
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
            decorators: [
              {
                title: 'Serif',
                value: 'serif',
                icon: () => 'S',
                component: ({ children }) => (
                  <span style={{ fontFamily: 'times new roman' }}>
                    {children}
                  </span>
                ),
              },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
}
