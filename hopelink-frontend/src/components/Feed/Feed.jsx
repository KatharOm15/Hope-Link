import React, { useState } from "react";
import "./Feed.css";

// Sample posts data
const samplePosts = [
  {
    id: 1,
    userName: "John Doe",
    userTitle: "Software Engineer at XYZ",
    postContent:
      "Excited to start a new journey at XYZ company! #newbeginnings #softwareengineer",
    postImage:
      "https://media.istockphoto.com/id/1130655067/photo/volunteers-planting-a-tree.jpg?s=612x612&w=0&k=20&c=LN2OT16Fg46ghQ3xjGh8-95awNIpLkoHXJ8ADRIVLnU=",
    hashtags: ["#newbeginnings", "#softwareengineer"],
    likes: 10,
    comments: 2,
    liked: false,
  },
  {
    id: 2,
    userName: "Jane Smith",
    userTitle: "Product Manager at ABC Corp",
    postContent:
      "Just wrapped up a great product launch! Check out the new features. #productlaunch #ABC",
    postImage:
      "https://c8.alamy.com/comp/WA5842/street-children-in-delhi-WA5842.jpg",
    hashtags: ["#productlaunch", "#ABC"],
    likes: 25,
    comments: 5,
    liked: false,
  },
  {
    id: 3,
    userName: "Jane Smith",
    userTitle: "Product Manager at ABC Corp",
    postContent:
      "Just wrapped up a great product launch! Check out the new features. #productlaunch #ABC",
    postImage:
      "https://c8.alamy.com/comp/WA5842/street-children-in-delhi-WA5842.jpg",
    hashtags: ["#productlaunch", "#ABC"],
    likes: 25,
    comments: 5,
    liked: false,
  },
];

function Feed() {
  const [posts, setPosts] = useState(samplePosts);

  const toggleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="user-info">
              <h4>{post.userName}</h4>
              <p>{post.userTitle}</p>
            </div>
          </div>
          <div className="post-content">
            <p>{post.postContent}</p>
            {post.postImage && <img src={post.postImage} alt="Post" />}
            <div className="hashtags">
              {post.hashtags.map((tag, index) => (
                <span key={index} className="hashtag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="post-actions">
            <button onClick={() => toggleLike(post.id)}>
              {post.liked ? "Unlike" : "Like"} ({post.likes})
            </button>
            <button>Comment ({post.comments})</button>
            <button>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
