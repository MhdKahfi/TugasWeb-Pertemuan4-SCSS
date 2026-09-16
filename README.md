# Kahfi — Perkenalan Diri (SCSS, 7-1 Pattern)

Konversi CSS (inline `<style>` di `index.html` asli) menjadi SCSS modular
memakai **pola arsitektur 7-1**, di-compile dengan **Vite + Dart Sass**.

## Menjalankan proyek

```bash
npm install
npm run dev      # mode pengembangan, hot reload
npm run build    # build produksi ke folder dist/
npm run preview  # preview hasil build
```

`npm install` akan memasang `vite` dan `sass` (Dart Sass). Vite otomatis
memanggil Dart Sass untuk meng-compile `src/scss/main.scss` yang di-import
dari `src/main.js`.

## Struktur folder (7-1 pattern)

```
src/scss/
├── abstracts/       # tidak menghasilkan CSS sendiri (variables, mixins, placeholders)
│   ├── _variables.scss   # $colors, $spacing, radius, font, breakpoints (map)
│   ├── _mixins.scss      # respond(), mono-label(), card-surface(), grid-cols(), lift-on-hover()
│   ├── _placeholders.scss# @for loop -> %grid-cols-1/2/3
│   └── _index.scss       # @forward semua di atas
├── base/            # reset, tipografi dasar, keyframes
│   ├── _reset.scss       # @each loop -> CSS custom properties dari $colors
│   ├── _typography.scss
│   ├── _animations.scss
│   └── _index.scss
├── layout/          # header, hero, section wrapper, footer
├── components/      # buttons, id-card, cards (fact/stamp/hobby), ticket, forms
├── pages/           # override khusus per halaman (kosong, single-page)
├── themes/          # reserved untuk pola 7-1 (kosong)
├── vendors/         # reserved untuk pola 7-1 (kosong, font di-load via <link>)
└── main.scss        # satu-satunya entry point ("1" di 7-1), pakai @use (bukan @import)
```

## Checklist sesuai instruksi

- ✅ Konversi CSS existing ke SCSS — semua rule di `<style>` asli dipindahkan.
- ✅ Nesting maksimal 3 level (mis. `.id-card { figure { img { … } } }`).
- ✅ Struktur 7-1 pattern lengkap (abstracts, base, layout, components, pages, themes, vendors + main.scss).
- ✅ `@each` di `base/_reset.scss` (bangkitkan CSS var dari `$colors`) dan `@for` di
  `abstracts/_placeholders.scss` (bangkitkan `%grid-cols-1/2/3`).
- ✅ Variables untuk warna (`$colors` map → CSS custom properties) dan spacing (`$spacing` map).
- ✅ 3+ mixin reusable: `respond()`, `mono-label()`, `card-surface()` (plus `grid-cols()`, `lift-on-hover()`).
- ✅ `@use` di semua partial, tidak ada `@import`.
- ✅ Compile lewat Vite + Dart Sass (`npm run build` sudah diverifikasi berhasil).
