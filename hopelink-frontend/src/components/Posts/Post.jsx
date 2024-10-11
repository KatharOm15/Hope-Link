import React, { useState } from 'react';
import './post.css'

function Post() {
  const [postContent, setPostContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState('');
  const [visibility, setVisibility] = useState('Public');

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  const handlePost = () => {
    // Handle post logic here (submit to backend, etc.)
    alert('Post created!');
    setPostContent('');
    setSelectedFile(null);
    setTags('');
    setVisibility('Public');
  };

  const handleCancel = () => {
    setPostContent('');
    setSelectedFile(null);
    setTags('');
    setVisibility('Public');
  };

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
            <input type="file" id="file-upload" onChange={handleFileChange} />
            Add Image/Video
          </label>
          {selectedFile && <p>File selected: {selectedFile.name}</p>}
        </div>
        <div className="post-tags">
          <input
            type="text"
            value={tags}
            onChange={handleTagsChange}
            placeholder="Add tags (e.g., #technology, @JohnDoe)"
          />
        </div>
        <div className="post-visibility">
          <label>Visibility: </label>
          <select value={visibility} onChange={handleVisibilityChange}>
            <option value="Public">Public</option>
            <option value="Connections">Connections only</option>
            <option value="Private">Only me</option>
          </select>
        </div>
      </div>
      <div className="add-post-footer">
        <button className="btn cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn post" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
}

export default Post;
