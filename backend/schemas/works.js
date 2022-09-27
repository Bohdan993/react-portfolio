export default {
    name: 'works',
    title: 'Кейси',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Заголовок',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Опис',
        type: 'text',
      },
      {
        name: 'projectLink',
        title: 'Посилання на проект',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Посилання на код',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Зображення',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Теги',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Тег',
           type:'string'
         }
       ]
      },
     
    ],
  };