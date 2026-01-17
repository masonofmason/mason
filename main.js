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

    generateMenu() {
        const menus = [
            {
                name: 'Classic Margherita Pizza',
                description: 'A simple yet delicious Italian pizza, topped with San Marzano tomatoes, fresh mozzarella, basil, salt, and extra-virgin olive oil.',
                ingredients: 'Pizza dough, San Marzano tomatoes, fresh mozzarella, fresh basil, olive oil, salt.',
                recipeLink: 'https://www.allrecipes.com/recipe/228224/authentic-pizza-margherita/',
                difficulty: 'Medium',
                prepTime: '45 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?margherita-pizza'
            },
            {
                name: 'Gourmet Beef Burger',
                description: 'A juicy beef patty seasoned to perfection, served in a toasted brioche bun with crisp lettuce, ripe tomatoes, red onion, pickles, and a special sauce.',
                ingredients: 'Ground beef, brioche buns, lettuce, tomato, red onion, pickles, cheese (optional), burger sauce.',
                recipeLink: 'https://www.seriouseats.com/best-grilled-hamburgers-recipe',
                difficulty: 'Easy',
                prepTime: '30 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?gourmet-burger'
            },
            {
                name: 'Assorted Sushi Platter',
                description: 'A delightful selection of fresh nigiri and maki rolls, featuring salmon, tuna, and avocado. Perfect for a light and elegant meal.',
                ingredients: 'Sushi rice, nori (seaweed), fresh salmon, fresh tuna, avocado, soy sauce, wasabi, pickled ginger.',
                recipeLink: 'https://www.sushiencyclopedia.com/sushi-recipes/',
                difficulty: 'Hard',
                prepTime: '1 hour 30 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?sushi-platter'
            },
            {
                name: 'Creamy Carbonara Pasta',
                description: 'An authentic Roman pasta dish made with eggs, hard cheese (Pecorino Romano), cured pork (guanciale), and black pepper. No cream!',
                ingredients: 'Spaghetti, guanciale (or pancetta), egg yolks, Pecorino Romano cheese, black pepper.',
                recipeLink: 'https://www.recipetineats.com/carbonara/',
                difficulty: 'Medium',
                prepTime: '25 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?carbonara-pasta'
            },
            {
                name: 'Spicy Chicken Tacos',
                description: 'Warm corn tortillas filled with succulent, seasoned chicken, fresh pico de gallo, shredded lettuce, and a drizzle of creamy avocado sauce.',
                ingredients: 'Chicken breast, corn tortillas, taco seasoning, avocado, lime, cilantro, tomato, onion, lettuce.',
                recipeLink: 'https://www.delish.com/cooking/recipe-ideas/a23277981/best-chicken-tacos-recipe/',
                difficulty: 'Easy',
                prepTime: '35 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?chicken-tacos'
            },
            {
                name: 'Mediterranean Quinoa Salad',
                description: 'A refreshing and healthy salad packed with protein-rich quinoa, crisp cucumbers, juicy tomatoes, Kalamata olives, feta cheese, and a lemon-herb dressing.',
                ingredients: 'Quinoa, cucumber, cherry tomatoes, red onion, Kalamata olives, feta cheese, parsley, lemon, olive oil.',
                recipeLink: 'https://www.budgetbytes.com/mediterranean-quinoa-salad/',
                difficulty: 'Easy',
                prepTime: '20 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?quinoa-salad'
            },
            {
                name: 'Pan-Seared Steak with Garlic Butter',
                description: 'Perfectly seared steak, cooked to your preferred doneness, basted with aromatic garlic herb butter. A classic for steak lovers.',
                ingredients: 'Steak (e.g., ribeye, sirloin), butter, garlic, rosemary or thyme, olive oil, salt, pepper.',
                recipeLink: 'https://www.jessicagavin.com/pan-seared-steak-garlic-butter/',
                difficulty: 'Medium',
                prepTime: '20 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?pan-seared-steak'
            },
            {
                name: 'Crispy Southern Fried Chicken',
                description: 'Golden-brown, extra crispy fried chicken with a secret blend of herbs and spices. A comforting and satisfying meal.',
                ingredients: 'Chicken pieces, all-purpose flour, buttermilk, eggs, hot sauce, paprika, garlic powder, onion powder, cayenne pepper, salt, black pepper, frying oil.',
                recipeLink: 'https://www.foodnetwork.com/recipes/paula-deen/southern-fried-chicken-recipe-2012979',
                difficulty: 'Hard',
                prepTime: '1 hour',
                imageUrl: 'https://source.unsplash.com/500x300/?fried-chicken'
            },
            // --- New Diverse Cuisines ---
            // Asian
            {
                name: 'Thai Green Curry',
                description: 'Aromatic and spicy Thai curry with coconut milk, green curry paste, chicken, and assorted vegetables. Served with jasmine rice.',
                ingredients: 'Coconut milk, green curry paste, chicken breast, bell peppers, bamboo shoots, basil leaves, fish sauce, jasmine rice.',
                recipeLink: 'https://www.allrecipes.com/recipe/228189/thai-green-curry/',
                difficulty: 'Medium',
                prepTime: '40 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?thai-green-curry'
            },
            {
                name: 'Indian Chicken Tikka Masala',
                description: 'Popular Indian dish with tender chicken pieces marinated in yogurt and spices, then served in a creamy, spiced tomato sauce.',
                ingredients: 'Chicken, yogurt, ginger-garlic paste, garam masala, turmeric, cumin, coriander, tomatoes, cream, rice.',
                recipeLink: 'https://www.indianhealthyrecipes.com/chicken-tikka-masala-recipe-restaurant-style/',
                difficulty: 'Medium',
                prepTime: '1 hour 15 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?chicken-tikka-masala'
            },
            {
                name: 'Japanese Ramen',
                description: 'A hearty bowl of Japanese noodle soup with a rich broth, tender pork (chashu), soft-boiled egg, nori, and green onions.',
                ingredients: 'Ramen noodles, pork belly, eggs, chicken/pork broth, soy sauce, mirin, green onions, nori.',
                recipeLink: 'https://www.seriouseats.com/rich-and-creamy-tonkotsu-ramen-broth-recipe',
                difficulty: 'Hard',
                prepTime: '2 hours+',
                imageUrl: 'https://source.unsplash.com/500x300/?japanese-ramen'
            },
            // European (beyond Italy)
            {
                name: 'French Coq au Vin',
                description: 'Classic French stew with chicken braised in red wine (typically Burgundy), lardons, mushrooms, and onions.',
                ingredients: 'Chicken pieces, red wine, bacon lardons, mushrooms, pearl onions, garlic, thyme, bay leaf.',
                recipeLink: 'https://www.juliachildfoundation.org/recipes/coq-au-vin/',
                difficulty: 'Hard',
                prepTime: '1 hour 45 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?coq-au-vin'
            },
            {
                name: 'German Schnitzel with Potato Salad',
                description: 'Thinly pounded, breaded, and pan-fried cutlet (usually pork or veal), served with a tangy German potato salad.',
                ingredients: 'Pork/veal cutlets, breadcrumbs, eggs, flour, potatoes, vinegar, onion, bacon.',
                recipeLink: 'https://dinnerthendessert.com/pork-schnitzel/',
                difficulty: 'Medium',
                prepTime: '50 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?schnitzel'
            },
            // North American (more distinct)
            {
                name: 'Classic American Chili',
                description: 'Hearty and flavorful beef chili, slow-cooked with beans, tomatoes, and a blend of chili spices. Perfect comfort food.',
                ingredients: 'Ground beef, kidney beans, crushed tomatoes, chili powder, cumin, onion, garlic.',
                recipeLink: 'https://www.allrecipes.com/recipe/70003/beef-chili/',
                difficulty: 'Easy',
                prepTime: '1 hour 30 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?beef-chili'
            },
            // South American
            {
                name: 'Brazilian Feijoada',
                description: 'A rich, hearty stew of black beans with various cuts of pork and beef, traditionally served with rice, collard greens, and farofa.',
                ingredients: 'Black beans, pork ribs, sausage, beef, rice, collard greens, farofa.',
                recipeLink: 'https://braziliankitchenabroad.com/feijoada-recipe-the-ultimate-brazilian-black-bean-stew/',
                difficulty: 'Hard',
                prepTime: '3 hours+',
                imageUrl: 'https://source.unsplash.com/500x300/?feijoada'
            },
            {
                name: 'Peruvian Lomo Saltado',
                description: 'A flavorful Peruvian stir-fry that combines marinated strips of sirloin with onions, tomatoes, and French fries, served with rice.',
                ingredients: 'Beef sirloin, red onion, tomatoes, Aji Amarillo, soy sauce, vinegar, French fries, rice.',
                recipeLink: 'https://www.limablog.com/lomo-saltado-recipe/',
                difficulty: 'Medium',
                prepTime: '45 mins',
                imageUrl: 'https://source.unsplash.com/500x300/?lomo-saltado'
            }
        ];

        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];

        const resultElement = this.shadowRoot.querySelector('.dinner-result');
        resultElement.innerHTML = `
            <img src="${selectedMenu.imageUrl}" alt="${selectedMenu.name}" loading="lazy">
            <h3>${selectedMenu.name}</h3>
            <p><strong>Description:</strong> ${selectedMenu.description}</p>
            <p><strong>Main Ingredients:</strong> ${selectedMenu.ingredients}</p>
            <p><strong>Difficulty:</strong> ${selectedMenu.difficulty}</p>
            <p><strong>Preparation Time:</strong> ${selectedMenu.prepTime}</p>
            <p><a href="${selectedMenu.recipeLink}" target="_blank">View Full Recipe</a></p>
        `;
    }
}

customElements.define('dinner-generator', DinnerGenerator);

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
