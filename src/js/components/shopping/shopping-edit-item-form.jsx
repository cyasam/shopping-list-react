import React from 'react';

export default class ShoppingEditItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.data = this.props.data;
        this.state = {
            editedItem: this.data
        };
    }

    _editItem () {
        this.data.text = this._shopItem.value;
        this.setState({
            editedItem: this.data
        });
        this.props.editItem(this.state.editedItem);
    }

    _closeEdit () {
        this.props.closeEdit();
    }

    render () {
        if (this.props.openEdit) {
            return (
                <div className="edit-from">
                    <input defaultValue={this.state.editedItem.text} type="text" ref={(a) => {
                        this._shopItem = a;
                    }}/>
                    <button onClick={() => { this._editItem(this._shopItem); }} type="submit">Save</button>
                    <button onClick={() => { this._closeEdit(); }} >Cancel</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

ShoppingEditItemForm.propTypes = {
    data: React.PropTypes.object.isRequired,
    editItem: React.PropTypes.func.isRequired,
    closeEdit: React.PropTypes.func.isRequired,
    openEdit: React.PropTypes.bool.isRequired
};
