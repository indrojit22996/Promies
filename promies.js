// let posts=[];
// function updateLastUserActivity(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let time=new Date();
//       resolve(time);
//     },1000)
//   })
// }

// // post
// function createPost(post) {
//   return new Promise( (resolve, reject) => {
//       setTimeout( () => {
//           posts.push(post);
//           const error=false;
//           if(!error){
//             resolve(posts);
//           }
//           else{
//             reject("Error: Something went wrong");
//           }

//       }, 3000)
//   })
// }
// // Delete
// function deletePost(){
//   return new Promise((resolve, reject) => {
//       setTimeout( () => {
//           if(posts.length > 0){
//               const popElement  = posts.pop();
//               resolve(popElement);
//           } else {
//               reject("ERROR: ARRAY IS EMPTY")
//           }
//       }, 1000)
//   })
// }

// Promise.all([createPost({title: 'Post one', body: 'This is Post one'}), updateLastUserActivity()]).then((value)=>{
//   console.log(value);
// }
// )

// ******************************************************
//             async and await
// ******************************************************

let posts = [{
  title:"post 4"
}];
let postcreaction = async () => {
  const updateLastUserActivity = new Promise((resolve, reject) => {
    setTimeout(() => {
      let time = new Date();
      resolve(time);
    }, 1000);
  });

  // post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve(posts);
        } else {
          reject("Error: Something went wrong");
        }
      }, 3000);
    });
  }
  // delete
  function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const popElement = posts.pop();
          resolve(popElement);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }

  let [creat,time,del] =await Promise.all([createPost({title: 'Post one', body: 'This is Post one'}), updateLastUserActivity,deletePost()])
 
  console.log(creat,time,del);
  // let [creat, time] = await Promise.all([
  //   createPost({ title: "Post one", body: "This is Post one" }),
  //   updateLastUserActivity,
  // ]);
  // console.log(creat, time);
};
postcreaction();


// const list=document.querySelector(".list");
// // for(i=0;i<posts.length;i++){
// let sublist=document.createElement("li");
// const text=document.innerText("water");
// sublist.appendChild(text);
//   document.list.appendChild(sublist);

