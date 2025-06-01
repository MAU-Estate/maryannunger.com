// Single workspace configuration

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemaTypes from './schemas'
import deskStructure from './src/structure/deskStructure'

export default defineConfig({
  title: 'maryannunger.com',
  projectId: 'wv85g57x',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
