import styles from '../NextChallenge/NextChallenge.css' with {type: "css"}

class NextChallenge extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.adoptedStyleSheets.push(styles);

    this.shadowRoot.innerHTML = /* html */ `
      <a href="" class="card-next">
        <div class="data-card">
          <p class="card-title">Siguiente Reto:</p >
          <p class="card-desc">Día 2</p>
        </div>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
      </a>
    `;
  }

  connectedCallback() {
        const currentPath = window.location.pathname;
        const match = currentPath.match(/\/Retos\/(\d+)\/index\.html/);

        let currentChallengeNumber = 0;
        if (match && match[1]) {
            currentChallengeNumber = parseInt(match[1], 10);
        }

        const nextChallengeNumber = currentChallengeNumber + 1;

        // Referencias a los elementos dentro del Shadow DOM
        const cardLink = this.shadowRoot.querySelector('.card-next');
        const cardDesc = this.shadowRoot.querySelector('.card-desc');

        if (nextChallengeNumber <= 30) {
            cardLink.href = `/Retos/${nextChallengeNumber}/index.html`;
            cardDesc.textContent = `Día ${nextChallengeNumber}`;
        } else {
            // Si es el último reto, puedes ocultar la tarjeta o cambiar su contenido
            cardLink.style.display = 'none';  
        }
    }
}

customElements.define('next-challenge-card', NextChallenge)