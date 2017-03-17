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
        let state = localStorage.getItem('todo');
        if (state !== null) {
            state = JSON.parse(state);
            this.setState({ items: state.items });
        }
    }

    _saveData () {
        let state = JSON.stringify(this.state);
        localStorage.setItem('todo', state);
    }

    _addItem (item) {
        let id = this.state.items.length + 1;
        let itemObj = {};
        itemObj.id = id;
        itemObj.text = item;

        this.setState({ items: this.state.items.concat(itemObj) });
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
                        <ShoppingItems remove={this._deleteItem.bind(this)} itemsList={this.state.items} />
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
