import styles from "../RetoInfo/RetoInfo.css" with {type: "css"}

class RetoInfo extends HTMLElement {
  constructor() {

    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);

    this.shadowRoot.innerHTML = /* html */ `
      <section>
        <button>
          ?
        </button>
        <p class="enunciado"><strong>Reto:</strong>  Construye una página con un párrafo que tenga enlaces internos y externos (a otros sitios web).</p>
      </section>
    `;
  }

  async connectedCallback() {
    const reponse = await fetch("./reto.json");
    const data = await reponse.json();

    const enunciado = this.shadowRoot.querySelector(".enunciado");
    enunciado.innerHTML = `<strong>${data.titulo}</strong> <br> ${data.objetivo}`;
  }
}

customElements.define('reto-info', RetoInfo)
