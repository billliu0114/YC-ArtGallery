import { useState, useEffect } from 'react';

// Adapted from https://www.w3schools.com/howto/howto_css_modals.asp
function ArtModal(props) {
    const [inEditMode, setInEditMode] = useState(false);
    const [localDetail, setLocalDetail] = useState(props.detail);
    useEffect(()=>setLocalDetail(props.detail),[props.detail]);

    const closeModalHandler = () => {
        props.onClose();
    };

    const detailChangeHandler = (event) => {
        setLocalDetail(event.target.value);
    }

    const editHandler = () => {
        if (inEditMode){
            // to save

        } else {
            // to edit
            
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
                            {!inEditMode && <p>{props.detail}</p>}
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
                            <button onClick={editHandler}> {!inEditMode && 'Edit'} {inEditMode && 'Save'} </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArtModal;