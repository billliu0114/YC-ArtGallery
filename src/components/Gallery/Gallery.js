import ArtItem from './ArtItem';

function Gallery(props) {
    const deleteOneArtHandler = (selectedUrl) => {
        props.onDeleteOneArt(selectedUrl);
    };

    const modalHandler = (selectedUrl) => {
        props.onModalClick(selectedUrl);
    }

    if( props.items.length===0) {
        return (<div className="card-container">
            <ul id="card-flex-container">
                <h2>No Art Found.</h2>
            </ul>
        </div>);
    }
    return (
        <div className="card-container">
            <ul id="card-flex-container">
                {props.items.map((art) => (
                    <ArtItem
                        key={art.url}
                        name={art.name}
                        url={art.url}
                        onDeleteOneArt={deleteOneArtHandler}
                        onModalClick={modalHandler}
                    />)
                )}
            </ul>
        </div>
    );
};

export default Gallery;