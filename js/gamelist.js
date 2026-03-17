const gamescontainer = document.getElementById("games-container");

fetch("../assets/Jsons/games.json")
    .then(res => res.json())
    .then(data => {
        const games = data.results;

        games.forEach(game => {
            const article = document.createElement("article");
            article.classList.add("game-card");

            const image = game.background_image || "fallback.jpg";

            article.innerHTML = `
            <a href="gameDetails.html?slug=${game.slug}" class="m-2 hover:opacity-70 transition-opacity duration-75">
                <div class="bg-[var(--bg-card)] rounded-xl overflow-hidden m-2 h-full flex flex-col">
                    <div class="bg-black flex flex-grow items-center justify-center">
                        <img src="${image}" alt="${game.name}" class="w-auto h-full object-cover">
                    </div>
                    <div class="h-[30%] p-2 text-center font-medium">
                        <p>
                            ${game.name}
                        </p>
                    </div>
                </div>
            </a>
            `;

            gamescontainer.appendChild(article);
        });
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });