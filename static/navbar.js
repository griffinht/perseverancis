class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo">
                    <div class="placeholder-image logo-placeholder"></div>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropbtn">About Us ▼</a>
                            <div class="dropdown-content">
                                <a href="about.html">About Us</a>
                                <a href="our-story.html">Our Story</a>
                                <a href="vision.html">Our Vision</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropbtn">What we do ▼</a>
                            <div class="dropdown-content">
                                <a href="#education">Education</a>
                                <a href="#community">Community Development</a>
                                <a href="#outreach">Outreach Programs</a>
                            </div>
                        </li>
                        <li><a href="#how-to-help">How To Help</a></li>
                        <li><a href="outreach.html">Liceo Juan Calvino Outreach</a></li>
                    </ul>
                </nav>
                <a href="donations.html" class="donate-button">DONATE NOW!</a>
            </header>
        `;
    }
}

customElements.define('perseverancia-navbar', Navbar);
