import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'food_delivery',

  projectId: 'eu42lavz',
  dataset: 'test1',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
