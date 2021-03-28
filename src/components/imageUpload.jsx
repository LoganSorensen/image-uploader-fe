import React from "react";
import axios from "axios";

import { ReactComponent as UploadSvg } from "../assets/image.svg";

const ImageUpload = (props) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;

    [...files].forEach(uploadFile);
  };

  const handleInputClick = (e) => {
    const file = e.target.files[0];
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const formData = new FormData();

    formData.append("image", file);

    axios
      .post("http://localhost:5000/images", formData)
      .then((res) => {
        props.getImage(res.data.request.url);
        props.setDisplay();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="image-upload image-window">
      <h2>Upload your image</h2>
      <p>File should be a jpeg, jpg, or png</p>
      <div
        className="drop-area image-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <UploadSvg />
        <p>Drag &amp; Drop your image here</p>
      </div>
      <span>Or</span>
      <form>
        <label htmlFor="file-upload">Choose a file</label>
        <input type="file" id="file-upload" onChange={handleInputClick} />
      </form>
    </div>
  );
};

export default ImageUpload;
