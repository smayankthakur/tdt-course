const btn = document.getElementById('menuBtn');
const mob = document.getElementById('mobileNav');
btn.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
document.getElementById('yr').textContent = new Date().getFullYear();

/* generate twinkling starfield */
(function () {
    const box = document.getElementById('stars');
    if (!box) return;
    const n = window.innerWidth < 680 ? 26 : 48;
    let html = '';
    for (let i = 0; i < n; i++) {
        const x = Math.random() * 100, y = Math.random() * 100;
        const d = (2 + Math.random() * 4).toFixed(2), delay = (Math.random() * 4).toFixed(2);
        const s = (2 + Math.random() * 2).toFixed(1);
        html += `<i style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-duration:${d}s;animation-delay:${delay}s"></i>`;
    }
    box.innerHTML = html;
})();

/* staggered scroll-reveal */
(function () {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                if (el.closest('.grid')) {
                    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
                    el.style.animationDelay = (sibs.indexOf(el) * 0.12) + 's';
                }
                el.classList.add('in');
                io.unobserve(el);
            }
        });
    }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));
    setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 1600);
})();

/* ---------- Course detail modals ---------- */
const COURSES = {
    healwithin: {
        accent: '#2c9678', badge: 'Offline · Membership', price: '₹15,000',
        title: 'Heal WITHIN (Offline)',
        img: 'images/01_Heal_WITHIN.png',
        pay: 'https://rzp.io/rzp/JdMP80qp',
        form: 'https://forms.gle/ZX8m5pNGpKHrnUwY7',
        learn: [
            'Foundations of energy healing and chakra balancing',
            'Meditation and breathwork techniques for daily grounding',
            'Inner-child and shadow-work practices to release old emotional patterns',
            'Self-healing rituals you can continue long after the course ends',
            'How to build a sustainable, supportive healing routine within a like-minded group'
        ],
        need: [
            'An open mind and willingness to reflect and be present',
            'A journal for weekly notes and reflections',
            'Comfortable clothing for seated / floor-based practices',
            'Consistent weekly attendance — the sessions build on one another'
        ],
        info: '<b>Offline, in-person class</b> — held weekly every Sunday for <b>one year</b> as part of a membership. Venue to be confirmed.'
    },
    tarotworkshop: {
        accent: '#8b5cf6', badge: 'Workshop', price: '₹5,000',
        title: 'Tarot Workshop',
        img: 'images/02_Tarot_Workshop.png',
        pay: 'https://rzp.io/rzp/UsKBd1F',
        form: 'https://forms.gle/avdYDMycGPsmHoiq6',
        learn: [
            'The structure of a tarot deck: Major &amp; Minor Arcana explained simply',
            'How to shuffle, cut and draw cards with intention',
            'Reading your first 3-card spread with confidence',
            'Common beginner mistakes and how to avoid them',
            'Where to go next if you want to go deeper into tarot'
        ],
        need: [
            'No prior experience required — complete beginners welcome',
            'A tarot deck (any standard deck; recommendations shared before the session)',
            'A notebook and pen to jot down card meanings'
        ],
        info: 'A single-day, 2-hour introductory <b>workshop</b> — one-time session, no ongoing access.'
    },
    tarotBatchBeginAdv: {
        accent: '#e6c063', badge: 'Live Batch', price: '₹1,00,000',
        title: 'Tarot: Beginning to Advance',
        img: 'images/03_Tarot_Beginning_to_Advance.png',
        pay: 'https://rzp.io/rzp/fWD6L2a',
        form: 'https://forms.gle/XScdePbyh4YP7BiX6',
        learn: [
            'Complete Major &amp; Minor Arcana meanings and symbolism',
            'Card combinations, spreads and layouts for real-life questions',
            'Reversed cards and how to interpret them',
            'Reading for yourself vs. reading for others — ethics and boundaries',
            'Practical practice sessions, mock readings and live Q&amp;A',
            'Exam-based assessment to validate your skill'
        ],
        need: [
            'A tarot deck of your choice',
            'A notebook for practice notes',
            'A reliable internet connection for the live Fri / Sat / Sun sessions',
            'Willingness to practise readings between classes'
        ],
        info: '<b>Live, instructor-led batch</b> — 4 months, Fri &amp; Sat 8–10 PM and Sun 12–2 PM. Includes exams, practice, Q&amp;A and <b>1 year</b> of recorded video access.'
    },
    tarotPro: {
        accent: '#e6c063', badge: 'Live Batch', price: '₹1,00,000',
        title: 'Tarot Pro',
        img: 'images/04_Tarot_Pro.png',
        pay: 'https://rzp.io/rzp/uNgw2T4',
        form: 'https://forms.gle/eWUgVgoS7rHm1b2g7',
        learn: [
            'Advanced spreads for career, relationship and life-path questions',
            'Deepening intuitive interpretation for complex, layered questions',
            'Client-consultation skills — structuring a professional reading',
            'Handling sensitive or difficult questions with care and ethics',
            'Building the confidence to read publicly or professionally'
        ],
        need: [
            'Completion of the Tarot Beginner to Advance batch (or equivalent experience)',
            'A tarot deck you are already comfortable working with',
            'Consistent attendance across the 2-month batch'
        ],
        info: '<b>Live, instructor-led batch</b> — 2 months (6 months total with the Beginning to Advance batch), same weekly schedule. Fee for this batch is <b>₹1,00,000</b>, bringing the combined investment across both batches to <b>₹2,00,000</b>.'
    },
    runesBatch: {
        accent: '#ff5a3c', badge: 'Live Batch', price: '₹1,00,000',
        title: 'Runes: Beginning to Advance',
        img: 'images/05_Runes_Beginning_to_Advance.png',
        pay: 'https://rzp.io/rzp/wfh8B9vv',
        form: 'https://forms.gle/V88qxjTv1g5w6iiKA',
        learn: [
            'History and meaning of the Elder Futhark rune set',
            'How to cast and interpret single-rune draws',
            'Multi-rune spreads for guidance on love, career and life decisions',
            'Reversed / merkstave rune interpretation',
            'Practice sessions and live Q&amp;A with the instructor'
        ],
        need: [
            'A rune set (wood, stone or clay — guidance shared before the batch starts)',
            'A notebook for meanings and practice',
            'A reliable internet connection for the Sat / Sun live sessions'
        ],
        info: '<b>Live, instructor-led batch</b> — 3 months, Sat 8–10 PM and Sun 12–2 PM. Includes exams, practice, Q&amp;A and <b>1 year</b> of recorded video access.'
    },
    diceBatch: {
        accent: '#e24b6a', badge: 'Live Batch', price: '₹1,00,000',
        title: 'Dice: Beginning to Advance',
        img: 'images/06_Dice_Beginning_to_Advance.png',
        pay: 'https://rzp.io/rzp/s7XosLAt',
        form: 'https://forms.gle/kKw2n49ezfsArUqJ9',
        learn: [
            'Fundamentals of dice divination and number symbolism',
            'Setting up and reading single, double and triple dice throws',
            'Combining dice readings with intuitive guidance',
            'Practical exercises reading for real-life scenarios',
            'Exams and live practice to build reading confidence'
        ],
        need: [
            'A set of dice (details shared before the batch starts)',
            'A notebook for practice and reference',
            'A reliable internet connection for the Sat / Sun live sessions'
        ],
        info: '<b>Live, instructor-led batch</b> — 3 months, Sat 8–10 PM and Sun 12–2 PM. Includes exams, practice, Q&amp;A and <b>1 year</b> of recorded video access.'
    },
    candleBatch: {
        accent: '#ff9d4d', badge: 'Live Batch', price: '₹1,00,000',
        title: 'Candle Wax Full Course',
        img: 'images/07_Candle_Wax_Full_Course.png',
        pay: 'https://rzp.io/rzp/nmDQu8QA',
        form: 'https://forms.gle/1sKFhUei73Muke7D9',
        learn: [
            'The basics of ceromancy (candle wax reading) and how it works',
            'Reading shapes, patterns and symbols formed in wax',
            'Setting up a safe, focused wax-reading session',
            'Interpreting wax readings for different life questions',
            'Practice sessions, exams and live Q&amp;A'
        ],
        need: [
            'Candles, a heatproof bowl of water and a safe workspace (full materials list shared beforehand)',
            'A notebook for symbol references',
            'A reliable internet connection for the Sat / Sun live sessions'
        ],
        info: '<b>Live, instructor-led batch</b> — ~2 months, Sat 8–10 PM and Sun 12–2 PM. Includes exams, practice, Q&amp;A and <b>1 year</b> of recorded video access.'
    }
};
const DEFAULT_INFO = '<b>Online course</b> — video recordings you can watch anywhere, anytime, with <b>1 year of access</b>. A <b>certificate</b> is issued on completion.';
const overlay = document.getElementById('courseModal');
const dialog = document.getElementById('cmDialog');
const cmInfoEl = document.querySelector('.modal-info');
let lastFocus = null;
function fillList(el, arr) { el.innerHTML = arr.map(x => '<li>' + x + '</li>').join(''); }
function openCourse(key) {
    const c = COURSES[key]; if (!c) return;
    dialog.style.setProperty('--accent', c.accent);
    document.getElementById('cmBadge').textContent = c.badge;
    document.getElementById('cmTitle').textContent = c.title;
    document.getElementById('cmPrice').textContent = c.price;
    const img = document.getElementById('cmImg'); img.src = c.img; img.alt = c.title;
    fillList(document.getElementById('cmLearn'), c.learn);
    fillList(document.getElementById('cmNeed'), c.need);
    if (cmInfoEl) cmInfoEl.innerHTML = c.info || DEFAULT_INFO;
    const payBtn = document.getElementById('cmPay');
    payBtn.href = c.pay;
    payBtn.textContent = 'Pay & Enrol ✨';
    const formBtn = document.getElementById('cmForm');
    if (formBtn) formBtn.href = c.form || '#';
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    dialog.scrollTop = 0;
    lastFocus = document.activeElement;
    document.getElementById('modalClose').focus();
}
function closeCourse() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
}
document.querySelectorAll('.btn-details').forEach(b => {
    b.addEventListener('click', () => {
        const card = b.closest('.card');
        const key = card ? card.dataset.key : null;
        openCourse(key);
    });
});
document.getElementById('modalClose').addEventListener('click', closeCourse);
document.getElementById('cmCancel').addEventListener('click', closeCourse);
overlay.addEventListener('click', e => { if (e.target === overlay) closeCourse(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeCourse(); });

/* wire each card's Pay & Enrol button and registration-form link to its target */
document.querySelectorAll('.btn-enrol').forEach(a => {
    const card = a.closest('.card');
    const key = card ? card.dataset.key : null;
    if (key && COURSES[key]) {
        a.href = COURSES[key].pay;
    }
});
document.querySelectorAll('.btn-form').forEach(a => {
    const card = a.closest('.card');
    const key = card ? card.dataset.key : null;
    if (key && COURSES[key] && COURSES[key].form) {
        a.href = COURSES[key].form;
    }
});

/* ---------- Post-payment return banner ---------- */
/*
   IMPORTANT: This site cannot actually confirm a Razorpay payment succeeded —
   that only happens on Razorpay's side. What this does is a best-effort nudge:
   remember which course someone clicked "Pay & Enrol" for, and when they come
   back to this tab (after paying / closing the payment tab), prompt them to
   finish registration for that specific course.

   For a guaranteed, automatic flow, set a "Redirect URL" on each Razorpay
   Payment Link (in the Razorpay dashboard) pointing straight to that course's
   Google Form — Razorpay only fires that redirect after a real successful
   payment.
*/
(function () {
    const STORAGE_KEY = 'pendingEnrolCourse';
    const MIN_AWAY_MS = 4000;     // ignore accidental quick tab-flicks
    const EXPIRE_MS = 30 * 60 * 1000; // forget intent after 30 minutes

    const banner = document.getElementById('returnBanner');
    const courseNameEl = document.getElementById('returnBannerCourse');
    const formBtn = document.getElementById('returnBannerFormBtn');
    const closeBtn = document.getElementById('returnBannerClose');
    const dismissBtn = document.getElementById('returnBannerDismiss');

    function setPending(key) {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ key, t: Date.now() }));
        } catch (e) { /* storage unavailable, ignore */ }
    }
    function getPending() {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            const data = JSON.parse(raw);
            if (!data || !data.key || (Date.now() - data.t) > EXPIRE_MS) return null;
            return data;
        } catch (e) { return null; }
    }
    function clearPending() {
        try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) { }
    }
    function hideBanner() {
        if (banner) banner.classList.remove('show');
    }
    function showBannerFor(key) {
        const c = COURSES[key];
        if (!c || !banner) return;
        courseNameEl.textContent = c.title;
        formBtn.href = c.form || '#';
        banner.classList.add('show');
    }

    // record intent whenever a Pay & Enrol control is used (cards or modal)
    function markIntent(key) {
        if (key && COURSES[key]) setPending(key);
    }
    document.querySelectorAll('.btn-enrol').forEach(a => {
        a.addEventListener('click', () => {
            const card = a.closest('.card');
            markIntent(card ? card.dataset.key : null);
        });
    });
    const modalPayBtn = document.getElementById('cmPay');
    if (modalPayBtn) {
        modalPayBtn.addEventListener('click', () => {
            const titleEl = document.getElementById('cmTitle');
            const match = Object.keys(COURSES).find(k => COURSES[k].title === (titleEl && titleEl.textContent));
            markIntent(match);
        });
    }

    // when the user returns to this tab, check if enough time has passed
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') return;
        const pending = getPending();
        if (!pending) return;
        if (Date.now() - pending.t < MIN_AWAY_MS) return;
        showBannerFor(pending.key);
    });

    if (formBtn) {
        formBtn.addEventListener('click', () => {
            clearPending();
            hideBanner();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', () => { hideBanner(); });
    if (dismissBtn) dismissBtn.addEventListener('click', () => { clearPending(); hideBanner(); });
})();
