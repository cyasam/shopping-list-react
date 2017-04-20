import React from 'react';
import PropTypes from 'prop-types';

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
    modalProcess: PropTypes.func,
    openModal: PropTypes.bool.isRequired
};
