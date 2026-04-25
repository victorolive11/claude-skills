# claude-skills

Collection de skills Claude Code installés dans ce repo.

Source de la liste curée : <https://github.com/travisvn/awesome-claude-skills>

## Skills installés (136 SKILL.md au total)

### Officiels — `skills/anthropic/` (17 skills, depuis `anthropics/skills`)

Documents : `docx`, `pdf`, `pptx`, `xlsx`
Design & créatif : `algorithmic-art`, `canvas-design`, `slack-gif-creator`, `theme-factory`
Dev : `frontend-design`, `web-artifacts-builder`, `mcp-builder`, `webapp-testing`, `claude-api`, `doc-coauthoring`
Communication : `brand-guidelines`, `internal-comms`
Création de skills : `skill-creator`

### Communautaires

- **`skills/superpowers/`** — plugin `obra/superpowers` (14 skills + agents + hooks + commands). Méthodologie complète de dev pour agents de code (TDD, subagent-driven-dev, git worktrees…)
- **`skills/superpowers-skills/`** — `obra/superpowers-skills` (31 skills). Extension communautaire : architecture, debugging, problem-solving, meta, testing, collaboration
- **`skills/superpowers-lab/`** — `obra/superpowers-lab` (5 skills expérimentaux)
- **`skills/playwright/`** — `lackeyjb/playwright-skill`. Automation navigateur généraliste
- **`skills/d3js/`** — `chrisvoncsefalvay/claude-d3js-skill`. Visualisations D3.js
- **`skills/ios-simulator-skill/`** — `conorluddy/ios-simulator-skill`. Build & test iOS via automation
- **`skills/web-asset-generator/`** — `alonw0/web-asset-generator`. Favicons, app icons, images sociales
- **`skills/frontend-slides/`** — `zarazhangrui/frontend-slides`. Présentations HTML animées
- **`skills/ffuf/`** — `jthack/ffuf_claude_skill`. Fuzzing web pour pentest
- **`skills/skill-seekers/`** — `yusufkaraaslan/Skill_Seekers`. Convertit des sites de doc en skills Claude
- **`skills/frontend-design-plugin/`** — `anthropics/claude-code/plugins/frontend-design`. Version plugin du skill frontend-design (incl. `plugin.json`). Coexiste avec `skills/anthropic/frontend-design/` qui est la version skill-seul.
- **`skills/marketingskills/`** — `coreyhaines31/marketingskills` (38 skills). Plugin marketing pour marketeurs tech & fondateurs : CRO (landing/form/popup/onboarding/signup/paywall), copywriting, SEO (audit, AI SEO, programmatic, schema), paid ads, ad creative, email sequences, cold email, ASO, pricing, referral, revops, sales enablement, customer research, etc.
- **`skills/ui-ux-pro-max/`** — `nextlevelbuilder/ui-ux-pro-max-skill` v2.5.0 (7 skills). Design intelligence UI/UX : 67 UI styles (glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento, dark mode, flat…), 161 palettes de couleurs, 57 font pairings, 99 UX guidelines, 25 types de charts, 15+ stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Sous-skills : `ui-ux-pro-max`, `ui-styling`, `design`, `design-system`, `brand`, `banner-design`, `slides`.
- **`skills/claude-mem/`** — `thedotmack/claude-mem` v12.3.9 (7 skills + hooks + UI + scripts + MCP server). Système de mémoire persistante cross-session pour Claude Code. Sous-skills : `mem-search`, `smart-explore`, `make-plan`, `do`, `knowledge-agent`, `timeline-report`, `version-bump`. Note : le binaire Mac arm64 `scripts/claude-mem` (63M) n'est pas inclus — récupérer via `npm i claude-mem` ou releases GitHub si besoin sur macOS.
- **`skills/planning-with-files/`** — `OthmanAdi/planning-with-files` v2.35.0 (6 skills, multilingue). Planning Manus-style à base de fichiers markdown persistants (`task_plan.md`, `findings.md`, `progress.md`). Récupération automatique de session après `/clear`. Versions : EN, ES, DE, AR, ZH, ZH-T. Hook `UserPromptSubmit` qui restaure le contexte du plan au démarrage de chaque tour.
- **`skills/mempalace/`** — `mempalace/mempalace` v3.3.3 (1 skill Claude + 1 intégration openclaw). Memory palace AI : mine projets/conversations dans une base searchable (ChromaDB + RAG). 19 outils MCP, hooks d'auto-save, setup guidé. Le plugin nécessite `pip install mempalace` ou équivalent pour activer le serveur MCP.

## Non installés (disponibles sur demande)

- `claude-scientific-skills` (K-Dense-AI) — ~140 skills scientifiques (bio, chem, quantum, stats)
- `trailofbits/skills` — ~72 skills audit sécurité & smart contracts
- `expo/skills` — ~13 skills dev mobile Expo
- `claudeskill-loki-mode` — framework orchestration multi-agent (lourd, ~71M)

## Installation canonique

Pour les plugins officiellement distribués, préfère le marketplace Claude :
```
/plugin install superpowers@claude-plugins-official
```
Le contenu ici sert de copie locale / backup.
