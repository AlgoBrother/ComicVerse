# ComicVerse Hub - Dynamic Online Comic Store

A high-fidelity, visually compelling, and interactive static website that simulates a modern online comic book store. Built entirely with HTML5, CSS3, and vanilla JavaScript (ES6+).

## 🎯 Project Overview

ComicVerse Hub is a professional front-end portfolio piece demonstrating advanced design, responsive layouts, and client-side interactivity without any backend dependencies.

## ✨ Features

### Page 1: Homepage (index.html)
- **Hero Carousel**: Full-width auto-advancing carousel showcasing featured comics
- **New Releases Section**: Displays the latest comic releases
- **Popular Series Section**: Highlights trending comics
- **Publisher Spotlights**: Quick navigation to Marvel, DC, and Image comics

### Page 2: Browse All Comics (browse.html)
- **Complete Catalog**: Grid layout of all available comics
- **Client-Side Filtering**: Filter by publisher, character, or genre
- **Client-Side Sorting**: Sort by title (A-Z/Z-A), price (low-high/high-low), or release date
- **Dynamic Results**: Real-time updates without page refresh

### Page 3: Comic Detail Page (comic-detail.html)
- **Dynamic Content**: URL parameter-based content loading (e.g., `?id=001`)
- **Zoom Effect**: Hover over cover image for zoom effect
- **Detailed Information**: Synopsis, creator info, price, publisher, and metadata
- **Add to Cart**: Functional cart integration

### Page 4: Shopping Cart (cart.html)
- **Cart Management**: View, update quantities, and remove items
- **Persistent Storage**: Cart persists using localStorage
- **Real-Time Calculations**: Automatic subtotal, tax, and total updates
- **Checkout Simulation**: Complete order flow with confirmation

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, animations
- **JavaScript (ES6+)**: Modular, object-oriented code
- **localStorage**: Client-side data persistence

## 📁 Project Structure

```
ComicVerse-Hub/
├── index.html              # Homepage
├── browse.html             # Browse all comics
├── comic-detail.html       # Comic detail page
├── cart.html               # Shopping cart
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── comics-data.js      # Static comic database
│   ├── cart.js             # Cart management class
│   ├── main.js             # Homepage functionality
│   ├── browse.js           # Browse page logic
│   ├── cart-page.js        # Cart page logic
│   └── comic-detail.js     # Detail page logic
└── README.md
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **No build process required** - it's pure HTML/CSS/JS!

## 💡 Key Features Explained

### Carousel System
- Auto-advances every 5 seconds
- Manual navigation with prev/next buttons
- Dot indicators for direct slide access
- Smooth fade transitions

### Filtering & Sorting
- Real-time filtering without page reload
- Multiple filter combinations
- Six sorting options
- Results counter updates dynamically

### Shopping Cart
- Object-oriented Cart class
- localStorage persistence across sessions
- Quantity management (increase/decrease)
- Remove items functionality
- Automatic price calculations with tax

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly interface
- Optimized images

## 🎨 Design Highlights

- **Color Scheme**: Red (#e23636) and Blue (#0d47a1) inspired by major comic publishers
- **Typography**: Clean, modern sans-serif fonts
- **Animations**: Smooth transitions and hover effects
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Shadows**: Layered shadows for depth and hierarchy

## 📊 Data Structure

Comics are stored in `js/comics-data.js` with the following properties:
- `id`: Unique identifier
- `title`: Comic title
- `publisher`: Marvel, DC, or Image
- `character`: Main character(s)
- `genre`: Superhero, Sci-Fi, Horror, Fantasy
- `price`: Decimal price
- `releaseDate`: ISO date string
- `image`: Cover image URL
- `writer`: Comic writer
- `artist`: Comic artist
- `synopsis`: Story description
- `pages`: Page count
- `featured`: Boolean for carousel
- `popular`: Boolean for popular section

## 🔧 Customization

### Adding New Comics
Edit `js/comics-data.js` and add new comic objects to the `comicsData` array.

### Changing Colors
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #e23636;
    --secondary-color: #0d47a1;
    /* ... */
}
```

### Adjusting Carousel Speed
In `js/main.js`, change the interval:
```javascript
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change 5000 to desired milliseconds
```

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All images use Unsplash placeholder URLs
- No external dependencies or frameworks
- Cart data persists in browser localStorage
- Fully functional without a backend server

## 🎓 Learning Outcomes

This project demonstrates:
- Advanced CSS layouts (Grid, Flexbox)
- JavaScript ES6+ features (classes, arrow functions, template literals)
- DOM manipulation and event handling
- Client-side routing with URL parameters
- Local storage API usage
- Responsive web design principles
- User experience best practices

## 📄 License

This is a portfolio/educational project. Feel free to use and modify as needed.

---

**Built with ❤️ for comic book fans and web development enthusiasts**
