<<<<<<< HEAD
# 🎬 FlixZone – Streaming Platform UI

A fully functional Netflix-style streaming UI clone built with pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
netflix-clone/
├── index.html          ← Homepage (Hero + Rows)
├── css/
│   └── style.css       ← All styles (dark theme, animations)
├── js/
│   ├── data.js         ← Shows/movies data + helper functions
│   └── app.js          ← All interactivity (render, search, modal)
└── pages/
    ├── shows.html      ← TV Shows grid page
    └── movies.html     ← Movies grid page
```

## 🚀 How to Run

### Option 1: Direct Open
Just double-click `index.html` in your browser.

### Option 2: Local Server (Recommended)
```bash
# Python
python -m http.server 3000

# Node.js (npx)
npx serve .

# VS Code
Install "Live Server" extension → Right-click index.html → Open with Live Server
```

Then open: `http://localhost:3000`

## ✨ Features

| Feature | Details |
|---|---|
| 🎥 Hero Banner | Full-screen hero with animated background zoom |
| 📺 Rows | Continue Watching, Trending, Top Picks, New Releases |
| 🔢 Trending Numbers | Numbered cards like Netflix |
| 🔍 Search | Real-time title/genre search |
| 🎭 Genre Filter | Filter by Action, Drama, Sci-Fi, etc. |
| 🪟 Modal Popup | Click any card → detailed info modal |
| 📱 Responsive | Works on mobile & desktop |
| 🌑 Dark Theme | Full dark Netflix-style theme |
| 📜 Scroll Effect | Navbar becomes solid on scroll |
| ♾️ Multi-page | Home, TV Shows, Movies pages |

## 🎨 Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Custom properties, animations, flexbox, grid
- **Vanilla JS** – No frameworks, no dependencies
- **Google Fonts** – Bebas Neue + DM Sans

## 📦 How to Add Real Content

1. **Images**: Replace gradient cards with actual thumbnail images:
   ```javascript
   // In app.js → buildCard()
   // Replace the gradient div with:
   <img src="${show.thumbnail}" alt="${show.title}" />
   ```

2. **More Shows**: Add objects to `SHOWS` array in `data.js`:
   ```javascript
   {
     id: 25,
     title: 'Your Show Name',
     genre: 'Action',
     year: 2024,
     rating: 'U/A 16+',
     duration: '10 Episodes',
     match: 94,
     language: 'Hindi',
     desc: 'Your show description here.'
   }
   ```

3. **Video Player**: On Play button click, you can add:
   ```javascript
   // Redirect to a video player page
   window.location.href = `player.html?id=${show.id}`;
   ```

## 🔧 Customization

- Change brand name: Search `FlixZone` → replace with your name
- Change accent color: Edit `--red: #E50914` in `css/style.css`
- Add your logo: Replace `.logo` text with `<img src="logo.png">`

## 📄 License

Free to use for learning and personal projects.
=======
# flixzone
FlixZone is a modern Netflix-style streaming platform UI clone built using pure HTML, CSS, and JavaScript.
>>>>>>> 6e9ebc7ca0a967387f9446c910f1ae6bf2f21690
