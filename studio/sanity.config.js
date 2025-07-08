// Single workspace configuration

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemaTypes from './schemas'
import deskStructure from './src/structure/deskStructure'
import { createImprovedAction } from './actions.js'

export default defineConfig({
  title: 'maryannunger.com',
  projectId: 'wv85g57x',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  document: {
    actions: prev =>
      prev.map(originalAction =>
        originalAction.action === 'publish'
          ? createImprovedAction(originalAction)
          : originalAction,
      ),
  },
  schema: {
    types: schemaTypes,
  },
})
