export default{
    name:'abouts',
    title:'Про себе',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Заголовок',
            type:'string'
        },
        {
            name:'description',
            title:'Опис',
            type:'text'
        },
        {
            name: 'image',
            title: 'Зображення',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}