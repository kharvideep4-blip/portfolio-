// ============================================================
// 1. FIREBASE INITIALIZATION
// ============================================================
const firebaseConfig = {
    apiKey: "AIzaSyAkOH0RQOnURsMSZ1-83tKyhwsnwgddb9s",
    authDomain: "portfolio-f5f19.firebaseapp.com",
    projectId: "portfolio-f5f19",
    storageBucket: "portfolio-f5f19.firebasestorage.app",
    messagingSenderId: "458121143598",
    appId: "1:458121143598:web:a52041f99f530fb5ab86bf",
    measurementId: "G-M09G7NXJ63"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================================================
// 2. TYPING EFFECT
// ============================================================
const roles = [
    'Cloud & AI Enthusiast',
    'Full Stack Developer',
    'Next.js · React · TypeScript',
    'Serverless Architect'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeRole() {
    const current = roles[roleIndex];
    if (!isDeleting) {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeRole, 2000);
            return;
        }
        setTimeout(typeRole, 70);
    } else {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 400);
            return;
        }
        setTimeout(typeRole, 30);
    }
}
typeRole();

// ============================================================
// 3. DATA (AI Mock Interview Platform FIRST)
// ============================================================
const skillsData = [
    { name: 'HTML5', icon: 'fab fa-html5', cat: 'Frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', cat: 'Frontend' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', cat: 'Frontend' },
    { name: 'JavaScript', icon: 'fab fa-js', cat: 'Frontend' },
    { name: 'React', icon: 'fab fa-react', cat: 'Frontend' },
    { name: 'TypeScript', icon: 'fas fa-code', cat: 'Frontend' },
    { name: 'Next.js', icon: 'fas fa-server', cat: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', cat: 'Frontend' },
    { name: 'Neon (PostgreSQL)', icon: 'fas fa-database', cat: 'Backend' },
    { name: 'Firebase', icon: 'fas fa-fire', cat: 'Backend' },
    { name: 'Vercel', icon: 'fas fa-cloud-upload-alt', cat: 'Deployment' },
];

const experienceData = [
    {
        title: 'IT Technical Assistant',
        company: 'The CyberTech Data Recovery',
        date: '03/2026 – Present',
        desc: 'Managing the company\'s website, explaining software flow to customers, website research, laptop troubleshooting, and developing websites.'
    },
    {
        title: 'Field Service Engineer',
        company: 'Jetking Pvt Ltd',
        date: '2023 – 2024',
        desc: 'On-site technical support, hardware installation & repair, preventive maintenance, service documentation, and customer coordination.'
    }
];

const educationData = [
    {
        title: 'Bachelor of Computer Applications (BCA)',
        school: 'Tilak Maharashtra Vidyapeeth',
        date: '2021 – 2024'
    }
];

// ===== PROJECTS DATA =====
const projectsData = [
    // ===== 1st: AI Mock Interview Platform (WIP) =====
    {
        title: 'AI Mock Interview Platform',
        desc: 'An AI-powered mock interview platform that simulates real technical and HR interviews using Artificial Intelligence. Candidates answer questions using voice or text, while AI evaluates their performance in real-time.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Firebase'],
        category: 'fullstack',
        links: [{ label: 'Coming Soon', url: '#' }],
        overview: 'The AI Mock Interview Platform simulates real technical and HR interviews using Artificial Intelligence. Candidates answer questions using voice or text, while AI evaluates their performance.',
        features: [
            'Login System',
            'Resume Upload',
            'Job Role Selection',
            'AI Interview Questions',
            'Voice Recognition',
            'Speech-to-Text',
            'Performance Score',
            'Communication Analysis',
            'Confidence Rating',
            'Feedback Report',
            'AI Suggestions'
        ],
        aiCapabilities: [
            'Dynamic Question Generation',
            'Answer Evaluation',
            'Communication Analysis',
            'Technical Accuracy Assessment',
            'Personalized Learning Suggestions'
        ],
        additionalFeatures: [
            'Interview History',
            'Dashboard',
            'Progress Tracking',
            'Certificate Generation'
        ],
        challenge: 'Building a reliable AI engine that can evaluate responses in real-time with high accuracy across multiple domains and interview types.',
        image: 'assets/project-ai-interview.jpg',
        status: 'wip'
    },
    // ===== 2nd: The CyberTech =====
    {
        title: 'The CyberTech — Data Recovery & Security',
        desc: 'A professional platform for data recovery, ransomware recovery, data migration, cyber security, and digital forensics services. Built with a clean, responsive UI.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        category: 'frontend',
        links: [{ label: 'Live Site', url: 'https://thecybertech.in/' }],
        features: ['Responsive design', 'Service showcase', 'Contact form', 'SEO optimized'],
        challenge: 'Ensuring fast load times while displaying large amounts of service data.',
        image: 'assets/project-cybertech.jpg',
        status: 'ongoing'
    },
    // ===== 3rd: SEWAI =====
    {
        title: 'SEWAI — Smart Temple Management System',
        desc: 'A comprehensive temple management platform with governance, ritual management, financial tracking, legal compliance, community engagement, and analytics.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Firebase'],
        category: 'fullstack',
        links: [{ label: 'Live Demo', url: 'https://sewai-website-dh6s.vercel.app/' }],
        features: ['User authentication', 'Ritual scheduling', 'Donation tracking', 'Analytics dashboard'],
        challenge: 'Managing complex relational data in a NoSQL environment.',
        image: 'assets/project-sewai.jpg',
        status: 'ongoing'
    },
    // ===== 4th: Exam Portal =====
    {
        title: 'Exam Portal Web Application',
        desc: 'Full-featured exam management system with user authentication, exam creation, and result processing. Integrated with AI for smart analytics.',
        tech: ['Next.js', 'TypeScript', 'AI Integration'],
        category: 'fullstack',
        links: [{ label: 'Live Demo', url: 'https://frontend-iota-sooty-98.vercel.app/' }],
        features: ['Exam creation', 'Auto-grading', 'AI-powered analytics', 'Role-based access'],
        challenge: 'Implementing real-time exam monitoring and auto-grading algorithms.',
        image: 'assets/project-exam.jpg',
        status: 'completed'
    },
    // ===== 5th: Note Manager =====
    {
        title: 'AI-Assisted Note Manager',
        desc: 'Modern note-taking app with full CRUD, serverless PostgreSQL (Neon), and a neon-styled UI with antigravity animations. Built with Next.js, TypeScript, and Tailwind.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Neon', 'Vercel'],
        category: 'fullstack',
        links: [{ label: 'Live Demo', url: 'https://note-manager-eight-gamma.vercel.app/' }],
        features: ['CRUD operations', 'Rich text editor', 'Real-time sync', 'Neon database'],
        challenge: 'Ensuring smooth animations while maintaining performance.',
        image: 'assets/project-note.jpg',
        status: 'completed'
    }
];

const coursesData = [
    { title: 'Full Stack Web Development', org: 'Skillitup Academy', date: '07/2024 – 02/2026', icon: 'fas fa-laptop-code' },
    { title: 'Computer Repairing', org: 'Jetking Pvt Ltd', date: '03/2023 – 06/2023', icon: 'fas fa-tools' },
    { title: 'GCC-TBC 40 wpm', org: 'National Institute', date: '2023', icon: 'fas fa-keyboard' }
];

// ============================================================
// 4. RENDER FUNCTIONS
// ============================================================
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skillsData.map(s => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="skill-card fade-up">
                <i class="${s.icon}"></i>
                <div class="skill-name">${s.name}</div>
                <div class="skill-cat">${s.cat}</div>
            </div>
        </div>
    `).join('');
}

function renderTimeline(containerId, items, titleKey, subtitleKey, dateKey, descKey) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <div class="timeline-item fade-up">
            <div class="head">
                <h3>${item[titleKey]}</h3>
                <span class="date">${item[dateKey]}</span>
            </div>
            ${item[subtitleKey] ? `<div class="sub">${item[subtitleKey]}</div>` : ''}
            ${item[descKey] ? `<p>${item[descKey]}</p>` : ''}
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projectsData.map((p, idx) => {
        let statusBadge = '';
        if (p.status === 'wip') {
            statusBadge = `
                <div class="project-status-badge wip">
                    <i class="fas fa-spinner fa-spin"></i> Work in Progress
                </div>
            `;
        } else if (p.status === 'ongoing') {
            statusBadge = `
                <div class="project-status-badge ongoing">
                    <i class="fas fa-sync fa-spin"></i> Ongoing
                </div>
            `;
        }

        const imageHtml = p.image ? 
            `<img src="${p.image}" alt="${p.title}" />` :
            `<div class="no-image"><i class="fas fa-code"></i></div>`;

        return `
        <div class="col-md-6 project-item fade-up">
            <div class="project-card ${p.status === 'wip' ? 'wip-card' : ''}">
                ${statusBadge}
                <div class="project-image-wrap">
                    ${imageHtml}
                    ${p.status === 'wip' ? `
                        <div class="wip-overlay">
                            <div class="wip-loader">
                                <div class="spinner"></div>
                                <span>Building...</span>
                            </div>
                        </div>
                    ` : ''}
                </div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="links d-flex flex-wrap gap-2">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank"><i class="fas fa-arrow-right"></i> ${l.label}</a>`).join('')}
                    <button class="btn-detail" data-index="${idx}" data-bs-toggle="modal" data-bs-target="#projectModal">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `}).join('');

    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            openProjectModal(idx);
        });
    });
}

function openProjectModal(index) {
    const p = projectsData[index];
    document.getElementById('modalTitle').textContent = p.title;
    const body = document.getElementById('modalBody');
    
    let statusBadge = '';
    if (p.status === 'wip') {
        statusBadge = `<span class="badge bg-warning text-dark mb-2"><i class="fas fa-spinner fa-spin"></i> Work in Progress</span>`;
    } else if (p.status === 'ongoing') {
        statusBadge = `<span class="badge bg-info mb-2"><i class="fas fa-sync fa-spin"></i> Ongoing</span>`;
    }

    const hasAICapabilities = p.aiCapabilities && p.aiCapabilities.length > 0;
    const hasAdditional = p.additionalFeatures && p.additionalFeatures.length > 0;
    const hasOverview = p.overview && p.overview.length > 0;

    let html = `
        ${statusBadge}
        ${hasOverview ? `<h6 class="mt-2">Overview</h6><p>${p.overview}</p>` : `<p>${p.desc}</p>`}
        <div class="modal-tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    `;

    html += `<h6 class="mt-3">Features</h6><ul class="modal-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>`;

    if (hasAICapabilities) {
        html += `<h6 class="mt-3">AI Capabilities</h6><ul class="modal-features">${p.aiCapabilities.map(f => `<li>${f}</li>`).join('')}</ul>`;
    }

    if (hasAdditional) {
        html += `<h6 class="mt-3">Additional Features</h6><ul class="modal-features">${p.additionalFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`;
    }

    if (p.challenge) {
        html += `<h6 class="mt-3">Challenge</h6><p>${p.challenge}</p>`;
    }

    if (p.image) {
        html += `<img src="${p.image}" alt="${p.title}" class="img-fluid mt-3 rounded" />`;
    }

    body.innerHTML = html;

    const link = document.getElementById('modalLiveLink');
    if (p.links.length && p.links[0].url !== '#') {
        link.href = p.links[0].url;
        link.style.display = 'inline-block';
        link.textContent = 'Live Demo';
    } else {
        link.style.display = 'none';
    }
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = coursesData.map(c => `
        <div class="col-sm-6 col-md-4">
            <div class="course-item fade-up">
                <i class="${c.icon}"></i>
                <h4>${c.title}</h4>
                <div class="org">${c.org}</div>
                <div class="date">${c.date}</div>
            </div>
        </div>
    `).join('');
}

// ============================================================
// 5. SCROLL ANIMATIONS
// ============================================================
function observeFadeElements() {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
}

// ============================================================
// 6. DARK / LIGHT MODE
// ============================================================
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = toggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-bs-theme', currentTheme);
    icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

    toggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    });
}

// ============================================================
// 7. CONTACT FORM → FIREBASE
// ============================================================
function setupContactForm() {
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('⚠️ Please fill in all fields.');
            return;
        }
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        try {
            await db.collection('contacts').add({
                name, email, message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                userAgent: navigator.userAgent,
                page: window.location.href
            });
            alert(`✅ Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            this.reset();
        } catch (error) {
            console.error('Firebase error:', error);
            alert('❌ Something went wrong. Please try again later.');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}

// ============================================================
// 8. NAVBAR SCROLL
// ============================================================
function setupNavbarScroll() {
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// ============================================================
// 9. INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderTimeline('experienceList', experienceData, 'title', 'company', 'date', 'desc');
    renderTimeline('educationList', educationData, 'title', 'school', 'date', null);
    renderProjects();
    renderCourses();
    setupThemeToggle();
    setupContactForm();
    setupNavbarScroll();
    setTimeout(observeFadeElements, 300);
});