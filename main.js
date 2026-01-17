class DinnerGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .dinner-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    transition: background-color 0.3s;
                }

                :host-context(body.dark-mode) .dinner-container {
                    background-color: #444;
                }

                .dinner-header {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: #333;
                }

                :host-context(body.dark-mode) .dinner-header {
                    color: #fff;
                }

                .dinner-result {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 50px;
                    margin-bottom: 2rem;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #333;
                }

                 :host-context(body.dark-mode) .dinner-result {
                    color: #fff;
                }

                .dinner-button {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
            <div class="dinner-container">
                <h1 class="dinner-header">Dinner Menu Generator</h1>
                <div class="dinner-result"></div>
                <button class="dinner-button">Generate Menu</button>
            </div>
        `;

        this.generateMenu = this.generateMenu.bind(this);
        this.shadowRoot.querySelector('.dinner-button').addEventListener('click', this.generateMenu);
    }

    generateMenu() {
        const menus = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Tacos', 'Salad', 'Steak', 'Fried Chicken'];
        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];

        const resultElement = this.shadowRoot.querySelector('.dinner-result');
        resultElement.textContent = selectedMenu;
    }
}

customElements.define('dinner-generator', DinnerGenerator);

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});