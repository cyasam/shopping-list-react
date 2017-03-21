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

    render () {
        let items = this.props.itemsList;
        let rItem = this.state.removeReqItem;
        if (items.length > 0) {
            return (
                <div>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>
                                {item.text}
                                <ShoppingEditItemForm openEdit={this.state.openEdit} />
                                { this.state.openEdit === false ? (
                                    <div className="buttons">
                                        <button onClick={() => { this._openEditForm(item); }} type="submit">Edit</button>
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
    itemsList: React.PropTypes.array.isRequired
};
