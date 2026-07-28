/**
 * EpiCentral UA — headline figures, shared by every page of the offer.
 *
 * Джерело правди для ЦИФР — `sitemap/index.html` (масив SITEMAP + CONFIG).
 * Цей файл — витяг для сторінок, які самі нічого не рахують (дашборд, проєкт, питання).
 *
 * ⚠️ Правиш години в sitemap → онови й тут. `sitemap/index.html` звіряє свій
 * розрахунок із цими значеннями і пише попередження в консоль, якщо вони розійшлись.
 */
window.MOD_FIGURES = {
  hoursMin: 134.5,
  hoursMax: 202,
  totalMin: 5988,      // з ФОП 6%
  totalMax: 8993,
  uahRate: 44.8568,
  uahDate: "28.07.2026",
  weeks: "7–10",
  stages: 5,
  sectionsActive: 4,
  pages: 10,
};
