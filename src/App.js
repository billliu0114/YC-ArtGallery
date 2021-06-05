import { useState } from 'react';
import './App.css';
import Header from './components/Top-nav/Header';
import NavBar from './components/Top-nav/NavBar';
import Gallery from './components/Gallery/Gallery';
import GalleryForm from './components/GalleryForm/GalleryForm';

const initDataStr = '{"data": [{"name": "Yuchen Liu", "url": "./images/IMG_1241.JPG"}, ' +
    '{"name": "Chole Zhang", "url": "./images/IMG_0606.JPG"}, ' +
    '{"name": "sorincolac / iStock / Getty Images Plus", "url": "https://cdn.travelpulse.com/images/04aaedf4-a957-df11-b491-006073e71405/d7dd8d85-eed6-4740-8962-1583ff8dc93f/630x355.jpg"}, ' +
    '{"name": "JAMES CUNO", "url": "https://d3vjn2zm46gms2.cloudfront.net/blogs/2012/12/27011605/gtc_2008-05-26spri0002.jpg"}, ' +
    '{"name": "Van Gogh", "url": "https://www.vangoghgallery.com/img/starry_night_full.jpg"}, ' +
    '{"name": "Claude Monet", "url": "https://www.claude-monet.com/images/paintings/san-giorgio-maggiore-at-dusk.jpg"}, ' +
    '{"name": "Johannes Vermeer", "url": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/01/girlwithapearlearring.jpg"}, ' +
    '{"name": "Van Gogh", "url": "https://www.vincentvangogh.org/images/paintings/cafe-terrace-at-night.jpg"}]}';

function App() {
  const initDataObj = JSON.parse(initDataStr);
  const [arts, setArts] = useState(initDataObj.data);
  const addArtHandler = () => {
    setArts((prevArts) => {
      return [...prevArts];
    });
  };
  const deleteArtHandler = () => {
    setArts([]);
  };
  return (
    <div>
      <Header />
      <NavBar />
      <Gallery items={arts} />
      <GalleryForm onAddArt={addArtHandler} onDeleteAll={deleteArtHandler}/>
    </div>
  );
}

export default App;
