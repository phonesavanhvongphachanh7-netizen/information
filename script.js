/* =========================================================
   TOTAL INFORMATION — script.js
   ຂໍ້ມູນທັງໝົດເກັບເປັນ Array/Object ຢູ່ນີ້ ເພື່ອສາມາດເພີ່ມ/ແກ້ໄຂໄດ້ງ່າຍ
   ========================================================= */

/* ---------- 1. DATA ---------- */

const categories = [
  { key: "industry",     label: "ອຸດສາຫະກຳ",  icon: "🏭" },
  { key: "agriculture",  label: "ກະສິກຳ",      icon: "🌾" },
  { key: "education",    label: "ການສຶກສາ",    icon: "🎓" },
  { key: "construction", label: "ການກໍ່ສ້າງ",  icon: "🏗️" },
  { key: "technology",   label: "ເຕັກໂນໂລຢີ",  icon: "💻" },
  
];

const provinces = ["ນະຄອນຫຼວງວຽງຈັນ","ສະຫວັນນະເຂດ","ຈຳປາສັກ","ຫຼວງພະບາງ","ໄຊຍະບູລີ","ແຂວງວຽງຈັນ","ຄຳມ່ວນ","ບໍລິຄຳໄຊ"];

const rawProjects = {
  industry: [
    ["ປັບປຸງລະບົບໄຟຟ້າໂຮງງານຢາງ", "ອອກແບບລະບົບໄຟຟ້າ ແລະ ຄວາມປອດໄພ ສຳລັບໂຮງງານປຸງແຕ່ງຢາງພາລາ", "ບໍລິສັດ ລາວ ຢາງພາລາ ຈຳກັດ"],
    ["ຂະຫຍາຍໂຮງງານປຸງແຕ່ງອາຫານສັດ", "ວາງແຜນຜັງໂຮງງານ ແລະ ລະບົບລະບາຍອາກາດໃໝ່", "ສະຫະກອນອຸດສາຫະກຳ ບ້ານໂພນສະຫວັນ"],
    ["ຄວບຄຸມຄຸນນະພາບໂຮງງານຊີມັງ", "ກວດສອບມາດຕະຖານການຜະລິດ ແລະ ຄວາມປອດໄພແຮງງານ", "ບໍລິສັດ ຊີມັງລາວ ຈຳກັດ"],
    ["ອອກແບບສາຍການຜະລິດເຄື່ອງນຸ່ງ", "ວາງລະບົບຜັງໂຮງງານເພື່ອເພີ່ມປະສິດທິພາບການຜະລິດ", "ບໍລິສັດ ການເຄື່ອງນຸ່ງ ວຽງຈັນ ຈຳກັດ"],
    ["ປະເມີນຄວາມສ່ຽງໂຮງງານເຄມີ", "ສຳຫຼວດ ແລະ ສະເໜີມາດຕະການປ້ອງກັນອຸປະຕິເຫດ", "ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ"],
  ],
  agriculture: [
    ["ລະບົບຊົນລະປະທານ ນາເຂດພູພຽງ", "ອອກແບບລະບົບສູບນ້ຳ ແລະ ຄອງສົ່ງນ້ຳ ສຳລັບເຂດນາ 400 ເຮັກຕາ", "ສະຫະກອນກະສິກອນ ບ້ານດອນໂขง"],
    ["ໂຄງການປູກກາເຟອິນຊີ", "ວາງແຜນທີ່ດິນ ແລະ ລະບົບຊົນລະປະທານແບບຢອດນ້ຳ", "ບໍລິສັດ ກາເຟລາວ ອິນຊີ ຈຳກັດ"],
    ["ສາງເກັບຮັກສາເຂົ້າສະໜອງໂຮງສີ", "ອອກແບບໂຮງເກັບເຂົ້າ ຄວບຄຸມຄວາມຊື້ນ ແລະ ອຸນຫະພູມ", "ໂຮງສີເຂົ້າ ໄຊຍະບູລີ"],
    ["ຟາມລ້ຽງປານ້ຳຈືດແບບອັດສະລິຍະ", "ຕິດຕັ້ງລະບົບຄວບຄຸມຄຸນນະພາບນ້ຳອັດຕະໂນມັດ", "ສະຫະກອນລ້ຽງປາ ບ້ານທ່າງ່ອນ"],
    ["ໂຄງການປູກຢາງພາລາແບບຍືນຍົງ", "ວາງແຜນປູກຊ້ອນພືດ ແລະ ປ້ອງກັນການເຊາະເຈື່ອນ", "ກົມສົ່ງເສີມກະສິກຳ ແຂວງຈຳປາສັກ"],
  ],
  education: [
    ["ອາຄານຫ້ອງສະໝຸດມະຫາວິທະຍາໄລ", "ອອກແບບໂຄງສ້າງ ແລະ ລະບົບແສງສະຫວ່າງປະຢັດພະລັງງານ", "ມະຫາວິທະຍາໄລແຫ່ງຊາດ ລາວ"],
    ["ໂຮງຮຽນມັດທະຍົມແບບຍືນຍົງ", "ອອກແບບອາຄານທົນທານຕໍ່ແຜ່ນດິນໄຫວ ແລະ ນ້ຳຖ້ວມ", "ກະຊວງສຶກສາທິການ ແລະ ກິລາ"],
    ["ຫ້ອງທົດລອງວິທະຍາສາດ ມສ.", "ຕິດຕັ້ງລະບົບອຸປະກອນ ແລະ ຄວາມປອດໄພຫ້ອງທົດລອງ", "ວິທະຍາໄລເຕັກນິກ ວຽງຈັນ"],
    ["ສູນຝຶກອົບຮົມອາຊີວະສຶກສາ", "ອອກແບບອາຄານປະຕິບັດງານ ແລະ ໂຮງງານຝຶກ", "ສະຖາບັນພັດທະນາຝີມືແຮງງານ"],
    ["ໂຄງການອິນເຕີເນັດເພື່ອການສຶກສາ", "ວາງລະບົບເຄືອຂ່າຍ Wi-Fi ໃຫ້ໂຮງຮຽນຫ່າງໄກ 12 ແຫ່ງ", "ອົງການ UNDP ລາວ"],
  ],
  construction: [
    ["ຄວບຄຸມການກໍ່ສ້າງຂົວຂ້າມແມ່ນ້ຳ", "ຄວບຄຸມຄຸນນະພາບ ແລະ ຄວາມປອດໄພການກໍ່ສ້າງຂົວຄອນກຣີດ", "ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ"],
    ["ອາຄານຫ້ອງການລັດຖະບານແຂວງ", "ອອກແບບ ແລະ ຄວບຄຸມການກໍ່ສ້າງອາຄານ 5 ຊັ້ນ", "ອົງການປົກຄອງແຂວງ ຄຳມ່ວນ"],
    ["ໂຄງການທາງດ່ວນ ຊານເມືອງ", "ສຳຫຼວດເສັ້ນທາງ ແລະ ອອກແບບໂຄງສ້າງທາງລອດ", "ບໍລິສັດ ລາວ-ຈີນ ກໍ່ສ້າງທາງດ່ວນ"],
    ["ອາຄານທີ່ພັກອາໄສລວມໝູ່", "ວາງແຜນຜັງເມືອງ ແລະ ລະບົບລະບາຍນ້ຳຝົນ", "ບໍລິສັດ ອະສັງຫາລິມະຊັບ ວຽງຈັນ"],
    ["ຄວບຄຸມການກໍ່ສ້າງເຂື່ອນຂະໜາດນ້ອຍ", "ຕິດຕາມຄວາມໝັ້ນຄົງໂຄງສ້າງ ແລະ ຄຸນນະພາບຄອນກຣີດ", "ບໍລິສັດ ພະລັງງານໄຟຟ້ານ້ຳຕົກ ລາວ"],
  ],
  technology: [
    ["ລະບົບຖານຂໍ້ມູນເມືອງອັດສະລິຍະ", "ພັດທະນາລະບົບເກັບກຳ ແລະ ວິເຄາະຂໍ້ມູນຜັງເມືອງ", "ບໍລິສັດ ລາວ ດິຈິຕອລ ຈຳກັດ"],
    ["ແອັບຕິດຕາມໂຄງການກໍ່ສ້າງ", "ພັດທະນາລະບົບຕິດຕາມຄວາມຄືບໜ້າແບບ Real-time", "ບໍລິສັດ ເທັກໂນວິນ ຈຳກັດ"],
    ["ລະບົບ IoT ຄວບຄຸມການຊົນລະປະທານ", "ຕິດຕັ້ງເຊັນເຊີວັດຄວາມຊື້ນດິນ ແລະ ຄວບຄຸມນ້ຳອັດຕະໂນມັດ", "ສະຖາບັນຄົ້ນຄວ້າກະສິກຳ ແຫ່ງຊາດ"],
    ["ເວັບໄຊທ໌ຂໍ້ມູນການທ່ອງທ່ຽວ", "ອອກແບບ ແລະ ພັດທະນາລະບົບຂໍ້ມູນແຫຼ່ງທ່ອງທ່ຽວທົ່ວປະເທດ", "ກະຊວງຖະແຫຼງຂ່າວ ວັດທະນະທຳ ແລະ ທ່ອງທ່ຽວ"],
    ["ລະບົບຄວາມປອດໄພເຄືອຂ່າຍໂຮງໝໍ", "ວາງລະບົບຄວາມປອດໄພຂໍ້ມູນ ແລະ ສຳຮອງຂໍ້ມູນຄົນເຈັບ", "ໂຮງໝໍ ມິດຕະພາບ"],
  ],
};

const featuredKeys = ["industry-0","agriculture-0","education-1","construction-2","technology-0","construction-4"];

function buildProjects(){
  let id = 1;
  const list = [];
  categories.forEach(cat => {
    rawProjects[cat.key].forEach((row, i) => {
      const [title, desc, partner] = row;
      const month = String((i * 2 + 3) % 12 + 1).padStart(2, "0");
      const day = String((i * 7 + 5) % 28 + 1).padStart(2, "0");
      const year = 2021 + ((id + i) % 6);
      list.push({
        id: id++,
        key: `${cat.key}-${i}`,
        category: cat.key,
        categoryLabel: cat.label,
        title,
        description: desc,
        partner,
        location: provinces[(id + i) % provinces.length],
        date: `${day}/${month}/${year}`,
        image: `https://picsum.photos/seed/${cat.key}${i}/640/480`,
        featured: featuredKeys.includes(`${cat.key}-${i}`),
      });
    });
  });
  return list;
}

const projects = buildProjects();

/* ---------- 2. STATE ---------- */
let activeCategory = "all";
let searchTerm = "";

/* ---------- 3. DOM REFS ---------- */
const categoryBar   = document.getElementById("categoryBar");
const tableBody      = document.getElementById("tableBody");
const emptyState     = document.getElementById("emptyState");
const galleryGrid    = document.getElementById("galleryGrid");

const modalOverlay   = document.getElementById("modalOverlay");
const modalImg       = document.getElementById("modalImg");
const modalCategory  = document.getElementById("modalCategory");
const modalTitle     = document.getElementById("modalTitle");
const modalDate      = document.getElementById("modalDate");
const modalLocation  = document.getElementById("modalLocation");
const modalPartner   = document.getElementById("modalPartner");
const modalDesc      = document.getElementById("modalDesc");
const modalClose     = document.getElementById("modalClose");

const hamburger      = document.getElementById("hamburger");
const mainNav        = document.getElementById("mainNav");
const searchToggle   = document.getElementById("searchToggle");
const searchOverlay  = document.getElementById("searchOverlay");
const searchInput    = document.getElementById("searchInput");
const searchClose    = document.getElementById("searchClose");

/* ---------- 4. CATEGORY DROPDOWN / FILTER BAR ---------- */
function renderCategoryBar(){
  const allChip = document.createElement("button");
  allChip.className = "category-chip active";
  allChip.textContent = "ທັງໝົດ";
  allChip.dataset.key = "all";
  categoryBar.appendChild(allChip);

  categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "category-chip";
    chip.dataset.key = cat.key;
    chip.textContent = `${cat.icon} ${cat.label}`;
    categoryBar.appendChild(chip);
  });

  categoryBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-chip");
    if (!btn) return;
    activeCategory = btn.dataset.key;
    [...categoryBar.children].forEach(c => c.classList.toggle("active", c === btn));
    renderTable();
  });
}

/* ---------- 5. DYNAMIC TABLE ---------- */
function getFilteredProjects(){
  return projects.filter(p => {
    const inCategory = activeCategory === "all" || p.category === activeCategory;
    if (!inCategory) return false;
    if (!searchTerm) return true;
    const t = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(t) ||
      p.date.toLowerCase().includes(t) ||
      p.description.toLowerCase().includes(t) ||
      p.location.toLowerCase().includes(t) ||
      p.partner.toLowerCase().includes(t)
    );
  });
}

function renderTable(){
  const rows = getFilteredProjects();
  tableBody.innerHTML = "";
  emptyState.hidden = rows.length !== 0;

  rows.forEach((p, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-no">${String(i + 1).padStart(2, "0")}</td>
      <td class="col-img"><img src="${p.image}" alt="${p.title}" loading="lazy"></td>
      <td class="col-title">${p.title}<small>${p.categoryLabel}</small></td>
      <td class="col-date">${p.date}</td>
      <td class="col-detail">${p.description}</td>
      <td class="col-action"><button class="row-view-btn" data-id="${p.id}">ເບິ່ງລາຍລະອຽດ</button></td>
    `;
    tableBody.appendChild(tr);
  });
}

tableBody.addEventListener("click", (e) => {
  const btn = e.target.closest(".row-view-btn");
  if (!btn) return;
  openModal(Number(btn.dataset.id));
});

/* ---------- 6. GALLERY ---------- */
function renderGallery(){
  const featured = projects.filter(p => p.featured).slice(0, 6);
  galleryGrid.innerHTML = "";
  featured.forEach(p => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.id = p.id;
    item.innerHTML = `
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="gallery-caption">
        <strong>${p.title}</strong>
        <span>${p.categoryLabel} · ${p.date}</span>
      </div>
    `;
    galleryGrid.appendChild(item);
  });
}

galleryGrid.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  openModal(Number(item.dataset.id));
});

/* ---------- 7. MODAL POPUP ---------- */
function openModal(id){
  const p = projects.find(x => x.id === id);
  if (!p) return;
  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalCategory.textContent = p.categoryLabel;
  modalTitle.textContent = p.title;
  modalDate.textContent = p.date;
  modalLocation.textContent = p.location;
  modalPartner.textContent = p.partner;
  modalDesc.textContent = p.description;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){
    closeModal();
    closeSearch();
    closeNav();
  }
});

/* ---------- 8. SEARCH (real-time) ---------- */
function openSearch(){
  searchOverlay.classList.add("open");
  setTimeout(() => searchInput.focus(), 200);
}
function closeSearch(){
  searchOverlay.classList.remove("open");
}

searchToggle.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderTable();
});

/* pressing Enter jumps to the portfolio results */
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    closeSearch();
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }
});

/* ---------- 9. MOBILE NAV ---------- */
function closeNav(){
  mainNav.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}
hamburger.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", closeNav);
});

/* Highlight active nav link on scroll */
const sections = ["home","portfolio","information","contact"].map(id => document.getElementById(id));
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sections.forEach(s => s && sectionObserver.observe(s));

/* ---------- 10. SCROLL-REVEAL ANIMATION ---------- */
const revealTargets = document.querySelectorAll(".section-head, .category-bar, .table-wrap, .gallery-head, .gallery-grid, .about-card, .contact-card");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.style.animation = "reveal .8s cubic-bezier(.22,.8,.32,1) forwards";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(t => {
  t.style.opacity = "0";
  t.style.transform = "translateY(18px)";
  revealObserver.observe(t);
});

/* ---------- 11. INIT ---------- */
renderCategoryBar();
renderTable();
renderGallery();