import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
    name: "name",
    type :"string",
    title:"Dish Name",
    validation: rule => rule.required()
    },
    {
      name: "description",
      type :"string",
      title:"Dish description",
      validation: rule => rule.required()
    },

      {
        name: "image",
        type: "image",
        title: "Image of the category",
      },
      {
        name: "price",
        type: "number",
        title: "price of the dish in USD",
      }
  
  ],
})
