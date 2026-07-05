const prompts = [
  {
    title: "Professional Studio Headshot",
    category: "Business",
    tags: ["Men", "Women", "Portrait", "Studio Headshot"],
    description: "Create a polished headshot with clean lighting and a trustworthy professional tone.",
    prompt: "Using the uploaded photo as the source, create a realistic professional studio headshot. Keep the person's facial identity, age, and expression recognizable. Improve posture, eye clarity, skin tone, and suit-level polish. Use soft key lighting, a neutral gray backdrop, natural texture, and no plastic skin or exaggerated retouching.",
    models: ["ChatGPT", "Gemini"],
    author: "Mira Chen",
    views: 18400,
    copies: 5210,
    type: "Free",
    date: "2026-06-24",
    accent: ["#7c3aed", "#ec4899"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Professional studio headshot portrait"
  },
  {
    title: "Luxury Product Photo",
    category: "Product Photo",
    tags: ["Product Photo", "Realistic"],
    description: "Turn a basic product image into a premium ecommerce or campaign-ready visual.",
    prompt: "Edit the uploaded product photo into a premium commercial product image. Preserve the exact product shape, label, color, and proportions. Add controlled studio lighting, clean shadows, subtle reflections, crisp material texture, and a refined minimal background suitable for ecommerce and advertising.",
    models: ["ChatGPT", "Midjourney"],
    author: "Jon Vale",
    views: 21900,
    copies: 6940,
    type: "Pro",
    date: "2026-06-20",
    accent: ["#4f46e5", "#f59e0b"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Luxury product photo with premium lighting"
  },
  {
    title: "Cinematic Street Portrait",
    category: "Cinematic",
    tags: ["Men", "Women", "Portrait", "Cinematic"],
    description: "Create a quiet vintage reading portrait with moody depth, soft texture, and cinematic realism.",
    prompt: "Transform the uploaded portrait into a cinematic vintage reading scene. Preserve the person's facial identity, clothing silhouette, pose, book, and seated posture. Add soft directional light, a muted brick or garden-wall background, shallow depth of field, subtle film grain, and refined warm shadows. Keep the scene photorealistic, calm, literary, and editorial without changing the person or making the book text readable.",
    models: ["ChatGPT", "Gemini", "Midjourney"],
    author: "Aya Brooks",
    views: 27700,
    copies: 8200,
    type: "Free",
    date: "2026-07-01",
    accent: ["#111827", "#ec4899"],
    image: "assets/cards/a.png",
    imageAlt: "Vintage cinematic woman reading on a bench"
  },
  {
    title: "Social Media Travel Shot",
    category: "Lifestyle",
    tags: ["Travel", "Women", "Men", "Social Media"],
    description: "Turn a casual portrait into a polished double-exposure profile image with social-ready depth.",
    prompt: "Edit the uploaded portrait into a clean double-exposure creator profile image. Preserve the person's identity, smile, hairstyle, clothing, and seated pose. Add a large soft monochrome portrait silhouette in the background, keep the foreground subject in natural color, improve skin tone and hair detail, and use a refined gray studio backdrop. Make it suitable for a polished social profile or creator banner without adding text, logos, or artificial facial changes.",
    models: ["ChatGPT", "Gemini"],
    author: "Niko Ray",
    views: 14300,
    copies: 3880,
    type: "Free",
    date: "2026-06-29",
    accent: ["#10b981", "#4f46e5"],
    image: "assets/cards/c.png",
    imageAlt: "Double exposure social media portrait"
  },
  {
    title: "Brushstroke Character Portrait",
    category: "Digital Art",
    tags: ["Women", "Portrait", "Fashion"],
    description: "Turn a portrait into a polished character-design artwork with expressive brush texture.",
    prompt: "Transform the uploaded portrait into a refined character-design illustration with expressive brushstrokes. Preserve the person's facial identity, eye shape, hairstyle, pose, and natural expression. Add luminous skin highlights, detailed flowing hair, soft painterly edges, and a pale textured studio background. Keep the image elegant, high-resolution, and editorial, with no text, watermark, distorted features, or overly cartoonish proportions.",
    models: ["ChatGPT", "Gemini"],
    author: "Lena Park",
    views: 19800,
    copies: 7340,
    type: "Free",
    date: "2026-07-02",
    accent: ["#8b5cf6", "#06b6d4"],
    image: "h.png",
    imageAlt: "Brushstroke character portrait artwork"
  },
  {
    title: "Old Photo Restoration",
    category: "Photo Restoration",
    tags: ["Family", "Portrait"],
    description: "Repair scratches, faded tones, blur, and age marks while keeping the original character.",
    prompt: "Restore this old photo carefully. Remove scratches, dust, stains, creases, and fading while preserving the original faces, clothing, pose, and historical character. Improve sharpness, contrast, and natural color only where needed. Avoid modernizing the people or making the image look newly generated.",
    models: ["ChatGPT", "Gemini"],
    author: "Owen Hart",
    views: 16500,
    copies: 4760,
    type: "Pro",
    date: "2026-06-18",
    accent: ["#a16207", "#ef4444"],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Vintage family photo restoration reference"
  },
  {
    title: "Fashion Editorial Portrait",
    category: "Fashion",
    tags: ["Women", "Fashion", "Portrait"],
    description: "Create a painterly fashion portrait with rich wardrobe texture and gallery-style color.",
    prompt: "Transform the uploaded portrait into a painterly fashion editorial artwork. Preserve the model's face, gaze, hair shape, body proportions, and outfit structure. Enhance the jacket with expressive brush textures, layered muted color, subtle gold accents, and a tasteful abstract studio backdrop. Keep the face elegant and detailed, avoid cartoon exaggeration, and make the final image feel like a premium magazine illustration.",
    models: ["ChatGPT", "Midjourney"],
    author: "Sofia Lane",
    views: 24800,
    copies: 7710,
    type: "Pro",
    date: "2026-06-30",
    accent: ["#be185d", "#7c3aed"],
    image: "assets/cards/e.png",
    imageAlt: "Painterly fashion editorial portrait"
  },
  {
    title: "Couple Anniversary Photo",
    category: "Lifestyle",
    tags: ["Couple", "Portrait"],
    description: "Give couple photos a warm, romantic, frame-worthy finish.",
    prompt: "Enhance this couple photo into a warm anniversary-style portrait. Keep both people recognizable and preserve their pose and relationship dynamic. Improve skin tones, soft natural light, background separation, and composition. Add a romantic realistic atmosphere without changing faces, outfits, or body proportions.",
    models: ["ChatGPT", "Gemini"],
    author: "Cass Moore",
    views: 12100,
    copies: 3440,
    type: "Free",
    date: "2026-06-22",
    accent: ["#fb7185", "#f59e0b"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Romantic couple anniversary photo"
  },
  {
    title: "LinkedIn Profile Photo",
    category: "Business",
    tags: ["Men", "Women", "Studio Headshot", "Portrait"],
    description: "Create a premium black-and-white executive headshot with strong eye contact and authority.",
    prompt: "Convert the uploaded portrait into a high-end black-and-white executive headshot. Preserve the person's facial identity, age, beard, hair shape, expression, and hand pose. Add dramatic studio lighting, deep black background, crisp eye detail, refined skin texture, and elegant contrast. Keep the portrait realistic, authoritative, and suitable for LinkedIn, speaker bios, or executive profiles without over-smoothing the skin.",
    models: ["ChatGPT", "Gemini"],
    author: "Theo Kim",
    views: 35600,
    copies: 12940,
    type: "Free",
    date: "2026-07-03",
    accent: ["#2563eb", "#7c3aed"],
    image: "assets/cards/b.png",
    imageAlt: "Black and white executive headshot"
  },
  {
    title: "Food Photography Enhancement",
    category: "Photography",
    tags: ["Product Photo", "Social Media"],
    description: "Improve food images with appetizing texture, color, and tabletop styling.",
    prompt: "Improve this food photo for a restaurant or social media post. Preserve the actual dish, ingredients, plating, and portion size. Enhance appetizing color, texture, steam if natural, tabletop styling, and soft directional light. Keep shadows realistic and avoid adding ingredients that are not present.",
    models: ["ChatGPT", "Midjourney"],
    author: "Priya Stone",
    views: 9600,
    copies: 2710,
    type: "Free",
    date: "2026-06-16",
    accent: ["#ea580c", "#10b981"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Enhanced food photography plate"
  },
  {
    title: "Pet Portrait Studio",
    category: "Portraits",
    tags: ["Portrait", "Studio Headshot"],
    description: "Create a charming studio portrait for pets with expressive detail.",
    prompt: "Turn this pet photo into a clean studio portrait. Preserve the pet's breed, markings, fur color, eye shape, and expression. Improve eye clarity, fur texture, soft lighting, and background cleanliness. Keep the animal natural and recognizable, with no cartoon styling or human-like changes.",
    models: ["ChatGPT", "Gemini"],
    author: "June Wells",
    views: 8800,
    copies: 2180,
    type: "Pro",
    date: "2026-06-14",
    accent: ["#14b8a6", "#8b5cf6"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Pet portrait studio image"
  },
  {
    title: "Birthday Poster Edit",
    category: "Social Media",
    tags: ["Birthday", "Family", "Social Media"],
    description: "Build a festive birthday edit with poster-style composition.",
    prompt: "Create a birthday poster-style edit from the uploaded photo. Keep the main person recognizable and preserve facial features and outfit. Add festive lighting, a clean subject cutout, celebratory background elements, vibrant color, and empty space for text. Avoid clutter and keep it polished.",
    models: ["ChatGPT", "Gemini", "Midjourney"],
    author: "Maya Noor",
    views: 13200,
    copies: 4170,
    type: "Free",
    date: "2026-06-27",
    accent: ["#ec4899", "#f59e0b"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Birthday celebration poster edit"
  },
  {
    title: "Minimal Catalog Background",
    category: "Product Photo",
    tags: ["Product Photo", "Background Change"],
    description: "Place products on clean catalog backgrounds with realistic grounding.",
    prompt: "Place the uploaded product on a minimal catalog background. Preserve the exact product design, proportions, color, logo, and visible details. Clean the edges, add accurate scale, soft floor shadow, neutral background color, and realistic commercial lighting for a marketplace-ready image.",
    models: ["ChatGPT", "Gemini"],
    author: "Iris Ford",
    views: 11200,
    copies: 3090,
    type: "Free",
    date: "2026-06-26",
    accent: ["#6366f1", "#c084fc"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Minimal catalog product background"
  },
  {
    title: "Family Outdoor Portrait",
    category: "Portraits",
    tags: ["Family", "Portrait"],
    description: "Make family photos brighter, warmer, and naturally balanced.",
    prompt: "Enhance this outdoor family portrait while keeping every person recognizable. Preserve faces, ages, expressions, clothing, and arrangement. Improve soft golden light, balanced skin tones, background depth, and overall sharpness. Keep the result natural, warm, and suitable for a family album.",
    models: ["ChatGPT", "Gemini"],
    author: "Ellis Gray",
    views: 10900,
    copies: 2960,
    type: "Free",
    date: "2026-06-12",
    accent: ["#84cc16", "#f97316"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Family outdoor portrait"
  },
  {
    title: "Neon Night Portrait",
    category: "Cinematic",
    tags: ["Cinematic", "Portrait", "Men", "Women"],
    description: "Create a romantic cinematic couple portrait with glowing bokeh and warm rim light.",
    prompt: "Transform the uploaded couple photo into a romantic cinematic night portrait. Preserve both people's identities, facial features, pose, clothing, and close emotional framing. Add a warm circular rim light behind them, soft heart-shaped bokeh, shallow depth of field, golden highlights, and realistic skin tones. Keep the scene elegant, intimate, and photographic without making the faces artificial or overly airbrushed.",
    models: ["ChatGPT", "Midjourney"],
    author: "Rio Tan",
    views: 23100,
    copies: 6520,
    type: "Pro",
    date: "2026-06-28",
    accent: ["#7c3aed", "#06b6d4"],
    image: "assets/cards/d.png",
    imageAlt: "Romantic cinematic couple portrait"
  },
  {
    title: "Creator Thumbnail Portrait",
    category: "Social Media",
    tags: ["Social Media", "Portrait", "Women", "Men"],
    description: "Create a clear thumbnail image with readable expression and contrast.",
    prompt: "Edit this image as a creator thumbnail portrait. Keep the person recognizable and preserve the original expression. Brighten the face, sharpen the eyes, simplify the background, increase clean contrast, and leave clear space for headline text. Make it attention-grabbing without looking artificial.",
    models: ["ChatGPT", "Gemini"],
    author: "Dana West",
    views: 17400,
    copies: 4880,
    type: "Free",
    date: "2026-06-25",
    accent: ["#ef4444", "#4f46e5"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Creator thumbnail portrait"
  },
  {
    title: "Elegant Wedding Couple",
    category: "Lifestyle",
    tags: ["Couple", "Portrait", "Fashion"],
    description: "Refine wedding-style couple photos with soft romantic detail.",
    prompt: "Enhance this couple photo with an elegant wedding editorial look. Preserve both people's identities, expressions, outfits, and pose. Improve natural skin tones, refined clothing texture, soft background glow, and romantic lighting. Keep the scene timeless, realistic, and not overly airbrushed.",
    models: ["ChatGPT", "Gemini"],
    author: "Noa Fields",
    views: 15100,
    copies: 3940,
    type: "Pro",
    date: "2026-06-21",
    accent: ["#db2777", "#fbbf24"],
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Elegant wedding couple portrait"
  },
  {
    title: "Real Estate Room Refresh",
    category: "Background Change",
    tags: ["Background Change", "Realistic"],
    description: "Clean up interiors and improve lighting for listing-style photos.",
    prompt: "Refresh this interior room photo for a real estate listing. Preserve the actual room layout, furniture placement, windows, and architectural details. Brighten natural light, straighten vertical lines, clean visual clutter, balance color, and keep realistic shadows. Do not add misleading furniture or change room size.",
    models: ["ChatGPT", "Gemini"],
    author: "Vale North",
    views: 7900,
    copies: 1860,
    type: "Free",
    date: "2026-06-10",
    accent: ["#0f766e", "#6366f1"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Bright real estate room refresh"
  }
];

const state = {
  tab: "latest",
  tag: "",
  search: "",
  visible: 12
};

const grid = document.getElementById("promptGrid");
const resultCount = document.getElementById("resultCount");
const loadMore = document.getElementById("loadMore");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const recentCopy = document.getElementById("recentCopy");
const mainNav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");

function formatNumber(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(value >= 10000 ? 1 : 0)}k` : String(value);
}

function sortedPrompts(list) {
  const copy = [...list];

  if (state.tab === "trending") {
    return copy.sort((a, b) => b.copies - a.copies);
  }

  if (state.tab === "popular") {
    return copy.sort((a, b) => b.views - a.views);
  }

  return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function filteredPrompts() {
  const query = state.search.trim().toLowerCase();

  return sortedPrompts(prompts).filter((item) => {
    const matchesTag = !state.tag || item.tags.includes(state.tag);
    const haystack = `${item.title} ${item.category} ${item.tags.join(" ")} ${item.description}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesTag && matchesSearch;
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPrompts() {
  const list = filteredPrompts();
  const shown = list.slice(0, state.visible);

  grid.innerHTML = shown.map((item) => `
    <article class="prompt-card">
      <div class="thumb" style="background: linear-gradient(135deg, ${item.accent[0]}, ${item.accent[1]});">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" />
      </div>
      <div class="prompt-body">
        <div class="prompt-top">
          <span class="badge">${escapeHtml(item.category)}</span>
          <span class="badge ${item.type === "Free" ? "free" : "pro"}">${escapeHtml(item.type)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="prompt-code">${escapeHtml(item.prompt)}</div>
        <div class="model-row">
          ${item.models.map((model) => `<span>${escapeHtml(model)}</span>`).join("")}
        </div>
        <button class="copy-btn" type="button" data-title="${escapeHtml(item.title)}" data-prompt="${escapeHtml(item.prompt)}">Copy Prompt</button>
        <div class="card-meta">
          <span>${formatNumber(item.views)} views / ${formatNumber(item.copies)} copies</span>
        </div>
      </div>
    </article>
  `).join("");

  resultCount.textContent = `${list.length} prompts found`;
  loadMore.style.display = state.visible >= list.length ? "none" : "inline-flex";
  bindCopyButtons();
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function bindCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const original = button.textContent;
      const prompt = button.dataset.prompt;
      const title = button.dataset.title || "Featured prompt";

      await copyToClipboard(prompt);
      localStorage.setItem("recentCopiedPrompt", title);

      button.textContent = "Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1400);
    });
  });
}

function updateRecentCopy() {
  const title = localStorage.getItem("recentCopiedPrompt");
  if (recentCopy) {
    recentCopy.textContent = title ? `Recently copied: ${title}` : "";
  }
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.tab = tab.dataset.tab;
    state.visible = 12;
    renderPrompts();
  });
});

document.querySelectorAll("#tagCloud button").forEach((button) => {
  button.addEventListener("click", () => {
    const nextTag = button.dataset.tag;
    const isActive = state.tag === nextTag;

    document.querySelectorAll("#tagCloud button").forEach((item) => item.classList.remove("active"));
    state.tag = isActive ? "" : nextTag;

    if (state.tag) {
      button.classList.add("active");
    }

    state.visible = 12;
    renderPrompts();
    document.getElementById("prompts").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const clearFilters = document.getElementById("clearFilters");
if (clearFilters) {
  clearFilters.addEventListener("click", () => {
    state.tag = "";
    state.search = "";
    state.visible = 12;
    if (searchInput) {
      searchInput.value = "";
    }
    document.querySelectorAll("#tagCloud button").forEach((item) => item.classList.remove("active"));
    renderPrompts();
  });
}

if (loadMore) {
  loadMore.addEventListener("click", () => {
    state.visible += 6;
    renderPrompts();
  });
}

const openSearch = document.getElementById("openSearch");
if (openSearch && searchModal && searchInput) {
  openSearch.addEventListener("click", () => {
    searchModal.classList.add("open");
    document.body.classList.add("modal-open");
    searchModal.setAttribute("aria-hidden", "false");
    updateRecentCopy();
    setTimeout(() => searchInput.focus(), 60);
  });
}

const closeSearchButton = document.getElementById("closeSearch");
if (closeSearchButton) {
  closeSearchButton.addEventListener("click", closeSearch);
}

if (searchModal) {
  searchModal.addEventListener("click", (event) => {
    if (event.target === searchModal) {
      closeSearch();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearch();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (openSearch) {
      openSearch.click();
    }
  }
});

function closeSearch() {
  if (!searchModal) {
    return;
  }
  searchModal.classList.remove("open");
  document.body.classList.remove("modal-open");
  searchModal.setAttribute("aria-hidden", "true");
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    state.visible = 12;
    renderPrompts();
    if (state.search.trim()) {
      document.getElementById("prompts").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (mainNav && menuToggle) {
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 12);
});

renderPrompts();
