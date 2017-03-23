import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingAddItemForm from './components/shopping/shopping-add-item-form';
import ShoppingItems from './components/shopping/shopping-items';

require('../sass/styles.scss');

class ShoppingList extends React.Component {
    constructor () {
        super();
        this.state = {
            items: []
        };
    }

    componentWillMount () {
        let state = localStorage.getItem('data');
        if (state !== null) {
            state = JSON.parse(state);
            this.setState({ items: state.items });
        }
    }

    _saveData () {
        let state = JSON.stringify(this.state);
        localStorage.setItem('data', state);
    }

    _createUniqueId () {
        let s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    _addItem (item) {
        let id = this._createUniqueId();
        let itemObj = {};
        itemObj.id = id;
        itemObj.text = item;

        this.setState({ items: this.state.items.concat(itemObj) });
    }

    _editItem (value) {
        let items = this.state.items;
        let editedIndex = items.findIndex(x => x.id === value.id);
        items[editedIndex] = value;

        this.setState({
            items: items
        });
    }

    _deleteItem (item) {
        var items = this.state.items.filter(function (itm) {
            return item.id !== itm.id;
        });

        this.setState({ items: items });
    }

    render () {
        this._saveData();
        return (
            <div className="shopping-wrapper">
                <div className="shopping-list-wrapper">
                    <div className="shopping-list">
                        <h1>Shopping List</h1>
                        <ShoppingItems editItem={this._editItem.bind(this)}
                        remove={this._deleteItem.bind(this)} itemsList={this.state.items} />
                    </div>
                </div>
                <div className="shopping-form">
                    <ShoppingAddItemForm addItem={this._addItem.bind(this)} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('comment-box')
);
