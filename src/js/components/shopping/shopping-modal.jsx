import React from 'react';

export default class ShoppingModal extends React.Component {
    constructor () {
        super();
    }

    render () {
        if (this.props.openModal) {
            return (
                <div className="modal">
                    <div className="modal-inner">
                        <p>Are you sure to delete this item?</p>
                        <div className="buttons">
                            <button onClick={() => {
                                this.props.modalProcess('del');
                            }}>Delete
                            </button>
                            <button onClick={() => {
                                this.props.modalProcess();
                            }}>Cancel
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return false;
        }
    }
}

ShoppingModal.propTypes = {
    modalProcess: React.PropTypes.func,
    openModal: React.PropTypes.bool.isRequired
};
