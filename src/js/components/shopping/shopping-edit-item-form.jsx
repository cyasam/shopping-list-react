import React from 'react';

export default class ShoppingEditItemForm extends React.Component {
    constructor () {
        super();
    }

    render () {
        console.log(this.props);
        if (this.props.openEdit) {
            return (
                <div className="edit-from">
                    <input type="text" ref={(a) => {
                        this._shopItem = a;
                    }}/>
                    <button type="submit">Edit</button>
                    <button>Cancel</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

ShoppingEditItemForm.PropTypes = {
    openEdit: React.PropTypes.bool.isRequired
};
