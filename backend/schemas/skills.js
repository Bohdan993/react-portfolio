export default{
    name:'skills',
    title:'Вміння',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Назва',
            type:'string'
        },
        {
            name:'bgColor',
            title:'Колір фону',
            type:'string'
        },
        {
            name:'icon',
            title:'Іконка',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}