import { html, LitElement } from 'lit-element';
import styles from './HeaderStyles';
import '@ui5/webcomponents/dist/Icon';
import '@ui5/webcomponents-icons/dist/icons/menu2';
export class HeaderComponent extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      options: { type: Array },
      pathInit: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.pathInit = '#';
    this.options = [];
  }

  _toggle() {
    let navigation = this.shadowRoot.getElementById("navigation");
    if (navigation.className === "topnav") {
      navigation.className += " responsive";
    } else {
      navigation.className = "topnav";
    }
  }

  _goToInit() {
    let items = this.shadowRoot.querySelectorAll('.item-nav');
    items.forEach((item)=>{
         item.classList.remove('active');
    });
  }

  _itemSelected(index, item) {
    let itemCurrent = this.shadowRoot.querySelector(`#item-nav-${index}`);
    let items = this.shadowRoot.querySelectorAll('.item-nav');
    items.forEach((item)=>{
         item.classList.remove('active');
    });
    itemCurrent.classList.add('active');
    const eventNav = new CustomEvent('selected-item-nav', {
      detail: item,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(eventNav);
    let navigation = this.shadowRoot.getElementById("navigation");
    navigation.className = "topnav";
  }

  render() {
    return html`
    <style>${styles}</style>
    <div class="topnav" id="navigation">
      <a class = "logo" href="${this.pathInit}" @click = ${this._goToInit} >${this.title}</a>
      ${this.options.map(
        (item,i) =>
          html`
            <a id ="item-nav-${i}" class = "item-nav ${i === 0 ? 'active' : '' }" href="${item.path}" @click = ${(e)=>{ this._itemSelected(i, item); }} >${item.name}</a>
          `
      )}
      <a href="javascript:void(0);" class="icon" @click = ${this._toggle} >
        <ui5-icon name="menu2"></ui5-icon>
      </a>
    </div>
    `;
  }
}
