export const categories = [
    {
        id: 1,
        name: "Pizza",
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
    },
    {
        id: 2,
        name: "Burger",
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
    },
    {
        id: 3,
        name: "Steak",
        image: "https://cdn.pixabay.com/photo/2016/03/09/09/22/rumpsteak-1246658_1280.jpg"
      },
      {
        id: 4,
        name: "Sushi",
        image: "https://cdn.pixabay.com/photo/2016/10/27/22/53/sushi-1773093_1280.jpg"
      },
      {
        id: 5,
        name: "Pasta",
        image: "https://cdn.pixabay.com/photo/2017/06/01/17/25/spaghetti-2367059_1280.jpg"
      },
      {
        id: 6,
        name: "Tacos",
        image: "https://cdn.pixabay.com/photo/2018/07/17/14/44/tacos-3540349_1280.jpg"
      },
      {
        id: 7,
        name: "Soup",
        image: "https://cdn.pixabay.com/photo/2017/12/05/20/05/soup-3000529_1280.jpg"
      },
      {
        id: 8,
        name: "Salad",
        image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/food-2298286_1280.jpg"
      },
      {
        id: 9,
        name: "Cake",
        image: "https://cdn.pixabay.com/photo/2017/07/28/23/18/food-2550222_1280.jpg"
      } 
    
];


export const featured = {
    id: 1,
    title:"Hot and Spicy",
    description:"Well fried soft and tender chicken",
    
     restaurants:[
        {
            id: 1,
            name: "Papa Johns",
            image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
            description:"Hot and Spicy Pizza",
            latitude:37.78825,
            longitude:-122.4324,
            rating: 4.5,
            reviews:"4.4k",
            address:"434 second street",
            category:"Fast Food",
            
            dishes: [
                {
                  id: 1,
                  name: "Pizza",
                  image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
                  price: 10,
                  description: "Hot and Spicy Pizza",
                },
                {
                  id: 2,
                  name: "Burger",
                  image: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_1280.jpg",
                  price: 8,
                  description: "Delicious Burger with Cheese",
                },
                {
                  id: 3,
                  name: "Sushi",
                  image: "https://cdn.pixabay.com/photo/2014/06/11/17/00/sushi-366252_1280.jpg",
                  price: 15,
                  description: "Fresh and Tasty Sushi Rolls",
                },
                {
                  id: 4,
                  name: "Pasta",
                  image: "https://cdn.pixabay.com/photo/2017/06/21/22/42/pasta-2428506_1280.jpg",
                  price: 12,
                  description: "Classic Italian Pasta Dish",
                },
                {
                  id: 5,
                  name: "Salad",
                  image: "https://cdn.pixabay.com/photo/2017/03/20/17/25/salad-2169305_1280.jpg",
                  price: 7,
                  description: "Healthy and Fresh Salad",
                },
                {
                  id: 6,
                  name: "Tacos",
                  image: "https://cdn.pixabay.com/photo/2018/07/18/19/12/tacos-3548287_1280.jpg",
                  price: 9,
                  description: "Authentic Mexican Tacos",
                }
              ]


              
        }

    ]
    
}
