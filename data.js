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
