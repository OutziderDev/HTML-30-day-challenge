import "./components/NavSidebar/NavSidebar.js";
import "./components/MenuMovil/ButtonMenuMovil.js"
import "./components/NextChallenge/NextChallenge.js"

(function () {
  // Script inline para inicializar window.va
  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  `;
  document.head.appendChild(inlineScript);

  // Script externo de Vercel Insights
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = "/_vercel/insights/script.js";
  document.head.appendChild(analyticsScript);
})();

/* window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
let s = document.createElement('script');
s.defer = true;
s.src = '/_vercel/insights/script.js';
document.head.appendChild(s); */