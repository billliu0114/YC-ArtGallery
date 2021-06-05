function ArtItem(props) {
    const clickHandler = () => {
        props.onDeleteOneArt(props.url);
    };

    return (
        <li className="card-flex-item">
            <div className="card">
                <img src={props.url} alt="ImageCard"/>
                <div className="ref">
                    <h4>{props.name}</h4>
                </div>
                <input className="delete-one-art" type="button" value="x" onClick={clickHandler} />
            </div>
        </li>
    );
};

export default ArtItem;