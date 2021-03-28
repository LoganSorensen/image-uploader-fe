import { useState } from "react";
import axios from "axios";

import "./App.css";

import ImageUpload from "./components/imageUpload";
import UploadSuccess from "./components/uploadSuccess";

function App() {
  const [component, setComponent] = useState("");
  const [imageUrl, setImageUrl] = useState("")

  const setDisplay = () => {
    setComponent("loader");
    console.log("loader");
    setTimeout(() => {
      console.log("success");
      setComponent("success");
    }, 3000);
  };

  const getImage = (url) => {
    console.log('getImage url:', url)
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setImageUrl(`http://localhost:5000/${res.data.image.image}`)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {component === "success" ? (
        <UploadSuccess imageUrl={imageUrl} />
      ) : (
        <ImageUpload setDisplay={setDisplay} getImage={getImage} />
      )}
    </div>
  );
}

export default App;
