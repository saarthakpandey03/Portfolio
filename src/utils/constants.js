/* ─────────────────────────────────────────────────────────────────
   constants.js
   Single source of truth for all portfolio content.
   Edit here — nothing else changes.
───────────────────────────────────────────────────────────────── */

export const TYPEWRITER_WORDS = [
  'Full Stack Developer',
  'Generative AI Developer',
  'React & Express.js Developer',
  'RAG Application Builder',
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
    { name: 'Node.js',     lv: 'Intermediate', c: '#68a063', g: 'rgba(104,160,99,.10)', s: 'rgba(104,160,99,.22)' },
    { name: 'Express.js',  lv: 'Intermediate', c: '#888',    g: 'rgba(136,136,136,.10)', s: 'rgba(136,136,136,.22)' },
    { name: 'REST APIs',   lv: 'Intermediate', c: '#4f9eff', g: 'rgba(79,158,255,.10)', s: 'rgba(79,158,255,.22)' },
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
  icon: '🤖',
  label: 'GenAI',
  badges: [
    { name: 'LangChain',          lv: 'Intermediate', c: '#10b981', g: 'rgba(16,185,129,.10)', s: 'rgba(16,185,129,.22)' },
    { name: 'RAG',                lv: 'Intermediate', c: '#6366f1', g: 'rgba(99,102,241,.10)', s: 'rgba(99,102,241,.22)' },
    { name: 'Ollama',             lv: 'Intermediate', c: '#f97316', g: 'rgba(249,115,22,.10)', s: 'rgba(249,115,22,.22)' },
    { name: 'Prompt Engineering', lv: 'Intermediate', c: '#ec4899', g: 'rgba(236,72,153,.10)', s: 'rgba(236,72,153,.22)' },
  ],
},
{
  icon: '🛠️',
  label: 'Tools',
  badges: [
    { name: 'Git',       c: '#f05032', g: 'rgba(240,80,50,.10)',  s: 'rgba(240,80,50,.22)' },
    { name: 'GitHub',    c: '#6e40c9', g: 'rgba(110,64,201,.10)', s: 'rgba(110,64,201,.22)' },
    { name: 'Postman',   c: '#ff6c37', g: 'rgba(255,108,55,.10)', s: 'rgba(255,108,55,.22)' },
    { name: 'JWT Auth',  c: '#a855f7', g: 'rgba(168,85,247,.10)', s: 'rgba(168,85,247,.22)' },
    { name: 'VS Code',   c: '#007acc', g: 'rgba(0,122,204,.10)',  s: 'rgba(0,122,204,.22)' },
  ],
},
]

export const SKILL_BARS = [
  { name: 'JavaScript / React',      pct: 80, bg: 'linear-gradient(90deg,#f7df1e,#61dafb)' },
  { name: 'Node.js / Express.js',    pct: 72, bg: 'linear-gradient(90deg,#68a063,#4f9eff)' },
  { name: 'MongoDB / MySQL',         pct: 70, bg: 'linear-gradient(90deg,#4db33d,#4479a1)' },
  { name: 'Python / GenAI',          pct: 75, bg: 'linear-gradient(90deg,#3776ab,#10b981)' },
  { name: 'LangChain / RAG',         pct: 72, bg: 'linear-gradient(90deg,#6366f1,#ec4899)' },
  { name: 'C++ / DSA',              pct: 85, bg: 'linear-gradient(90deg,#00599c,#a855f7)' },
]

export const LEARNING_BADGES = [
  { name: 'TypeScript', c: '#3178c6', g: 'rgba(49,120,198,.10)', s: 'rgba(49,120,198,.22)' },
  { name: 'Docker',     c: '#2496ed', g: 'rgba(36,150,237,.10)', s: 'rgba(36,150,237,.22)' },
  { name: 'FastAPI',    c: '#009688', g: 'rgba(0,150,136,.10)',  s: 'rgba(0,150,136,.22)' },
]

export const FOCUS_AREAS = [
  { icon: '🚀', title: 'Full Stack Web Development', sub: 'React · Express.js · MongoDB' },

  { icon: '🧠', title: 'AI Application Development', sub: 'LangChain · RAG · LLMs' },

  { icon: '🏆', title: 'Data Structures & Algorithms', sub: '400+ LeetCode Problems Solved' },
]

/* ── Projects ─────────────────────────────────────────────────── */

export const PROJECTS = [
{
  id: 'axel',
  cat: '🤖 Generative AI',
  num: '01',
  numBg: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
  title: 'AXEL AI',
  desc: 'Agentic AI assistant that combines multi-source knowledge retrieval with intelligent reasoning to deliver context-aware answers from documents, web content, and other connected sources.',
  pills: [
    ['LangGraph','pp1'],
    ['LangChain','pp2'],
    ['RAG','pp3'],
    ['FastAPI','pp1'],
    ['LLM','pp2']
  ],
  feats: [
    'Multi-source knowledge ingestion and intelligent retrieval',
    'RAG pipeline for context-aware and grounded responses',
    'Agentic workflow for reasoning, routing, and task execution',
    'FastAPI backend with persistent conversation and workspace state',
  ],
  btnBg: 'linear-gradient(135deg,#6366f1,#8b5cf6)',

  github: "https://github.com/saarthakpandey03/AXEL",
  live: "",

  vg1: 'rgba(99,102,241,.12)',
  vg2: 'rgba(139,92,246,.08)',
  chip1: '🧠 Agentic AI Assistant',
  chip2: '🔎 Multi-Source RAG',
  termTitle: 'axel_agent.py',
  reversed: false,
},


{
  id: 'videomind',
  cat: '🎥 Generative AI',
  num: '02',
  numBg: 'linear-gradient(135deg,#f97316,#ec4899)',
  title: 'VideoMind AI',
  desc: 'AI-powered video assistant that analyzes YouTube videos, generates summaries, and answers questions using transcript-based RAG.',

  pills: [
    ['LangChain','pp1'],
    ['RAG','pp2'],
    ['Ollama','pp3'],
    ['Python','pp1'],
    ['FAISS','pp2']
  ],

  feats: [
    'Extracts and processes YouTube video transcripts',
    'Semantic search over video content using embeddings',
    'Context-aware video question answering',
    'AI-generated summaries and key insights',
  ],

  btnBg: 'linear-gradient(135deg,#f97316,#ec4899)',

  github: "YOUR_VIDEOMIND_GITHUB_LINK",
  live: "",

  vg1: 'rgba(249,115,22,.12)',
  vg2: 'rgba(236,72,153,.08)',

  chip1: '🎥 Video Analysis',
  chip2: '🧠 Transcript RAG',

  termTitle: 'videomind_rag.py',
  reversed: true,
},

  {
    id: 'tripgo',
    cat: '🟢 Full Stack Application',
    num: '03',
    numBg: 'linear-gradient(135deg,var(--a),var(--a2))',
    title: 'TripGo',
    desc: 'AI-powered travel planning platform for creating personalized trips and itineraries.',
    pills: [
      ['React','pp1'],
      ['Express.js','pp2'],
      ['MongoDB','pp3'],
      ['REST API','pp1'],
      ['AI','pp2']
    ],
    feats: [
      'AI-powered travel recommendations',
      'Trip itinerary planning and management',
      'REST APIs for seamless data handling',
      'Responsive and modern user interface',
    ],
    btnBg: 'linear-gradient(135deg,var(--a),var(--a2))',

    github: "https://github.com/saarthakpandey03/Trip-Go",
    live: "",

    vg1: 'rgba(79,158,255,.12)',
    vg2: 'rgba(168,85,247,.08)',
    chip1: '✈️ Smart Travel Planning',
    chip2: '🤖 AI Recommendations',
    termTitle: 'tripgo-server.js',
    reversed: false,
  },

  {
    id: 'futureearth',
    cat: '🟣 EdTech Platform',
    num: '04',
    numBg: 'linear-gradient(135deg,var(--a2),var(--a3))',
    title: 'Future Earth',
    desc: 'Gamified learning platform developed during Smart India Hackathon.',
    pills: [
      ['React','pp1'],
      ['Node.js','pp2'],
      ['MongoDB','pp3'],
      ['Express','pp1'],
      ['JWT','pp2']
    ],
    feats: [
      'JWT-based secure authentication',
      'Interactive quiz engine with XP scoring',
      'Level-up rewards and badge system',
      'Progress tracking and leaderboard',
    ],
    btnBg: 'linear-gradient(135deg,var(--a2),var(--a3))',

    github: "https://github.com/saarthakpandey03/Game_Zone/tree/main/smooth-cart-shop-main",
    live: "https://saarthakpandey03.github.io/Game_Zone/",

    vg1: 'rgba(168,85,247,.12)',
    vg2: 'rgba(255,61,120,.08)',
    chip1: '🎮 Gamified Learning',
    chip2: '🏆 SIH Team Project',
    termTitle: 'FutureEarth.jsx',
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
