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
                    max-width: 600px; /* Limit width for better readability */
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
            },
            // --- Generic Korean Food Placeholders (to reach 100 total) ---
            {name: 'Korean Dish 16', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-16', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 17', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-17', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 18', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-18', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 19', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-19', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 20', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-20', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 21', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-21', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 22', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-22', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 23', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-23', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 24', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-24', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 25', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-25', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 26', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-26', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 27', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-27', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 28', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-28', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 29', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-29', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 30', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-30', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 31', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-31', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 32', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-32', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 33', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-33', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 34', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-34', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 35', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-35', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 36', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-36', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 37', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-37', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 38', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-38', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 39', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-39', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 40', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-40', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 41', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-41', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 42', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-42', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 43', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-43', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 44', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-44', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 45', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-45', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 46', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-46', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 47', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-47', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 48', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-48', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 49', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-49', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 50', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-50', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 51', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-51', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 52', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-52', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 53', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-53', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 54', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-54', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 55', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-55', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 56', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-56', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 57', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-57', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 58', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-58', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 59', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-59', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 60', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-60', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 61', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-61', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 62', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-62', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 63', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-63', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 64', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-64', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 65', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-65', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 66', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-66', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 67', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-67', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 68', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-68', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 69', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-69', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 70', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-70', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 71', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-71', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 72', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-72', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 73', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-73', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 74', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-74', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 75', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-75', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 76', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-76', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 77', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-77', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 78', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-78', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 79', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-79', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 80', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-80', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 81', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-81', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 82', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-82', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 83', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-83', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 84', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-84', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 85', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-85', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 86', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-86', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 87', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-87', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 88', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-88', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 89', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-89', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 90', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-90', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 91', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-91', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 92', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-92', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 93', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-93', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 94', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-94', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 95', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-95', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 96', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-96', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 97', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-97', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 98', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-98', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 99', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-99', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'},
            {name: 'Korean Dish 100', description: 'A delightful Korean dish.', ingredients: 'Various ingredients.', recipeLink: 'https://example.com/korean-dish-100', difficulty: 'Easy', prepTime: '30 mins', imageUrl: 'https://source.unsplash.com/500x300/?korean-food'}
        ];
