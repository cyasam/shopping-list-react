import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingModal extends React.Component {
    constructor () {
        super();
    }

    render () {
        this.removedItem = this.props.removedItem || null;
        let removedItem = this.removedItem;

        if (this.props.openModal) {
            return (
                <div className="modal">
                    <div className="modal-inner">
                        <p>Are you sure to delete <strong>"{removedItem.text}"</strong>?</p>
                        <div className="buttons">
                            <button className="btn type-1" onClick={() => {
                                this.props.modalProcess('del');
                            }}>Ok
                            </button>
                            <button className="btn type-4" onClick={() => {
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
    modalProcess: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    removedItem: PropTypes.object.isRequired
};
