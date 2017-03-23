import React from 'react';
import ShoppingModal from '../shopping/shopping-modal';
import ShoppingEditItemForm from '../shopping/shopping-edit-item-form';

export default class ShoppingItems extends React.Component {
    constructor () {
        super();
        this.state = {
            openModal: false,
            openEdit: false,
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

    _openEditForm () {
        this.setState({
            openEdit: true
        });
    }

    _closeEditForm () {
        this.setState({
            openEdit: false
        });
    }

    _editItem (value) {
        this.props.editItem(value);
        this.setState({
            openEdit: false
        });
    }

    render () {
        let items = this.props.itemsList;
        let rItem = this.state.removeReqItem;
        let openEdit = this.state.openEdit;

        if (items.length > 0) {
            return (
                <div>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>
                                { !openEdit ? item.text : '' }
                                <ShoppingEditItemForm editItem={this._editItem.bind(this)} data={item}
                                 openEdit={openEdit} closeEdit={this._closeEditForm.bind(this)} />
                                { this.state.openEdit === false ? (
                                    <div className="buttons">
                                        <button onClick={() => { this._openEditForm(item); }}>Edit</button>
                                        <button onClick={() => { this._openModal(item); }}>Delete</button>
                                    </div>
                                ) : ("")
                                }
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
    remove: React.PropTypes.func.isRequired,
    editItem: React.PropTypes.func.isRequired,
    itemsList: React.PropTypes.array.isRequired
};
