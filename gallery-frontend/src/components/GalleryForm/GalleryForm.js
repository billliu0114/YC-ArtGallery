import GalleryFormInput from './GalleryFormInput';

function GalleryForm(props) {
    const addArtHandler = async (artItem) => {
        await props.onAddArt(artItem);
    };

    const deleteAllArtsHandler = async () => {
        await props.onDeleteAllArts();
    };
    
    return (
        <div className="form-container">
            <h2>Adding a new piece of art</h2>
            <GalleryFormInput onAddArt={addArtHandler} onDeleteAllArts={deleteAllArtsHandler}/>
        </div>
    );
};

export default GalleryForm;