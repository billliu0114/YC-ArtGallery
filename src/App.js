import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Top-nav/Header';
import NavBar from './components/Top-nav/NavBar';
import Gallery from './components/Gallery/Gallery';
import GalleryForm from './components/GalleryForm/GalleryForm';
import ArtModal from './components/Gallery/ArtModal';
import * as appAPI from './appAPI.js';

function App() {
  const [arts, setArts] = useState([]);
  const [modalShown, setModalShown] = useState(false);
  const [modalItem, setModalItem] = useState({id:'', url:'', name:'', detail:''});
  const [isLoading, setIsLoading] = useState(false);

  const fetchArtItemsHandler = async (config) => {
    config.showLoading && setIsLoading(true);
    const resData = await appAPI.getExhibits();
    config.showLoading && setIsLoading(false);
    setArts(resData.data);
  };

  useEffect(()=>{
    fetchArtItemsHandler({showLoading: true});
  },[]);

  useEffect(()=>{
    setModalItem((prevItem)=>{
      if (prevItem.id!=='') {
        return arts.find(element => element.id === prevItem.id); 
      } else {
        return prevItem;
      }
    });
  },[arts]);

  const editModalHandler = async (id, content) => {
    await appAPI.patchExhibits(id, content);
    await fetchArtItemsHandler({showLoading: false});
  };

  const addArtHandler = async (artItem) => {
    await appAPI.postExhibits(artItem);
    await fetchArtItemsHandler({showLoading: false});
  };

  const deleteAllArtsHandler = async () => {
    await appAPI.deleteAllExhibits();
    await fetchArtItemsHandler({showLoading: false});
  };

  const deleteOneArtHandler = async (selectedId) => {
    await appAPI.deleteOneExhibits(selectedId);
    await fetchArtItemsHandler({showLoading: false});
  };

  const showModalHandler = (selectedId) => {
    const foundArt = arts.find(element => element.id === selectedId);
    setModalItem(foundArt);
    setModalShown(true);
  }

  const closeModalHandler = () => {
    setModalItem({id:'', url:'', name:'', detail:''});
    setModalShown(false);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <Gallery items={arts} isLoading = {isLoading} onDeleteOneArt={deleteOneArtHandler} onModalClick={showModalHandler} />
      <GalleryForm onAddArt={addArtHandler} onDeleteAllArts={deleteAllArtsHandler} />
      <ArtModal item={modalItem} shown={modalShown} onClose={closeModalHandler} onEdit={editModalHandler}/>
    </div>
  );
}

export default App;
