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
  hoursMin: 49,
  hoursMax: 78,
  totalMin: 1870,      // з ФОП 6%, менеджмент — відсотком
  totalMax: 2976,
  uahRate: 44.6916,
  uahDate: "31.07.2026",
  weeks: "3–5",
  stages: 4,
  sectionsActive: 4,
  pages: 10,
};
