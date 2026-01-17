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
                    height: auto; /* Ensure visible height */
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
                    height: auto; /* Increased height to accommodate more text */
                    margin-bottom: 2rem;
                    font-size: 1rem; /* Smaller font for details */
                    color: #333;
                    text-align: left; /* Align text to left for readability */
                    padding: 1rem;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    line-height: 1.5;
                    word-break: break-word;
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
    }

    generateMenu() {
        // --- Image Sourcing Note ---
        // Due to limitations in programmatically searching for and directly linking specific food images,
        // generic placeholder images from Picsum Photos are currently used for reliability.
        // For accurate, food-specific images, it is recommended to:
        // 1. Find high-quality, static image URLs for each dish (e.g., from personal hosting, Unsplash direct links, or Wikimedia Commons).
        // 2. Replace the 'imageUrl' values below with those specific image URLs.
        // ---------------------------
        const menus = [
            // --- Detailed Korean Menu Items (15) ---
            {
                name: 'Bibimbap (비빔밥)',
                description: 'A signature Korean dish, literally meaning "mixed rice". It consists of a bowl of warm white rice topped with namul (sautéed and seasoned vegetables), gochujang (chili pepper paste), soy sauce, or doenjang, and usually with a fried egg and sliced meat (often beef).',
                ingredients: 'Rice, various seasoned vegetables (spinach, carrots, bean sprouts, mushrooms), beef (optional), fried egg, gochujang, sesame oil.',
                recipeLink: 'https://www.maangchi.com/recipe/bibimbap',
                difficulty: 'Medium',
                prepTime: '45 mins',
                imageUrl: 'https://i.namu.wiki/i/61bV6i2J2O0HzDUUs3DjjYIe0q03qYDqUWrZ52WZFZgGlUHXt0udSgddCVQpY27Bdt0VEd3nPf0nhMKabmzBT0l67t5tm-2rOVNIxXRaD9Bh2HP1JiVV3CI9iXUiEisC6eOFvSlIAZs2LAbE1O5V4w.jpg'
            },
            {
                name: 'Bulgogi (불고기)',
                description: 'Korean marinated beef or pork barbecue, usually grilled or stir-fried. It is a popular dish known for its savory and slightly sweet flavor.',
                ingredients: 'Thinly sliced beef (sirloin or ribeye), soy sauce, sugar, sesame oil, garlic, black pepper, green onions, onions.',
                recipeLink: 'https://www.maangchi.com/recipe/bulgogi',
                difficulty: 'Easy',
                prepTime: '30 mins (plus marinating time)',
                imageUrl: 'https://i.namu.wiki/i/RwP6sgj79kjv3OIC7fWV4jph47zi1Hzcst-oDa-CkbWO8FJOjr1pJ6v55ZYmLyim61XGxybY72IsBKAHuWSfR2-kJ2MRGkX9WbhIdtw3XTzqQ316xSJEHTghKRLcqjtCQVBGDw5hwwDd4EjmRo17XQ.webp'
            },
            {
                name: 'Kimchi Jjigae (김치찌개)',
                description: 'A fiery, savory, and comforting stew made with ripe kimchi, tofu, pork (or other meat), and various vegetables, seasoned with gochujang and gochugaru.',
                ingredients: 'Kimchi, pork belly (or tuna), tofu, onion, green onions, gochujang, gochugaru, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-jjigae',
                difficulty: 'Medium',
                prepTime: '35 mins',
                imageUrl: 'https://i.namu.wiki/i/a7Ma_L9Y6iOAXkz7SfWEDiLhDOaST8Q2ioprotE82tcZeGExtb6y49pC8iqOZa2fKRrdHnpoHiS7vny-x5TnxO_MOVXJ__JKluRK3kSjGxEKsimJCts3qkoSUM-exs9plkQ_CpbJ4c8LlnCpX3gBSQ.webp'
            },
            {
                name: 'Tteokbokki (떡볶이)',
                description: 'A popular Korean street food consisting of soft chewy rice cakes, fish cakes, and scallions cooked in a sweet and spicy gochujang-based sauce.',
                ingredients: 'Rice cakes (tteok), fish cakes, green onions, hard-boiled eggs (optional), gochujang, gochugaru, sugar, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/tteokbokki',
                difficulty: 'Easy',
                prepTime: '25 mins',
                imageUrl: 'https://i.namu.wiki/i/_KfdJexo78gl3KKFLnshosuKj-Q3FpgHiaAesHBorENVZQ6x6bNLoSVjVsVLm7dt197VBefToqZ8MdWRrlAItmG78vuFwLEMEZ66IR67IEigyS0NfNOO15Gt-v5P-t6pVCVCptbT96buau1AzFJOvA.webp'
            },
            {
                name: 'Samgyeopsal (삼겹살)',
                description: 'Grilled pork belly, a staple of Korean barbecue. It is usually served with lettuce wraps, ssamjang (dipping sauce), garlic, and kimchi.',
                ingredients: 'Pork belly, lettuce, garlic, green chilies, ssamjang, sesame oil, salt, pepper.',
                recipeLink: 'https://www.maangchi.com/recipe/samgyeopsal-gui',
                difficulty: 'Easy',
                prepTime: '20 mins',
                imageUrl: 'https://i.namu.wiki/i/4zTWKub_xFYQmyDIVqpc-YGNk0Sq9UV_WL0B76kgaVoT5jdqGc8Bp83hgST5DYMMIefoFimh2996kFOqpQoqFKrbmn3xJsR2RRfV-eR6-Mz0-024BdnEbBkSSTlaTHv9wMgn3J1BIaO6Iwg3F8pydA.webp'
            },
            {
                name: 'Japchae (잡채)',
                description: 'A savory and slightly sweet dish of stir-fried glass noodles and vegetables. It is popular for special occasions and potlucks.',
                ingredients: 'Glass noodles, beef (optional), spinach, carrots, mushrooms, onion, soy sauce, sesame oil, sugar.',
                recipeLink: 'https://www.maangchi.com/recipe/japchae',
                difficulty: 'Medium',
                prepTime: '50 mins',
                imageUrl: 'https://i.namu.wiki/i/1XsT2J2nVDkbGkw_52oKELNBxIQVr9KDFHHBa4OZVMpWd7K2gxxarX78p6z1FNJ1oFJu51hrzKKgs3PQQcK81R8XEmLgnf1pboyS_zgCtj_EUjsp_p09qkZGDuJ7wSPHt-d_xoYBHzBXzhmeMx0JGA.webp'
            },
            {
                name: 'Kimchi Bokkeumbap (김치볶음밥)',
                description: 'Kimchi fried rice, a beloved Korean comfort food. It\'s quick to make and full of flavor from ripe kimchi.',
                ingredients: 'Rice, kimchi, pork (or other meat/spam), fried egg, sesame oil, seaweed flakes.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-bokkeumbap',
                difficulty: 'Easy',
                prepTime: '20 mins',
                imageUrl: 'https://i.namu.wiki/i/_gUpXiyqnkOt0TSy9SE9e6tJpZxnhnBcL25THp0AU0yHLYoiuu43WeSmZN-lZXSr_dW4Tmm323tUd_XsalETU6Ja92euxoa6W1pMTxV3diLtuFBriJeo27-50LyF91S2z1Ppan1CzBOOnQ-JsJKt4g.webp'
            },
            {
                name: 'Sundubu Jjigae (순두부찌개)',
                description: 'A spicy Korean soft tofu stew, typically made with soft (순두부) tofu, vegetables, mushrooms, seafood, and chili paste.',
                ingredients: 'Soft tofu, clams (or other seafood/pork), egg, zucchini, onion, chili oil, gochugaru, anchovy broth.',
                recipeLink: 'https://www.maangchi.com/recipe/sundubu-jjigae',
                difficulty: 'Medium',
                prepTime: '30 mins',
                imageUrl: 'https://i.namu.wiki/i/VBGaa9fOa7ABOJDjuLUWMv2tXcEP8QzYFQc1RgAFf0ih_fX0_c7hDJyJBXs-iRR3aVhiKfcUHYv-F3yyO77Mxl5ex8aCYbGtMW45MZccz3d0f15cZQPmBw6ozf6yxsmVEKmf622Mzn_L9UUxj9xRhw.webp'
            },
            {
                name: 'Haemul Pajeon (해물파전)',
                description: 'A savory Korean pancake featuring scallions (파) and seafood (해물), cooked in a thin batter until crispy.',
                ingredients: 'Scallions, various seafood (shrimp, squid, mussels), flour, egg, water, soy sauce for dipping.',
                recipeLink: 'https://www.maangchi.com/recipe/haemul-pajeon',
                difficulty: 'Medium',
                prepTime: '40 mins',
                imageUrl: 'https://i.namu.wiki/i/t-b_GixrPjiONv1FTAYsXNf6sDVa14I2Mss7uTpZg6hahzee962BNBw6nkxm4-RaiUfgVJ6fqAhLinbQdbJUIe2P7RP2gvFiigWjFfoV0dIJzQc3JrvZFcSi1VO_aV2JIg0ilsgRGVeX-019l_mT6Q.webp'
            },
            {
                name: 'Gyeran Mari (계란말이)',
                description: 'Korean rolled omelette, often mixed with chopped vegetables like carrots, onions, and green onions. A popular side dish.',
                ingredients: 'Eggs, carrots, green onions, onion, salt, pepper, cooking oil.',
                recipeLink: 'https://www.maangchi.com/recipe/gyeran-mari',
                difficulty: 'Easy',
                prepTime: '15 mins',
                imageUrl: 'https://i.namu.wiki/i/HUjUxTsjU7bpoxRC4IbtaFbD9n86hsArXVKaKqT5RJcl5mGidPamjL8N6yw4w0xcuNUVdr85rk42x95trR1o9hGdlSBcOWMb6RpEOh4VfzhWi_e-VsWEGH74z936-JZnkiKkdDOcVI8jxmpjfe5ENg.webp'
            },
            {
                name: 'Kimchi Jeon (김치전)',
                description: 'Kimchi pancake, a savory pancake primarily made with sliced kimchi, flour batter, and sometimes other vegetables or meat.',
                ingredients: 'Kimchi, flour, water, egg, green onions, soy sauce for dipping.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchijeon',
                difficulty: 'Easy',
                prepTime: '25 mins',
                imageUrl: 'https://i.namu.wiki/i/Q4euh9qaqcuXIQb-ZYguXvRTDGLmgRBo_Aue1z98pgdOpgrzm1iGbYgKN6LQ3e5Y4qKQ6F5-Ge6SYELRzXdJzrMB-sLn2ogQJZvnOj0lkribMe7NSmBVfbV2RP5P5c-F-iBMfE0ALi1BkaUd00Ajqg.webp'
            },
            {
                name: 'Gimbap (김밥)',
                description: 'Korean seaweed rice rolls, similar to Japanese maki sushi but often made with cooked ingredients and seasoned rice, without raw fish.',
                ingredients: 'Seaweed sheets (gim), rice, various cooked fillings (egg, ham, spinach, carrots, pickled radish), sesame oil.',
                recipeLink: 'https://www.maangchi.com/recipe/gimbap',
                difficulty: 'Medium',
                prepTime: '1 hour',
                imageUrl: 'https://i.namu.wiki/i/5M8yoxX724KMMhfjeoFKHzxNaLTUZzhCLReItwgIXzDLL119wpuWfz8CsbYod94kyGdLlOtXuCvEKwh2ZTJAAytMK6n1ni-ORiVgA2hSetLp8HSsP_0DcBNjq-51zDi-hySObfdARNX1gf0HXQo7gQ.webp'
            },
            {
                name: 'Yukgaejang (육개장)',
                description: 'A spicy, hearty Korean beef soup, often made with shredded beef, various vegetables (gosari, bean sprouts), and a spicy broth.',
                ingredients: 'Beef brisket, gosari (fernbrake), bean sprouts, taro stems, green onions, chili oil, gochugaru, soy sauce.',
                recipeLink: 'https://www.maangchi.com/recipe/yukgaejang',
                difficulty: 'Hard',
                prepTime: '2 hours+',
                imageUrl: 'https://i.namu.wiki/i/L5Ds2Ce6dheLisuVXR9WbYJOwV4kke8dC0FNpikRYCpmpfejhE6vb9aWAFdOj5lkic4PgkHUf6qhk6CzBDgJ7i-3hmwQJAQzM2u5MQeHgXmUzqUbTgCmwHJyYCWFkP2HH_--AO5Mzy8FbjxF6S-1xA.webp'
            },
            {
                name: 'Galbi (갈비)',
                description: 'Korean grilled short ribs, typically beef (sogalbi) or pork (dwaeji galbi), marinated in a sweet and savory sauce.',
                ingredients: 'Beef short ribs, soy sauce, sugar, garlic, sesame oil, green onions, Asian pear.',
                recipeLink: 'https://www.maangchi.com/recipe/la-galbi',
                difficulty: 'Medium',
                prepTime: '40 mins (plus marinating time)',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84_%EC%82%AC%EC%A7%842.jpg/500px-%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84_%EC%82%AC%EC%A7%842.jpg'
            },
            {
                name: 'Jjajangmyeon (짜장면)',
                description: 'A popular Korean-Chinese noodle dish topped with a thick sauce made from chunjang (black bean paste), diced pork, and vegetables.',
                ingredients: 'Noodles, chunjang, pork belly, onion, zucchini, cabbage, cucumber, soy sauce.',
                recipeLink: 'https://www.maangchi.com/recipe/jjajangmyeon',
                difficulty: 'Medium',
                prepTime: '50 mins',
                imageUrl: 'https://i.namu.wiki/i/N5z4a0gOM2IqcJurnrk6R4G1JElA3KizKjfEYuL3WRnStVS16TaMiX2sWk_2UEHhWkz6CM04dJvey3JZkRAGuJENbvk4feTXZCgLkppHHwvkgpAjnbZHiDZ6XRTcDVPXGdg-jR9QYL3iKNRzIQ71w.webp'
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