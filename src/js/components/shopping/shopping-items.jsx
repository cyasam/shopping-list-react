import React from 'react';
import PropTypes from 'prop-types';
import ShoppingModal from '../shopping/shopping-modal';
import ShoppingEditItemForm from '../shopping/shopping-edit-item-form';
import * as lib from '../../general/functions';

export default class ShoppingItems extends React.Component {
    constructor () {
        super();
        this.state = {
            openModal: false,
            removeReqItem: {}
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

    _openButtons (e) {
        let toggleButton = e.target;
        let itemDiv = lib._getParents(toggleButton, 'item');
        let toggleButWrapper = lib._findChidren(itemDiv, 'toggle-buttons');
        let buttons = lib._findChidren(itemDiv, 'buttons');

        window.setTimeout(function () {
            buttons.classList.toggle('open');
            toggleButWrapper.classList.toggle('active');
        }, 50);
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
                    <ShoppingModal openModal={this.state.openModal} removedItem={rItem}
                    modalProcess={(mPType) => this._modalProcess(mPType, rItem)} />
                </div>
            );
        } else {
            return (
                <p className="no-item">You don't have any item in your list.</p>
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
