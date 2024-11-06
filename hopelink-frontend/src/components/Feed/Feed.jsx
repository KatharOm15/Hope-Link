import React, { useState,useEffect } from "react";
import "./Feed.css";
import axios from "axios";



function Feed() {
  // const [posts, setPosts] = useState(samplePosts);

  // const toggleLike = (postId) => {
  //   setPosts(
  //     posts.map((post) =>
  //       post.id === postId
  //         ? {
  //             ...post,
  //             likes: post.liked ? post.likes - 1 : post.likes + 1,
  //             liked: !post.liked,
  //           }
  //         : post
  //     )
  //   );
  // };
  const [data, setData] = useState([]);
  useEffect(() => {
  axios.get("http://localhost:3000/feed")
  .then((res)=>{
    setData(res.data);
  })
  .catch((error) => {
   alert("error accored ",error)
  })
},[]);

  return (
    <div className="feed-container">
      {data.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="user-info">
              <h4>{post.postTitle}</h4>
              <p>{post.userTitle}</p>
            </div>
          </div>
          <div className="post-content">
            <p></p>
            {post.postImg && <img src={post.postImg} alt="Post" />}
            <div className="hashtags">
              {post.postTags}
            </div>
          </div>
          {/* <div className="post-actions">
            <button onClick={() => toggleLike(post.id)}>
              {post.liked ? "Unlike" : "Like"} ({post.likes})
            </button>
            <button>Comment ({post.comments})</button>
            <button>Share</button>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Feed;
