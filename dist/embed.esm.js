function M(){return`
/* \u2500\u2500 Card Header \u2500\u2500 */
.guidefyi-card-header {
  padding: 16px; border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--surface)), var(--surface));
}
.guidefyi-card-title {
  margin: 0; font-size: 16px; font-weight: 700; color: var(--text);
  display: flex; align-items: center; gap: 8px;
}
.guidefyi-card-title a {
  color: var(--text); text-decoration: none;
}
.guidefyi-card-title a:hover { color: var(--link); }
.guidefyi-card-title svg { width: 16px; height: 16px; color: var(--muted); flex-shrink: 0; }
.guidefyi-card-subtitle {
  margin: 4px 0 0 0; font-size: 12px; color: var(--muted);
}

/* \u2500\u2500 Card Body \u2500\u2500 */
.guidefyi-card-body { padding: 16px; }
.guidefyi-card-desc {
  margin: 0 0 12px 0; font-size: 13px; color: var(--text); line-height: 1.55;
}

/* \u2500\u2500 Properties Row \u2500\u2500 */
.guidefyi-props {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;
}
.guidefyi-prop {
  display: flex; flex-direction: column; gap: 2px;
  padding: 6px 10px; background: var(--surface); border-radius: 6px;
  border: 1px solid var(--border); flex: 1; min-width: 80px;
}
.guidefyi-prop-label { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; }
.guidefyi-prop-value { font-size: 14px; font-weight: 600; color: var(--text); }

/* \u2500\u2500 Tags \u2500\u2500 */
.guidefyi-tags { display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0; }

/* \u2500\u2500 Radar Chart (BoardGameFYI DNA) \u2500\u2500 */
.guidefyi-radar-wrap {
  padding: 12px; display: flex; justify-content: center;
}
.guidefyi-radar-svg {
  width: 200px; height: 200px;
}
.guidefyi-radar-polygon {
  fill: color-mix(in srgb, var(--accent) 20%, transparent);
  stroke: var(--accent); stroke-width: 2;
}
.guidefyi-radar-grid {
  fill: none; stroke: var(--border); stroke-width: 0.5;
}
.guidefyi-radar-axis { stroke: var(--border); stroke-width: 0.5; }
.guidefyi-radar-label { font-size: 9px; fill: var(--muted); text-anchor: middle; }
.guidefyi-radar-value { font-size: 8px; fill: var(--accent); font-weight: 600; text-anchor: middle; }

/* \u2500\u2500 DNA Bars (alternative to radar) \u2500\u2500 */
.guidefyi-dna-bars { padding: 0 16px 12px; }
.guidefyi-dna-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.guidefyi-dna-label { font-size: 11px; color: var(--muted); width: 80px; text-align: right; }
.guidefyi-dna-track {
  flex: 1; height: 8px; background: var(--surface); border-radius: 4px;
  border: 1px solid var(--border); overflow: hidden;
}
.guidefyi-dna-fill {
  height: 100%; background: var(--accent); border-radius: 4px; transition: width 0.5s ease;
}
.guidefyi-dna-val { font-size: 11px; color: var(--text); font-weight: 600; width: 28px; }

/* \u2500\u2500 Formula Display (CalcFYI) \u2500\u2500 */
.guidefyi-formula-box {
  padding: 12px 16px; margin: 8px 0; background: var(--surface);
  border: 1px solid var(--border); border-radius: 6px;
  font-family: ui-monospace, 'SF Mono', 'Consolas', monospace;
  font-size: 14px; color: var(--text); text-align: center; line-height: 1.8;
  overflow-x: auto; white-space: nowrap;
}

/* \u2500\u2500 Variables List (CalcFYI) \u2500\u2500 */
.guidefyi-vars { padding: 0 16px 12px; }
.guidefyi-var-row {
  display: flex; align-items: baseline; gap: 8px; padding: 4px 0;
  border-bottom: 1px solid var(--border); font-size: 12px;
}
.guidefyi-var-row:last-child { border-bottom: none; }
.guidefyi-var-symbol {
  font-family: ui-monospace, 'SF Mono', 'Consolas', monospace;
  font-weight: 700; color: var(--accent); min-width: 24px;
}
.guidefyi-var-name { color: var(--text); flex: 1; }
.guidefyi-var-unit { color: var(--muted); font-size: 11px; }

/* \u2500\u2500 Salary Bar (SalaryFYI) \u2500\u2500 */
.guidefyi-salary-bar-wrap { padding: 0 16px 12px; }
.guidefyi-salary-bar {
  display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
}
.guidefyi-salary-label { font-size: 11px; color: var(--muted); width: 36px; text-align: right; }
.guidefyi-salary-track {
  flex: 1; height: 10px; background: var(--surface); border-radius: 5px;
  border: 1px solid var(--border); overflow: hidden; position: relative;
}
.guidefyi-salary-fill {
  height: 100%; border-radius: 5px; transition: width 0.5s ease;
}
.guidefyi-salary-p25 { background: color-mix(in srgb, var(--accent) 40%, var(--surface)); }
.guidefyi-salary-median { background: var(--accent); }
.guidefyi-salary-p75 { background: color-mix(in srgb, var(--accent) 70%, var(--surface)); }
.guidefyi-salary-amount {
  font-size: 11px; font-weight: 600; color: var(--text); min-width: 60px;
}

/* \u2500\u2500 Player Count / Rating Badges \u2500\u2500 */
.guidefyi-rating-badge {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 3px 8px; border-radius: 5px; font-size: 12px; font-weight: 700;
  background: color-mix(in srgb, var(--accent) 15%, var(--surface));
  color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--border));
}
.guidefyi-rating-badge svg { width: 12px; height: 12px; }

/* \u2500\u2500 Glossary \u2500\u2500 */
.guidefyi-glossary-term { font-weight: 700; color: var(--text); font-size: 15px; margin-bottom: 4px; }
.guidefyi-glossary-def { font-size: 13px; color: var(--text); line-height: 1.6; margin: 0; }
.guidefyi-glossary-cat { font-size: 11px; color: var(--muted); margin-top: 8px; }

/* \u2500\u2500 FAQ \u2500\u2500 */
.guidefyi-faq-list { padding: 0 16px 12px; }
.guidefyi-faq-item { border-bottom: 1px solid var(--border); }
.guidefyi-faq-item:last-child { border-bottom: none; }
.guidefyi-faq-q {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 0; cursor: pointer; font-size: 13px; font-weight: 600;
  color: var(--text); user-select: none;
}
.guidefyi-faq-q:hover { color: var(--link); }
.guidefyi-faq-arrow {
  width: 14px; height: 14px; transition: transform 0.2s; color: var(--muted); flex-shrink: 0;
}
.guidefyi-faq-arrow.open { transform: rotate(180deg); }
.guidefyi-faq-a {
  font-size: 12px; color: var(--muted); line-height: 1.6;
  padding: 0 0 10px 0; display: none;
}
.guidefyi-faq-a.open { display: block; }

/* \u2500\u2500 Guide Card \u2500\u2500 */
.guidefyi-guide-meta {
  display: flex; align-items: center; gap: 8px; margin-top: 8px;
  font-size: 11px; color: var(--muted);
}

/* \u2500\u2500 Compare (side-by-side) \u2500\u2500 */
.guidefyi-compare {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
}
.guidefyi-compare-col {
  padding: 12px; border-right: 1px solid var(--border);
}
.guidefyi-compare-col:last-child { border-right: none; }
.guidefyi-compare-name {
  font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px;
  text-align: center;
}
.guidefyi-compare-row {
  display: flex; justify-content: space-between; padding: 4px 0;
  font-size: 12px; border-bottom: 1px solid var(--border);
}
.guidefyi-compare-row:last-child { border-bottom: none; }
.guidefyi-compare-label { color: var(--muted); }
.guidefyi-compare-val { font-weight: 600; color: var(--text); }

/* \u2500\u2500 Links \u2500\u2500 */
.guidefyi-link {
  color: var(--link); text-decoration: none; font-size: 12px;
  display: inline-flex; align-items: center; gap: 4px;
}
.guidefyi-link:hover { text-decoration: underline; }
.guidefyi-link svg { width: 11px; height: 11px; }

/* \u2500\u2500 Card Footer \u2500\u2500 */
.guidefyi-card-footer {
  padding: 10px 16px; border-top: 1px solid var(--border);
  display: flex; justify-content: space-between; align-items: center;
}
  `}function E(){return`
/* \u2500\u2500 Card Header (clean) \u2500\u2500 */
.guidefyi-card-header {
  padding: 14px 16px; border-bottom: 1px solid var(--border); background: var(--bg);
}
.guidefyi-card-title {
  margin: 0; font-size: 15px; font-weight: 600; color: var(--text);
  display: flex; align-items: center; gap: 8px;
}
.guidefyi-card-title a { color: var(--text); text-decoration: none; }
.guidefyi-card-title a:hover { color: var(--link); }
.guidefyi-card-title svg { width: 14px; height: 14px; color: var(--muted); flex-shrink: 0; }
.guidefyi-card-subtitle { margin: 3px 0 0 0; font-size: 12px; color: var(--muted); }

/* \u2500\u2500 Card Body (clean) \u2500\u2500 */
.guidefyi-card-body { padding: 14px 16px; }
.guidefyi-card-desc { margin: 0 0 10px 0; font-size: 13px; color: var(--text); line-height: 1.5; }

/* \u2500\u2500 Properties (clean) \u2500\u2500 */
.guidefyi-props { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.guidefyi-prop {
  display: flex; flex-direction: column; gap: 1px;
  padding: 5px 8px; background: var(--bg); border-radius: 4px;
  border: 1px solid var(--border); flex: 1; min-width: 76px;
}
.guidefyi-prop-label { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; }
.guidefyi-prop-value { font-size: 13px; font-weight: 600; color: var(--text); }

/* \u2500\u2500 Tags (clean) \u2500\u2500 */
.guidefyi-tags { display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0; }

/* \u2500\u2500 Radar (clean \u2014 thinner strokes) \u2500\u2500 */
.guidefyi-radar-wrap { padding: 10px; display: flex; justify-content: center; }
.guidefyi-radar-svg { width: 180px; height: 180px; }
.guidefyi-radar-polygon { fill: color-mix(in srgb, var(--accent) 15%, transparent); stroke: var(--accent); stroke-width: 1.5; }
.guidefyi-radar-grid { fill: none; stroke: var(--border); stroke-width: 0.5; }
.guidefyi-radar-axis { stroke: var(--border); stroke-width: 0.5; }
.guidefyi-radar-label { font-size: 9px; fill: var(--muted); text-anchor: middle; }
.guidefyi-radar-value { font-size: 8px; fill: var(--accent); font-weight: 600; text-anchor: middle; }

/* \u2500\u2500 DNA Bars (clean) \u2500\u2500 */
.guidefyi-dna-bars { padding: 0 16px 10px; }
.guidefyi-dna-row { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; }
.guidefyi-dna-label { font-size: 11px; color: var(--muted); width: 76px; text-align: right; }
.guidefyi-dna-track { flex: 1; height: 6px; background: var(--surface); border-radius: 3px; border: 1px solid var(--border); overflow: hidden; }
.guidefyi-dna-fill { height: 100%; background: var(--accent); border-radius: 3px; }
.guidefyi-dna-val { font-size: 11px; color: var(--text); font-weight: 600; width: 28px; }

/* \u2500\u2500 Formula (clean) \u2500\u2500 */
.guidefyi-formula-box {
  padding: 10px 14px; margin: 6px 0; background: var(--surface);
  border: 1px solid var(--border); border-radius: 4px;
  font-family: ui-monospace, 'SF Mono', 'Consolas', monospace;
  font-size: 13px; color: var(--text); text-align: center; line-height: 1.7;
}

/* \u2500\u2500 Variables (clean) \u2500\u2500 */
.guidefyi-vars { padding: 0 16px 10px; }
.guidefyi-var-row { display: flex; align-items: baseline; gap: 6px; padding: 3px 0; border-bottom: 1px solid var(--border); font-size: 12px; }
.guidefyi-var-row:last-child { border-bottom: none; }
.guidefyi-var-symbol { font-family: ui-monospace, monospace; font-weight: 700; color: var(--accent); min-width: 20px; }
.guidefyi-var-name { color: var(--text); flex: 1; }
.guidefyi-var-unit { color: var(--muted); font-size: 11px; }

/* \u2500\u2500 Salary Bar (clean) \u2500\u2500 */
.guidefyi-salary-bar-wrap { padding: 0 16px 10px; }
.guidefyi-salary-bar { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.guidefyi-salary-label { font-size: 11px; color: var(--muted); width: 34px; text-align: right; }
.guidefyi-salary-track { flex: 1; height: 8px; background: var(--surface); border-radius: 4px; border: 1px solid var(--border); overflow: hidden; }
.guidefyi-salary-fill { height: 100%; border-radius: 4px; }
.guidefyi-salary-p25 { background: color-mix(in srgb, var(--accent) 35%, var(--surface)); }
.guidefyi-salary-median { background: var(--accent); }
.guidefyi-salary-p75 { background: color-mix(in srgb, var(--accent) 65%, var(--surface)); }
.guidefyi-salary-amount { font-size: 11px; font-weight: 600; color: var(--text); min-width: 56px; }

/* \u2500\u2500 Rating Badge (clean) \u2500\u2500 */
.guidefyi-rating-badge {
  display: inline-flex; align-items: center; gap: 3px;
  padding: 2px 6px; border-radius: 4px; font-size: 12px; font-weight: 600;
  background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--border);
}
.guidefyi-rating-badge svg { width: 11px; height: 11px; }

/* \u2500\u2500 Glossary (clean) \u2500\u2500 */
.guidefyi-glossary-term { font-weight: 600; color: var(--text); font-size: 14px; margin-bottom: 4px; }
.guidefyi-glossary-def { font-size: 13px; color: var(--text); line-height: 1.5; margin: 0; }
.guidefyi-glossary-cat { font-size: 11px; color: var(--muted); margin-top: 6px; }

/* \u2500\u2500 FAQ (clean) \u2500\u2500 */
.guidefyi-faq-list { padding: 0 16px 10px; }
.guidefyi-faq-item { border-bottom: 1px solid var(--border); }
.guidefyi-faq-item:last-child { border-bottom: none; }
.guidefyi-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; cursor: pointer; font-size: 13px; font-weight: 600; color: var(--text); user-select: none; }
.guidefyi-faq-q:hover { color: var(--link); }
.guidefyi-faq-arrow { width: 13px; height: 13px; transition: transform 0.2s; color: var(--muted); flex-shrink: 0; }
.guidefyi-faq-arrow.open { transform: rotate(180deg); }
.guidefyi-faq-a { font-size: 12px; color: var(--muted); line-height: 1.5; padding: 0 0 8px 0; display: none; }
.guidefyi-faq-a.open { display: block; }

/* \u2500\u2500 Guide Card (clean) \u2500\u2500 */
.guidefyi-guide-meta { display: flex; align-items: center; gap: 6px; margin-top: 6px; font-size: 11px; color: var(--muted); }

/* \u2500\u2500 Compare (clean) \u2500\u2500 */
.guidefyi-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
.guidefyi-compare-col { padding: 10px; border-right: 1px solid var(--border); }
.guidefyi-compare-col:last-child { border-right: none; }
.guidefyi-compare-name { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 6px; text-align: center; }
.guidefyi-compare-row { display: flex; justify-content: space-between; padding: 3px 0; font-size: 12px; border-bottom: 1px solid var(--border); }
.guidefyi-compare-row:last-child { border-bottom: none; }
.guidefyi-compare-label { color: var(--muted); }
.guidefyi-compare-val { font-weight: 600; color: var(--text); }

/* \u2500\u2500 Links (clean) \u2500\u2500 */
.guidefyi-link { color: var(--link); text-decoration: none; font-size: 12px; display: inline-flex; align-items: center; gap: 3px; }
.guidefyi-link:hover { text-decoration: underline; }
.guidefyi-link svg { width: 10px; height: 10px; }

/* \u2500\u2500 Card Footer (clean) \u2500\u2500 */
.guidefyi-card-footer { padding: 8px 16px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
  `}function te(e){switch(e){case"clean":return E();case"modern":default:return M()}}function H(e,a="modern"){return`
:host {
  display: block;
  --site-accent: ${e};
}

.guidefyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.guidefyi-widget:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.guidefyi-widget[data-size="compact"] { max-width: 280px; font-size: 13px; }
.guidefyi-widget[data-size="default"] { max-width: 420px; }
.guidefyi-widget[data-size="large"] { max-width: 720px; }

/* Light theme */
.guidefyi-widget[data-theme="light"] {
  --bg: #fff; --text: #1e293b; --border: #e2e8f0; --accent: var(--site-accent);
  --muted: #64748b; --surface: #f8fafc; --badge-bg: #f1f5f9; --badge-text: #374151;
  --link: var(--site-accent); --copy-bg: #f3f4f6; --copy-hover: #e5e7eb;
  --input-bg: #ffffff; --input-border: #d1d5db; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Dark theme */
.guidefyi-widget[data-theme="dark"] {
  --bg: #1a1a1a; --text: #f3f4f6; --border: #374151; --accent: var(--site-accent);
  --muted: #9ca3af; --surface: #111827; --badge-bg: #374151; --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff); --copy-bg: #374151; --copy-hover: #4b5563;
  --input-bg: #111111; --input-border: #4b5563; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* Sepia theme */
.guidefyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8; --text: #3d3529; --border: #d4c5a9; --accent: var(--site-accent);
  --muted: #8b7d6b; --surface: #ede8df; --badge-bg: #e8e0d0; --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529); --copy-bg: #e8e0d0; --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8; --input-border: #c4b49a; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.guidefyi-widget *, .guidefyi-widget *::before, .guidefyi-widget *::after { box-sizing: border-box; }

/* Loading */
.guidefyi-loading {
  padding: 20px 16px; text-align: center; color: var(--muted); font-size: 13px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.guidefyi-spinner {
  width: 16px; height: 16px; border: 2px solid var(--border); border-top-color: var(--accent);
  border-radius: 50%; animation: guidefyi-spin 0.7s linear infinite; display: inline-block; flex-shrink: 0;
}
@keyframes guidefyi-spin { to { transform: rotate(360deg); } }

/* Error */
.guidefyi-error { padding: 16px; color: var(--muted); font-size: 13px; text-align: center; }
.guidefyi-error p { margin: 0 0 8px 0; }
.guidefyi-error a { color: var(--link); text-decoration: none; }
.guidefyi-error a:hover { text-decoration: underline; }

/* Badge */
.guidefyi-badge {
  display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 7px;
  border-radius: 4px; background: var(--badge-bg); color: var(--badge-text);
  text-transform: uppercase; letter-spacing: 0.04em;
}

/* Search */
.guidefyi-search-wrap { padding: 12px 16px; }
.guidefyi-search-form { display: flex; gap: 8px; }
.guidefyi-search-input {
  flex: 1; padding: 8px 12px; border: 1px solid var(--input-border); border-radius: 6px;
  background: var(--input-bg); color: var(--text); font-size: 13px; font-family: inherit; outline: none;
  transition: border-color 0.15s;
}
.guidefyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}
.guidefyi-search-input::placeholder { color: var(--muted); }
.guidefyi-search-btn {
  background: var(--accent); color: #fff; border: none; border-radius: 6px;
  padding: 8px 14px; font-size: 13px; font-weight: 500; cursor: pointer;
  font-family: inherit; transition: opacity 0.15s; white-space: nowrap;
}
.guidefyi-search-btn:hover { opacity: 0.9; }

.guidefyi-search-results { padding: 0 16px 12px; }
.guidefyi-result-item { padding: 8px 0; border-bottom: 1px solid var(--border); }
.guidefyi-result-item:last-child { border-bottom: none; }
.guidefyi-result-title { font-size: 13px; font-weight: 600; color: var(--text); margin: 0 0 3px 0; }
.guidefyi-result-meta { font-size: 11px; color: var(--muted); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

/* Powered by */
.guidefyi-powered {
  display: block; text-align: center; padding: 8px 16px; font-size: 11px;
  color: var(--muted); border-top: 1px solid var(--border);
}
.guidefyi-powered a { color: var(--link); text-decoration: none; font-weight: 500; }
.guidefyi-powered a:hover { text-decoration: underline; }

/* Copy button */
.guidefyi-copy-btn {
  background: var(--copy-bg); color: var(--text); border: none; border-radius: 5px;
  padding: 4px 9px; font-size: 11px; cursor: pointer; display: inline-flex;
  align-items: center; gap: 4px; transition: background 0.15s; font-family: inherit;
}
.guidefyi-copy-btn:hover { background: var(--copy-hover); }
.guidefyi-copy-btn svg { width: 11px; height: 11px; }

/* Monospace */
.guidefyi-mono { font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Consolas', monospace; font-size: 13px; }

${te(a)}
  `}function z(e,a){let r=e.dataset.styleVariant||"modern",i=e.attachShadow({mode:"open"}),t=document.createElement("style");return t.textContent=H(a.accent,r),i.appendChild(t),i}function ne(e){let a=e.dataset.theme||"light";return a==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a}function D(e,a,r){let i=ne(a),t=a.dataset.size||"default",s=document.createElement("div");return s.className=["guidefyi-widget",r].filter(Boolean).join(" "),s.setAttribute("data-theme",i),s.setAttribute("data-size",t),e.appendChild(s),a.dataset.theme==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",n=>{s.setAttribute("data-theme",n.matches?"dark":"light")}),s}function u(e){e.innerHTML=`
    <div class="guidefyi-loading">
      <span class="guidefyi-spinner"></span>
      Loading\u2026
    </div>
  `}function o(e,a,r){e.innerHTML=`
    <div class="guidefyi-error">
      <p>${a}</p>
      <a href="https://${r.domain}" target="_blank" rel="noopener">
        Visit ${r.name}
      </a>
    </div>
  `}var A='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';function l(e){return`<span class="guidefyi-powered">Powered by <a href="https://${e.domain}" target="_blank" rel="noopener">${e.name}</a></span>`}function $(e){return`guidefyi_embed_${e}`}function se(e){try{let a=sessionStorage.getItem($(e));if(!a)return null;let r=JSON.parse(a);return Date.now()-r.ts>3e5?(sessionStorage.removeItem($(e)),null):r.data}catch{return null}}function oe(e,a){try{let r={data:a,ts:Date.now()};sessionStorage.setItem($(e),JSON.stringify(r))}catch{}}async function g(e,a,r){let i=e.endsWith("/")?e:e+"/",t=a.startsWith("/")?a.slice(1):a,s=new URL(t,i);r&&Object.entries(r).forEach(([m,h])=>s.searchParams.set(m,h));let n=s.toString(),d=se(n);if(d!==null)return d;let c=await fetch(n,{headers:{Accept:"application/json"}});if(!c.ok)throw new Error(`API error ${c.status}: ${n}`);let y=await c.json();return oe(n,y),y}async function b(e,a,r){let i=await g(e,a,r);return Array.isArray(i)?i:i&&typeof i=="object"&&"results"in i?i.results:[]}var k={calculatorDetail:e=>`calculators/${e}/`,calculatorList:"calculators/",formulaDetail:e=>`formulas/${e}/`,formulaList:"formulas/",categoryList:"categories/",categoryDetail:e=>`categories/${e}/`,glossaryDetail:e=>`glossary/${e}/`,glossaryList:"glossary/",guideDetail:e=>`guides/${e}/`,guideList:"guides/",faqList:"faqs/",stats:"stats/"},_={calculator:e=>`https://calcfyi.com/calculator/${e}/`,formula:e=>`https://calcfyi.com/formula/${e}/`,category:e=>`https://calcfyi.com/category/${e}/`,glossary:e=>`https://calcfyi.com/glossary/${e}/`,guide:e=>`https://calcfyi.com/guide/${e}/`,home:"https://calcfyi.com/"};var P='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';var B='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',q='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="8" y1="18" x2="8" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>',F='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="16" r="1.5" fill="currentColor"/><circle cx="16" cy="16" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>';function I(e){return e==null?"\u2014":e.toLocaleString("en-US")}function x(e){return e==null?"\u2014":"$"+e.toLocaleString("en-US",{maximumFractionDigits:0})}function v(e,a){return e?e.length>a?e.slice(0,a)+"\u2026":e:""}function p(e,a){return`<a class="guidefyi-link" href="${e}" target="_blank" rel="noopener">${a} ${A}</a>`}async function j(e,a,r){let i=await g(r.apiBase,k.calculatorDetail(a)),t=_.calculator(i.slug);e.innerHTML=`
    <div class="guidefyi-card-header">
      <h3 class="guidefyi-card-title">
        <a href="${t}" target="_blank" rel="noopener">${q} ${i.name}</a>
      </h3>
      <p class="guidefyi-card-subtitle">${i.category}</p>
    </div>
    <div class="guidefyi-card-body">
      ${i.description?`<p class="guidefyi-card-desc">${v(i.description,200)}</p>`:""}
      <div class="guidefyi-card-footer">
        ${p(t,"Open Calculator")}
      </div>
    </div>
    ${l(r)}
  `}async function R(e,a,r){let i=await g(r.apiBase,k.formulaDetail(a)),t=_.formula(i.slug),s=i.variables&&i.variables.length>0?`<div class="guidefyi-vars">
        ${i.variables.map(n=>`
          <div class="guidefyi-var-row">
            <span class="guidefyi-var-symbol">${n.symbol||"\u2014"}</span>
            <span class="guidefyi-var-name">${n.name}</span>
            ${n.unit?`<span class="guidefyi-var-unit">${n.unit}</span>`:""}
          </div>
        `).join("")}
       </div>`:"";e.innerHTML=`
    <div class="guidefyi-card-header">
      <h3 class="guidefyi-card-title">
        <a href="${t}" target="_blank" rel="noopener">${i.title}</a>
      </h3>
    </div>
    ${i.formula_latex?`<div class="guidefyi-formula-box">${de(i.formula_latex)}</div>`:""}
    ${s}
    <div class="guidefyi-card-body">
      ${i.explanation?`<p class="guidefyi-card-desc">${v(i.explanation,180)}</p>`:""}
      <div class="guidefyi-card-footer">
        ${p(t,"Full Formula")}
      </div>
    </div>
    ${l(r)}
  `}function de(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var C={countryDetail:e=>`countries/${e}/`,countryList:"countries/",cityList:"cities/",roleDetail:e=>`roles/${e}/`,roleList:"roles/",salaryData:"salary-data/",glossaryDetail:e=>`glossary/${e}/`,glossaryList:"glossary/",guideDetail:e=>`guides/${e}/`,guideList:"guides/",faqList:"faqs/",search:"search/",stats:"stats/"},L={country:e=>`https://salaryfyi.com/countries/${e}/`,role:e=>`https://salaryfyi.com/roles/${e}/`,salary:(e,a)=>`https://salaryfyi.com/salary/${e}/${a}/`,glossary:e=>`https://salaryfyi.com/glossary/${e}/`,guide:e=>`https://salaryfyi.com/guide/${e}/`,home:"https://salaryfyi.com/"};async function G(e,a,r){let i=await g(r.apiBase,C.countryDetail(a)),t=L.country(i.slug),s=n=>{if(!n)return"";let c={growing:"#16a34a",stable:"#eab308",declining:"#dc2626"}[n.toLowerCase()]||"var(--muted)";return`<span class="guidefyi-badge" style="background:${c}20;color:${c}">${n}</span>`};e.innerHTML=`
    <div class="guidefyi-card-header">
      <h3 class="guidefyi-card-title">
        <a href="${t}" target="_blank" rel="noopener">${i.flag_emoji||""} ${i.name}</a>
      </h3>
      <p class="guidefyi-card-subtitle">${i.continent} \xB7 ${i.currency_code}</p>
    </div>
    <div class="guidefyi-card-body">
      <div class="guidefyi-props">
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Median Salary</span>
          <span class="guidefyi-prop-value">${x(i.median_salary_usd)}</span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Top Tax Rate</span>
          <span class="guidefyi-prop-value">${i.top_income_tax_rate!=null?i.top_income_tax_rate+"%":"\u2014"}</span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Cost of Living</span>
          <span class="guidefyi-prop-value">${i.cost_of_living_index!=null?i.cost_of_living_index.toFixed(1):"\u2014"}</span>
        </div>
      </div>
      ${i.description?`<p class="guidefyi-card-desc">${v(i.description,160)}</p>`:""}
      <div class="guidefyi-card-footer">
        ${p(t,"Full Country Profile")}
      </div>
    </div>
    ${l(r)}
  `}async function N(e,a,r){let i=await g(r.apiBase,C.roleDetail(a)),t=L.role(i.slug),n={high:"#16a34a",growing:"#16a34a",moderate:"#eab308",stable:"#eab308",low:"#dc2626",declining:"#dc2626"}[i.demand_trend?.toLowerCase()]||"var(--muted)";e.innerHTML=`
    <div class="guidefyi-card-header">
      <h3 class="guidefyi-card-title">
        <a href="${t}" target="_blank" rel="noopener">${B} ${i.name}</a>
      </h3>
      <p class="guidefyi-card-subtitle">${i.category}</p>
    </div>
    <div class="guidefyi-card-body">
      <div class="guidefyi-props">
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Demand</span>
          <span class="guidefyi-prop-value" style="color:${n}">${i.demand_trend||"\u2014"}</span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Remote</span>
          <span class="guidefyi-prop-value">${i.remote_availability||"\u2014"}</span>
        </div>
      </div>
      ${i.description?`<p class="guidefyi-card-desc">${v(i.description,180)}</p>`:""}
      <div class="guidefyi-card-footer">
        ${p(t,"Full Role Profile")}
      </div>
    </div>
    ${l(r)}
  `}var Q={gameDetail:e=>`games/${e}/`,gameList:"games/",publisherList:"publishers/",designerList:"designers/",mechanicList:"mechanics/",categoryList:"categories/",awardList:"awards/",glossaryDetail:e=>`glossary/${e}/`,glossaryList:"glossary/",guideDetail:e=>`guides/${e}/`,guideList:"guides/",faqList:"faqs/",stats:"stats/"},W={game:e=>`https://boardgamefyi.com/games/${e}/`,designer:e=>`https://boardgamefyi.com/designers/${e}/`,mechanic:e=>`https://boardgamefyi.com/mechanics/${e}/`,publisher:e=>`https://boardgamefyi.com/publishers/${e}/`,glossary:e=>`https://boardgamefyi.com/glossary/${e}/`,guide:e=>`https://boardgamefyi.com/guide/${e}/`,home:"https://boardgamefyi.com/"};async function U(e,a,r){let i=await g(r.apiBase,Q.gameDetail(a)),t=W.game(i.slug),s=i.min_players&&i.max_players?i.min_players===i.max_players?`${i.min_players}`:`${i.min_players}\u2013${i.max_players}`:"\u2014",n=i.playing_time_min&&i.playing_time_max?i.playing_time_min===i.playing_time_max?`${i.playing_time_min}m`:`${i.playing_time_min}\u2013${i.playing_time_max}m`:"\u2014",d=i.bgg_rating!=null?i.bgg_rating.toFixed(1):"\u2014",c=i.bgg_weight!=null?i.bgg_weight.toFixed(1)+"/5":"\u2014";e.innerHTML=`
    <div class="guidefyi-card-header">
      <h3 class="guidefyi-card-title">
        <a href="${t}" target="_blank" rel="noopener">${F} ${i.name}</a>
      </h3>
      <p class="guidefyi-card-subtitle">${i.year_published||""} ${i.bgg_rank?"\xB7 BGG #"+I(i.bgg_rank):""}</p>
    </div>
    <div class="guidefyi-card-body">
      <div class="guidefyi-props">
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Rating</span>
          <span class="guidefyi-prop-value"><span class="guidefyi-rating-badge">${P} ${d}</span></span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Players</span>
          <span class="guidefyi-prop-value">${s}</span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Time</span>
          <span class="guidefyi-prop-value">${n}</span>
        </div>
        <div class="guidefyi-prop">
          <span class="guidefyi-prop-label">Weight</span>
          <span class="guidefyi-prop-value">${c}</span>
        </div>
      </div>
      ${i.description?`<p class="guidefyi-card-desc">${v(i.description,160)}</p>`:""}
      <div class="guidefyi-card-footer">
        ${p(t,"Full Game Profile")}
      </div>
    </div>
    ${l(r)}
  `}async function O(e,a,r){let i=a.dataset.slug;if(!i){o(e,"Missing data-slug attribute",r);return}u(e);try{let t=a.dataset.entityType||"";switch(r.site){case"calcfyi":t==="formula"?await R(e,i,r):await j(e,i,r);break;case"salaryfyi":t==="role"?await N(e,i,r):await G(e,i,r);break;case"boardgamefyi":await U(e,i,r);break;default:o(e,`Unknown site: ${r.site}`,r)}}catch(t){o(e,t.message,r)}}var w=new Set;function V(e,a,r,i){let t=`defined-term:${r}`;if(w.has(t))return;w.add(t);let s={"@context":"https://schema.org","@type":"DefinedTerm",name:e,description:a.slice(0,300),url:r,inDefinedTermSet:{"@type":"DefinedTermSet",name:`${i} Glossary`,url:r.replace(/glossary\/.*/,"glossary/")}};J(s)}function Y(e,a){let r=`faq:${a}`;if(w.has(r))return;w.add(r);let i={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.slice(0,10).map(t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer.slice(0,500)}}))};J(i)}function J(e){let a=document.createElement("script");a.type="application/ld+json",a.textContent=JSON.stringify(e),document.head.appendChild(a)}function le(e,a){return`glossary/${a}/`}function ce(e,a,r){return`https://${a}/glossary/${r}/`}async function K(e,a,r){let i=a.dataset.slug;if(!i){o(e,"Missing data-slug",r);return}u(e);try{let t=await g(r.apiBase,le(r.site,i)),s=t.term||t.name||i,n=ce(r.site,r.domain,t.slug);a.dataset.noSnippet!=="true"&&V(s,t.definition,n,r.name),e.innerHTML=`
      <div class="guidefyi-card-body">
        <div class="guidefyi-glossary-term">${s}</div>
        ${t.category?`<div class="guidefyi-glossary-cat"><span class="guidefyi-badge">${t.category}</span></div>`:""}
        <p class="guidefyi-glossary-def">${t.definition}</p>
        <div style="margin-top:10px">${p(n,"Read more")}</div>
      </div>
      ${l(r)}
    `}catch(t){o(e,t.message,r)}}function ge(e,a){return`https://${e}/guide/${a}/`}async function X(e,a,r){let i=a.dataset.slug;if(!i){o(e,"Missing data-slug",r);return}u(e);try{let t=await g(r.apiBase,`guides/${i}/`),s=ge(r.domain,t.slug);e.innerHTML=`
      <div class="guidefyi-card-header">
        <h3 class="guidefyi-card-title">
          <a href="${s}" target="_blank" rel="noopener">${t.title}</a>
        </h3>
        ${t.guide_type||t.category?`<p class="guidefyi-card-subtitle">${t.guide_type||t.category||""}</p>`:""}
      </div>
      <div class="guidefyi-card-body">
        ${t.excerpt?`<p class="guidefyi-card-desc">${v(t.excerpt,200)}</p>`:""}
        <div class="guidefyi-guide-meta">
          ${t.reading_time_minutes?`<span>${t.reading_time_minutes} min read</span>`:""}
          ${t.series?`<span>\xB7 ${t.series}</span>`:""}
        </div>
        <div style="margin-top:10px">${p(s,"Read Guide")}</div>
      </div>
      ${l(r)}
    `}catch(t){o(e,t.message,r)}}var pe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';async function Z(e,a,r){u(e);try{let i=a.dataset.slug,t={};i&&(t.category=i);let s=await b(r.apiBase,"faqs/",t);if(!s.length){o(e,"No FAQs found",r);return}let n=s.slice(0,10);a.dataset.noSnippet!=="true"&&Y(n,`https://${r.domain}/`),e.innerHTML=`
      <div class="guidefyi-card-header">
        <h3 class="guidefyi-card-title">Frequently Asked Questions</h3>
        <p class="guidefyi-card-subtitle">${r.name}</p>
      </div>
      <div class="guidefyi-faq-list">
        ${n.map((d,c)=>`
          <div class="guidefyi-faq-item">
            <div class="guidefyi-faq-q" data-idx="${c}">
              <span>${d.question}</span>
              <span class="guidefyi-faq-arrow">${pe}</span>
            </div>
            <div class="guidefyi-faq-a" data-idx="${c}">${d.answer}</div>
          </div>
        `).join("")}
      </div>
      ${l(r)}
    `,e.querySelectorAll(".guidefyi-faq-q").forEach(d=>{d.addEventListener("click",()=>{let c=d.dataset.idx,y=e.querySelector(`.guidefyi-faq-a[data-idx="${c}"]`),m=d.querySelector(".guidefyi-faq-arrow"),h=y.classList.contains("open");y.classList.toggle("open"),m.classList.toggle("open")})})}catch(i){o(e,i.message,r)}}function ee(e,a,r){let i=a.dataset.placeholder||`Search ${r.entityName}...`,t=`https://${r.domain}${r.searchPath}`;e.innerHTML=`
    <div class="guidefyi-search-wrap">
      <form class="guidefyi-search-form" action="${t}" target="_blank" method="GET">
        <input class="guidefyi-search-input" type="text" name="q" placeholder="${i}" autocomplete="off" />
        <button class="guidefyi-search-btn" type="submit">Search</button>
      </form>
    </div>
    ${l(r)}
  `}function ie(e,a,r){switch(e){case"calcfyi":return`formulas/${a}/`;case"salaryfyi":return r==="role"?`roles/${a}/`:`countries/${a}/`;case"boardgamefyi":return`games/${a}/`;default:return`${a}/`}}function ue(e,a,r){switch(e){case"salaryfyi":return[["Median Salary",x(a.median_salary_usd),x(r.median_salary_usd)],["Top Tax Rate",(a.top_income_tax_rate??"\u2014")+"%",(r.top_income_tax_rate??"\u2014")+"%"],["Cost of Living",String(a.cost_of_living_index??"\u2014"),String(r.cost_of_living_index??"\u2014")]];case"boardgamefyi":return[["BGG Rating",String(a.bgg_rating?.toFixed(1)??"\u2014"),String(r.bgg_rating?.toFixed(1)??"\uFFFD\uFFFD\uFFFD")],["Weight",String(a.bgg_weight?.toFixed(1)??"\u2014"),String(r.bgg_weight?.toFixed(1)??"\u2014")],["Players",`${a.min_players}\u2013${a.max_players}`,`${r.min_players}\u2013${r.max_players}`],["Time",`${a.playing_time_min}\u2013${a.playing_time_max}m`,`${r.playing_time_min}\u2013${r.playing_time_max}m`]];default:return[]}}async function re(e,a,r){let i=a.dataset.slugs;if(!i){o(e,"Missing data-slugs (comma-separated)",r);return}let[t,s]=i.split(",").map(n=>n.trim());if(!t||!s){o(e,"Need two slugs separated by comma",r);return}u(e);try{let n=a.dataset.entityType||"",[d,c]=await Promise.all([g(r.apiBase,ie(r.site,t,n)),g(r.apiBase,ie(r.site,s,n))]),y=ue(r.site,d,c);e.innerHTML=`
      <div class="guidefyi-card-header">
        <h3 class="guidefyi-card-title">${d.name} vs ${c.name}</h3>
        <p class="guidefyi-card-subtitle">${r.name} Comparison</p>
      </div>
      <div class="guidefyi-compare">
        <div class="guidefyi-compare-col">
          <div class="guidefyi-compare-name">${d.name}</div>
          ${y.map(([m,h])=>`
            <div class="guidefyi-compare-row">
              <span class="guidefyi-compare-label">${m}</span>
              <span class="guidefyi-compare-val">${h}</span>
            </div>
          `).join("")}
        </div>
        <div class="guidefyi-compare-col">
          <div class="guidefyi-compare-name">${c.name}</div>
          ${y.map(([,,m])=>`
            <div class="guidefyi-compare-row">
              <span class="guidefyi-compare-label">&nbsp;</span>
              <span class="guidefyi-compare-val">${m}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${l(r)}
    `}catch(n){o(e,n.message,r)}}async function ae(e,a,r){let i=a.dataset.country,t=a.dataset.role;if(!i||!t){o(e,"Missing data-country and/or data-role",r);return}u(e);try{let s=await b(r.apiBase,"salary-data/",{country__slug:i,role__slug:t});if(!s.length){o(e,`No salary data for ${i} / ${t}`,r);return}let n=s.reduce((y,m)=>y.year>m.year?y:m),d=Math.max(n.p75_usd||0,n.median_usd||0,1),c=`https://${r.domain}/salary/${i}/${t}/`;e.innerHTML=`
      <div class="guidefyi-card-header">
        <h3 class="guidefyi-card-title">Salary Range</h3>
        <p class="guidefyi-card-subtitle">${t} in ${i} (${n.year})</p>
      </div>
      <div class="guidefyi-salary-bar-wrap">
        ${n.p25_usd!=null?`
          <div class="guidefyi-salary-bar">
            <span class="guidefyi-salary-label">P25</span>
            <div class="guidefyi-salary-track">
              <div class="guidefyi-salary-fill guidefyi-salary-p25" style="width:${(n.p25_usd/d*100).toFixed(1)}%"></div>
            </div>
            <span class="guidefyi-salary-amount">${x(n.p25_usd)}</span>
          </div>
        `:""}
        ${n.median_usd!=null?`
          <div class="guidefyi-salary-bar">
            <span class="guidefyi-salary-label">Med</span>
            <div class="guidefyi-salary-track">
              <div class="guidefyi-salary-fill guidefyi-salary-median" style="width:${(n.median_usd/d*100).toFixed(1)}%"></div>
            </div>
            <span class="guidefyi-salary-amount">${x(n.median_usd)}</span>
          </div>
        `:""}
        ${n.p75_usd!=null?`
          <div class="guidefyi-salary-bar">
            <span class="guidefyi-salary-label">P75</span>
            <div class="guidefyi-salary-track">
              <div class="guidefyi-salary-fill guidefyi-salary-p75" style="width:${(n.p75_usd/d*100).toFixed(1)}%"></div>
            </div>
            <span class="guidefyi-salary-amount">${x(n.p75_usd)}</span>
          </div>
        `:""}
        ${n.net_median_usd!=null?`
          <div style="padding:4px 0;font-size:12px;color:var(--muted)">
            After-tax median: <strong style="color:var(--text)">${x(n.net_median_usd)}</strong>
          </div>
        `:""}
      </div>
      <div class="guidefyi-card-footer">
        ${p(c,"Full Salary Data")}
      </div>
      ${l(r)}
    `}catch(s){o(e,s.message,r)}}var f={site:"salaryfyi",name:"SalaryFYI",domain:"salaryfyi.com",accent:"#16A34A",attribute:"data-salaryfyi",apiBase:"https://salaryfyi.com/api/v1/",searchPath:"/search/",entityName:"Countries",entitySlug:"united-states"};async function fe(e){let a=e.dataset[f.attribute.replace("data-","")]||"entity",r=e.dataset.slug||"",i=z(e,f),t=D(i,e);try{switch(a){case"entity":await O(t,e,f);break;case"glossary":await K(t,e,f);break;case"guide":await X(t,e,f);break;case"faq":await Z(t,e,f);break;case"search":ee(t,e,f);break;case"compare":await re(t,e,f);break;case"salary-compare":await ae(t,e,f);break;default:o(t,`Unknown widget type: ${a}`,f)}}catch(s){o(t,s.message,f)}}var S=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(S.unobserve(a.target),fe(a.target))})},{rootMargin:"200px"});function T(){document.querySelectorAll("[data-salaryfyi]").forEach(e=>{e.shadowRoot||S.observe(e)}),document.querySelectorAll("salaryfyi-entity, salaryfyi-glossary, salaryfyi-search, salaryfyi-faq, salaryfyi-guide, salaryfyi-compare").forEach(e=>{if(!e.shadowRoot){let a=e.dataset;a[f.attribute.replace("data-","")]=e.tagName.split("-").pop().toLowerCase(),e.getAttribute("slug")&&(a.slug=e.getAttribute("slug")),e.getAttribute("theme")&&(a.theme=e.getAttribute("theme")),e.getAttribute("style-variant")&&(a.styleVariant=e.getAttribute("style-variant")),e.getAttribute("size")&&(a.size=e.getAttribute("size")),S.observe(e)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();new MutationObserver(()=>T()).observe(document.body,{childList:!0,subtree:!0});
