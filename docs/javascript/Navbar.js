const navbar = document.getElementById("navbar");

const ensureNavStyles = () => {
  if (document.getElementById("dnmNavStyles")) return;
  const style = document.createElement("style");
  style.id = "dnmNavStyles";
  style.textContent = `
    #siteNav.is-solid{
      background:rgba(255,255,255,.92);
      border-bottom:1px solid rgba(15,23,42,.10);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
    }
    #siteNav.is-solid .nav-link{color:rgba(15,23,42,.78)}
    #siteNav.is-solid .nav-link:hover{color:rgba(15,23,42,1)}
    #siteNav.is-solid .nav-title{color:rgba(15,23,42,1)}
    #siteNav.is-solid .nav-subtitle{color:rgba(15,23,42,.62)}
    #siteNav.is-solid .nav-chevron{color:rgba(15,23,42,.55)}
    #siteNav.is-solid .nav-btn{
      color:rgba(15,23,42,1);
      border-color:rgba(15,23,42,.12);
      background:rgba(15,23,42,.04);
    }
    #siteNav.is-solid .nav-btn:hover{background:rgba(15,23,42,.07)}

    #mobilePanel{
      transform:translateX(100%);
      opacity:0;
      pointer-events:none;
      transition:transform .3s ease,opacity .3s ease;
      will-change:transform;
      overscroll-behavior:contain;
    }
    #mobilePanel.is-open{
      transform:translateX(0);
      opacity:1;
      pointer-events:auto;
    }
  `;
  document.head.appendChild(style);
};

ensureNavStyles();

navbar.innerHTML = `
<nav id="siteNav" class="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2] shadow-sm">
          <i class="fa-solid fa-tooth text-white text-lg"></i>
        </div>
        <div class="leading-tight">
          <div class="nav-title text-base font-bold text-white">Dentist Near Me</div>
          <div class="nav-subtitle text-xs font-semibold text-white/70">Local Dentist Near You</div>
        </div>
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a href="index.html" class="nav-link text-sm font-semibold text-white/80 hover:text-white transition">Home</a>
        <a href="about.html" class="nav-link text-sm font-semibold text-white/80 hover:text-white transition">About</a>

        <div class="relative group">
          <button type="button" class="nav-link flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition">
            Services
            <i class="nav-chevron fa-solid fa-chevron-down text-xs text-white/60 group-hover:text-white"></i>
          </button>

          <div class="absolute left-0 top-full h-4 w-44"></div>

          <div class="absolute left-0 top-full w-[320px] pt-4 opacity-0 translate-y-1 pointer-events-none transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
            <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <a href="professional-teeth-cleaning.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-tooth text-[#00A6D2]"></i> Professional Teeth Cleaning
              </a>
              <a href="dental-fillings.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-teeth text-[#00A6D2]"></i> Dental Fillings
              </a>
              <a href="tooth-extractions.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-kit-medical text-[#00A6D2]"></i> Tooth Extractions
              </a>
              <a href="teeth-whitening.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-sparkles text-[#00A6D2]"></i> Teeth Whitening
              </a>
              <a href="dental-sealants.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-shield text-[#00A6D2]"></i> Dental Sealants
              </a>
              <a href="braces-invisalign.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition">
                <i class="fa-solid fa-bars-staggered text-[#00A6D2]"></i> Braces / Invisalign
              </a>
            </div>
          </div>
        </div>

        <a href="contact.html" class="nav-link text-sm font-semibold text-white/80 hover:text-white transition">Contact</a>

        <a href="contact.html" class="inline-flex items-center gap-2 rounded-2xl bg-[#00A6D2] px-4 py-3 text-sm font-bold text-white shadow-sm hover:brightness-95 transition">
          <i class="fa-solid fa-calendar-check"></i>
          <span>Request Appointment</span>
        </a>
      </div>

      <button id="navBtn" class="nav-btn inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition lg:hidden" aria-label="Toggle menu" aria-controls="mobilePanel" aria-expanded="false">
        <i id="navIcon" class="fa-solid fa-bars text-lg"></i>
      </button>
    </div>
  </div>
</nav>

<div id="mobilePanel" class="fixed inset-0 z-[60] bg-white lg:hidden">
  <div class="mx-auto h-full max-w-7xl px-4 sm:px-6">
    <div class="flex h-20 items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2] shadow-sm">
          <i class="fa-solid fa-tooth text-white text-lg"></i>
        </div>
        <div class="leading-tight">
          <div class="text-base font-bold text-slate-900">Dentist Near Me</div>
          <div class="text-xs font-semibold text-slate-600">Local Dentist Near You</div>
        </div>
      </a>

      <button id="closeBtn" class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900 hover:bg-slate-100 transition" aria-label="Close menu">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="h-[calc(100vh-80px)] overflow-y-auto pb-10 pt-6">
      <div class="grid gap-2">
        <a href="index.html" class="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Home</a>
        <a href="about.html" class="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">About</a>

        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <div class="px-4 py-3 text-xs font-bold text-slate-600">Services</div>

          <a href="professional-teeth-cleaning.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-tooth text-[#00A6D2]"></i>
            </div>
            <span>Professional Teeth Cleaning</span>
          </a>

          <a href="dental-fillings.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-teeth text-[#00A6D2]"></i>
            </div>
            <span>Dental Fillings</span>
          </a>

          <a href="tooth-extractions.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-kit-medical text-[#00A6D2]"></i>
            </div>
            <span>Tooth Extractions</span>
          </a>

          <a href="teeth-whitening.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-sparkles text-[#00A6D2]"></i>
            </div>
            <span>Teeth Whitening</span>
          </a>

          <a href="dental-sealants.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-shield text-[#00A6D2]"></i>
            </div>
            <span>Dental Sealants</span>
          </a>

          <a href="braces-invisalign.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/12">
              <i class="fa-solid fa-bars-staggered text-[#00A6D2]"></i>
            </div>
            <span>Braces / Invisalign</span>
          </a>
        </div>

        <a href="contact.html" class="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Contact</a>

        <a href="contact.html" class="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00A6D2] px-6 py-4 text-sm font-bold text-white shadow-sm hover:brightness-95 transition">
          <i class="fa-solid fa-calendar-check"></i>
          <span>Request Appointment</span>
        </a>
      </div>
    </div>
  </div>
</div>
`;

const nav = document.getElementById("siteNav");
const btn = document.getElementById("navBtn");
const icon = document.getElementById("navIcon");
const panel = document.getElementById("mobilePanel");
const closeBtn = document.getElementById("closeBtn");

let menuOpen = false;
let scrollPos = 0;

const lockScroll = () => {
  scrollPos = window.scrollY || document.documentElement.scrollTop;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPos}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
};

const unlockScroll = () => {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollPos);
};

const applyNavState = () => {
  const solid = menuOpen || window.scrollY > 10;
  nav.classList.toggle("is-solid", solid);
};

const openMenu = () => {
  if (menuOpen) return;
  menuOpen = true;
  panel.classList.add("is-open");
  btn.setAttribute("aria-expanded", "true");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-xmark");
  lockScroll();
  applyNavState();
};

const closeMenu = () => {
  if (!menuOpen) return;
  menuOpen = false;
  panel.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");
  unlockScroll();
  applyNavState();
};

const toggleMenu = () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
};

applyNavState();
window.addEventListener("scroll", applyNavState);

btn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);

panel.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a) closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
});
