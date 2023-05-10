let posts=[];
function updateLastUserActivity(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let time=new Date();
      resolve(time);
    },1000)
  })
}


// post
function createPost(post) {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          posts.push(post);
          const error=false;
          if(!error){
            resolve(posts);
          }
          else{
            reject("Error: Something went wrong");
          }
         
      }, 3000)
  }) 
}
// Delete
function deletePost(){
  return new Promise((resolve, reject) => {
      setTimeout( () => {
          if(posts.length > 0){
              const popElement  = posts.pop();
              resolve(popElement);
          } else {
              reject("ERROR: ARRAY IS EMPTY")
          }
      }, 1000)
  })
}

Promise.all([createPost({title: 'Post one', body: 'This is Post one'}), updateLastUserActivity()]).then((value)=>{
  console.log(value);
}
)

