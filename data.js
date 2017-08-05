Like.insertMany([
{
  option: "10-20",
  price: "10.00"
},
{
  option: "20-30",
  price: "15.00"
},
{
  option: "30-40",
  price: "20.00"
},
{
  option: "50-75",
  price: "30.00"
},
{
  option: "75-100",
  price: "40.00"
}
]);

Friend.insertMany([
{
  option: "200-400",
  price: "15.00"
},
{
  option: "400-600",
  price: "20.00"
},
{
  option: "600-800",
  price: "25.00"
},
{
  option: "800-1000",
  price: "30.00"
},
{
  option: "1000-1500",
  price: "50.00"
},
{
  option: "1500-3000",
  price: "75.00"
}
]);


Post.insertMany([
  {
    option: "1-3",
    price: "10.00"
  },
  {
    option: "4-6",
    price: "15.00"
  },
  {
    option: "8-10",
    price: "20.00"
  },
  {
    option: "10-12",
    price: "30.00"
  },
  {
    option: "12-15",
    price: "40.00"
  }
]);


Comment.insertMany([
{
  option: "1-5",
  price: "5.00"
},
{
  option: "5-7",
  price: "10.00"
},
{
  option: "8-10",
  price: "12.00"
},
{
  option: "11-13",
  price: "15.00"
},
{
  option: "14-19",
  price: "17.00"
}
]);


Options.insertMany([
  {
    label: "How many friends do Ü have?",
    optionPull: "Friend"
  },
  {
    label: "How may likes do Ür posts get?",
    optionPull: "Like"
  },
  {
    label: "How often do Ü post a day?",
    optionPull: "Post"
  },
  {
    label: "How many comments do Ür posts recieve?",
    optionPull: "Comment"
  }
])


Review.insertMany([
  {
    name: "David Charleston",
    rating: 3,
    review: "I used to live at home...well I still do but no one knows. I love this product because it makes me look like I have a job!"
    parent_id: "5983c93fe8fa7f00114b3111"
  },
  {
    name: "Jessica Branson",
    rating: 5,
    review: "I always wanted a picture with flanel on.",
    parent_id: "5981c536797225812c45bf69"
  },
  {
    name: "Renea Carelton",
    rating: 5,
    review: "I always wanted a picture with flanel on.",
    parent_id:  "5981c536797225812c45bf69"
  },
  {
    name: "Robert Carlson",
    rating: 4,
    review: "I always wanted to be the mother of dragons and now everyone thinks I am!",
    parent_id: "5981df27e085b5864ddff71a"
  },
  {
    name: "Cersi Lanister",
    rating: 5,
    review: "People finally like me.",
    parent_id: "5981df27e085b5864ddff71a"
  },
  {
    name: "Jess Devoe",
    rating: 5,
    review: "Art has always been my passion, NuÜ helped me look more credible and I landed my dream job.",
    parent_id: "5983cc4ee8fa7f00114b3112"
  },
  {
    name: "Lenny Boston",
    rating: 4,
    review: "I was always laid back but I felt that people didn't really know how laid back I was. This package make me the guy everyone talks about around the water cooler. I couldn't be happier.",
    parent_id: "5983d103e8fa7f00114b3114"
  }

]);
