import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'layout',
      type: 'select',
      required: true,
      defaultValue: 'mediumSquareTextBelow',
      options: [
        {
          label: 'Quadratisches Bild mit Text rechts',
          value: 'squareTextRight'
        },
        {
          label: 'Mittleres quadratisches Bild mit Text darunter',
          value: 'mediumSquareTextBelow'
        },
        {
          label: 'Großes quadratisches Bild mit Text darunter',
          value: 'fullSquareTextBelow'
        },
        {
          label: 'Hochformat mit Text rechts',
          value: 'portraitImageTextRight'
        },
        {
          label: 'Großes Querformat mit Text darunter',
          value: 'landscapeLargeImageTextBelow'
        },
        {
          label: 'Breites Querformat mit Text darunter',
          value: 'landscapeImageTextBelow'
        }
      ]
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}