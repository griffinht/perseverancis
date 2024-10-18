class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2024 PERSEVERANCIA | Tema para WordPress creado de AttractionWP.com</p>
            </footer>
        `;
    }
}

customElements.define('perseverancia-footer', Footer);
