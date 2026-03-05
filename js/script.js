const performances = [
    {
        id: 1,
        title: "Макбет",
        genre: "Трагедия",
        poster: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600",
        description: "Бессмертная трагедия Уильяма Шекспира в новой интерпретации главного режиссера театра. Захватывающее представление о власти, честолюбии и судьбе. История о том, как желание власти может разрушить даже самую благородную душу.",
        duration: "2ч 30мин",
        age: "16+",
        director: "Елена Соколова",
        status: "premiere",
        premiereDate: "25 март 2026",
        actors: ["Александр Петров", "Мария Иванова", "Дмитрий Козлов", "Анна Смирнова"]
    },
    {
        id: 2,
        title: "Вишневый сад",
        genre: "Драма",
        poster: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600",
        description: "Пьеса Антона Павловича Чехова о прощании с прошлым. История об уходящей дворянской культуре и наступлении новой эпохи.",
        duration: "2ч 45мин",
        age: "12+",
        director: "Михаил Волков",
        status: "current",
        premiereDate: "20 марта 2024",
        actors: ["Елена Петрова", "Иван Сидоров", "Ольга Кuzнецова"]
    },
    {
        id: 3,
        title: "Метранпаж",
        genre: "Комедия",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh12-HPh_1OldT9yRzoopLO0MM8N0VlKYiJg&s",
        description: "Сатирическая комедия Николая Гоголя. Остроумная критика чиновничьего произвола и коррупции, не теряющая актуальности уже почти два века.",
        duration: "2ч 20мин",
        age: "12+",
        director: "Станислав Касьянов",
        status: "current",
        premiereDate: "10 октября 2023",
        actors: ["Сергей Новиков", "Татьяна Морозова", "Павел Васильев"]
    },
    {
        id: 4,
        title: "Гамлет",
        genre: "Трагедия",
        poster: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600",
        description: "Величайшая трагедия всех времен. История датского принца, вынужденного отомстить за убийство отца.",
        duration: "3ч 00мин",
        age: "16+",
        director: "Михаил Волков",
        status: "current",
        premiereDate: "5 сентября 2024",
        actors: ["Андрей Белов", "Ксения Лебедева", "Николай Орлов"]
    },
    {
        id: 5,
        title: "Бесприданница",
        genre: "Драма",
        poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        description: "Драма Александра Островского о судьбе девушки, не имеющей приданого в обществе, где всё продается и покупается.",
        duration: "2ч 40мин",
        age: "14+",
        director: "Елена Соколова",
        status: "archive",
        premiereDate: "15 март 2025",
        actors: ["Екатерина Жукова", "Михаил Баринов", "Анна Титова"]
    },
    {
        id: 6,
        title: "Три сестры",
        genre: "Драма",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
        description: "Пьеса Антона Чехова о мечтах, разочарованиях и поиске счастья. История трех сестер, мечтающих о Москве.",
        duration: "2ч 50мин",
        age: "14+",
        director: "Михаил Волков",
        status: "premiere",
        premiereDate: "28 март 2026",
        actors: ["Мария Светлова", "Анна Петрова", "Ольга Иванова"]
    },
];

const sessions = [
    { performanceId: 1, date: "2026-03-25", time: "19:00", hall: "Основной зал", price: 300, seats: generateSeats() },
    { performanceId: 1, date: "2026-03-26", time: "18:00", hall: "Основной зал", price: 300, seats: generateSeats() },
    { performanceId: 2, date: "2026-03-22", time: "19:00", hall: "Малый зал", price: 200, seats: generateSeats() },
    { performanceId: 2, date: "2026-03-24", time: "18:00", hall: "Малый зал", price: 200, seats: generateSeats() },
    { performanceId: 3, date: "2026-03-23", time: "19:00", hall: "Основной зал", price: 400, seats: generateSeats() },
    { performanceId: 4, date: "2026-03-27", time: "18:00", hall: "Основной зал", price: 500, seats: generateSeats() },
];

const actors = [
    { name: "Александр Петров", role: "Ведущий актер", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", merit: "Народный артист" },
    { name: "Елена Петрова", role: "Ведущая актриса", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300", merit: "Заслуженная артистка" },
    { name: "Дмитрий Козлов", role: "Актер", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300", merit: "" },
    { name: "Мария Иванова", role: "Актриса", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300", merit: "" },
    { name: "Сергей Новиков", role: "Актер", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300", merit: "" },
    { name: "Татьяна Морозова", role: "Актриса", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300", merit: "" },
    { name: "Павел Васильев", role: "Актер", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300", merit: "" },
    { name: "Анна Смирнова", role: "Актриса", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300", merit: "" }
];

const news = [
    {
        title: "Премьера «Макбета» состоится 15 апреля",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600",
        date: "10 апрель 2026",
        excerpt: "Приглашаем зрителей на долгожданную премьеру сезона — трагедию Уильяма Шекспира «Макбет» в постановке главного режиссера Елены Соколовой."
    },
    {
        title: "Театр принял участие в фестивале «Золотая маска»",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600",
        date: "5 апрель 2026",
        excerpt: "Спектакль «Вишневый сад» был представлен на престижном театральном фестивале и получил высокую оценку жюри."
    },
    {
        title: "Открыта продажа абонементов на новый сезон",
        image: "https://sun9-16.userapi.com/s/v1/ig2/H9TkyguITOWFayNVU5z-tIT9HKWbBUgVRPexuJBKcrdxUu_8FsvzJiQ6N_EjGriNL5b1E7EXKdhbOZgBuyQvWOlt.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=640x0",
        date: "28 апрель 2026",
        excerpt: "Приобретайте абонементы на второй половину сезона 2024/2025 со скидкой 15% до конца января."
    },
    {
        title: "Детская театральная студия приглашает новичков",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600",
        date: "20 март 2026",
        excerpt: "Набор в детскую театральную студию «Кулисы» открыт для детей от 8 до 14 лет. Занятия начинаются с февраля."
    },
    {
        title: "Новые лица в труппе театра",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
        date: "22 март 2026",
        excerpt: "Познакомьтесь с новыми актерами, присоединившимися к нашей труппе в этом сезоне."
    },
    {
        title: "Конкурс на лучшую рецензию",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        date: "23 март 2026",
        excerpt: "Напишите рецензию на любой спектакль текущего сезона и получите шанс выиграть годовой абонемент."
    }
];

// ==================== STATE ====================
let currentSection = 'home';
let currentSlide = 0;
let selectedPerformance = null;
let selectedSession = null;
let selectedSeats = [];
let slideInterval = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCurtains();
    initScrollReveal();
    renderUpcomingPerformances();
    renderNewsPreview();
    renderAfisha('current');
    renderTroupe();
    renderNews();
    startSlider();
    initHeaderScroll();
    initPaymentForm();
});

// ==================== CURTAINS ====================
function initCurtains() {
    setTimeout(() => {
        document.getElementById('curtainLeft').classList.add('open');
        document.getElementById('curtainRight').classList.add('open');
    }, 300);
}

// ==================== PARTICLES ====================
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ==================== HEADER SCROLL ====================
function initHeaderScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(13, 10, 11, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ==================== SLIDER ====================
function startSlider() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        updateSlider();
    }, 6000);
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    clearInterval(slideInterval);
    startSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
        dot.style.background = i === currentSlide ? 'var(--accent-gold)' : 'var(--border-color)';
    });
}

// ==================== NAVIGATION ====================
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Show target section
    const target = document.getElementById('section-' + section);
    if (target) {
        target.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    currentSection = section;
    
    // Re-init reveals
    setTimeout(() => {
        initScrollReveal();
    }, 100);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// ==================== RENDER FUNCTIONS ====================
function renderUpcomingPerformances() {
    const container = document.getElementById('upcomingPerformances');
    const upcoming = performances.filter(p => p.status !== 'archive').slice(0, 6);
    
    container.innerHTML = upcoming.map((p, i) => `
        <div class="reveal performance-card" style="transition-delay: ${i * 0.1}s">
            <div class="relative aspect-[3/4] overflow-hidden">
                <img src="${p.poster}" alt="${p.title}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4">
                    <span class="age-badge">${p.age}</span>
                </div>
                ${p.status === 'premiere' ? '<div class="absolute top-4 left-4 bg-[var(--accent-gold)] text-[var(--bg-primary)] text-xs font-bold px-3 py-1 rounded">ПРЕМЬЕРА</div>' : ''}
            </div>
            <div class="p-5">
                <div class="text-xs text-[var(--accent-gold)] uppercase tracking-wider mb-2">${p.genre}</div>
                <h3 class="font-display text-xl font-semibold mb-3">${p.title}</h3>
                <div class="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                    <span>${p.duration}</span>
                    <span>Реж. ${p.director}</span>
                </div>
                <button class="btn-outline w-full text-sm" onclick="openPerformanceModal(${p.id})">Подробнее</button>
            </div>
        </div>
    `).join('');
}

function renderNewsPreview() {
    const container = document.getElementById('newsPreview');
    container.innerHTML = news.slice(0, 3).map((n, i) => `
        <div class="reveal news-card" style="transition-delay: ${i * 0.1}s">
            <div class="aspect-video overflow-hidden">
                <img src="${n.image}" alt="${n.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5">
                <div class="text-xs text-[var(--accent-gold)] mb-2">${n.date}</div>
                <h3 class="font-display text-lg font-semibold mb-2 hover:text-[var(--accent-gold)] transition-colors cursor-pointer">${n.title}</h3>
                <p class="text-sm text-[var(--text-muted)]">${n.excerpt}</p>
            </div>
        </div>
    `).join('');
}

function renderAfisha(filter) {
    const container = document.getElementById('afishaGrid');
    let filtered = performances;
    
    if (filter === 'current') {
        filtered = performances.filter(p => p.status === 'current');
    } else if (filter === 'premiere') {
        filtered = performances.filter(p => p.status === 'premiere');
    } else if (filter === 'archive') {
        filtered = performances.filter(p => p.status === 'archive');
    }
    
    container.innerHTML = filtered.map((p, i) => `
        <div class="reveal performance-card" style="transition-delay: ${i * 0.05}s">
            <div class="relative aspect-[3/4] overflow-hidden">
                <img src="${p.poster}" alt="${p.title}" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3">
                    <span class="age-badge">${p.age}</span>
                </div>
            </div>
            <div class="p-4">
                <div class="text-xs text-[var(--accent-gold)] uppercase tracking-wider mb-1">${p.genre}</div>
                <h3 class="font-display text-lg font-semibold mb-2">${p.title}</h3>
                <div class="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                    <span>${p.duration}</span>
                    <span>•</span>
                    <span>${p.age}</span>
                </div>
                <button class="btn-outline w-full text-sm" onclick="openPerformanceModal(${p.id})">Подробнее</button>
            </div>
        </div>
    `).join('');
    
    setTimeout(initScrollReveal, 100);
}

function filterPerformances(filter) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === filter);
    });
    renderAfisha(filter);
}

function renderTroupe() {
    const container = document.getElementById('troupeGrid');
    container.innerHTML = actors.map((a, i) => `
        <div class="reveal bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent-gold)] transition-all duration-300 hover:-translate-y-2" style="transition-delay: ${i * 0.05}s">
            <div class="aspect-square overflow-hidden">
                <img src="${a.photo}" alt="${a.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-4 text-center">
                <h3 class="font-display text-lg font-semibold">${a.name}</h3>
                <p class="text-sm text-[var(--accent-gold)]">${a.role}</p>
                ${a.merit ? `<p class="text-xs text-[var(--text-muted)] mt-1">${a.merit}</p>` : ''}
            </div>
        </div>
    `).join('');
}

function renderNews() {
    const container = document.getElementById('newsGrid');
    container.innerHTML = news.map((n, i) => `
        <div class="reveal news-card" style="transition-delay: ${i * 0.05}s">
            <div class="aspect-video overflow-hidden">
                <img src="${n.image}" alt="${n.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5">
                <div class="text-xs text-[var(--accent-gold)] mb-2">${n.date}</div>
                <h3 class="font-display text-lg font-semibold mb-2 hover:text-[var(--accent-gold)] transition-colors cursor-pointer">${n.title}</h3>
                <p class="text-sm text-[var(--text-muted)]">${n.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// ==================== PERFORMANCE MODAL ====================
function openPerformanceModal(id) {
    const performance = performances.find(p => p.id === id);
    if (!performance) return;
    
    selectedPerformance = performance;
    
    const performanceSessions = sessions.filter(s => s.performanceId === id);
    
    const modal = document.getElementById('performanceModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div class="grid sm:grid-cols-2 gap-6 mb-6">
            <div class="aspect-[3/4] rounded-lg overflow-hidden">
                <img src="${performance.poster}" alt="${performance.title}" class="w-full h-full object-cover">
            </div>
            <div>
                <div class="text-sm text-[var(--accent-gold)] uppercase tracking-wider mb-2">${performance.genre}</div>
                <h2 class="font-display text-2xl font-bold mb-4">${performance.title}</h2>
                <div class="space-y-2 text-sm text-[var(--text-muted)] mb-4">
                    <p><span class="text-[var(--text-primary)]">Продолжительность:</span> ${performance.duration}</p>
                    <p><span class="text-[var(--text-primary)]">Возраст:</span> ${performance.age}</p>
                    <p><span class="text-[var(--text-primary)]">Режиссер:</span> ${performance.director}</p>
                    <p><span class="text-[var(--text-primary)]">Премьера:</span> ${performance.premiereDate}</p>
                </div>
                <span class="age-badge">${performance.age}</span>
            </div>
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Описание</h3>
            <p class="text-sm text-[var(--text-muted)]">${performance.description}</p>
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-3">В ролях</h3>
            <div class="flex flex-wrap gap-2">
                ${performance.actors.map(a => `<span class="text-xs bg-[var(--bg-secondary)] px-3 py-1 rounded-full text-[var(--text-muted)]">${a}</span>`).join('')}
            </div>
        </div>
        
        ${performanceSessions.length > 0 ? `
            <div class="border-t border-[var(--border-color)] pt-4">
                <h3 class="font-semibold mb-3">Ближайшие показы</h3>
                <div class="space-y-2">
                    ${performanceSessions.map((s, i) => `
                        <div class="flex items-center justify-between p-3 bg-[var(--bg-secondary)] rounded-lg">
                            <div>
                                <div class="font-medium">${formatDate(s.date)}, ${s.time}</div>
                                <div class="text-sm text-[var(--text-muted)]">${s.hall}</div>
                            </div>
                            <div class="text-right">
                                <div class="font-display text-lg text-gold-gradient">${s.price} сом.</div>
                                <button class="text-sm text-[var(--accent-gold)] hover:underline" onclick="selectSession(${i}, ${id})">Выбрать места</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '<p class="text-[var(--text-muted)]">На данный момент сеансов нет</p>'}
        
        <button class="btn-gold w-full mt-6" onclick="closePerformanceModal()">Закрыть</button>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePerformanceModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('performanceModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ==================== SEAT SELECTION ====================
function generateSeats() {
    const rows = 8;
    const seatsPerRow = 12;
    const seats = [];
    
    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let s = 0; s < seatsPerRow; s++) {
            row.push({
                number: s + 1,
                occupied: Math.random() < 0.2
            });
        }
        seats.push(row);
    }
    return seats;
}

function selectSession(sessionIndex, performanceId) {
    const performanceSessions = sessions.filter(s => s.performanceId === performanceId);
    selectedSession = performanceSessions[sessionIndex];
    selectedPerformance = performances.find(p => p.id === performanceId);
    selectedSeats = [];
    
    closePerformanceModal();
    showSection('seats');
    renderHallMap();
    updateOrderSummary();
    
    document.getElementById('seatsPerformanceTitle').textContent = 
        `${selectedPerformance.title} — ${formatDate(selectedSession.date)}, ${selectedSession.time}`;
}

function renderHallMap() {
    const container = document.getElementById('hallMap');
    const seats = selectedSession.seats;
    
    container.innerHTML = `
        <div class="flex flex-col items-center gap-2">
            ${seats.map((row, rowIndex) => `
                <div class="flex items-center gap-2">
                    <span class="w-6 text-xs text-[var(--text-muted)] text-right">${rowIndex + 1}</span>
                    <div class="flex gap-1">
                        ${row.map((seat, seatIndex) => `
                            <button 
                                class="seat ${seat.occupied ? 'seat-occupied' : ''}" 
                                data-row="${rowIndex}" 
                                data-seat="${seatIndex}"
                                onclick="toggleSeat(${rowIndex}, ${seatIndex})"
                                ${seat.occupied ? 'disabled' : ''}
                                aria-label="Ряд ${rowIndex + 1}, место ${seatIndex + 1}${seat.occupied ? ', занято' : ''}"
                            >
                                ${seatIndex + 1}
                            </button>
                        `).join('')}
                    </div>
                    <span class="w-6 text-xs text-[var(--text-muted)]">${rowIndex + 1}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleSeat(rowIndex, seatIndex) {
    const seatEl = document.querySelector(`[data-row="${rowIndex}"][data-seat="${seatIndex}"]`);
    if (!seatEl || seatEl.classList.contains('seat-occupied')) return;
    
    const seatKey = `${rowIndex}-${seatIndex}`;
    const index = selectedSeats.findIndex(s => s.row === rowIndex && s.seat === seatIndex);
    
    if (index > -1) {
        selectedSeats.splice(index, 1);
        seatEl.classList.remove('seat-selected');
    } else {
        selectedSeats.push({ row: rowIndex, seat: seatIndex });
        seatEl.classList.add('seat-selected');
    }
    
    updateOrderSummary();
}

function updateOrderSummary() {
    const summaryEl = document.getElementById('orderSummary');
    const totalEl = document.getElementById('orderTotal');
    const proceedBtn = document.getElementById('proceedPayment');
    
    if (selectedSeats.length === 0) {
        summaryEl.innerHTML = '<p class="text-[var(--text-muted)]">Места не выбраны</p>';
        totalEl.textContent = '0 сом.';
        proceedBtn.disabled = true;
        return;
    }
    
    const seatsList = selectedSeats.map(s => `Ряд ${s.row + 1}, место ${s.seat + 1}`).join('<br>');
    const total = selectedSeats.length * selectedSession.price;
    
    summaryEl.innerHTML = `
        <div class="text-sm">
            <p class="font-medium mb-2">${selectedPerformance.title}</p>
            <p class="text-[var(--text-muted)]">${formatDate(selectedSession.date)}, ${selectedSession.time}</p>
            <p class="text-[var(--text-muted)]">${selectedSession.hall}</p>
        </div>
        <div class="mt-3 pt-3 border-t border-[var(--border-color)]">
            <p class="text-sm mb-2">Выбранные места:</p>
            <p class="text-sm text-[var(--text-muted)]">${selectedSeats.map(s => `${s.row + 1} ряд, ${s.seat + 1} место`).join(', ')}</p>
        </div>
    `;
    
    totalEl.textContent = `${total.toLocaleString()} сом.`;
    proceedBtn.disabled = false;
}

function goBackFromSeats() {
    if (selectedPerformance) {
        openPerformanceModal(selectedPerformance.id);
    } else {
        showSection('afisha');
    }
}

// ==================== PAYMENT ====================
function proceedToPayment() {
    if (selectedSeats.length === 0) return;
    
    showSection('payment');
    
    const orderInfo = document.getElementById('paymentOrderInfo');
    const total = selectedSeats.length * selectedSession.price;
    
    orderInfo.innerHTML = `
        <p><span class="text-[var(--text-muted)]">Спектакль:</span> ${selectedPerformance.title}</p>
        <p><span class="text-[var(--text-muted)]">Дата:</span> ${formatDate(selectedSession.date)}, ${selectedSession.time}</p>
        <p><span class="text-[var(--text-muted)]">Зал:</span> ${selectedSession.hall}</p>
        <p><span class="text-[var(--text-muted)]">Места:</span> ${selectedSeats.map(s => `${s.row + 1} ряд, ${s.seat + 1} место`).join(', ')}</p>
        <p class="font-semibold text-lg pt-2 mt-2 border-t border-[var(--border-color)]">
            <span class="text-[var(--text-muted)]">К оплате:</span> 
            <span class="text-gold-gradient">${total.toLocaleString()} сом.</span>
        </p>
    `;
}

function initPaymentForm() {
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mark seats as occupied
        selectedSeats.forEach(s => {
            if (selectedSession.seats[s.row] && selectedSession.seats[s.row][s.seat]) {
                selectedSession.seats[s.row][s.seat].occupied = true;
            }
        });
        
        // Show success
        document.getElementById('successModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    });
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('open');
    document.body.style.overflow = '';
    selectedSeats = [];
    showSection('home');
}

// ==================== HELPERS ====================
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('kg-KG', options);
}




