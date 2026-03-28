# salaryfyi-embed

[![npm](https://img.shields.io/npm/v/salaryfyi-embed)](https://www.npmjs.com/package/salaryfyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/salaryfyi-embed)

Embed **SalaryFYI** widgets on any website. **7 widget types**, zero dependencies, Shadow DOM isolation, 4 themes, 2 styles. Live data from [SalaryFYI](https://salaryfyi.com).

Every widget includes a "Powered by SalaryFYI" backlink.

> **Try the interactive widget builder at [widget.salaryfyi.com](https://widget.salaryfyi.com)**

## Quick Start

```html
<div data-salaryfyi="entity" data-slug="united-states" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/salaryfyi-embed@1/dist/embed.min.js"></script>
```

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-salaryfyi="entity" data-slug="..."></div>` | Entity detail card — calculator, country, role, or game |
| `glossary` | `<div data-salaryfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-salaryfyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `search` | `<div data-salaryfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-salaryfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `faq` | `<div data-salaryfyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `salary-compare` | `<div data-salaryfyi="salary-compare" data-slug="..."></div>` | Salary range bars (P25/Median/P75) for country+role |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-salaryfyi` | entity, glossary, guide, search, compare, faq, salary-compare | required | Widget type |
| `data-slug` | e.g. "united-states" | — | Entity slug |
| `data-theme` | light, dark, sepia, auto | light | Visual theme |
| `data-style-variant` | modern, clean | modern | Widget style |
| `data-size` | default, compact, large | default | Size |

## Themes & Styles

4 themes (light, dark, sepia, auto) × 2 styles (modern, clean) = 8 visual combinations.

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/salaryfyi-embed@1/dist/embed.min.js"></script>
```

## Guide FYI Family

Part of [FYIPedia](https://fyipedia.com). Guide FYI covers calculators, salary, education, and board games. Hub: [reffyi.com](https://reffyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| CalcFYI | [calcfyi.com](https://calcfyi.com) | 200+ calculators, 50 formula cards, financial/health/math | [npm](https://www.npmjs.com/package/calcfyi-embed) |
| **SalaryFYI** | [salaryfyi.com](https://salaryfyi.com) | 36 countries, salary data, tax calculators, 26 rate configs | **[npm](https://www.npmjs.com/package/salaryfyi-embed)** |
| BoardGameFYI | [boardgamefyi.com](https://boardgamefyi.com) | 10,552 board games, 8-axis DNA profiles, BGG integration | [npm](https://www.npmjs.com/package/boardgamefyi-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
