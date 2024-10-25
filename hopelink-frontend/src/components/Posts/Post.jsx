import React, { useState ,useEffect} from 'react';
import './post.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Post() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("file uploaded");
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
   
  const [postContent, setPostContent] = useState('');
  const [tags, setTags] = useState('');


  

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };




  const handleCancel = () => {
    setPostContent('');
    setTags('');
    // setVisibility('Public');
  };
  const handlePostChange=()=>{
    setPostContent(postContent);

  }

  return (
    <div className="add-post-container">
      <div className="add-post-header">
        <h2>Create a Post</h2>
      </div>
      <div className="add-post-content">
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="What do you want to talk about?"
          rows="5"
        />
        <div className="post-actions">
          <label htmlFor="file-upload" className="custom-file-upload">
            <input type="file" id="file-upload"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />
            Add Image/Video
          </label>
        </div>
        <div className="post-tags">
          <input
            type="text"
            value={tags}
            onChange={handleTagsChange}
            placeholder="Add tags (e.g., #technology, @JohnDoe)"
          />
        </div>
      </div>
      <div className="add-post-footer">
        <button className="btn cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn post"  onClick={uploadFile}>
          Post
        </button>
      </div>
      {imageUrls.map((url) => {
        return <img  src={url} />;
      })}
    </div>
  );
}

export default Post;
