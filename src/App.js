import "./App.css";
import Form from "./components/Form";

function App() {
  let imageArray = [
    "/images/6.png",
    "/images/5.png",
    "/images/2.png",
    "/images/7.png",
    "/images/1.png",
    "/images/4.png",
    "/images/3.png",
    "/images/8.png",
  ];
  return (
    <div className="App">
      <div className="container-wrap">
        <div className="home-Image-div">
          {imageArray.map((Img) => (
            <div className="Image" key={Img.id}>
              <img src={Img} />
            </div>
          ))}
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
