import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingAddItemForm extends React.Component {
    constructor () {
        super();
    }

    _sendShopItem (event) {
        event.preventDefault();

        let itemVal = this._shopItem.value;

        this.props.addItem(itemVal);
        this._shopItem.value = '';
    }

    render () {
        return (
            <form onSubmit={this._sendShopItem.bind(this)}>
                <input type="text" ref={(a) => { this._shopItem = a; }} />
                <button className="btn type-3" type="submit">
                    <i className="icon-plus" />Add
                </button>
            </form>
        );
    }

}

ShoppingAddItemForm.propTypes = {
    addItem: PropTypes.func.isRequired
};
