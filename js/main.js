// Homepage JavaScript

// Carousel functionality
let currentSlideIndex = 0;
let slides, dots;

function initCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    dots = document.querySelectorAll('.dot');
    
    if (slides.length > 0) {
        showSlide(0);
        // Auto-advance carousel
        setInterval(() => {
            moveCarousel(1);
        }, 5000);
    }
}

function showSlide(n) {
    if (!slides || slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlideIndex = (n + slides.length) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveCarousel(direction) {
    showSlide(currentSlideIndex + direction);
}

function goToSlide(n) {
    showSlide(n);
}

// Display New Releases
function displayNewReleases() {
    const container = document.getElementById('new-releases');
    const newReleases = comicsData
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        .slice(0, 4);
    
    container.innerHTML = newReleases.map(comic => createComicCard(comic)).join('');
}

// Display Popular Series
function displayPopularSeries() {
    const container = document.getElementById('popular-series');
    const popular = comicsData.filter(comic => comic.popular).slice(0, 4);
    
    container.innerHTML = popular.map(comic => createComicCard(comic)).join('');
}

// Create comic card HTML
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

// Filter by publisher
function filterByPublisher(publisher) {
    window.location.href = `browse.html?publisher=${publisher}`;
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    displayNewReleases();
    displayPopularSeries();
});
