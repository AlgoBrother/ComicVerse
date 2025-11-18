// Comic Detail Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = urlParams.get('id');
    
    if (comicId) {
        displayComicDetail(comicId);
    } else {
        document.getElementById('comic-detail').innerHTML = `
            <div class="detail-loading">
                <p>Comic not found</p>
                <a href="browse.html" class="btn btn-primary">Browse Comics</a>
            </div>
        `;
    }
});

function displayComicDetail(comicId) {
    const comic = comicsData.find(c => c.id === comicId);
    
    if (!comic) {
        document.getElementById('comic-detail').innerHTML = `
            <div class="detail-loading">
                <p>Comic not found</p>
                <a href="browse.html" class="btn btn-primary">Browse Comics</a>
            </div>
        `;
        return;
    }
    
    const detailHTML = `
        <div class="detail-image-container">
            <img src="${comic.image}" alt="${comic.title}" class="detail-image">
        </div>
        <div class="detail-info">
            <div class="detail-publisher">${comic.publisher}</div>
            <h1>${comic.title}</h1>
            <div class="detail-price">$${comic.price.toFixed(2)}</div>
            
            <div class="detail-meta">
                <div class="meta-item">
                    <span class="meta-label">Writer</span>
                    <span class="meta-value">${comic.writer}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Artist</span>
                    <span class="meta-value">${comic.artist}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Character</span>
                    <span class="meta-value">${comic.character}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Genre</span>
                    <span class="meta-value">${comic.genre}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Pages</span>
                    <span class="meta-value">${comic.pages}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Release Date</span>
                    <span class="meta-value">${formatDate(comic.releaseDate)}</span>
                </div>
            </div>
            
            <div class="detail-synopsis">
                <h3>Synopsis</h3>
                <p>${comic.synopsis}</p>
            </div>
            
            <button class="btn btn-primary btn-block" onclick="addToCart('${comic.id}')">
                Add to Cart
            </button>
            <a href="browse.html" class="btn btn-secondary btn-block" style="margin-top: 1rem;">
                Back to Browse
            </a>
        </div>
    `;
    
    document.getElementById('comic-detail').innerHTML = detailHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
