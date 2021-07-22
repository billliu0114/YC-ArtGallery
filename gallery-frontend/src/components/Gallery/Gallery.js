import ArtItem from './ArtItem';

function Gallery(props) {
    const deleteOneArtHandler = async (selectedId) => {
        await props.onDeleteOneArt(selectedId);
    };

    const modalHandler = (selectedId) => {
        props.onModalClick(selectedId);
    }

    if (props.isLoading === true) {
        return (
        <div className="card-container">
            <ul id="card-flex-container">
                <h2>Loading...</h2>
            </ul>
        </div>);
    }
    if( props.items.length===0) {
        return (
        <div className="card-container">
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
                        key={art.id}
                        id={art.id}
                        name={art.name}
                        url={art.url}
                        detail={art.detail}
                        onDeleteOneArt={deleteOneArtHandler}
                        onModalClick={modalHandler}
                    />)
                )}
            </ul>
        </div>
    );
};

export default Gallery;