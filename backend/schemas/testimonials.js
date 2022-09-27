export default {
    name: 'testimonials',
    title: 'Відгуки',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Ім\'я',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Компанія',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Зображення',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feedback',
            title: 'Текст відгуку',
            type: 'text',
        },

    ]
}