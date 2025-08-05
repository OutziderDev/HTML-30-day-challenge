import styles from '../MenuMovil/ButtonMenuMovil.css' with {type : 'css'}

class ButtonMenuMovil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'})
    this.shadowRoot.adoptedStyleSheets.push(styles);

    this.shadowRoot.innerHTML= /* html */`
      <section class="section-menu">
        <span>Menú</span>
        <button id="btn-menu" aria-label="boton de menu">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        </button>
      </section>
    `;
    const btn = this.shadowRoot.querySelector('#btn-menu');
    const sidebarMenu = document.querySelector('#sidebar');
    btn.addEventListener('click', () => {
      sidebarMenu.style.display= 'contents';
    sidebarMenu.style.zIndex= 90 
    })
  }
}

customElements.define('nav-button-movil',ButtonMenuMovil)