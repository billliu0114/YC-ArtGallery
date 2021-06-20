import { useState } from 'react';
import './App.css';
import Header from './components/Top-nav/Header';
import NavBar from './components/Top-nav/NavBar';
import Gallery from './components/Gallery/Gallery';
import GalleryForm from './components/GalleryForm/GalleryForm';
import ArtModal from './components/Gallery/ArtModal';

const initDataStr = '{"data":[{"id":"92a95f97-6951-48ad-8bbe-d45d08442492","name":"Yuchen Liu","url":"./images/IMG_1241.JPG","detail":"Painting by myself."},{"id":"eb650209-98a6-4fe3-82a0-f4672b88d5ec","name":"Chole Zhang","url":"./images/IMG_0606.JPG","detail":"Picture took in Banff National Park."},{"id":"3fc1735f-dbbb-4f01-bde2-0cdd8937209f","name":"sorincolac / iStock / Getty Images Plus","url":"https://d3vjn2zm46gms2.cloudfront.net/blogs/2012/12/27011605/gtc_2008-05-26spri0002.jpg","detail":"Nice picture of Getty museum."},{"id":"a8eb9bca-c864-469a-962b-1d78fb9546b4","name":"JAMES CUNO","url":"https://cdn.travelpulse.com/images/04aaedf4-a957-df11-b491-006073e71405/d7dd8d85-eed6-4740-8962-1583ff8dc93f/630x355.jpg","detail":"Nice place in Mexico."},{"id":"232d81bf-0b07-4fdf-9070-feeb2a0152c3","name":"Van Gogh","url":"https://www.vangoghgallery.com/img/starry_night_full.jpg","detail":"One of my favourite artist."},{"id":"988f55fa-d179-406e-8ef8-be7f086cfd84","name":"Claude Monet","url":"https://www.claude-monet.com/images/paintings/san-giorgio-maggiore-at-dusk.jpg","detail":"Another one of my favourite artist."},{"id":"056c7037-d583-4c59-8701-895ceeae84df","name":"Johannes Vermeer","url":"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/01/girlwithapearlearring.jpg","detail":"Famous portrait."},{"id":"cf2c4673-a28b-4b63-b01f-6b9afe907dcc","name":"star","url":"https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg","detail":"hhh"}]}';

function App() {
  const initDataObj = JSON.parse(initDataStr);
  const [arts, setArts] = useState(initDataObj.data);
  const [modalShown, setModalShown] = useState(false);
  const [modalDetail, setModalDetail] = useState("");

  const addArtHandler = (artItem) => {
    setArts((prevArts) => {
      return [...prevArts, artItem];
    });
  };

  const deleteAllArtsHandler = () => {
    setArts([]);
  };

  const deleteOneArtHandler = (selectedId) => {
    setArts((prevArts) => {
      return prevArts.filter((artItem) => artItem.id !== selectedId);
    });
  };

  const showModalHandler = (selectedId) => {
    const foundArt = arts.find(element => element.id === selectedId);

    setModalDetail(foundArt.detail);
    setModalShown(true);
  }

  const closeModalHandler = () => {
    setModalDetail("");
    setModalShown(false);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <Gallery items={arts} onDeleteOneArt={deleteOneArtHandler} onModalClick={showModalHandler} />
      <GalleryForm onAddArt={addArtHandler} onDeleteAllArts={deleteAllArtsHandler} />
      <ArtModal detail={modalDetail} shown={modalShown} onClose={closeModalHandler} />
    </div>
  );
}

export default App;
