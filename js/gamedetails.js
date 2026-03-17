const container = document.getElementById("game-detail");

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("../assets/Jsons/GameDetails.json")
    .then(res => res.json())
    .then(game => {
        // Platforms
        const platforms = game.platforms
            .map(p => p.platform.name)
            .join(", ");

        // Genres
        const genres = game.genres
            .map(g => `
                <span class="bg-[#003652] px-3 py-1 rounded-lg text-sm">
                    ${g.name}
                </span>
            `).join("");

        // Tags (limit for UI)
        const tags = game.tags
            .slice(0, 8)
            .map(t => `
                <span class="bg-gray-700 px-2 py-1 rounded text-xs">
                    ${t.name}
                </span>
            `).join("");

        container.innerHTML = `
            <div class="max-w-6xl mx-auto px-4 py-10">

                <div class="relative">
                    <img src="${game.background_image}" 
                         class="w-full h-[400px] object-cover rounded-xl opacity-80">

                    <div class="absolute bottom-4 left-6">
                        <h1 class="text-4xl font-bold">${game.name}</h1>
                        <p class="text-gray-300">Released: ${game.released}</p>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-8 mt-8">

                    <div class="md:col-span-2 flex flex-col gap-6">

                        <div>
                            <h2 class="text-2xl font-semibold mb-2">Description</h2>
                            <p class="text-gray-300 leading-relaxed whitespace-pre-line">
                                ${game.description_raw}
                            </p>
                        </div>

                        <div>
                            <h2 class="text-xl font-semibold mb-2">Tags</h2>
                            <div class="flex flex-wrap gap-2">
                                ${tags}
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col gap-6">

                        <div class="bg-[#003652] p-4 rounded-xl">
                            <h3 class="text-lg font-semibold">Rating</h3>
                            <p class="text-2xl font-bold text-yellow-400">
                                ⭐ ${game.rating} / 5
                            </p>
                        </div>

                        <div class="bg-[#003652] p-4 rounded-xl">
                            <h3 class="text-lg font-semibold mb-2">Genres</h3>
                            <div class="flex flex-wrap gap-2">
                                ${genres}
                            </div>
                        </div>

                        <div class="bg-[#003652] p-4 rounded-xl">
                            <h3 class="text-lg font-semibold">Platforms</h3>
                            <p class="text-gray-300">${platforms}</p>
                        </div>

                        <div class="bg-[#003652] p-4 rounded-xl">
                            <h3 class="text-lg font-semibold">Website</h3>
                            <a href="${game.website}" target="_blank" 
                               class="text-blue-400 hover:underline break-all">
                                ${game.website}
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        `;
    })
    .catch(err => {
        console.error(err);
        container.innerHTML = "<p class='text-center mt-10'>Error loading game</p>";
    });