import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'

const publications_categories = {
    name: 'publications_categories',
    label: 'Catégories (blog)',
    label_singular: 'catégorie',
    folder: 'content/publications_categories',
    create: true,
    description: 'Toutes les catégories du blog',

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]

}

export default publications_categories