import { useState } from "react";
import axios from "axios";

import "./App.css";

import ImageUpload from "./components/imageUpload";
import UploadSuccess from "./components/uploadSuccess";
import Loader from "./components/loader";

function App() {
  const [component, setComponent] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const setDisplay = () => {
    setComponent("loader");
    setTimeout(() => {
      setComponent("success");
    }, 3000);
  };

  const getImage = (url) => {
    axios
      .get(url)
      .then((res) => {
        setImageUrl(`http://localhost:5000/${res.data.image.image}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {component === "success" ? (
        <UploadSuccess imageUrl={imageUrl} />
      ) : component === "loader" ? (
        <Loader />
      ) : (
        <ImageUpload setDisplay={setDisplay} getImage={getImage} />
      )}
    </div>
  );
}

export default App;
