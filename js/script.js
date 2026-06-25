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

// Initialize Firebase
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
let roleIndex = 0,
    charIndex = 0,
    isDeleting = false;
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
// 3. DATA (from resume)
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

const experienceData = [{
    title: 'IT Technical Assistant',
    company: 'The CyberTech Data Recovery',
    date: '03/2026 – Present',
    desc: 'Managing the company\'s website, explaining software flow to customers, website research, laptop troubleshooting, and developing websites.'
}, {
    title: 'Field Service Engineer',
    company: 'Jetking Pvt Ltd',
    date: '2023 – 2024',
    desc: 'On-site technical support, hardware installation & repair, preventive maintenance, service documentation, and customer coordination.'
}];

const educationData = [{
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'Tilak Maharashtra Vidyapeeth',
    date: '2021 – 2024'
}];

const projectsData = [{
    title: 'The CyberTech — Data Recovery & Security',
    desc: 'A professional platform for data recovery, ransomware recovery, data migration, cyber security, and digital forensics services. Built with a clean, responsive UI. (Ongoing)',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    links: [
        { label: 'Live Site', url: 'https://thecybertech.in/' }
    ]
}, {
    title: 'SEWAI — Smart Temple Management System',
    desc: 'A comprehensive temple management platform with governance, ritual management, financial tracking, legal compliance, community engagement, and analytics. (Ongoing)',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Firebase'],
    links: [
        { label: 'Live Demo', url: 'https://sewai-website-dh6s.vercel.app/' }
    ]
}, {
    title: 'Exam Portal Web Application',
    desc: 'Full-featured exam management system with user authentication, exam creation, and result processing. Integrated with AI for smart analytics.',
    tech: ['Next.js', 'TypeScript', 'AI Integration'],
    links: [
        { label: 'Live Demo', url: 'https://frontend-iota-sooty-98.vercel.app/' }
    ]
}, {
    title: 'AI-Assisted Note Manager',
    desc: 'Modern note-taking app with full CRUD, serverless PostgreSQL (Neon), and a neon-styled UI with antigravity animations. Built with Next.js, TypeScript, and Tailwind.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Neon', 'Vercel'],
    links: [
        { label: 'Live Demo', url: 'https://note-manager-eight-gamma.vercel.app/' },
    ]
}];

const coursesData = [{
    title: 'Full Stack Web Development',
    org: 'Skillitup Academy',
    date: '07/2024 – 02/2026',
    icon: 'fas fa-laptop-code'
}, {
    title: 'Computer Repairing',
    org: 'Jetking Pvt Ltd',
    date: '03/2023 – 06/2023',
    icon: 'fas fa-tools'
}, {
    title: 'GCC-TBC 40 wpm',
    org: 'National Institute',
    date: '2023',
    icon: 'fas fa-keyboard'
}];

// ============================================================
// 4. RENDER FUNCTIONS
// ============================================================
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skillsData.map(s => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="skill-card">
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
        <div class="timeline-item">
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
    grid.innerHTML = projectsData.map(p => `
        <div class="col-md-6">
            <div class="project-card">
                <div class="icon"><i class="fas fa-cube"></i></div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="links">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank"><i class="fas fa-arrow-right"></i> ${l.label}</a>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = coursesData.map(c => `
        <div class="col-sm-6 col-md-4">
            <div class="course-item">
                <i class="${c.icon}"></i>
                <h4>${c.title}</h4>
                <div class="org">${c.org}</div>
                <div class="date">${c.date}</div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderTimeline('experienceList', experienceData, 'title', 'company', 'date', 'desc');
    renderTimeline('educationList', educationData, 'title', 'school', 'date', null);
    renderProjects();
    renderCourses();
});

// ============================================================
// 5. NAVBAR SCROLL
// ============================================================
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ============================================================
// 6. CONTACT FORM → FIREBASE
// ============================================================
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('⚠️ Please fill in all fields.');
        return;
    }

    // Disable button to prevent double-submission
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
        // Save to Firestore
        await db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userAgent: navigator.userAgent,
            page: window.location.href
        });

        alert(`✅ Thank you, ${name}! Your message has been get to us. I'll get back to you soon.`);
        this.reset();
    } catch (error) {
        console.error('Firebase error:', error);
        alert('❌ Something went wrong. Please try again later.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});