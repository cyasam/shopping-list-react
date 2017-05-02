import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingHeader extends React.Component {
    constructor () {
        super();
        this.state = {
            openEdit: false
        };
    }

    _changeListHeader (header, e) {
        let headerText = header.value;
        this.props.handleHeaderForm(headerText);
        this._handleOpenEditForm();
        e.preventDefault();
    }

    _handleOpenEditForm () {
        let openEdit = !this.state.openEdit;
        this.setState({
            openEdit: openEdit
        });

        window.setTimeout(function () {
            let headerInput = document.querySelector('.header input[type="text"]');
            if (headerInput) {
                headerInput.classList.toggle('open');
                headerInput.focus();
            }
        }, 50);
    }

    render () {
        let headerText = this.props.headerText;
        let openEdit = this.state.openEdit;

        return (
            <div className="header">
                {!openEdit ? (
                <div className="header-content">
                    <h1 onClick={() => { this._handleOpenEditForm(); }} title="Click to edit...">{headerText}</h1>
                    <button className="edit-header btn type-2"
                            onClick={() => { this._handleOpenEditForm(); }}>
                        <i className="icon-pencil" />
                    </button>
                </div>
                ) : (
                <div className="edit-form-wrapper">
                    <form className="edit-form" onSubmit={(e) => { this._changeListHeader(this._headerText, e); }}>
                        <div className="form-item">
                            <input defaultValue={headerText} type="text" ref={(a) => {
                                this._headerText = a;
                            }}/>
                        </div>
                        <div className="buttons">
                            <button className="btn type-3" type="submit">
                                <i className="icon-floppy-disk" />Save
                            </button>
                            <a className="btn type-4" onClick={() => { this._handleOpenEditForm(); }}>
                                <i className="icon-cancel-circle" />Cancel
                            </a>
                        </div>
                    </form>
                </div>
                )}
            </div>
        );
    }
}

ShoppingHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
    handleHeaderForm: PropTypes.func.isRequired
};
