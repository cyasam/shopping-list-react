import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingAddItemForm from './components/shopping/shopping-add-item-form';
import ShoppingItems from './components/shopping/shopping-items';
import ShoppingHeader from "./components/shopping/shopping-edit-header-form";

require('../sass/styles.scss');

class ShoppingList extends React.Component {
    constructor () {
        super();
        this.state = {
            listHeader: null,
            items: []
        };
    }

    componentWillMount () {
        let state = localStorage.getItem('data');

        if (state !== null) {
            state = JSON.parse(state);

            let items = state.items;
            items.forEach(function (item) {
                item.openEdit = false;
            });
            this.setState({ items: items });

            // Header Control
            let listHeader = (state.listHeader) ? state.listHeader : 'Shopping List';
            this.setState({ listHeader: listHeader });
        } else {
            // Header Control
            this.setState({ listHeader: 'Shopping List' });
        }
    }

    componentDidUpdate () {
        this._saveData();
    }

    _saveData () {
        let state = this.state;
        state = JSON.stringify(state);
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
        itemObj.openEdit = false;

        this.setState({ items: this.state.items.concat(itemObj) });
    }

    _editItem (value) {
        let items = this.state.items;
        let editedIndex = -1;
        items.some(function (x, i) {
            if (x.id === value.id) {
                editedIndex = i;
            }
        });
        items[editedIndex] = value;
        this._openEditForm(value.id);

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

    _openEditForm (id) {
        let items = this.state.items;
        let openEdit = null;
        let editFormIndex = -1;
        items.some(function (x, i) {
            if (x.id === id) {
                editFormIndex = i;
            }
        });

        if (this.state.items[editFormIndex].openEdit) {
            openEdit = false;
        } else {
            openEdit = true;

            window.setTimeout(function () {
                let editInputSel = document.querySelectorAll('.edit-form input[type="text"]');
                for (var i = 0; i < editInputSel.length; i++) {
                    editInputSel[i].className = 'open';
                    editInputSel[i].focus();
                }
            }, 50);
        }

        items[editFormIndex].openEdit = openEdit;
        this.setState({ items: items });
    }

    _changeListHeader (headerText) {
        this.setState({ listHeader: headerText });
    }

    render () {
        let listHeader = this.state.listHeader;

        return (
            <div className="shopping-wrapper">
                <ShoppingHeader headerText={listHeader} handleHeaderForm={this._changeListHeader.bind(this)}/>
                <div className="shopping-list-wrapper">
                    <div className="shopping-list">
                        <ShoppingItems handleOpenEditForm={this._openEditForm.bind(this)}
                        editItem={this._editItem.bind(this)}
                        remove={this._deleteItem.bind(this)}
                        itemsList={this.state.items} />
                    </div>
                </div>
                <ShoppingAddItemForm addItem={this._addItem.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('shopping-list')
);
