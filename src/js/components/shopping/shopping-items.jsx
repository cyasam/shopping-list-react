import React from 'react';
import PropTypes from 'prop-types';
import ShoppingModal from '../shopping/shopping-modal';
import ShoppingEditItemForm from '../shopping/shopping-edit-item-form';

export default class ShoppingItems extends React.Component {
    constructor () {
        super();
        this.state = {
            openModal: false,
            removeReqItem: ''
        };
    }

    _openModal (item) {
        this.setState({
            openModal: true,
            removeReqItem: item
        });
    }

    _modalProcess (mPType = '', removeReqItem) {
        this.setState({
            openModal: false
        });
        if (mPType === 'del') {
            this.props.remove(removeReqItem);
        }
    }

    _editItem (value) {
        this.props.editItem(value);
    }

    _openEditForm (id) {
        this.props.handleOpenEditForm(id);
    }

    _getParents (el, parentClass) {
        var parent = el.parentNode;
        while (parent !== document.body) {
            if (parent && (parent.classList.contains(parentClass))) {
                return parent;
            } else {
                parent = parent.parentNode;
            }
        }
        return null;
    }

    _findChidren (el, childClass) {
        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i] && children[i].classList.contains(childClass)) {
                return children[i];
            }
        }

        return null;
    }

    _openButtons (e) {
        let toggleButton = e.target;
        let itemDiv = this._getParents(toggleButton, 'item');
        let toggleButWrapper = this._findChidren(itemDiv, 'toggle-buttons');
        let buttons = this._findChidren(itemDiv, 'buttons');

        if (buttons.classList.contains('open')) {
            buttons.classList.remove('open');
            toggleButWrapper.classList.remove('active');
        } else {
            buttons.classList.add('open');
            toggleButWrapper.classList.add('active');
        }
    }

    render () {
        let items = this.props.itemsList;
        let rItem = this.state.removeReqItem;

        if (items.length > 0) {
            return (
                <div>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>
                                <div className="list-item">
                                    { !item.openEdit ? (
                                    <div className="item">
                                        <div className="item-text" title="Click to edit..."
                                             onClick={() => { this._openEditForm(item.id); }} >
                                            <i className="list-icon icon-checkmark" />
                                            <p>{ item.text }</p>
                                        </div>
                                        <div className="buttons item-buttons">
                                            <button className="btn type-3"
                                                    onClick={() => { this._openEditForm(item.id); }}>
                                                <i className="icon-pencil" />Edit
                                            </button>
                                            <button className="btn type-4"
                                                    onClick={() => { this._openModal(item); }}>
                                                <i className="icon-bin" />Delete
                                            </button>
                                        </div>
                                        <button className="toggle-buttons" onClick={(e) => { this._openButtons(e); }}>
                                            <i className="icon-circle-left" />
                                        </button>
                                    </div>
                                    ) : (null)}
                                    <ShoppingEditItemForm openEdit={item.openEdit} editItem={this._editItem.bind(this)}
                                    data={item} handleEditForm={this._openEditForm.bind(this)}
                                    removeItem={this._openModal.bind(this)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ShoppingModal openModal={this.state.openModal}
                    modalProcess={(mPType) => this._modalProcess(mPType, rItem)} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>You don't have any item in your list.</p>
                </div>
            );
        }
    }
}

ShoppingItems.propTypes = {
    remove: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    itemsList: PropTypes.array.isRequired,
    handleOpenEditForm: PropTypes.func.isRequired
};
