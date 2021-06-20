import { useState, useEffect } from 'react';

// Adapted from https://www.w3schools.com/howto/howto_css_modals.asp
function ArtModal(props) {
    const [inEditMode, setInEditMode] = useState(false);
    const [localDetail, setLocalDetail] = useState(props.item.detail);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>setLocalDetail(props.item.detail),[props.item.detail]);

    const closeModalHandler = () => {
        setInEditMode(false);
        props.onClose();
    };

    const detailChangeHandler = (event) => {
        setLocalDetail(event.target.value);
    }

    const editHandler = async () => {
        if (inEditMode){
            // to save
            // Call PATCH API with updated localDetail
            setIsLoading(true);
            await props.onEdit(props.item.id, localDetail);
            setIsLoading(false);
        }
        setInEditMode((prevState)=>!prevState);
    };

    return (
        <div>
            {props.shown && (
                <div className="modal-card">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-close" onClick={closeModalHandler}>&#x2716;</span>
                            <h2>Detail</h2>
                        </div>
                        <div className="modal-body">
                            {!inEditMode && <p>{props.item.detail}</p>}
                            {inEditMode && 
                                <input
                                className="modal-edit-input"
                                type="text"
                                id="detail-modal"
                                placeholder="Enter details"
                                value={localDetail}
                                onChange={detailChangeHandler}
                                />
                            }
                            <button onClick={editHandler} disabled={isLoading}> {!inEditMode && 'Edit'} {inEditMode && 'Save'} </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArtModal;