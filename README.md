# BillEase POS — Angular conversion

This is your original `index.html` landing page converted into a standalone
Angular (v17+) app, one-to-one — same sections, same design, same behaviour.

## Run it

```bash
npm install
npm start
```
Then open http://localhost:4200

## What changed vs. the original file

| Original | Angular |
|---|---|
| Inline `<style>` block | `src/styles.scss` (kept **global**, not component-scoped, because the dark-mode toggle sets `data-theme` on `<html>`) |
| Hand-written HTML markup | `src/app/app.component.html` — the repeated blocks (industries, feature cards, modules, solutions, devices, stats, testimonials, pricing, FAQ) now use `*ngFor` over typed arrays instead of `.innerHTML =` string templates |
| Inline `<script>` logic (theme toggle, mobile menu, testimonial carousel, FAQ accordion, stats counter, ApexCharts) | `src/app/app.component.ts` — same logic, moved into component methods (`toggleTheme()`, `nextTesti()`, `setFaqCat()`, etc.) and lifecycle hooks (`ngOnInit`, `ngAfterViewInit`, `ngOnDestroy`) |
| Bootstrap / AOS / Lucide / ApexCharts via CDN `<script>` tags | Still loaded via CDN in `src/index.html` (simplest path — no need to `npm install` bootstrap/apexcharts/etc. separately). They're accessed from the component via `declare const AOS/lucide/ApexCharts;` |
| Bootstrap's own JS (accordion collapse, mobile menu) | Re-implemented with plain Angular state/bindings (`openFaqIndex`, `mobileMenuOpen`) instead of relying on Bootstrap's JS plugins, so it works without `data-bs-*` attributes |

## Notes

- Icons: `lucide.createIcons()` is called once after the view settles
  (`ngAfterViewInit`) and again after the theme toggle swaps the moon/sun
  icon. If you add more dynamic icon swaps later, call `lucide.createIcons()`
  again after the DOM update.
- Charts: the hero sparkline and revenue bar chart are created with
  `ApexCharts` directly against the same `#heroChart` / `#revenueChart`
  container ids as the original.
- This uses Angular's new standalone-component bootstrap (no `AppModule`
  needed) — that's why `main.ts` calls `bootstrapApplication(AppComponent)`
  directly.
