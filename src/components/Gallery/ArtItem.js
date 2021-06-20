function ArtItem(props) {
    const deleteHandler = (event) => {
        event.stopPropagation();
        props.onDeleteOneArt(props.id);
    };

    const modalHandler = () => {
        props.onModalClick(props.id);
    }

    return (
        <li className="card-flex-item">
            <div className="card" onClick={modalHandler}>
                <img src={props.url} alt="ImageCard"/>
                <div className="ref">
                    <h4>{props.name}</h4>
                </div>
                <input className="delete-one-art" type="button" value="&#x2716;" onClick={deleteHandler} />
            </div>
        </li>
    );
};

export default ArtItem;