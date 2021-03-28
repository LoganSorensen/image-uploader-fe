import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const UploadSuccess = (props) => {
  const copyText = (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    input.select();
    document.execCommand("copy");
  };

  return (
    <div className="upload-success image-window">
      <FontAwesomeIcon className="checkmark" icon={faCheckCircle} />
      <h2>Uploaded Successfully!</h2>
      <div className="image-area">
        <img src={props.imageUrl} alt="" />
      </div>
      <form onSubmit={copyText}>
        <input type="text" value={props.imageUrl} readOnly />
        <button>Copy Link</button>
      </form>
    </div>
  );
};

export default UploadSuccess;
