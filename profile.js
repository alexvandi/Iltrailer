// Funzione per caricare i trailer salvati
function loadSavedTrailers() {
    const savedTrailers = JSON.parse(localStorage.getItem("savedTrailers")) || [];
    const trailerGrid = document.getElementById("saved-trailer-grid");

    // Pulire la griglia
    trailerGrid.innerHTML = "";

    // Controlla se ci sono trailer salvati
    if (savedTrailers.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.textContent = "No trailers saved yet.";
        emptyMessage.classList.add("empty-message");
        trailerGrid.appendChild(emptyMessage);
        return;
    }

    // Aggiungere ogni trailer salvato alla griglia
    savedTrailers.forEach((trailer, index) => {
        const trailerBox = document.createElement("div");
        trailerBox.classList.add("trailer-box");

        // Aggiungere l'immagine, il titolo e il pulsante Remove
        trailerBox.innerHTML = `
            <img src="https://img.youtube.com/vi/${extractYouTubeID(trailer.src)}/0.jpg" alt="${trailer.title}">
            <span>${trailer.title}</span>
            <button class="remove-btn">Remove</button>
        `;

        // Aggiungere evento per aprire il trailer
        trailerBox.querySelector("img").addEventListener("click", () => {
            window.open(trailer.src, "_blank");
        });

        // Aggiungere evento per rimuovere il trailer
        trailerBox.querySelector(".remove-btn").addEventListener("click", () => {
            removeTrailer(index);
        });

        trailerGrid.appendChild(trailerBox);
    });
}

// Funzione per rimuovere un trailer
function removeTrailer(index) {
    let savedTrailers = JSON.parse(localStorage.getItem("savedTrailers")) || [];
    savedTrailers.splice(index, 1); // Rimuovi il trailer dall'array
    localStorage.setItem("savedTrailers", JSON.stringify(savedTrailers)); // Aggiorna il localStorage
    loadSavedTrailers(); // Aggiorna la griglia
}

// Funzione per estrarre l'ID di YouTube dal link
function extractYouTubeID(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

// Carica i trailer salvati all'avvio della pagina
document.addEventListener("DOMContentLoaded", loadSavedTrailers);



    // Rimuove il messaggio di lista vuota
    const emptyMessage = trailerList.querySelector(".empty-message");
    if (emptyMessage) emptyMessage.remove();

    // Aggiunge i trailer salvati
    savedTrailers.forEach(trailer => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${trailer.title}</span>
            <a href="${trailer.src}" target="_blank">Watch</a>
        `;
        trailerList.appendChild(listItem);
    });


// Carica i trailer salvati all'avvio della pagina
document.addEventListener("DOMContentLoaded", loadSavedTrailers);
