
// Adapted from https://www.w3schools.com/howto/howto_css_modals.asp
function ArtModal(props) {
    const closeModalHandler = () => {
        props.onClose();
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
                            <p>The url for this art work is:</p>
                            <p>{props.url}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArtModal;