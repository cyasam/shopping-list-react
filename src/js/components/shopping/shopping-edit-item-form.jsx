import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingEditItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.data = this.props.data;
        this.editInputSelector = null;
        this.state = {
            editedItem: this.data,
            openEdit: false
        };
    }

    _openModal (item) {
        this.props.removeItem(item);
    }

    _editItem (item) {
        this.data.text = item.value;
        this.setState({
            editedItem: this.data,
            openEdit: false
        });
        this.props.editItem(this.state.editedItem);
    }

    _handleEdit () {
        let openEdit = null;

        if (this.state.openEdit) {
            openEdit = false;
        } else {
            openEdit = true;

            window.setTimeout(function () {
                let editInputSel = document.querySelectorAll('.edit-form input[type="text"]');
                editInputSel.forEach(function (el) {
                    el.className = 'open';
                    el.focus();
                });
            }, 10);
        }

        this.setState({
            openEdit: openEdit
        });
    }

    _onSubmit (item, e) {
        this._editItem(item);
        this._handleEdit();
        e.preventDefault();
    }

    render () {
        let editText = this.state.editedItem.text;
        let openEdit = this.state.openEdit;
        let item = this.props.data;

        return (
            <div className="list-item">
                { openEdit ? (
                    <div className="edit-form-wrapper">
                        <i className="list-icon icon-checkmark" />
                        <form className="edit-form" onSubmit={(e) => { this._onSubmit(this._shopItem, e); }}>
                            <input defaultValue={editText} type="text" ref={(a) => {
                                this._shopItem = a;
                            }}/>
                            <div className="buttons">
                                <button className="btn type-3" type="submit">
                                    <i className="icon-floppy-disk" />Save
                                </button>
                                <button className="btn type-4" onClick={() => { this._handleEdit(); }}>
                                    <i className="icon-cancel-circle" />Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="item">
                        <div className="item-text" onClick={() => { this._handleEdit(); }} title="Click to edit...">
                            <i className="list-icon icon-checkmark" />
                            <p>{ item.text }</p>
                        </div>
                        <div className="buttons">
                            <button className="btn type-3" onClick={() => { this._handleEdit(); }}>
                                <i className="icon-pencil" />Edit
                            </button>
                            <button className="btn type-4" onClick={() => { this._openModal(item); }}>
                                <i className="icon-bin" />Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

ShoppingEditItemForm.propTypes = {
    data: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
};
