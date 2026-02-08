const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950">
  <div class="pointer-events-none absolute inset-0">
    <div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#00A6D2]/16 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00A6D2]/10 blur-3xl"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] opacity-25"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8 lg:pt-18">
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-10">
      <div class="lg:col-span-4" data-aos="fade-up" data-aos-duration="900">
        <a href="index.html" class="flex items-center gap-3">
          <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2] shadow-sm">
            <i class="fa-solid fa-tooth text-white text-lg"></i>
          </div>
          <div class="leading-tight">
            <div class="text-lg font-bold text-white">Dentist Near Me</div>
            <div class="text-sm font-semibold text-slate-300">Local Dentist Near You</div>
          </div>
        </a>

        <p class="mt-4 text-sm leading-relaxed text-slate-300">
          Dentist Near Me is a free service that helps patients connect with local dental professionals. All dental professionals are independent and this site does not warrant or guarantee any work performed.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <a href="#" class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white" aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#" class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white" aria-label="X">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="grid gap-6 sm:grid-cols-2" data-aos="fade-up" data-aos-duration="900" data-aos-delay="120">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="text-base font-bold text-white">Pages</div>
                <div class="mt-1 text-sm font-semibold text-slate-300">Quick navigation</div>
              </div>
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-sitemap text-[#00A6D2] text-lg"></i>
              </div>
            </div>

            <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a href="index.html" class="font-semibold text-slate-300 hover:text-white">Home</a>
              <a href="about.html" class="font-semibold text-slate-300 hover:text-white">About</a>
              <a href="professional-teeth-cleaning.html" class="font-semibold text-slate-300 hover:text-white">Teeth Cleaning</a>
              <a href="dental-fillings.html" class="font-semibold text-slate-300 hover:text-white">Dental Fillings</a>
              <a href="tooth-extractions.html" class="font-semibold text-slate-300 hover:text-white">Tooth Extractions</a>
              <a href="teeth-whitening.html" class="font-semibold text-slate-300 hover:text-white">Teeth Whitening</a>
              <a href="dental-sealants.html" class="font-semibold text-slate-300 hover:text-white">Dental Sealants</a>
              <a href="braces-invisalign.html" class="font-semibold text-slate-300 hover:text-white">Braces / Invisalign</a>
              <a href="contact.html" class="font-semibold text-slate-300 hover:text-white">Contact Us</a>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="text-base font-bold text-white">Contact</div>
                <div class="mt-1 text-sm font-semibold text-slate-300">We’re here to help</div>
              </div>
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                <i class="fa-solid fa-headset text-[#00A6D2] text-lg"></i>
              </div>
            </div>

            <div class="mt-5 grid gap-3">
              <a href="mailto:info@dentistnearme.org" class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">
                <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                  <i class="fa-solid fa-envelope text-[#00A6D2] text-lg"></i>
                </div>
                <div>
                  <div class="text-sm font-bold text-white">Email</div>
                  <div class="mt-1 text-sm font-semibold text-slate-300">info@dentistnearme.org</div>
                </div>
              </a>

              <div class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00A6D2]/15">
                  <i class="fa-solid fa-clock text-[#00A6D2] text-lg"></i>
                </div>
                <div>
                  <div class="text-sm font-bold text-white">Hours</div>
                  <div class="mt-1 text-sm font-semibold text-slate-300">9 am to 7 pm Eastern Time</div>
                  <div class="text-sm font-semibold text-slate-300">Monday thru Sunday</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        </div>
        </div>
        <div class="mt-12 pt-7 w-full flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
           data-aos-duration="900" data-aos-delay="320">
          <div class="text-xs font-semibold text-slate-400">
            Copyright © 2022 Dentist Near Me. All rights reserved.
          </div>
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <a href="about.html" class="font-semibold text-slate-400 hover:text-white">About Us</a>
            <a href="contact.html" class="font-semibold text-slate-400 hover:text-white">Contact Us</a>
          </div>
        </div>
  </div>
</footer>

`