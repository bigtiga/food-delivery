import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
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
      title:"Description",
      validation: rule => rule.max(200)
    },

      {
        name: "image",
        type: "image",
        title: "Image of the restaurant",
      },
      {
        name: "lat",
        type: "number",
        title: "latitude of the restaurant",
      },
      {
        name: "lon",
        type: "number",
        title: "longitude of the restaurant",
      },
      {
        name: "address",
        type: "string",
        title: "Restaurant address",
        validation: rule=>rule.required(),
      },
      {
        name: "rating",
        type: "number",
        title: "latitude of the restuarant",
        validation: rule=>rule.required().min(1).max(5).error("please enter a value between 1 to 5")

      },
      {
        name: "reviews",
        type: "string",
        title: "Reviews",
      },
      {
        name: "type",
        title:"Category",
        validation: rule=>rule.required(),
        type: "reference",
        to: [{type: "category"}],
      },
      {
        name: "dishes",
        title:"Dishes",
        validation: rule=>rule.required(),
        type: "array",
        of: [{type: "reference" , to: [{type:"dish"}]}],
       
      }


      
      
  
  
  
  
  ],
})
