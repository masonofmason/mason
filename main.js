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
                    width: 100%; /* Make it fully responsive */
                    margin: 2rem auto; /* Center the container */
                    text-align: center;
                    min-height: 400px; /* Ensure visible height */
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
                    min-height: 150px; /* Increased height to accommodate more text */
                    margin-bottom: 2rem;
                    font-size: 1rem; /* Smaller font for details */
                    color: #333;
                    text-align: left; /* Align text to left for readability */
                    padding: 1rem;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    line-height: 1.5;
                }

                :host-context(body.dark-mode) .dinner-result {
                    color: #fff;
                    background-color: #555;
                    border-color: #666;
                }

                .dinner-result h3 {
                    font-size: 1.5rem;
                    color: #4CAF50;
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }

                .dinner-result p {
                    margin-bottom: 0.5rem;
                }

                .dinner-result a {
                    color: #007bff;
                    text-decoration: none;
                }

                .dinner-result a:hover {
                    text-decoration: underline;
                }

                .dinner-result img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 1rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .dinner-button {
                    padding: 0.75rem 1.5rem; /* Larger button */
                    font-size: 1.1rem;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    background-color: #4CAF50;
                    color: white;
                    transition: background-color 0.3s ease;
                }

                .dinner-button:hover {
                    background-color: #45a049;
                }
            </style>
            <div class="dinner-container">
                <h1 class="dinner-header">미니시민의 오늘 저녁 뭐 먹지?</h1>
                <div class="dinner-result">버튼을 클릭하여 다음 맛있는 저녁 식사 아이디어를 찾아보세요!</div>
                <button class="dinner-button">메뉴 생성</button>
            </div>
        `;

        this.generateMenu = this.generateMenu.bind(this);
        this.shadowRoot.querySelector('.dinner-button').addEventListener('click', this.generateMenu);
    }

    connectedCallback() {
        // Automatically generate a menu item when the element is connected to the DOM
        this.generateMenu();
    }

    generateMenu() {
        const menus = [
            // --- Detailed Korean Menu Items (15) ---
            {
                name: 'Bibimbap (비빔밥)',
                description: 'A signature Korean dish, literally meaning "mixed rice". It consists of a bowl of warm white rice topped with namul (sautéed and seasoned vegetables), gochujang (chili pepper paste), soy sauce, or doenjang, and usually with a fried egg and sliced meat (often beef).',
                ingredients: 'Rice, various seasoned vegetables (spinach, carrots, bean sprouts, mushrooms), beef (optional), fried egg, gochujang, sesame oil.',
                recipeLink: 'https://www.maangchi.com/recipe/bibimbap',
                difficulty: 'Medium',
                prepTime: '45 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?bibimbap,korean-food'
            },
            {
                name: 'Bulgogi (불고기)',
                description: 'Korean marinated beef or pork barbecue, usually grilled or stir-fried. It is a popular dish known for its savory and slightly sweet flavor.',
                ingredients: 'Thinly sliced beef (sirloin or ribeye), soy sauce, sugar, sesame oil, garlic, black pepper, green onions, onions.',
                recipeLink: 'https://www.maangchi.com/recipe/bulgogi',
                difficulty: 'Easy',
                prepTime: '30 mins (plus marinating time)',
                imageUrl: 'https://source.unsplash.com/500x300/?bulgogi,korean-bbq'
            },
            {
                name: 'Kimchi Jjigae (김치찌개)',
                description: 'A fiery, savory, and comforting stew made with ripe kimchi, tofu, pork (or other meat), and various vegetables, seasoned with gochujang and gochugaru.',
                ingredients: 'Kimchi, pork belly (or tuna), tofu, onion, green onions, gochujang, gochugaru, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-jjigae',
                difficulty: 'Medium',
                prepTime: '35 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?kimchi-jjigae'
            },
            {
                name: 'Tteokbokki (떡볶이)',
                description: 'A popular Korean street food consisting of soft chewy rice cakes, fish cakes, and scallions cooked in a sweet and spicy gochujang-based sauce.',
                ingredients: 'Rice cakes (tteok), fish cakes, green onions, hard-boiled eggs (optional), gochujang, gochugaru, sugar, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/tteokbokki',
                difficulty: 'Easy',
                prepTime: '25 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?tteokbokki'
            },
            {
                name: 'Samgyeopsal (삼겹살)',
                description: 'Grilled pork belly, a staple of Korean barbecue. It is usually served with lettuce wraps, ssamjang (dipping sauce), garlic, and kimchi.',
                ingredients: 'Pork belly, lettuce, garlic, green chilies, ssamjang, sesame oil, salt, pepper.',
                recipeLink: 'https://www.maangchi.com/recipe/samgyeopsal-gui',
                difficulty: 'Easy',
                prepTime: '20 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?samgyeopsal,korean-bbq'
            },
            {
                name: 'Japchae (잡채)',
                description: 'A savory and slightly sweet dish of stir-fried glass noodles and vegetables. It is popular for special occasions and potlucks.',
                ingredients: 'Glass noodles, beef (optional), spinach, carrots, mushrooms, onion, soy sauce, sesame oil, sugar.',
                recipeLink: 'https://www.maangchi.com/recipe/japchae',
                difficulty: 'Medium',
                prepTime: '50 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?japchae'
            },
            {
                name: 'Kimchi Bokkeumbap (김치볶음밥)',
                description: 'Kimchi fried rice, a beloved Korean comfort food. It\'s quick to make and full of flavor from ripe kimchi.',
                ingredients: 'Rice, kimchi, pork (or other meat/spam), fried egg, sesame oil, seaweed flakes.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-bokkeumbap',
                difficulty: 'Easy',
                prepTime: '20 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?kimchi-fried-rice'
            },
            {
                name: 'Sundubu Jjigae (순두부찌개)',
                description: 'A spicy Korean soft tofu stew, typically made with soft (순두부) tofu, vegetables, mushrooms, seafood, and chili paste.',
                ingredients: 'Soft tofu, clams (or other seafood/pork), egg, zucchini, onion, chili oil, gochugaru, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/sundubu-jjigae',
                difficulty: 'Medium',
                prepTime: '30 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?sundubu-jjigae'
            },
            {
                name: 'Haemul Pajeon (해물파전)',
                description: 'A savory Korean pancake featuring scallions (파) and seafood (해물), cooked in a thin batter until crispy.',
                ingredients: 'Scallions, various seafood (shrimp, squid, mussels), flour, egg, water, soy sauce for dipping.',
                recipeLink: 'https://www.maangchi.com/recipe/haemul-pajeon',
                difficulty: 'Medium',
                prepTime: '40 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?haemul-pajeon'
            },
            {
                name: 'Gyeran Mari (계란말이)',
                description: 'Korean rolled omelette, often mixed with chopped vegetables like carrots, onions, and green onions. A popular side dish.',
                ingredients: 'Eggs, carrots, green onions, onion, salt, pepper, cooking oil.',
                recipeLink: 'https://www.maangchi.com/recipe/gyeran-mari',
                difficulty: 'Easy',
                prepTime: '15 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?korean-omelette'
            },
            {
                name: 'Kimchi Jeon (김치전)',
                description: 'Kimchi pancake, a savory pancake primarily made with sliced kimchi, flour batter, and sometimes other vegetables or meat.',
                ingredients: 'Kimchi, flour, water, egg, green onions, soy sauce for dipping.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchijeon',
                difficulty: 'Easy',
                prepTime: '25 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?kimchi-jeon'
            },
            {
                name: 'Gimbap (김밥)',
                description: 'Korean seaweed rice rolls, similar to Japanese maki sushi but often made with cooked ingredients and seasoned rice, without raw fish.',
                ingredients: 'Seaweed sheets (gim), rice, various cooked fillings (egg, ham, spinach, carrots, pickled radish), sesame oil.',
                recipeLink: 'https://www.maangchi.com/recipe/gimbap',
                difficulty: 'Medium',
                prepTime: '1 hour',
                imageUrl: 'https://source.unsplash.com/500x300/?gimbap'
            },
            {
                name: 'Yukgaejang (육개장)',
                description: 'A spicy, hearty Korean beef soup, often made with shredded beef, various vegetables (gosari, bean sprouts), and a spicy broth.',
                ingredients: 'Beef brisket, gosari (fernbrake), bean sprouts, taro stems, green onions, chili oil, gochugaru, soy sauce.',
                recipeLink: 'https://www.maangchi.com/recipe/yukgaejang',
                difficulty: 'Hard',
                prepTime: '2 hours+',
                imageUrl: 'https://source.unsplash.com/500x300/?yukgaejang'
            },
            {
                name: 'Galbi (갈비)',
                description: 'Korean grilled short ribs, typically beef (sogalbi) or pork (dwaeji galbi), marinated in a sweet and savory sauce.',
                ingredients: 'Beef short ribs, soy sauce, sugar, garlic, sesame oil, green onions, Asian pear.',
                recipeLink: 'https://www.maangchi.com/recipe/la-galbi',
                difficulty: 'Medium',
                prepTime: '40 mins (plus marinating time)',
                imageUrl: 'https://source.unsplash.com/500x300/?korean-galbi'
            },
            {
                name: 'Jjajangmyeon (짜장면)',
                description: 'A popular Korean-Chinese noodle dish topped with a thick sauce made from chunjang (black bean paste), diced pork, and vegetables.',
                ingredients: 'Noodles, chunjang, pork belly, onion, zucchini, cabbage, cucumber, soy sauce.',
                recipeLink: 'https://www.maangchi.com/recipe/jjajangmyeon',
                difficulty: 'Medium',
                prepTime: '50 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?jjajangmyeon'
            }
        ];
    
        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];
    
        const resultDiv = this.shadowRoot.querySelector('.dinner-result');
        if (resultDiv) {
            resultDiv.innerHTML = `
                <h3>${selectedMenu.name}</h3>
                ${selectedMenu.imageUrl ? `<img src="${selectedMenu.imageUrl}" alt="${selectedMenu.name}">` : ''}
                <p><strong>설명:</strong> ${selectedMenu.description}</p>
                <p><strong>주요 재료:</strong> ${selectedMenu.ingredients}</p>
                <p><strong>난이도:</strong> ${selectedMenu.difficulty}</p>
                <p><strong>준비 시간:</strong> ${selectedMenu.prepTime}</p>
                ${selectedMenu.recipeLink ? `<p><a href="${selectedMenu.recipeLink}" target="_blank">레시피 보기</a></p>` : ''}
            `;
        }
    }
}

customElements.define('dinner-generator', DinnerGenerator);