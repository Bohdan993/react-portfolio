export default{
    name:'experiences',
    title:'Інший досвід',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Рік',
            type:'string'
        },
        {
            name:'works',
            title:'Робота',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}