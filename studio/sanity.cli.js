import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wv85g57x',
    dataset: 'production',
  },
  // Tip: You can use an environment variable for studioHost if you want to deploy separate Studios for production, staging, testing etc.
  studioHost: 'maryannunger',
})
