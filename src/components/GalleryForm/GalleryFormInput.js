import {useState} from 'react';

function GalleryFormInput(props) {

    const [artistName, setArtistName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [detail, setDetail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const ArtistChangeHandler = (event) => {
        setArtistName(event.target.value);
    };

    const imageURLChangeHandler = (event) => {
        setImageURL(event.target.value);
    };

    const detailChangeHandler = (event) => {
        setDetail(event.target.value);
    };

    const submitFormHandler = async (event) => {
        event.preventDefault();
        const artItem = {
            name: artistName,
            url: imageURL,
            detail: detail
        };
        setIsLoading(true);
        await props.onAddArt(artItem);
        setIsLoading(false);
        clearFormHandler();
    };

    const clearFormHandler = () => {
        setArtistName("");
        setImageURL("");
        setDetail("");
    };

    const deleteAllArtsHandler = async () => {
        await props.onDeleteAllArts();
    };

    return (
        <div className="form-input">
            <form onSubmit={submitFormHandler}>
                <div className="row">
                    <div className="col-left">
                        <label htmlFor="artist">Artist Name:</label>
                    </div>
                    <div className="col-right">
                        <input
                            type="text"
                            id="artist"
                            placeholder="Enter artist name"
                            value={artistName}
                            onChange={ArtistChangeHandler}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-left">
                        <label htmlFor="imageURL">Image URL:</label>
                    </div>
                    <div className="col-right">
                        <input
                            type="text"
                            id="imageURL"
                            placeholder="Enter image URL"
                            value={imageURL}
                            onChange={imageURLChangeHandler}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-left">
                        <label htmlFor="detail">Detail:</label>
                    </div>
                    <div className="col-right">
                        <input
                            type="text"
                            id="detail"
                            placeholder="Enter details"
                            value={detail}
                            onChange={detailChangeHandler}
                        />
                    </div>
                </div>
                <div className="row-button">
                    <button type="submit" disabled={isLoading}>Add Image</button>
                    <button type="button" onClick={clearFormHandler} disabled={isLoading}>Clear Input</button>
                </div>
                <div className="row-button">
                    <button id="form-deleteAllButton" type="button" onClick={deleteAllArtsHandler}>Delete All Arts</button>
                </div>
            </form>
        </div>);
};

export default GalleryFormInput;