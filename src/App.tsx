import "react-image-gallery/styles/scss/image-gallery.scss";
import logo from "./photos/main.jpg";

import MapUI from "./components/map";
import ClothesInfo from "./components/clothes";
import Gifts from "./components/gifts";
import SliderUI from "./components/slider";

import "./App.scss";

function App() {
  return (
    <div className="layout">
      <div className="main">
        <div
          className="main__image"
          style={{ backgroundImage: `url("${logo}")` }}
        />
        <span
          className="main--title"
          dangerouslySetInnerHTML={{
            __html: "Всем привет! <br> Я Алиса и мне скоро будет годик!",
          }}
        />
      </div>
      <div className="invite">
        Хотела бы пригласить вас встретить его со мной
      </div>
      <MapUI />
      <Gifts />
      <ClothesInfo />
      <SliderUI />
      <div className="thanks_block">Всем спасибо и жду жду жду! жу жу жу</div>
    </div>
  );
}

export default App;
