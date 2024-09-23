// // === Nested timeout functions=========

// const task1 = (callback) => {
//   setTimeout(() => {
//     console.log("task 1 completed!");
//     callback();
//   }, 3000);
// };
// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("task 2 completed!");
//     callback();
//   }, 2000);
// };
// const task3 = (callback) => {
//   setTimeout(() => {
//     console.log("task 3 completed!");
//     callback();
//   }, 1000);
// };
// task1(() => {
//   // start the second task once the first task is completed.
//   task2(() => {
//     // start the third task once the second task is completed.
//     task3(() => {
//       console.log("All the task completed");
//     });
//   });
// });
// ==== Real life scenario of a callback hell ====================
// fetching dummy user data
const userData = { id: 1, name: "Prince" };
const userPosts = [
  { id: 101, content: "Post 1" },
  { id: 102, content: "Post 2" },
  { id: 103, content: "Post 3" }, // Corrected typo here (changed 'post' to 'Post')
];
const postComments = {
  101: ["comment 1", "comment 2"],
  102: ["comment 3", "comment 4"],
  103: ["comment 5", "comment 6"], // Adding comments for post ID 103
};

// create a function to fetch the userData
const fetchUserData = (userId, callback) => {
  console.log("Fetching user data...");
  // let us delay the result by using setTimeout
  setTimeout(() => {
    callback(userData);
  }, 1000);
};

// create a function to fetch the UserPost
const fetchUserPost = (userId, callback) => {
  console.log("Fetching user Posts...");
  // let us delay the result by using setTimeout
  setTimeout(() => {
    callback(userPosts);
  }, 1000);
};

// create a function to fetch Post comments
const fetchPostComments = (postId, callback) => {
  console.log("Fetching Posts comments...");
  // let us delay the result by using setTimeout
  setTimeout(() => {
    callback(postComments[postId]);
  }, 1000);
};

// initiate the process

// let's fetch user data first by calling the function and passing parameters
fetchUserData(1, function (userData) {
  // let's log the user data
  console.log("User Data: ", userData);
  // now let's fetch the posts associated with this user
  fetchUserPost(userData.id, (userPosts) => {
    // let's fetch the posts
    console.log("User Post: ", userPosts);
    // let's loop through
    userPosts.forEach((post) => {
      console.log("Post:", post);
      // now let's fetch the comments associated with the post id
      fetchPostComments(post.id, function (comments) {
        console.log("Comments:", comments);
      });
    });
  });
});
