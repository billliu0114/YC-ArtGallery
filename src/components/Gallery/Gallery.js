import { useState } from 'react';
import ArtItem from './ArtItem';

function Gallery(props) {
    const [items, setItems] = useState(props.items);
    const deleteOneArtHandler = (selectedUrl) => {
        setItems((prevItems) => {
            return prevItems.filter((art) => art.url!==selectedUrl)
        })
    };
    return (
        <div className="card-container">
            <ul id="card-flex-container">
                {
                    (items.length !== 0) && (
                        items.map((art) =>
                        (
                            <ArtItem
                                key={art.url}
                                name={art.name}
                                url={art.url}
                                onDeleteOneArt = {deleteOneArtHandler}
                            />
                        )
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default Gallery;