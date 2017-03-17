import React from 'react';
import ShoppingModal from '../shopping/shopping-modal';

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
                                <button onClick={() => { this._openModal(item); }}>Delete</button>
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

