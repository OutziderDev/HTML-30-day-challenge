import styles from "../components/NavSidebar.css" with { type: "css" };

class Sidebar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets.push(styles);
    
    this.shadowRoot.innerHTML = /* html */ `
      <aside class="sidebar">
        <header>
          <img src="/assets/images/perro programador.webp" alt="Imagen de usuario" title="Foto de Perfíl" fetchpriority="high" >
          <span>By: @OutziderDev</span>
        </header>
        <nav>
          <a href="/" class="active">
            <span><strong>Inicio</strong></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          </a>
          <a href="/Retos/1" >
            <span>Día 1</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-symlink"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a3 3 0 0 1 3 -3h5" /><path d="M8 17l3 -3l-3 -3" /><path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" /></svg>
          </a>
          <a href="/Retos/2">
            <span>Día 2</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-symlink"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a3 3 0 0 1 3 -3h5" /><path d="M8 17l3 -3l-3 -3" /><path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" /></svg>
          </a>
          <a href="/Retos/3">
            <span>Día 3</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-symlink"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a3 3 0 0 1 3 -3h5" /><path d="M8 17l3 -3l-3 -3" /><path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" /></svg>
          </a>
          
        </nav>
        <footer>
          <a href="https://github.com/OutziderDev/">
            <img src="/assets/icons/github.svg" loading="lazy" decoding="async" alt="Acceso a Github">
          </a>
          <a href="https://discord.com/users/outzider2776">
            <img src="/assets/icons/discord.svg" loading="lazy" decoding="async" alt="Acceso a discord">
          </a>
        </footer> 
      </aside>
    `;
  }
}

customElements.define('nav-sidebar', Sidebar)