export default{
    name:'brands',
    title:'Бренди',
    type: 'document',
    fields:[
        {
            name:'image',
            title:'Зображення',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Назва',
            type:'string'
        }
    ]
}