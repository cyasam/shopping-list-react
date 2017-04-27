webpackJsonp([0],{173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(11),s=o(l),c=n(30),f=o(c),d=n(78),p=o(d),m=n(79),h=o(m);n(80);var y=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={items:[]},e}return i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("data");if(null!==e){e=JSON.parse(e);var t=e.items;t.forEach(function(e){e.openEdit=!1}),this.setState({items:t})}}},{key:"_saveData",value:function(){var e=this.state;e=JSON.stringify(e),localStorage.setItem("data",e)}},{key:"_createUniqueId",value:function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"_addItem",value:function(e){var t=this._createUniqueId(),n={};n.id=t,n.text=e,n.openEdit=!1,this.setState({items:this.state.items.concat(n)})}},{key:"_editItem",value:function(e){var t=this.state.items,n=-1;t.some(function(t,o){t.id===e.id&&(n=o)}),t[n]=e,this._openEditForm(e.id),this.setState({items:t})}},{key:"_deleteItem",value:function(e){var t=this.state.items.filter(function(t){return e.id!==t.id});this.setState({items:t})}},{key:"_openEditForm",value:function(e){var t=this.state.items,n=null,o=-1;t.some(function(t,n){t.id===e&&(o=n)}),this.state.items[o].openEdit?n=!1:(n=!0,window.setTimeout(function(){for(var e=document.querySelectorAll('.edit-form input[type="text"]'),t=0;t<e.length;t++)e[t].className="open",e[t].focus()},10)),t[o].openEdit=n,this.setState({items:t})}},{key:"render",value:function(){return this._saveData(),s.default.createElement("div",{className:"shopping-wrapper"},s.default.createElement("h1",null,"Shopping List"),s.default.createElement("div",{className:"shopping-list-wrapper"},s.default.createElement("div",{className:"shopping-list"},s.default.createElement(h.default,{handleOpenEditForm:this._openEditForm.bind(this),editItem:this._editItem.bind(this),remove:this._deleteItem.bind(this),itemsList:this.state.items}))),s.default.createElement(p.default,{addItem:this._addItem.bind(this)}))}}]),t}(s.default.Component);f.default.render(s.default.createElement(y,null),document.getElementById("shopping-list"))},174:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(11),s=o(l),c=n(24),f=o(c),d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.data=n.props.data,n.state={editedItem:n.data},n}return i(t,e),u(t,[{key:"_openModal",value:function(e){this.props.removeItem(e)}},{key:"_editItem",value:function(e){this.data.text=e.value,this.setState({editedItem:this.data}),this.props.editItem(this.state.editedItem)}},{key:"_onSubmit",value:function(e,t){this._editItem(e),t.preventDefault()}},{key:"_openEditForm",value:function(e){this.props.handleEditForm(e)}},{key:"render",value:function(){var e=this,t=this.state.editedItem.text,n=this.props.openEdit,o=this.state.editedItem.id;return s.default.createElement("div",null,n?s.default.createElement("div",{className:"edit-form-wrapper"},s.default.createElement("form",{className:"edit-form",onSubmit:function(t){e._onSubmit(e._shopItem,t)}},s.default.createElement("div",{className:"form-item"},s.default.createElement("i",{className:"list-icon icon-checkmark"}),s.default.createElement("input",{defaultValue:t,type:"text",ref:function(t){e._shopItem=t}})),s.default.createElement("div",{className:"buttons edit-form-buttons"},s.default.createElement("button",{className:"btn type-3",type:"submit"},s.default.createElement("i",{className:"icon-floppy-disk"}),"Save"),s.default.createElement("a",{className:"btn type-4",onClick:function(){e._openEditForm(o)}},s.default.createElement("i",{className:"icon-cancel-circle"}),"Cancel")))):null)}}]),t}(s.default.Component);t.default=d,d.propTypes={data:f.default.object.isRequired,editItem:f.default.func.isRequired,removeItem:f.default.func.isRequired,openEdit:f.default.bool.isRequired,handleEditForm:f.default.func.isRequired}},175:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(11),s=o(l),c=n(24),f=o(c),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return!!this.props.openModal&&s.default.createElement("div",{className:"modal"},s.default.createElement("div",{className:"modal-inner"},s.default.createElement("p",null,"Are you sure to delete this item?"),s.default.createElement("div",{className:"buttons"},s.default.createElement("button",{className:"btn type-1",onClick:function(){e.props.modalProcess("del")}},"Ok"),s.default.createElement("button",{className:"btn type-4",onClick:function(){e.props.modalProcess()}},"Cancel"))))}}]),t}(s.default.Component);t.default=d,d.propTypes={modalProcess:f.default.func,openModal:f.default.bool.isRequired}},24:function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(94)()},78:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(11),s=o(l),c=n(24),f=o(c),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),u(t,[{key:"_sendShopItem",value:function(e){e.preventDefault();var t=this._shopItem.value;this.props.addItem(t),this._shopItem.value=""}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"shopping-form"},s.default.createElement("form",{onSubmit:this._sendShopItem.bind(this)},s.default.createElement("input",{type:"text",ref:function(t){e._shopItem=t}}),s.default.createElement("button",{className:"btn type-3",type:"submit"},s.default.createElement("i",{className:"icon-plus"}),"Add")))}}]),t}(s.default.Component);t.default=d,d.propTypes={addItem:f.default.func.isRequired}},79:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(11),s=o(l),c=n(24),f=o(c),d=n(175),p=o(d),m=n(174),h=o(m),y=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={openModal:!1,removeReqItem:""},e}return i(t,e),u(t,[{key:"_openModal",value:function(e){this.setState({openModal:!0,removeReqItem:e})}},{key:"_modalProcess",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];this.setState({openModal:!1}),"del"===e&&this.props.remove(t)}},{key:"_editItem",value:function(e){this.props.editItem(e)}},{key:"_openEditForm",value:function(e){this.props.handleOpenEditForm(e)}},{key:"_getParents",value:function(e,t){for(var n=e.parentNode;n!==document.body;){if(n&&n.classList.contains(t))return n;n=n.parentNode}return null}},{key:"_findChidren",value:function(e,t){for(var n=e.children,o=0;o<n.length;o++)if(n[o]&&n[o].classList.contains(t))return n[o];return null}},{key:"_openButtons",value:function(e){var t=e.target,n=this._getParents(t,"item"),o=this._findChidren(n,"toggle-buttons"),r=this._findChidren(n,"buttons");r.classList.contains("open")?(r.classList.remove("open"),o.classList.remove("active")):(r.classList.add("open"),o.classList.add("active"))}},{key:"render",value:function(){var e=this,t=this.props.itemsList,n=this.state.removeReqItem;return t.length>0?s.default.createElement("div",null,s.default.createElement("ul",null,t.map(function(t,n){return s.default.createElement("li",{key:n},s.default.createElement("div",{className:"list-item"},t.openEdit?null:s.default.createElement("div",{className:"item"},s.default.createElement("div",{className:"item-text",title:"Click to edit...",onClick:function(){e._openEditForm(t.id)}},s.default.createElement("i",{className:"list-icon icon-checkmark"}),s.default.createElement("p",null,t.text)),s.default.createElement("div",{className:"buttons item-buttons"},s.default.createElement("button",{className:"btn type-3",onClick:function(){e._openEditForm(t.id)}},s.default.createElement("i",{className:"icon-pencil"}),"Edit"),s.default.createElement("button",{className:"btn type-4",onClick:function(){e._openModal(t)}},s.default.createElement("i",{className:"icon-bin"}),"Delete")),s.default.createElement("button",{className:"toggle-buttons",onClick:function(t){e._openButtons(t)}},s.default.createElement("i",{className:"icon-circle-left"}))),s.default.createElement(h.default,{openEdit:t.openEdit,editItem:e._editItem.bind(e),data:t,handleEditForm:e._openEditForm.bind(e),removeItem:e._openModal.bind(e)})))})),s.default.createElement(p.default,{openModal:this.state.openModal,modalProcess:function(t){return e._modalProcess(t,n)}})):s.default.createElement("div",null,s.default.createElement("p",null,"You don't have any item in your list."))}}]),t}(s.default.Component);t.default=y,y.propTypes={remove:f.default.func.isRequired,editItem:f.default.func.isRequired,itemsList:f.default.array.isRequired,handleOpenEditForm:f.default.func.isRequired}},80:function(e,t){},94:function(e,t,n){"use strict";var o=n(6),r=n(0);e.exports=function(){function e(){r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=o,n.PropTypes=n,n}}},[173]);