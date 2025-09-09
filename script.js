// Global Variables
let currentUser = null;
let currentLanguage = 'ar';
let products = [];
let trackingData = {};
let charts = {};

// Sample Data
const sampleProducts = [
    {
        id: 1,
        title: 'هاتف ذكي مُعاد تأهيله',
        titleEn: 'Refurbished Smartphone',
        price: 899,
        originalPrice: 1299,
        category: 'electronics',
        rating: 4.5,
        reviews: 128,
        condition: 'ممتاز',
        conditionEn: 'Excellent',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzRDQUY1MCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGhvbmU8L3RleHQ+PC9zdmc+',
        description: 'هاتف ذكي بحالة ممتازة، تم فحصه وإعادة تأهيله بالكامل',
        descriptionEn: 'Smartphone in excellent condition, fully inspected and refurbished'
    },
    {
        id: 2,
        title: 'لابتوب للأعمال',
        titleEn: 'Business Laptop',
        price: 1599,
        originalPrice: 2299,
        category: 'electronics',
        rating: 4.8,
        reviews: 89,
        condition: 'جيد جداً',
        conditionEn: 'Very Good',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIxOTZGMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TGFwdG9wPC90ZXh0Pjwvc3ZnPg==',
        description: 'لابتوب مثالي للأعمال والدراسة',
        descriptionEn: 'Perfect laptop for business and study'
    },
    {
        id: 3,
        title: 'جاكيت شتوي',
        titleEn: 'Winter Jacket',
        price: 199,
        originalPrice: 399,
        category: 'clothing',
        rating: 4.2,
        reviews: 45,
        condition: 'جيد',
        conditionEn: 'Good',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0ZGOTgwMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SmFja2V0PC90ZXh0Pjwvc3ZnPg==',
        description: 'جاكيت شتوي دافئ ومريح',
        descriptionEn: 'Warm and comfortable winter jacket'
    },
    {
        id: 4,
        title: 'كتاب البرمجة',
        titleEn: 'Programming Book',
        price: 89,
        originalPrice: 149,
        category: 'books',
        rating: 4.7,
        reviews: 234,
        condition: 'ممتاز',
        conditionEn: 'Excellent',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzlDMjdCMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Qm9vazwvdGV4dD48L3N2Zz4=',
        description: 'كتاب شامل لتعلم البرمجة',
        descriptionEn: 'Comprehensive programming learning book'
    },
    {
        id: 5,
        title: 'طاولة مكتب خشبية',
        titleEn: 'Wooden Desk',
        price: 299,
        originalPrice: 499,
        category: 'home',
        rating: 4.4,
        reviews: 67,
        condition: 'جيد جداً',
        conditionEn: 'Very Good',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzc5NTU0OCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGVzazwvdGV4dD48L3N2Zz4=',
        description: 'طاولة مكتب عملية وأنيقة',
        descriptionEn: 'Practical and elegant office desk'
    },
    {
        id: 6,
        title: 'ساعة ذكية',
        titleEn: 'Smart Watch',
        price: 249,
        originalPrice: 399,
        category: 'electronics',
        rating: 4.3,
        reviews: 156,
        condition: 'ممتاز',
        conditionEn: 'Excellent',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzYwN0Q4QiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+V2F0Y2g8L3RleHQ+PC9zdmc+',
        description: 'ساعة ذكية بمميزات متقدمة',
        descriptionEn: 'Smart watch with advanced features'
    }
];

const sampleArticles = [
    {
        id: 1,
        title: 'أهمية إعادة التدوير في الحفاظ على البيئة',
        titleEn: 'The Importance of Recycling in Environmental Protection',
        excerpt: 'تعرف على كيفية مساهمة إعادة التدوير في حماية كوكبنا',
        excerptEn: 'Learn how recycling contributes to protecting our planet',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzRDQUY1MCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UmVjeWNsaW5nPC90ZXh0Pjwvc3ZnPg==',
        date: '2024-01-15',
        readTime: '5 دقائق',
        readTimeEn: '5 minutes'
    },
    {
        id: 2,
        title: 'دليل المبتدئين لإعادة التدوير المنزلي',
        titleEn: 'Beginner\'s Guide to Home Recycling',
        excerpt: 'خطوات بسيطة لبدء إعادة التدوير في منزلك',
        excerptEn: 'Simple steps to start recycling at home',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIxOTZGMyIvPjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Ib21lPC90ZXh0Pjx0ZXh0IHg9IjE1MCIgeT0iMTEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UmVjeWNsaW5nPC90ZXh0Pjwvc3ZnPg==',
        date: '2024-01-10',
        readTime: '7 دقائق',
        readTimeEn: '7 minutes'
    },
    {
        id: 3,
        title: 'تأثير اللوجستيات العكسية على الاقتصاد',
        titleEn: 'Impact of Reverse Logistics on Economy',
        excerpt: 'كيف تساهم اللوجستيات العكسية في النمو الاقتصادي',
        excerptEn: 'How reverse logistics contributes to economic growth',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0ZGOTgwMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RWNvbm9teTwvdGV4dD48L3N2Zz4=',
        date: '2024-01-05',
        readTime: '10 دقائق',
        readTimeEn: '10 minutes'
    }
];

const sampleVideos = [
    {
        id: 1,
        title: 'كيفية تحضير المنتجات للإرجاع',
        titleEn: 'How to Prepare Products for Return',
        thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0U5MUU2MyIvPjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbzwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjE8L3RleHQ+PC9zdmc+',
        duration: '3:45',
        views: '12.5K'
    },
    {
        id: 2,
        title: 'جولة في مركز إعادة التدوير',
        titleEn: 'Tour of Recycling Center',
        thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzNGNTFCNSIvPjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbzwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjI8L3RleHQ+PC9zdmc+',
        duration: '8:20',
        views: '8.9K'
    },
    {
        id: 3,
        title: 'قصص نجاح العملاء مع FlipCycle',
        titleEn: 'Customer Success Stories with FlipCycle',
        thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwOTY4OCIvPjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbzwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjM8L3RleHQ+PC9zdmc+',
        duration: '5:15',
        views: '15.2K'
    }
];

const sampleGuides = [
    {
        id: 1,
        title: 'دليل فرز النفايات',
        titleEn: 'Waste Sorting Guide',
        description: 'تعلم كيفية فرز النفايات بطريقة صحيحة',
        descriptionEn: 'Learn how to sort waste properly',
        icon: 'fas fa-sort',
        steps: 8
    },
    {
        id: 2,
        title: 'إرشادات التعبئة والتغليف',
        titleEn: 'Packaging Guidelines',
        description: 'أفضل الممارسات لتعبئة المنتجات المرتجعة',
        descriptionEn: 'Best practices for packaging returned products',
        icon: 'fas fa-box',
        steps: 6
    },
    {
        id: 3,
        title: 'دليل اختيار المنتجات المستدامة',
        titleEn: 'Sustainable Products Selection Guide',
        description: 'كيفية اختيار منتجات صديقة للبيئة',
        descriptionEn: 'How to choose eco-friendly products',
        icon: 'fas fa-leaf',
        steps: 10
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupEventListeners();
    loadProducts();
    loadEducationContent();
    animateCounters();
    initializeCharts();
    setupFloatingAnimation();
    setupScrollEffects();
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.category);
        });
    });

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    // Dashboard navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const section = item.dataset.section;
            loadDashboardSection(section);
        });
    });

    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Modal close events
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Floating Animation
function setupFloatingAnimation() {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach(item => {
        const speed = parseFloat(item.dataset.speed) || 1;
        let position = 0;
        
        setInterval(() => {
            position += speed;
            item.style.transform = `translateY(${Math.sin(position * 0.01) * 20}px) rotate(${position}deg)`;
        }, 50);
    });
}

// Scroll Effects
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Authentication Functions
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchToRegister() {
    closeModal('loginModal');
    showRegisterModal();
}

function switchToLogin() {
    closeModal('registerModal');
    showLoginModal();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const accountType = document.getElementById('accountType').value;
    
    // Simulate login
    currentUser = {
        email: email,
        accountType: accountType,
        name: 'أحمد محمد',
        points: 1250,
        tier: 'silver'
    };
    
    closeModal('loginModal');
    showDashboard();
    updateAuthUI();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const accountType = document.getElementById('registerAccountType').value;
    
    if (password !== confirmPassword) {
        alert('كلمات المرور غير متطابقة');
        return;
    }
    
    // Simulate registration
    currentUser = {
        name: name,
        email: email,
        accountType: accountType,
        points: 0,
        tier: 'bronze'
    };
    
    closeModal('registerModal');
    showDashboard();
    updateAuthUI();
}

function logout() {
    currentUser = null;
    hideDashboard();
    updateAuthUI();
}

function updateAuthUI() {
    const authButtons = document.querySelector('.nav-auth');
    if (currentUser) {
        authButtons.innerHTML = `
            <span>مرحباً، ${currentUser.name}</span>
            <button class="btn-login" onclick="showDashboard()">لوحة التحكم</button>
            <button class="btn-register" onclick="logout()">تسجيل الخروج</button>
            <button class="lang-toggle" onclick="toggleLanguage()">EN</button>
        `;
    } else {
        authButtons.innerHTML = `
            <button class="btn-login" onclick="showLoginModal()">تسجيل الدخول</button>
            <button class="btn-register" onclick="showRegisterModal()">إنشاء حساب</button>
            <button class="lang-toggle" onclick="toggleLanguage()">EN</button>
        `;
    }
}

// Dashboard Functions
function showDashboard() {
    document.body.style.overflow = 'hidden';
    document.getElementById('dashboard').classList.remove('hidden');
    loadDashboardSection('overview');
}

function hideDashboard() {
    document.body.style.overflow = 'auto';
    document.getElementById('dashboard').classList.add('hidden');
}

function loadDashboardSection(section) {
    const title = document.getElementById('dashboardTitle');
    const main = document.getElementById('dashboardMain');
    
    switch(section) {
        case 'overview':
            title.textContent = 'نظرة عامة';
            main.innerHTML = getDashboardOverview();
            break;
        case 'returns':
            title.textContent = 'المرتجعات';
            main.innerHTML = getDashboardReturns();
            break;
        case 'orders':
            title.textContent = 'الطلبات';
            main.innerHTML = getDashboardOrders();
            break;
        case 'rewards':
            title.textContent = 'المكافآت';
            main.innerHTML = getDashboardRewards();
            break;
        case 'profile':
            title.textContent = 'الملف الشخصي';
            main.innerHTML = getDashboardProfile();
            break;
    }
}

function getDashboardOverview() {
    return `
        <div class="dashboard-stats">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-undo"></i></div>
                <div class="stat-info">
                    <h3>15</h3>
                    <p>إجمالي المرتجعات</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
                <div class="stat-info">
                    <h3>8</h3>
                    <p>الطلبات المكتملة</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-coins"></i></div>
                <div class="stat-info">
                    <h3>${currentUser.points}</h3>
                    <p>نقاط المكافآت</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-leaf"></i></div>
                <div class="stat-info">
                    <h3>125 كجم</h3>
                    <p>CO2 تم توفيرها</p>
                </div>
            </div>
        </div>
        <div class="recent-activity">
            <h3>النشاط الأخير</h3>
            <div class="activity-list">
                <div class="activity-item">
                    <i class="fas fa-check-circle"></i>
                    <span>تم استلام مرتجع #12345</span>
                    <small>منذ ساعتين</small>
                </div>
                <div class="activity-item">
                    <i class="fas fa-truck"></i>
                    <span>تم شحن الطلب #67890</span>
                    <small>أمس</small>
                </div>
                <div class="activity-item">
                    <i class="fas fa-gift"></i>
                    <span>حصلت على 50 نقطة مكافآت</span>
                    <small>منذ 3 أيام</small>
                </div>
            </div>
        </div>
    `;
}

function getDashboardReturns() {
    return `
        <div class="returns-section">
            <div class="section-header">
                <h3>مرتجعاتي</h3>
                <button class="btn-primary" onclick="initiateReturn()">إرجاع جديد</button>
            </div>
            <div class="returns-table">
                <table>
                    <thead>
                        <tr>
                            <th>رقم المرتجع</th>
                            <th>المنتج</th>
                            <th>التاريخ</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#RET001</td>
                            <td>هاتف ذكي</td>
                            <td>2024-01-15</td>
                            <td><span class="status processing">قيد المعالجة</span></td>
                            <td><button class="btn-small">تتبع</button></td>
                        </tr>
                        <tr>
                            <td>#RET002</td>
                            <td>لابتوب</td>
                            <td>2024-01-10</td>
                            <td><span class="status completed">مكتمل</span></td>
                            <td><button class="btn-small">عرض</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getDashboardOrders() {
    return `
        <div class="orders-section">
            <div class="section-header">
                <h3>طلباتي</h3>
                <button class="btn-primary" onclick="browseStore()">تصفح المتجر</button>
            </div>
            <div class="orders-grid">
                <div class="order-card">
                    <div class="order-header">
                        <span class="order-number">#ORD001</span>
                        <span class="order-status delivered">تم التسليم</span>
                    </div>
                    <div class="order-items">
                        <p>هاتف ذكي مُعاد تأهيله</p>
                        <p class="order-price">899 ريال</p>
                    </div>
                    <div class="order-date">15 يناير 2024</div>
                </div>
                <div class="order-card">
                    <div class="order-header">
                        <span class="order-number">#ORD002</span>
                        <span class="order-status shipping">قيد الشحن</span>
                    </div>
                    <div class="order-items">
                        <p>كتاب البرمجة</p>
                        <p class="order-price">89 ريال</p>
                    </div>
                    <div class="order-date">18 يناير 2024</div>
                </div>
            </div>
        </div>
    `;
}

function getDashboardRewards() {
    return `
        <div class="rewards-section">
            <div class="points-summary">
                <div class="points-card">
                    <h3>نقاطك الحالية</h3>
                    <div class="points-value">${currentUser.points}</div>
                    <div class="tier-info">
                        <span>المستوى: ${currentUser.tier === 'silver' ? 'فضي' : 'برونزي'}</span>
                        <div class="progress-bar">
                            <div class="progress" style="width: 65%"></div>
                        </div>
                        <small>350 نقطة للوصول للمستوى الذهبي</small>
                    </div>
                </div>
            </div>
            <div class="rewards-grid">
                <div class="reward-item">
                    <i class="fas fa-percentage"></i>
                    <h4>خصم 10%</h4>
                    <p>500 نقطة</p>
                    <button class="btn-reward">استبدال</button>
                </div>
                <div class="reward-item">
                    <i class="fas fa-shipping-fast"></i>
                    <h4>شحن مجاني</h4>
                    <p>200 نقطة</p>
                    <button class="btn-reward">استبدال</button>
                </div>
                <div class="reward-item">
                    <i class="fas fa-gift"></i>
                    <h4>منتج مجاني</h4>
                    <p>1000 نقطة</p>
                    <button class="btn-reward disabled">غير متاح</button>
                </div>
            </div>
        </div>
    `;
}

function getDashboardProfile() {
    return `
        <div class="profile-section">
            <div class="profile-form">
                <h3>معلومات الحساب</h3>
                <form>
                    <div class="form-group">
                        <label>الاسم الكامل</label>
                        <input type="text" value="${currentUser.name}">
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" value="${currentUser.email}">
                    </div>
                    <div class="form-group">
                        <label>رقم الهاتف</label>
                        <input type="tel" placeholder="+966 5X XXX XXXX">
                    </div>
                    <div class="form-group">
                        <label>العنوان</label>
                        <textarea placeholder="أدخل عنوانك الكامل"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">حفظ التغييرات</button>
                </form>
            </div>
        </div>
    `;
}

// Product Functions
function loadProducts() {
    products = [...sampleProducts];
    displayProducts(products);
}

function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = productsToShow.map(product => {
        const title = currentLanguage === 'en' ? product.titleEn : product.title;
        const condition = currentLanguage === 'en' ? product.conditionEn : product.condition;
        const addToCartText = currentLanguage === 'en' ? 'Add to Cart' : 'أضف للسلة';
        const currency = currentLanguage === 'en' ? 'SAR' : 'ريال';
        const discountText = currentLanguage === 'en' ? '% OFF' : '% خصم';
        const conditionText = currentLanguage === 'en' ? 'Condition:' : 'الحالة:';
        
        return `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
                    <div class="product-badge">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}${discountText}</div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${title}</h3>
                    <div class="product-price">
                        <span class="current-price">${product.price} ${currency}</span>
                        <span class="original-price">${product.originalPrice} ${currency}</span>
                    </div>
                    <div class="product-rating">
                        <div class="stars">${generateStars(product.rating)}</div>
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-condition">${conditionText} ${condition}</div>
                    <button class="btn-primary" onclick="addToCart(${product.id})">${addToCartText}</button>
                </div>
            </div>
        `;
    }).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Simulate adding to cart
        showNotification(`تم إضافة ${product.title} إلى السلة`);
    }
}

// Tracking Functions
function trackShipment() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const resultDiv = document.getElementById('trackingResult');
    
    if (!trackingNumber) {
        showNotification('يرجى إدخال رقم التتبع');
        return;
    }
    
    // Simulate tracking
    resultDiv.innerHTML = '<div class="loading"></div><p>جاري البحث...</p>';
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div class="tracking-info">
                <h3>معلومات الشحنة: ${trackingNumber}</h3>
                <div class="tracking-timeline">
                    <div class="timeline-item completed">
                        <div class="timeline-icon"><i class="fas fa-check"></i></div>
                        <div class="timeline-content">
                            <h4>تم استلام الطلب</h4>
                            <p>15 يناير 2024 - 10:30 ص</p>
                        </div>
                    </div>
                    <div class="timeline-item completed">
                        <div class="timeline-icon"><i class="fas fa-box"></i></div>
                        <div class="timeline-content">
                            <h4>تم تحضير الشحنة</h4>
                            <p>16 يناير 2024 - 2:15 م</p>
                        </div>
                    </div>
                    <div class="timeline-item active">
                        <div class="timeline-icon"><i class="fas fa-truck"></i></div>
                        <div class="timeline-content">
                            <h4>في الطريق للتسليم</h4>
                            <p>17 يناير 2024 - 9:00 ص</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><i class="fas fa-home"></i></div>
                        <div class="timeline-content">
                            <h4>تم التسليم</h4>
                            <p>متوقع: 18 يناير 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }, 2000);
}

// Impact Calculator
function calculateImpact() {
    const returnedItems = parseInt(document.getElementById('returnedItems').value) || 0;
    const productType = document.getElementById('productType').value;
    
    if (returnedItems === 0) {
        showNotification('يرجى إدخال عدد المنتجات');
        return;
    }
    
    // Impact factors per product type
    const impactFactors = {
        electronics: { carbon: 15, waste: 2.5, water: 100 },
        clothing: { carbon: 8, waste: 1.2, water: 200 },
        furniture: { carbon: 25, waste: 5, water: 50 },
        books: { carbon: 2, waste: 0.5, water: 20 }
    };
    
    const factors = impactFactors[productType];
    const carbonSaved = (returnedItems * factors.carbon).toFixed(1);
    const wasteAvoided = (returnedItems * factors.waste).toFixed(1);
    const waterSaved = (returnedItems * factors.water).toFixed(0);
    
    // Animate the results
    animateValue('carbonSaved', 0, carbonSaved, 1000);
    animateValue('wasteAvoided', 0, wasteAvoided, 1000);
    animateValue('waterSaved', 0, waterSaved, 1000);
}

function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startTime = performance.now();
    const endValue = parseFloat(end);
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (endValue - start) * progress;
        
        element.textContent = current.toFixed(1);
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

// Education Content
function loadEducationContent() {
    loadArticles();
    loadVideos();
    loadGuides();
}

function loadArticles() {
    const grid = document.querySelector('#articles .articles-grid');
    if (!grid) return;
    
    grid.innerHTML = sampleArticles.map(article => {
        const title = currentLanguage === 'en' ? article.titleEn : article.title;
        const excerpt = currentLanguage === 'en' ? article.excerptEn : article.excerpt;
        const readTime = currentLanguage === 'en' ? article.readTimeEn : article.readTime;
        const readMoreText = currentLanguage === 'en' ? 'Read More' : 'اقرأ المزيد';
        
        return `
            <div class="article-card">
                <div class="article-image">
                    <img src="${article.image}" alt="${title}">
                </div>
                <div class="article-content">
                    <h3>${title}</h3>
                    <p>${excerpt}</p>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar"></i> ${article.date}</span>
                        <span><i class="fas fa-clock"></i> ${readTime}</span>
                    </div>
                    <button class="btn-primary">${readMoreText}</button>
                </div>
            </div>
        `;
    }).join('');
}

function loadVideos() {
    const grid = document.querySelector('#videos .videos-grid');
    if (!grid) return;
    
    grid.innerHTML = sampleVideos.map(video => {
        const title = currentLanguage === 'en' ? video.titleEn : video.title;
        const viewsText = currentLanguage === 'en' ? 'views' : 'مشاهدة';
        
        return `
            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${title}">
                    <div class="play-button"><i class="fas fa-play"></i></div>
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <h3>${title}</h3>
                    <p><i class="fas fa-eye"></i> ${video.views} ${viewsText}</p>
                </div>
            </div>
        `;
    }).join('');
}

function loadGuides() {
    const grid = document.querySelector('#guides .guides-grid');
    if (!grid) return;
    
    grid.innerHTML = sampleGuides.map(guide => {
        const title = currentLanguage === 'en' ? guide.titleEn : guide.title;
        const description = currentLanguage === 'en' ? guide.descriptionEn : guide.description;
        const stepsText = currentLanguage === 'en' ? 'steps' : 'خطوات';
        const startText = currentLanguage === 'en' ? 'Start Guide' : 'ابدأ الدليل';
        
        return `
            <div class="guide-card">
                <div class="guide-icon">
                    <i class="${guide.icon}"></i>
                </div>
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="guide-steps">
                    <i class="fas fa-list"></i>
                    <span>${guide.steps} ${stepsText}</span>
                </div>
                <button class="btn-primary">${startText}</button>
            </div>
        `;
    }).join('');
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Charts
function initializeCharts() {
    // Returns Chart
    const returnsCtx = document.getElementById('returnsChart');
    if (returnsCtx) {
        charts.returns = new Chart(returnsCtx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
                datasets: [{
                    label: 'المرتجعات',
                    data: [120, 190, 300, 500, 200, 300],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Trends Chart
    const trendsCtx = document.getElementById('trendsChart');
    if (trendsCtx) {
        charts.trends = new Chart(trendsCtx, {
            type: 'bar',
            data: {
                labels: ['إلكترونيات', 'ملابس', 'كتب', 'أثاث'],
                datasets: [{
                    label: 'المبيعات',
                    data: [65, 59, 80, 81],
                    backgroundColor: [
                        '#4CAF50',
                        '#2196F3',
                        '#FF9800',
                        '#9C27B0'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Predictive Chart
    const predictiveCtx = document.getElementById('predictiveChart');
    if (predictiveCtx) {
        charts.predictive = new Chart(predictiveCtx, {
            type: 'doughnut',
            data: {
                labels: ['إعادة بيع', 'إعادة تدوير', 'إصلاح'],
                datasets: [{
                    data: [60, 30, 10],
                    backgroundColor: [
                        '#4CAF50',
                        '#2196F3',
                        '#FF9800'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}

// Interactive Map
function initializeMap() {
    const mapContainer = document.getElementById('interactiveMap');
    if (!mapContainer) return;
    
    // Simple map simulation
    mapContainer.innerHTML = `
        <div class="map-markers">
            <div class="marker pickup" style="top: 30%; left: 40%;" title="مركز استلام الرياض"></div>
            <div class="marker pickup" style="top: 60%; left: 20%;" title="مركز استلام جدة"></div>
            <div class="marker recycling" style="top: 45%; left: 60%;" title="مركز إعادة تدوير الدمام"></div>
            <div class="marker recycling" style="top: 70%; left: 50%;" title="مركز إعادة تدوير الطائف"></div>
        </div>
        <div class="coverage-area"></div>
    `;
}

// Language Toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    if (currentLanguage === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        updateLanguageContent('en');
    } else {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        updateLanguageContent('ar');
    }
    
    // Refresh displayed content
    displayProducts(products);
    loadArticles();
    loadVideos();
    loadGuides();
}

function updateLanguageContent(lang) {
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'ar' ? 'EN' : 'ع';
    }
    
    // Update navigation
    const navItems = {
        'ar': {
            'home': 'الرئيسية',
            'services': 'خدماتنا',
            'tracking': 'تتبع الشحنات',
            'store': 'المتجر',
            'education': 'التعليم',
            'impact': 'التأثير البيئي',
            'login': 'تسجيل الدخول',
            'register': 'إنشاء حساب'
        },
        'en': {
            'home': 'Home',
            'services': 'Services',
            'tracking': 'Tracking',
            'store': 'Store',
            'education': 'Education',
            'impact': 'Environmental Impact',
            'login': 'Login',
            'register': 'Register'
        }
    };
    
    // Update navigation links
    Object.keys(navItems[lang]).forEach(key => {
        const element = document.querySelector(`[data-nav="${key}"]`);
        if (element) {
            element.textContent = navItems[lang][key];
        }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    if (heroTitle && heroSubtitle) {
        if (lang === 'en') {
            heroTitle.textContent = 'Transform Returns into Opportunities';
            heroSubtitle.textContent = 'The smart reverse logistics platform that turns product returns into environmental and economic value';
        } else {
            heroTitle.textContent = 'حوّل المرتجعات إلى فرص';
            heroSubtitle.textContent = 'منصة اللوجستيات العكسية الذكية التي تحول مرتجعات المنتجات إلى قيمة بيئية واقتصادية';
        }
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showDemo() {
    showNotification('العرض التوضيحي قريباً!');
}

function openService(service) {
    showNotification(`سيتم فتح صفحة ${service} قريباً`);
}

function initiateReturn() {
    showNotification('سيتم فتح نموذج الإرجاع قريباً');
}

function browseStore() {
    scrollToSection('store');
    hideDashboard();
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeMap, 1000);
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .dashboard-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .stat-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .stat-icon {
        width: 50px;
        height: 50px;
        background: #4CAF50;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
    }
    
    .stat-info h3 {
        margin: 0;
        font-size: 1.8rem;
        color: #333;
    }
    
    .stat-info p {
        margin: 0;
        color: #666;
        font-size: 0.9rem;
    }
    
    .recent-activity {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .activity-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .activity-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
    }
    
    .activity-item i {
        color: #4CAF50;
    }
    
    .activity-item small {
        margin-right: auto;
        color: #666;
    }
    
    .map-markers {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        border-radius: 15px;
    }
    
    .marker {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        animation: pulse 2s infinite;
    }
    
    .marker.pickup {
        background: #4CAF50;
    }
    
    .marker.recycling {
        background: #2196F3;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
        }
    }
    
    .tracking-timeline {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .timeline-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 8px;
        background: #f8f9fa;
    }
    
    .timeline-item.completed {
        background: #e8f5e8;
    }
    
    .timeline-item.active {
        background: #fff3e0;
        border: 2px solid #FF9800;
    }
    
    .timeline-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4CAF50;
        color: white;
    }
    
    .timeline-item.active .timeline-icon {
        background: #FF9800;
    }
`;
document.head.appendChild(style);