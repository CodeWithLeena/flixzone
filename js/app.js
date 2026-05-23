// ===========================
//  FlixZone – app.js
// ===========================

// ---- DOM References ----
const navbar        = document.getElementById('navbar');
const searchInput   = document.getElementById('searchInput');
const continueRow   = document.getElementById('continueRow');
const trendingRow   = document.getElementById('trendingRow');
const picksRow      = document.getElementById('picksRow');
const newRow        = document.getElementById('newRow');
const modalOverlay  = document.getElementById('modalOverlay');
const modalTitle    = document.getElementById('modalTitle');
const modalDesc     = document.getElementById('modalDesc');

// ---- Navbar scroll effect ----
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ---- Build card HTML ----
function buildCard(show, index) {
  const [c1, c2] = getColor(index);
  return `
    <div class="card" onclick="openModal('${show.title.replace(/'/g, "\\'")}')">
      <div class="card-thumb" style="background: linear-gradient(135deg, ${c1}, ${c2});">
        <span>${show.title}</span>
        <div class="card-overlay">
          <div class="play-icon">▶</div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${show.title}</div>
        <div class="card-sub">${show.genre} · ${show.year}</div>
      </div>
    </div>`;
}

// ---- Build trending card ----
function buildTrendingCard(show, num, index) {
  const [c1, c2] = getColor(index);
  return `
    <div class="trending-card" onclick="openModal('${show.title.replace(/'/g, "\\'")}')">
      <div class="trend-num">${num}</div>
      <div class="trend-thumb" style="background: linear-gradient(135deg, ${c1}, ${c2});">
        <span>${show.title}</span>
      </div>
    </div>`;
}

// ---- Render rows ----
function renderRows(data) {
  if (!data || data.length === 0) return;

  // Continue Watching: first 8
  if (continueRow) {
    continueRow.innerHTML = data.slice(0, 8)
      .map((s, i) => buildCard(s, i)).join('');
  }

  // Trending: next 8
  if (trendingRow) {
    trendingRow.innerHTML = data.slice(0, 8)
      .map((s, i) => buildTrendingCard(s, i + 1, i + 8)).join('');
  }

  // Top Picks: next 8
  if (picksRow) {
    picksRow.innerHTML = data.slice(8, 16)
      .map((s, i) => buildCard(s, i + 8)).join('');
  }

  // New Releases: last batch
  if (newRow) {
    newRow.innerHTML = data.slice(16, 24)
      .map((s, i) => buildCard(s, i + 16)).join('');
  }
}

// ---- Category filter ----
document.querySelectorAll('.cat').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const genre = btn.dataset.genre;
    renderRows(filterByGenre(genre));
  });
});

// ---- Search ----
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    if (!q) {
      renderRows(SHOWS);
      return;
    }
    const filtered = SHOWS.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.genre.toLowerCase().includes(q) ||
      s.language.toLowerCase().includes(q)
    );
    renderRows(filtered);
  });
}

// ---- Modal ----
function openModal(title) {
  const show = SHOWS.find(s => s.title === title) || {
    title, desc: 'An incredible story that will keep you on the edge of your seat.',
    match: 95, year: 2024, rating: 'U/A 16+', duration: '1h 48m',
    genre: 'Drama', language: 'Hindi'
  };

  if (modalTitle) modalTitle.textContent = show.title;
  if (modalDesc) modalDesc.textContent = show.desc;

  // Update modal meta
  const metaEl = document.querySelector('.modal-meta');
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="match">${show.match}% Match</span>
      <span class="year">${show.year}</span>
      <span class="rating-badge">${show.rating}</span>
      <span class="dur">${show.duration}</span>`;
  }

  // Update tags
  const tagsEl = document.querySelector('.modal-tags');
  if (tagsEl) {
    tagsEl.innerHTML = [show.genre, show.language, show.year].map(t => `<span class="tag">${t}</span>`).join('');
  }

  // Hero bg color
  const heroEl = document.querySelector('.modal-hero');
  const idx = SHOWS.findIndex(s => s.title === title);
  if (heroEl && idx >= 0) {
    const [c1, c2] = getColor(idx);
    heroEl.style.background = `linear-gradient(to bottom, transparent 50%, #181818), linear-gradient(135deg, ${c1}, ${c2})`;
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---- Grid page render (shows.html / movies.html) ----
function renderGrid(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map((s, i) => buildCard(s, i)).join('');
}

// ---- My List (localStorage) ----
function getMyList() {
  return JSON.parse(localStorage.getItem('flixzone_list') || '[]');
}
function toggleMyList(title) {
  let list = getMyList();
  if (list.includes(title)) {
    list = list.filter(t => t !== title);
  } else {
    list.push(title);
  }
  localStorage.setItem('flixzone_list', JSON.stringify(list));
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderRows(SHOWS);
});
