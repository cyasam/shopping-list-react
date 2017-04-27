import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingEditItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.data = this.props.data;
        this.state = {
            editedItem: this.data
        };
    }

    _openModal (item) {
        this.props.removeItem(item);
    }

    _editItem (item) {
        this.data.text = item.value;
        this.setState({
            editedItem: this.data
        });
        this.props.editItem(this.state.editedItem);
    }

    _onSubmit (item, e) {
        this._editItem(item);
        e.preventDefault();
    }

    _openEditForm (id) {
        this.props.handleEditForm(id);
    }

    render () {
        let editText = this.state.editedItem.text;
        let openEdit = this.props.openEdit;
        let editId = this.state.editedItem.id;

        return (
            <div>
                { openEdit ? (
                    <div className="edit-form-wrapper">
                        <form className="edit-form" onSubmit={(e) => { this._onSubmit(this._shopItem, e); }}>
                            <div className="form-item">
                                <i className="list-icon icon-checkmark" />
                                <input defaultValue={editText} type="text" ref={(a) => {
                                    this._shopItem = a;
                                }}/>
                            </div>
                            <div className="buttons edit-form-buttons">
                                <button className="btn type-3" type="submit">
                                    <i className="icon-floppy-disk" />Save
                                </button>
                                <a className="btn type-4" onClick={() => { this._openEditForm(editId); }}>
                                    <i className="icon-cancel-circle" />Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                ) : (null)}
            </div>
        );
    }
}

ShoppingEditItemForm.propTypes = {
    data: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    openEdit: PropTypes.bool.isRequired,
    handleEditForm: PropTypes.func.isRequired
};
