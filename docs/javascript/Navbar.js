const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav id="siteNav" class="fixed inset-x-0 top-0 z-50 transition-all duration-300">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 md:h-22 items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2] shadow-sm">
          <i class="fa-solid fa-tooth text-white text-lg"></i>
        </div>
        <div class="leading-tight">
          <div class="text-base font-bold text-white">Dentist Near Me</div>
          <div class="text-xs font-semibold text-white/70">Local Dentist Near You</div>
        </div>
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a href="index.html" class="text-sm font-semibold text-white/80 hover:text-white transition">Home</a>
        <a href="about.html" class="text-sm font-semibold text-white/80 hover:text-white transition">About</a>

        <div class="relative group">
          <button type="button" class="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition">
            Services
            <i class="fa-solid fa-chevron-down text-xs text-white/60 group-hover:text-white"></i>
          </button>

          <div class="absolute left-0 top-full w-[320px] pt-3 opacity-0 translate-y-1 pointer-events-none transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
            <div class="rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-sm backdrop-blur">
              <a href="professional-teeth-cleaning.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-tooth text-[#00A6D2]"></i> Professional Teeth Cleaning
              </a>
              <a href="dental-fillings.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-teeth text-[#00A6D2]"></i> Dental Fillings
              </a>
              <a href="tooth-extractions.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-kit-medical text-[#00A6D2]"></i> Tooth Extractions
              </a>
              <a href="teeth-whitening.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-tooth text-[#00A6D2]"></i> Teeth Whitening
              </a>
              <a href="dental-sealants.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-shield text-[#00A6D2]"></i> Dental Sealants
              </a>
              <a href="braces-invisalign.html" class="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition">
                <i class="fa-solid fa-bars-staggered text-[#00A6D2]"></i> Braces / Invisalign
              </a>
            </div>
          </div>
        </div>

        <a href="contact.html" class="text-sm font-semibold text-white/80 hover:text-white transition">Contact</a>

        <a href="contact.html" class="inline-flex items-center gap-2 rounded-xl bg-[#00A6D2] px-4 py-3.5 text-sm font-bold text-white shadow-sm hover:brightness-95 transition">
          <i class="fa-solid fa-calendar-check"></i>
          <span>Request Appointment</span>
        </a>
      </div>

      <button id="navBtn" class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition lg:hidden" aria-label="Open menu" aria-controls="mobilePanel" aria-expanded="false">
        <i id="navIcon" class="fa-solid fa-bars text-lg"></i>
      </button>
    </div>
  </div>

  <div id="mobilePanel" class="fixed inset-0 z-[60] bg-slate-950 translate-x-full opacity-0 pointer-events-none transition-all duration-300 lg:hidden">
    <div class="mx-auto flex h-full max-w-7xl flex-col px-4 pt-8 sm:px-6">
      <div class="flex h-16 items-center justify-between">
        <a href="index.html" class="flex items-center gap-3">
          <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2] shadow-sm">
            <i class="fa-solid fa-tooth text-white text-lg"></i>
          </div>
          <div class="leading-tight">
            <div class="text-base font-bold text-white">Dentist Near Me</div>
            <div class="text-xs font-semibold text-white/70">Local Dentist Near You</div>
          </div>
        </a>

        <button id="closeBtn" class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition" aria-label="Close menu">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto pb-10 pt-6">
        <div class="grid gap-2">
          <a href="index.html" class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">Home</a>
          <a href="about.html" class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">About</a>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-2">
            <div class="px-4 py-3 text-xs font-bold text-white/70">Services</div>

            <a href="professional-teeth-cleaning.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-tooth text-[#00A6D2]"></i>
              </div>
              <span>Professional Teeth Cleaning</span>
            </a>

            <a href="dental-fillings.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-teeth text-[#00A6D2]"></i>
              </div>
              <span>Dental Fillings</span>
            </a>

            <a href="tooth-extractions.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-kit-medical text-[#00A6D2]"></i>
              </div>
              <span>Tooth Extractions</span>
            </a>

            <a href="teeth-whitening.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-tooth text-[#00A6D2]"></i>
              </div>
              <span>Teeth Whitening</span>
            </a>

            <a href="dental-sealants.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-shield text-[#00A6D2]"></i>
              </div>
              <span>Dental Sealants</span>
            </a>

            <a href="braces-invisalign.html" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-bars-staggered text-[#00A6D2]"></i>
              </div>
              <span>Braces / Invisalign</span>
            </a>
          </div>

          <a href="contact.html" class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition">Contact</a>

          <a href="contact.html" class="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00A6D2] px-6 py-4 text-sm font-bold text-white shadow-sm hover:brightness-95 transition">
            <i class="fa-solid fa-calendar-check"></i>
            <span>Request Appointment</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

`;



const nav = document.getElementById("siteNav");
const btn = document.getElementById("navBtn");
const icon = document.getElementById("navIcon");
const panel = document.getElementById("mobilePanel");
const closeBtn = document.getElementById("closeBtn");

const setNavStyle = () => {
  const scrolled = window.scrollY > 10;
  nav.classList.toggle("bg-transparent", !scrolled);
  nav.classList.toggle("border-b", scrolled);
  nav.classList.toggle("border-white/10", scrolled);
  nav.classList.toggle("bg-slate-950/85", scrolled);
  nav.classList.toggle("backdrop-blur", scrolled);
};

const openMenu = () => {
  panel.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
  panel.classList.add("translate-x-0", "opacity-100", "pointer-events-auto");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-xmark");
  btn.setAttribute("aria-expanded", "true");
  document.documentElement.classList.add("overflow-hidden");
};

const closeMenu = () => {
  panel.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
  panel.classList.remove("translate-x-0", "opacity-100", "pointer-events-auto");
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");
  btn.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("overflow-hidden");
};

const toggleMenu = () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
};

setNavStyle();
window.addEventListener("scroll", setNavStyle);

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



