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
                    width: 100%;
                    height: 250px;
                    object-fit: contain;
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
                description: '따뜻한 흰쌀밥 위에 나물(볶거나 양념한 채소), 고추장, 간장 또는 된장, 그리고 보통 계란 프라이와 얇게 썬 고기(주로 소고기)를 얹어 비벼 먹는 한국의 대표적인 음식입니다.',
                ingredients: '밥, 다양한 양념 채소 (시금치, 당근, 콩나물, 버섯), 소고기 (선택 사항), 계란 프라이, 고추장, 참기름.',
                recipeLink: 'https://www.maangchi.com/recipe/bibimbap',
                difficulty: '중간',
                prepTime: '45분',
                imageUrl: 'images/bibimbap.jpg'
            },
            {
                name: 'Bulgogi (불고기)',
                description: '보통 굽거나 볶아서 만드는 한국의 양념된 소고기 또는 돼지고기 바비큐입니다. 짭짤하고 약간 단맛이 나는 것으로 유명한 인기 있는 요리입니다.',
                ingredients: '얇게 썬 소고기 (등심 또는 갈비살), 간장, 설탕, 참기름, 마늘, 후추, 파, 양파.',
                recipeLink: 'https://www.maangchi.com/recipe/bulgogi',
                difficulty: '쉬움',
                prepTime: '30분 (재움 시간 포함)',
                imageUrl: 'images/bulgogi.jpg'
            },
            {
                name: 'Kimchi Jjigae (김치찌개)',
                description: '잘 익은 김치, 두부, 돼지고기(또는 다른 고기), 그리고 다양한 채소를 고추장과 고춧가루로 양념하여 만든 맵고 savory하며 편안함을 주는 찌개입니다.',
                ingredients: '김치, 돼지고기 (또는 참치), 두부, 양파, 대파, 고추장, 고춧가루, 멸치 육수.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-jjigae',
                difficulty: '중간',
                prepTime: '35분',
                imageUrl: 'images/Kimchijjigae.jpg'
            },
            {
                name: 'Tteokbokki (떡볶이)',
                description: '부드럽고 쫄깃한 떡, 어묵, 파를 달콤하고 매콤한 고추장 기반 소스에 조리한 인기 있는 한국 길거리 음식입니다.',
                ingredients: '떡, 어묵, 대파, 삶은 달걀 (선택 사항), 고추장, 고춧가루, 설탕, 멸치 육수.',
                recipeLink: 'https://www.maangchi.com/recipe/tteokbokki',
                difficulty: '쉬움',
                prepTime: '25분',
                imageUrl: 'images/Tteokbokki.jpg'
            },
            {
                name: 'Samgyeopsal (삼겹살)',
                description: '한국 바비큐의 대표적인 음식인 구운 돼지 삼겹살입니다. 보통 상추쌈, 쌈장(찍어 먹는 소스), 마늘, 김치와 함께 제공됩니다.',
                ingredients: '돼지고기 삼겹살, 상추, 마늘, 풋고추, 쌈장, 참기름, 소금, 후추.',
                recipeLink: 'https://www.maangchi.com/recipe/samgyeopsal-gui',
                difficulty: '쉬움',
                prepTime: '20분',
                imageUrl: 'images/Samgyeopsal.jpg'
            },
            {
                name: 'Japchae (잡채)',
                description: '볶은 당면과 채소가 어우러진 짭짤하고 약간 달콤한 요리입니다. 특별한 날이나 potluck 파티에 인기가 많습니다.',
                ingredients: '당면, 소고기 (선택 사항), 시금치, 당근, 버섯, 양파, 간장, 참기름, 설탕.',
                recipeLink: 'https://www.maangchi.com/recipe/japchae',
                difficulty: '중간',
                prepTime: '50분',
                imageUrl: 'images/jabchae.jpg'
            },
            {
                name: 'Kimchi Bokkeumbap (김치볶음밥)',
                description: '사랑받는 한국의 comfort food인 김치 볶음밥입니다. 만들기가 빠르고 잘 익은 김치로 풍미가 가득합니다.',
                ingredients: '밥, 김치, 돼지고기 (또는 다른 고재료/스팸), 계란 프라이, 참기름, 김 가루.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchi-bokkeumbap',
                difficulty: '쉬움',
                prepTime: '20분',
                imageUrl: 'images/Kimchi_fried_rice.jpg'
            },
            {
                name: 'Sundubu Jjigae (순두부찌개)',
                description: '부드러운 (순두부) 두부, 채소, 버섯, 해산물, 고추장으로 만든 맵고 부드러운 한국식 두부찌개입니다.',
                ingredients: '순두부, 바지락 (또는 다른 해산물/돼지고기), 계란, 애호박, 양파, 고추기름, 고춧가루, 멸치 육수.',
                recipeLink: 'https://www.maangchi.com/recipe/sundubu-jjigae',
                difficulty: '중간',
                prepTime: '30분',
                imageUrl: 'images/sundubujjiage.jpg'
            },
            {
                name: 'Haemul Pajeon (해물파전)',
                description: '파(scallions)와 해산물(seafood)이 특징인 맛있는 한국식 팬케이크로, 얇은 반죽에 바삭하게 구워냅니다.',
                ingredients: '대파, 다양한 해산물 (새우, 오징어, 홍합), 밀가루, 계란, 물, 찍어 먹을 간장.',
                recipeLink: 'https://www.maangchi.com/recipe/haemul-pajeon',
                difficulty: '중간',
                prepTime: '40분',
                imageUrl: 'images/HaemulPajeon.jpg'
            },
            {
                name: 'Gyeran Mari (계란말이)',
                description: '당근, 양파, 파와 같은 다진 채소를 섞어 만든 한국식 계란말이입니다. 인기 있는 반찬입니다.',
                ingredients: '계란, 당근, 대파, 양파, 소금, 후추, 식용유.',
                recipeLink: 'https://www.maangchi.com/recipe/gyeran-mari',
                difficulty: '쉬움',
                prepTime: '15분',
                imageUrl: 'images/gyeranmari.jpg'
            },
            {
                name: 'Kimchi Jeon (김치전)',
                description: '주로 썰은 김치, 밀가루 반죽, 그리고 때로는 다른 채소나 고기로 만드는 savory한 김치 팬케이크입니다.',
                ingredients: '김치, 밀가루, 물, 계란, 대파, 찍어 먹을 간장.',
                recipeLink: 'https://www.maangchi.com/recipe/kimchijeon',
                difficulty: '쉬움',
                prepTime: '25분',
                imageUrl: 'images/kimchijeon.jpg'
            },
            {
                name: 'Gimbap (김밥)',
                description: '일본 마키 스시와 비슷하지만 날 생선 없이 조리된 재료와 양념된 밥으로 만드는 한국식 김밥입니다.',
                ingredients: '김, 밥, 다양한 조리된 속 재료 (계란, 햄, 시금치, 당근, 단무지), 참기름.',
                recipeLink: 'https://www.maangchi.com/recipe/gimbap',
                difficulty: '중간',
                prepTime: '1시간',
                imageUrl: 'images/Gimbap.jpg'
            },
            {
                name: 'Yukgaejang (육개장)',
                description: '찢은 소고기, 다양한 채소(고사리, 콩나물), 그리고 매운 육수로 만든 맵고 푸짐한 한국식 소고기 수프입니다.',
                ingredients: '소고기 양지, 고사리, 콩나물, 토란대, 대파, 고추기름, 고춧가루, 간장.',
                recipeLink: 'https://www.maangchi.com/recipe/yukgaejang',
                difficulty: '어려움',
                prepTime: '2시간 이상',
                imageUrl: 'images/yukgaejang.jpg'
            },
            {
                name: 'Galbi (갈비)',
                description: '달콤하고 savory한 소스에 재워 굽는 한국식 갈비로, 주로 소갈비 또는 돼지갈비입니다.',
                ingredients: '소갈비, 간장, 설탕, 마늘, 참기름, 대파, 배.',
                recipeLink: 'https://www.maangchi.com/recipe/la-galbi',
                difficulty: '중간',
                prepTime: '40분 (재움 시간 포함)',
                imageUrl: 'images/galbi.jpg'
            },
            {
                name: 'Jjajangmyeon (짜장면)',
                description: '춘장(검은 콩 페이스트), 깍둑썰기 한 돼지고기, 채소로 만든 걸쭉한 소스를 얹은 인기 있는 한중 면 요리입니다.',
                ingredients: '면, 춘장, 돼지 삼겹살, 양파, 애호박, 양배추, 오이, 간장.',
                recipeLink: 'https://www.maangchi.com/recipe/jjajangmyeon',
                difficulty: '중간',
                prepTime: '50분',
                imageUrl: 'images/jjajangmyeon.jpg'
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

// Function to copy URL to clipboard
function copyToClipboard(url) {
    navigator.clipboard.writeText(url).then(function() {
        alert('링크가 클립보드에 복사되었습니다!');
    }).catch(function(err) {
        console.error('클립보드 복사 실패:', err);
        alert('링크 복사에 실패했습니다.');
    });
}