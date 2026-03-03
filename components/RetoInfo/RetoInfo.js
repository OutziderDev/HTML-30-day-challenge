import styles from "../RetoInfo/RetoInfo.css" with {type: "css"}

class RetoInfo extends HTMLElement {
  constructor(){

    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);

    this.shadowRoot.innerHTML = /* html */ `
      <button>
        ?
      </button>
    `;
  }
}

customElements.define('reto-info', RetoInfo)
