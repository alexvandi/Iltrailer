const trailers = [
    { title: "Avatar: The Way of Water", src: "https://www.youtube.com/embed/d9MyW72ELq0", category: "Action", platform: "https://www.disneyplus.com/movies/avatar-the-way-of-water" },
    { title: "The Batman", src: "https://www.youtube.com/embed/mqqft2x_Aa4", category: "Action", platform: "https://www.hbomax.com/the-batman" },
    { title: "Dune: Part One", src: "https://www.youtube.com/embed/n9xhJrPXop4", category: "Sci-Fi", platform: "https://www.hbomax.com/dune" },
    { title: "Interstellar", src: "https://www.youtube.com/embed/zSWdZVtXT7E", category: "Sci-Fi", platform: "https://www.paramountplus.com/interstellar" },
    { title: "Joker", src: "https://www.youtube.com/embed/zAGVQLHvwOY", category: "Drama", platform: "https://www.hbomax.com/joker" },
    { title: "The Irishman", src: "https://www.youtube.com/embed/WHXxVmeGQUc", category: "Drama", platform: "https://www.netflix.com/title/80175798" },
    { title: "Frozen II", src: "https://www.youtube.com/embed/Zi4LMpSDccc", category: "Animation", platform: "https://www.disneyplus.com/movies/frozen-ii" },
    { title: "Toy Story 4", src: "https://www.youtube.com/embed/wmiIUN-7qhE", category: "Animation", platform: "https://www.disneyplus.com/movies/toy-story-4" },
    { title: "Inception", src: "https://www.youtube.com/embed/YoHD9XEInc0", category: "Thriller", platform: "https://www.amazon.com/Inception/dp/B0047WJ11G" },
    { title: "Tenet", src: "https://www.youtube.com/embed/L3pk_TBkihU", category: "Thriller", platform: "https://www.amazon.com/Tenet/dp/B08PGMFV4P" },
    { title: "No Time to Die", src: "https://www.youtube.com/embed/BIhNsAtPbPI", category: "Action", platform: "https://www.amazon.com/No-Time-Die-Daniel-Craig/dp/B09KQZ2C8P" },
    { title: "John Wick: Chapter 4", src: "https://www.youtube.com/embed/qEVUtrk8_B4", category: "Action", platform: "" },
    { title: "The Super Mario Bros. Movie", src: "https://www.youtube.com/embed/TnGl01FkMMo", category: "Animation", platform: "" },
    { title: "Black Panther: Wakanda Forever", src: "https://www.youtube.com/embed/_Z3QKkl1WyM", category: "Action", platform: "https://www.disneyplus.com/movies/black-panther-wakanda-forever" },
    { title: "Top Gun: Maverick", src: "https://www.youtube.com/embed/giXco2jaZ_4", category: "Action", platform: "https://www.paramountplus.com/movies/top-gun-maverick" },
    { title: "Doctor Strange in the Multiverse of Madness", src: "https://www.youtube.com/embed/aWzlQ2N6qqg", category: "Sci-Fi", platform: "https://www.disneyplus.com/movies/doctor-strange-in-the-multiverse-of-madness" },
    { title: "Spider-Man: No Way Home", src: "https://www.youtube.com/embed/JfVOs4VSpmA", category: "Action", platform: "" },
    { title: "Encanto", src: "https://www.youtube.com/embed/CaimKeDcudo", category: "Animation", platform: "https://www.disneyplus.com/movies/encanto" },
    { title: "The Lion King (2019)", src: "https://www.youtube.com/embed/7TavVZMewpY", category: "Animation", platform: "https://www.disneyplus.com/movies/the-lion-king" },
    { title: "The Matrix Resurrections", src: "https://www.youtube.com/embed/9ix7TUGVYIo", category: "Sci-Fi", platform: "https://www.hbomax.com/the-matrix-resurrections" },
    { title: "Dune", src: "https://www.youtube.com/embed/n9xhJrPXop4", category: "Sci-Fi", platform: "https://www.hbomax.com/dune" },
    { title: "The Fabelmans", src: "https://www.youtube.com/embed/D1G2iLSzOe8", category: "Drama", platform: "" },
    { title: "Lightyear", src: "https://www.youtube.com/embed/BwZs3H_UN3k", category: "Comedy", platform: "https://www.disneyplus.com/movies/lightyear" },
    { title: "Jurassic World Dominion", src: "https://www.youtube.com/embed/fb5ELWi-ekk", category: "Action", platform: "https://www.amazon.com/Jurassic-World-Dominion/dp/B0B19D5LSZ" },
    { title: "Minions: The Rise of Gru", src: "https://www.youtube.com/embed/6DxjJzmYsXo", category: "Comedy", platform: "https://www.amazon.com/Minions-Rise-Gru-Steve-Carell/dp/B0B73MFMV8" },
    { title: "Shang-Chi and the Legend of the Ten Rings", src: "https://www.youtube.com/embed/8YjFbMbfXaQ", category: "Action", platform: "https://www.disneyplus.com/movies/shang-chi" },
    { title: "The French Dispatch", src: "https://www.youtube.com/embed/TcPk2p0Zaw4", category: "Drama", platform: "https://www.hbomax.com/the-french-dispatch" },
    { title: "Free Guy", src: "https://www.youtube.com/embed/X2m-08cOAbc", category: "Comedy", platform: "https://www.disneyplus.com/movies/free-guy" },0
    


];


/// Elementi della pagina
const videoElement = document.getElementById("trailer");
const saveButton = document.getElementById("save-btn");
const nextButton = document.getElementById("next-btn");
const categorySelect = document.getElementById("category-select");
const trailerIndicator = document.getElementById("trailer-indicator");
// Elemento pulsante Play
const playButton = document.getElementById("play-btn");


// Variabili per la gestione dei trailer
let currentTrailerIndex = 0;
let filteredTrailers = [...trailers]; // Default: tutti i trailer
// Variabile per l'iframe di precaricamento
let preloadIframe;

// Funzione per precaricare il trailer successivo
function preloadNextTrailer() {
    if (filteredTrailers.length > 1) {
        // Calcola l'indice del trailer successivo
        const nextIndex = (currentTrailerIndex + 1) % filteredTrailers.length;
        const nextTrailer = filteredTrailers[nextIndex];

        // Crea o aggiorna l'iframe nascosto
        if (!preloadIframe) {
            preloadIframe = document.createElement("iframe");
            preloadIframe.style.display = "none"; // Nascondi l'iframe
            document.body.appendChild(preloadIframe);
        }

        // Imposta l'URL del trailer successivo nell'iframe di precaricamento
        preloadIframe.src = `${nextTrailer.src}?autoplay=0`;
    }
}


// Modifica la funzione loadTrailer per includere il precaricamento
function loadTrailer(index) {
    const trailer = filteredTrailers[index];
    if (trailer) {
        videoElement.src = `${trailer.src}?autoplay=1&mute=0&enablejsapi=1`;
        trailerIndicator.textContent = `${index + 1} / ${filteredTrailers.length}`;

        // Precarica il trailer successivo
        preloadNextTrailer();
    }
}

// Carica il primo trailer e inizia il precaricamento
document.addEventListener("DOMContentLoaded", () => {
    if (filteredTrailers.length > 0) {
        currentTrailerIndex = Math.floor(Math.random() * filteredTrailers.length);
        loadTrailer(currentTrailerIndex);
    }
});
// Funzione per selezionare il prossimo trailer in modo casuale
function randomTrailer() {
    if (filteredTrailers.length === 0) return;

    // Genera un indice casuale
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * filteredTrailers.length);
    } while (randomIndex === currentTrailerIndex && filteredTrailers.length > 1);

    currentTrailerIndex = randomIndex;
    loadTrailer(currentTrailerIndex);
}


// Funzione per filtrare i trailer per categoria
function filterTrailers(category) {
    if (category === "All") {
        filteredTrailers = [...trailers];
    } else {
        filteredTrailers = trailers.filter(trailer => trailer.category === category);
    }
    currentTrailerIndex = 0; // Resetta l'indice
    loadTrailer(currentTrailerIndex);
}

// Funzione per salvare un trailer
function saveTrailer(trailer) {
    let savedTrailers = JSON.parse(localStorage.getItem("savedTrailers")) || [];
    if (!savedTrailers.some(t => t.title === trailer.title)) {
        savedTrailers.push(trailer);
        localStorage.setItem("savedTrailers", JSON.stringify(savedTrailers));
        alert(`Saved: ${trailer.title}`);
    } else {
        alert("This trailer is already saved.");
    }
}

// Event listener per il pulsante Salva
saveButton.addEventListener("click", () => {
    const trailer = filteredTrailers[currentTrailerIndex];
    saveTrailer(trailer);
});

// Event listener per aprire la piattaforma del film
playButton.addEventListener("click", () => {
    const trailer = filteredTrailers[currentTrailerIndex];
    if (trailer.platform) {
        window.open(trailer.platform, "_blank"); // Apre il link in una nuova scheda
    } else {
        alert("Streaming platform not available for this trailer.");
    }
});

// Event listener per il pulsante "Next" (modalità casuale)
nextButton.addEventListener("click", randomTrailer);
// Funzione per gestire le scorciatoie da tastiera
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowDown": // Freccia giù per cambiare trailer
            randomTrailer(); // Cambia trailer in modalità casuale
            break;

        case "s": // Tasto 'S' per salvare il trailer corrente
        case "S": // Supporta sia 's' minuscola che maiuscola
            const currentTrailer = filteredTrailers[currentTrailerIndex];
            saveTrailer(currentTrailer);
            break;

        case "a": // Tasto 'A' per aprire il trailer sulla piattaforma di streaming
        case "A":
            const trailerForPlay = filteredTrailers[currentTrailerIndex];
            if (trailerForPlay.platform) {
                window.open(trailerForPlay.platform, "_blank");
            } else {
                alert("Streaming platform not available for this trailer.");
            }
            break;

        default:
            break; // Non fare nulla per altri tasti
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (filteredTrailers.length > 0) {
        currentTrailerIndex = Math.floor(Math.random() * filteredTrailers.length);
        loadTrailer(currentTrailerIndex);
    }
});

saveButton.addEventListener("click", () => {
    const trailer = filteredTrailers[currentTrailerIndex];
    alert(`Saved: ${trailer.title}`);
});

categorySelect.addEventListener("change", (event) => {
    filterTrailers(event.target.value);
});



// Carica il primo trailer al caricamento della pagina
loadTrailer(currentTrailerIndex);
