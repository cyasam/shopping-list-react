import React from 'react';

export default class ShoppingEditItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.data = this.props.data;
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
                        <form className="edit-form" onSubmit={(e) => { this._onSubmit(this._shopItem, e); }}>
                            <input defaultValue={editText} type="text" ref={(a) => {
                                this._shopItem = a;
                            }}/>
                            <div className="buttons">
                                <button type="submit">Save</button>
                                <button onClick={() => { this._handleEdit(); }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="item">
                        <p onClick={() => { this._handleEdit(); }}>{ item.text }</p>
                        <div className="buttons">
                            <button onClick={() => { this._handleEdit(); }}>Edit</button>
                            <button onClick={() => { this._openModal(item); }}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

ShoppingEditItemForm.propTypes = {
    data: React.PropTypes.object.isRequired,
    editItem: React.PropTypes.func.isRequired,
    removeItem: React.PropTypes.func.isRequired
};
