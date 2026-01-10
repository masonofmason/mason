class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .lotto-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                }

                .lotto-header {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }

                .lotto-numbers {
                    display: flex;
                    margin-bottom: 2rem;
                }

                .lotto-number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #fff;
                    margin: 0 0.5rem;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #333;
                }

                .lotto-button {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
            <div class="lotto-container">
                <h1 class="lotto-header">Lotto Number Generator</h1>
                <div class="lotto-numbers">
                    <div class="lotto-number"></div>
                    <div class="lotto-number"></div>
                    <div class="lotto-number"></div>
                    <div class="lotto-number"></div>
                    <div class="lotto-number"></div>
                    <div class="lotto-number"></div>
                </div>
                <button class="lotto-button">Generate Numbers</button>
            </div>
        `;

        this.generateNumbers = this.generateNumbers.bind(this);
        this.shadowRoot.querySelector('.lotto-button').addEventListener('click', this.generateNumbers);
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const numberElements = this.shadowRoot.querySelectorAll('.lotto-number');
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        sortedNumbers.forEach((number, index) => {
            numberElements[index].textContent = number;
        });
    }
}

customElements.define('lotto-generator', LottoGenerator);

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});