// Browse Page JavaScript

let filteredComics = [...comicsData];

// Initialize browse page
document.addEventListener('DOMContentLoaded', () => {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const publisherParam = urlParams.get('publisher');
    
    if (publisherParam) {
        document.getElementById('filter-publisher').value = publisherParam;
    }
    
    // Add event listeners
    document.getElementById('filter-publisher').addEventListener('change', applyFilters);
    document.getElementById('filter-character').addEventListener('change', applyFilters);
    document.getElementById('filter-genre').addEventListener('change', applyFilters);
    document.getElementById('sort-by').addEventListener('change', applyFilters);
    
    // Initial display
    applyFilters();
});

// Apply filters and sorting
function applyFilters() {
    const publisher = document.getElementById('filter-publisher').value;
    const character = document.getElementById('filter-character').value;
    const genre = document.getElementById('filter-genre').value;
    const sortBy = document.getElementById('sort-by').value;
    
    // Filter comics
    filteredComics = comicsData.filter(comic => {
        const publisherMatch = publisher === 'all' || comic.publisher === publisher;
        const characterMatch = character === 'all' || comic.character === character;
        const genreMatch = genre === 'all' || comic.genre === genre;
        
        return publisherMatch && characterMatch && genreMatch;
    });
    
    // Sort comics
    filteredComics.sort((a, b) => {
        switch(sortBy) {
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'date-desc':
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            case 'date-asc':
                return new Date(a.releaseDate) - new Date(b.releaseDate);
            default:
                return 0;
        }
    });
    
    displayComics();
    updateResultsCount();
}

// Display filtered comics
function displayComics() {
    const container = document.getElementById('comics-grid');
    
    if (filteredComics.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No comics found matching your filters.</p>';
        return;
    }
    
    container.innerHTML = filteredComics.map(comic => createComicCard(comic)).join('');
}

// Create comic card
function createComicCard(comic) {
    return `
        <div class="comic-card" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
            <img src="${comic.image}" alt="${comic.title}">
            <div class="comic-card-content">
                <div class="comic-publisher">${comic.publisher}</div>
                <h3>${comic.title}</h3>
                <div class="comic-price">$${comic.price.toFixed(2)}</div>
                <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${comic.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Update results count
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    const total = comicsData.length;
    const showing = filteredComics.length;
    
    if (showing === total) {
        resultsCount.textContent = `Showing all ${total} comics`;
    } else {
        resultsCount.textContent = `Showing ${showing} of ${total} comics`;
    }
}
