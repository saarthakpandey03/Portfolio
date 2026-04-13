/* ─────────────────────────────────────────────────────────────────
   constants.js
   Single source of truth for all portfolio content.
   Edit here — nothing else changes.
───────────────────────────────────────────────────────────────── */

export const TYPEWRITER_WORDS = [
  'Full Stack Developer',
  'React Enthusiast',
  'Backend Engineer',
  'Problem Solver',
]

export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Achievements', 'Connect']

/* ── Skill categories ─────────────────────────────────────────── */
export const SKILL_CATEGORIES = [
  {
    icon: '🔤',
    label: 'Languages',
    badges: [
      { name: 'JavaScript', lv: 'Intermediate',   c: '#e34f26', g: 'rgba(227,79,38,.10)',   s: 'rgba(227,79,38,.22)' },
      { name: 'C++',        lv: 'Advanced',      c: '#00599c', g: 'rgba(0,89,156,.10)',    s: 'rgba(0,89,156,.22)' },
      { name: 'Python',     lv: 'Intermediate',  c: '#3776ab', g: 'rgba(55,118,171,.10)',  s: 'rgba(55,118,171,.22)' },
    ],
  },
  {
    icon: '🎨',
    label: 'Frontend',
    badges: [
      { name: 'React',    lv: 'Intermediate', c: '#61dafb', g: 'rgba(97,218,251,.10)',  s: 'rgba(97,218,251,.22)' },
      { name: 'HTML5',    lv: 'Advanced',   c: '#e34f26', g: 'rgba(227,79,38,.10)',   s: 'rgba(227,79,38,.22)' },
      { name: 'CSS3',     lv: 'Advanced', c: '#1572b6', g: 'rgba(21,114,182,.10)',  s: 'rgba(21,114,182,.22)' },
      { name: 'Tailwind', lv: 'Advanced', c: '#06b6d4', g: 'rgba(6,182,212,.10)',   s: 'rgba(6,182,212,.22)' },
    ],
  },
  {
    icon: '⚙️',
    label: 'Backend',
    badges: [
      { name: 'Node.js', lv: 'Intermediate',     c: '#68a063', g: 'rgba(104,160,99,.10)',  s: 'rgba(104,160,99,.22)' },
      { name: 'Express', lv: 'Intermediate',     c: '#888',    g: 'rgba(136,136,136,.10)', s: 'rgba(136,136,136,.22)', dot: '#888' },
      { name: 'Django',  lv: 'Intermediate', c: '#44b78b', g: 'rgba(68,183,139,.10)',  s: 'rgba(68,183,139,.22)', dot: '#44b78b' },
    ],
  },
  {
    icon: '🗄️',
    label: 'Database',
    badges: [
      { name: 'MongoDB', lv: 'Intermediate',     c: '#4db33d', g: 'rgba(77,179,61,.10)',  s: 'rgba(77,179,61,.22)' },
      { name: 'MySQL',   lv: 'Intermediate', c: '#4479a1', g: 'rgba(68,121,161,.10)', s: 'rgba(68,121,161,.22)' },
    ],
  },
  {
    icon: '🛠️',
    label: 'Tools',
    badges: [
      { name: 'Git',        c: '#f05032', g: 'rgba(240,80,50,.10)',   s: 'rgba(240,80,50,.22)' },
      { name: 'GitHub',     c: '#6e40c9', g: 'rgba(110,64,201,.10)',  s: 'rgba(110,64,201,.22)', dot: '#6e40c9' },
      { name: 'Postman',    c: '#ff6c37', g: 'rgba(255,108,55,.10)',  s: 'rgba(255,108,55,.22)' },
      { name: 'REST APIs',  c: '#4f9eff', g: 'rgba(79,158,255,.10)',  s: 'rgba(79,158,255,.22)' },
      { name: 'JWT Auth',   c: '#a855f7', g: 'rgba(168,85,247,.10)',  s: 'rgba(168,85,247,.22)' },
      { name: 'WebSockets', c: '#22d3ee', g: 'rgba(34,211,238,.10)',  s: 'rgba(34,211,238,.22)' },
      { name: 'UI/UX',      c: '#ff3d78', g: 'rgba(255,61,120,.10)',  s: 'rgba(255,61,120,.22)' },
    ],
  },
]

export const SKILL_BARS = [
  { name: 'JavaScript / React', pct: 78, bg: 'linear-gradient(90deg,#f7df1e,#61dafb)' },
  { name: 'Node.js / Express',  pct: 72, bg: 'linear-gradient(90deg,#68a063,#4f9eff)' },
  { name: 'MongoDB / MySQL',    pct: 70, bg: 'linear-gradient(90deg,#4db33d,#4479a1)' },
  { name: 'Python / Django',    pct: 72, bg: 'linear-gradient(90deg,#3776ab,#44b78b)' },
  { name: 'C++ / DSA',          pct: 85, bg: 'linear-gradient(90deg,#00599c,#a855f7)' },
  { name: 'UI/UX Design',       pct: 70, bg: 'linear-gradient(90deg,#ff3d78,#a855f7)' },
]

export const LEARNING_BADGES = [
  { name: 'TypeScript', c: '#ff3d78', g: 'rgba(255,61,120,.10)', s: 'rgba(255,61,120,.22)' },
  { name: 'Docker',     c: '#4f9eff', g: 'rgba(79,158,255,.10)', s: 'rgba(79,158,255,.22)' },
  { name: 'AWS',        c: '#a855f7', g: 'rgba(168,85,247,.10)', s: 'rgba(168,85,247,.22)' },
]

export const FOCUS_AREAS = [
  { icon: '🌐', title: 'Full Stack Web Dev',        sub: 'React + Node + MongoDB' },
  { icon: '⚡', title: 'Real-Time Systems',          sub: 'WebSockets + Django Channels' },
  { icon: '🏆', title: 'Competitive Programming',   sub: 'DSA · 400+ LeetCode' },
]

/* ── Projects ─────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    id: 'chat',
    cat: '🔴 Real-Time Application',
    num: '01',
    numBg: 'linear-gradient(135deg,var(--a),var(--a2))',
    title: 'Real-Time Chat App',
    desc: 'High-performance messaging platform using Django Channels + WebSockets.',
    pills: [['Django','pp1'],['WebSockets','pp2'],['Python','pp1'],['Redis','pp3'],['Channels','pp2']],
    feats: [
      '500+ concurrent users supported',
      'Real-time message sync via WebSocket',
      'Live user presence & status tracking',
      'Persistent timestamped message history',
    ],
    btnBg: 'linear-gradient(135deg,var(--a),var(--a2))',

    // ✅ ADD THESE
    github: "https://github.com/saarthakpandey03/Real-Time-Chat",
    live: "",

    vg1: 'rgba(79,158,255,.12)',
    vg2: 'rgba(168,85,247,.08)',
    chip1: '⚡ 500+ Concurrent Users',
    chip2: '🟢 WebSocket Live',
    termTitle: 'chat_server.py — Django Channels',
    reversed: false,
  },

  {
    id: 'futureearth',
    cat: '🟣 EdTech Platform',
    num: '02',
    numBg: 'linear-gradient(135deg,var(--a2),var(--a3))',
    title: 'Future Earth',
    desc: 'Gamified e-learning platform with XP systems and rewards.',
    pills: [['React','pp1'],['Node.js','pp2'],['MongoDB','pp3'],['Express','pp1'],['JWT','pp2']],
    feats: [
      'JWT-based secure authentication',
      'Interactive quiz engine with XP scoring',
      'Level-up rewards & badge system',
      'Progress tracking & leaderboard',
    ],
    btnBg: 'linear-gradient(135deg,var(--a2),var(--a3))',

    github: "https://github.com/saarthakpandey03/Game_Zone/tree/main/smooth-cart-shop-main",
    live: " https://saarthakpandey03.github.io/Game_Zone/",

    vg1: 'rgba(168,85,247,.12)',
    vg2: 'rgba(255,61,120,.08)',
    chip1: '🎮 Gamified Learning',
    chip2: '🔐 JWT Auth',
    termTitle: 'App.jsx — Future Earth Platform',
    reversed: true,
  },
]

/* ── Achievements ─────────────────────────────────────────────── */
export const ACHIEVEMENTS = [
  { icon: '💻', target: 400, suffix: '+', label: 'LeetCode Problems Solved',   ag: 'rgba(79,158,255,.12)' },
  { icon: '🚀', target: 500, suffix: '+', label: 'Concurrent Users Supported', ag: 'rgba(168,85,247,.12)' },
  { icon: '⚡', target: 2,   suffix: '+', label: 'Full-Stack Projects Shipped', ag: 'rgba(255,61,120,.12)' },
]

/* ── Social links ─────────────────────────────────────────────── */
export const SOCIAL_LINKS = [
  {
    id: 'github',
    href:   'https://github.com/saarthakpandey03',
    label:  'GitHub',
    handle: 'saarthakpandey03',
    c: '#6e40c9', g: 'rgba(110,64,201,.10)', s: 'rgba(110,64,201,.24)',
    iconPath: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z',
  },
  {
    id: 'linkedin',
    href:   'https://linkedin.com/in/saarthak-pandey-a24118330',
    label:  'LinkedIn',
    handle: 'saarthak-pandey',
    c: '#0a66c2', g: 'rgba(10,102,194,.10)', s: 'rgba(10,102,194,.24)',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    id: 'leetcode',
    href:   'https://leetcode.com/saarthakpandey03',
    label:  'LeetCode',
    handle: 'saarthakpandey03',
    c: '#ffa116', g: 'rgba(255,161,22,.10)', s: 'rgba(255,161,22,.24)',
    iconPath: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
  },
]

/* ── About quick links ────────────────────────────────────────── */
export const QUICK_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/saarthakpandey03',                 iconType: 'github' },
  { label: 'LeetCode', href: 'https://leetcode.com/saarthakpandey03',               iconType: 'leetcode' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saarthak-pandey-a24118330',   iconType: 'linkedin' },
  { label: 'Email',    href: 'mailto:saarthak3206@gmail.com',                        iconType: 'email' },
]

/* ── Resume text ──────────────────────────────────────────────── */
export const RESUME_TEXT = `SAARTHAK PANDEY — FULL STACK DEVELOPER
=========================================
GitHub   : github.com/saarthakpandey03
LeetCode : leetcode.com/saarthakpandey03
LinkedIn : linkedin.com/in/saarthak-pandey-a24118330
Email    : saarthak3206@gmail.com

SUMMARY
Full Stack Developer skilled in building scalable web applications
using React, Node.js, and databases. Experienced in frontend,
backend, and real-time systems.

EDUCATION
B.Tech CSE — IMS Engineering College, Ghaziabad (2023–2027)

SKILLS
Languages : JavaScript, C++, Python
Frontend  : React, HTML5, CSS3, Tailwind CSS
Backend   : Node.js, Express, Django
Database  : MongoDB, MySQL
Tools     : Git, GitHub, Postman, REST APIs, JWT Auth, WebSockets

PROJECTS
1. Real-Time Chat App (Django + WebSockets + Redis)
   • 500+ concurrent users
   • Real-time sync, user presence, timestamps

2. Future Earth (React + Node + MongoDB + JWT)
   • Gamified quizzes, XP/levels, rewards system
   • Secure JWT authentication

ACHIEVEMENTS
• 400+ LeetCode problems solved
• 500+ concurrent users on real-time system
• 2+ full-stack projects shipped
=========================================`
