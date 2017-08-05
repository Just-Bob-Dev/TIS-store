function buildOptionLayout(object, res, callback) {
  while(object.length === 0){
    let i = 0;
  }
  console.log("after while loop");
  console.log(object.length);
  let json = object;
  let tempObj = {};
  tempObj.questions = object.questions;
  console.log('we are in build');
  for(let i = 0; i < json.questions.length; i++){
    console.log(json.questions.optionPull);
    if(json.questions[i].optionPull === "Likes"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Likes;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Friends"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Friends;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Posts"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Posts;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Comments"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Comments;
      console.log(tempObj);
    }
  }
  console.log(tempObj);
  callback(res, tempObj);
}

function checkIds(a , b) {
  let c = JSON.stringify(a);
  let d = JSON.stringify(b);
  return c === d;
}

function buildReviewLayout(object, res, callback) {
  let zsonObj = {};
  zsonObj.Reviews = object.Reviews;
  for (var i = 0; i < object.Reviews.length; i++) {
    let parentId = JSON.stringify(object.Reviews[i].parent_id);
    zsonObj.Reviews[i] = {
      name: object.Reviews[i].name,
      rating: object.Reviews[i].rating,
      review: object.Reviews[i].review,
      parent_id: object.Reviews[i].parent_id
    }
    console.log(parentId);
    for(var n = 0; n < object.Products.length; n++){
      let productId = JSON.stringify(object.Products[n]._id);
      if(parentId === productId) {
        let temp = {
          title: object.Products[n].title
        }
          zsonObj.Reviews[i].reviews = temp ;
      }
    }
    //console.log(zsonObj);
  }

  console.log(zsonObj);
  callback(res, zsonObj);
}



module.exports = {
  buildOptionLayout: buildOptionLayout,
  buildReviewLayout: buildReviewLayout
}
