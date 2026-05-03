# mirchez.com — COWORK

> Brain persistente del proyecto. Visión, voz, contenido, decisiones de diseño, backlog. Se actualiza cada vez que avanzamos. Si algo no está acá y se decidió, falta agregarlo.

**Última actualización:** 2026-05-02

---

## Visión

Personal site de Miguel Miranda (`@mirchez`) que comunique en 5 segundos: **AI engineer que ships production-ready software**.

Usado para:
1. **Aplicaciones a YC** (Talkeo y/o vacantes YC). Founder/eng creíble.
2. **Roles AI engineer remoto US.** Reemplazo del portfolio actual (`miguel-miranda-portfolio.vercel.app`) que es genérico full-stack student.
3. **Blog.** Plataforma propia para posts técnicos. Empieza vacío o con 1 post; se llena con tiempo.

Lo que **no** es:
- Un CV con bullets.
- Un dashboard de "skills" con barras de progreso.
- Una landing de agencia con CTAs "Let's collaborate".

---

## Inspiración: rauchg.com

Validado con screenshots 2026-05-02. Decisiones tomadas:

- **Look & feel:** copia 1:1 la estética. Fondo `#000`. Geist Sans + Geist Mono. Container centrado angosto. Sin decoración.
- **Header:** nombre bold a la izq + 2 links a la der (`About`, `Follow me` con ícono X).
- **Home:** lista de posts agrupada por año. Fila = `[año dimmed mono]  [título]  [view count dimmed mono]`. Año aparece solo en el primer post de su año. Hover = pill gris sutil bajo el título.
- **Post page:**
  - Mismo header.
  - Título grande bold.
  - Meta line monospace dimmed: `@mirchez | <date> | <X views>`.
  - Body sans, prose ~640-680px, italics para énfasis, links underline always.
  - Footer del post: `Miguel Miranda (@mirchez)` izq mono + `Source` der (link al `.mdx` en GitHub).
- **About:** 2 cols desktop (texto izq, foto B/N redonda der). Bio en párrafos cortos primera persona. Sección `Technical contributions` con prefijo `—` em-dash en lugar de bullets.
- **NO copiamos:** logo, colores específicos de los charts custom, contenido. La estructura sí, la voz y contenido son de Miguel.

---

## Voz / tono

- **Sobria, primera persona, honesta.** "I'm a software engineer..." no "🚀 Passionate full-stack developer building amazing products!".
- **Específica > genérica.** "I migrated an EMR's storage from Azure Blob to AWS S3 in production" > "I have experience with cloud migrations".
- **Sin self-deprecation forzada ni humblebrag.** Decir lo que hizo, qué pasó, qué aprendió.
- **Latam → US sin disculpa.** Origen en Paraguay es parte de la historia, no algo a esconder. (Rauch lo hace: "originally from Lanús, Buenos Aires, Argentina").
- **Inglés natural, no traducido.** Si una frase suena a "translated from Spanish" reescribir.

---

## Posicionamiento

**Identidad pública:** AI engineer.
- LinkedIn ya: *"AI Engineer | Building AI-powered products"*.
- GitHub README ya: stack AI honesto (LangChain, OpenAI API, Vercel AI SDK, vector DBs, RAG, Pipelines).

**Tensión y cómo resolverla:**
- AI engineer (lo que vende) vs. Brightlight full-stack (lo que paga la cuenta) vs. estudiante que apenas ship apps con AI.
- **Resolución:** hero/tagline = AI engineer. `/about` Technical contributions = balance honesto. Brightlight tiene peso real (no esconder, no minimizar — es prueba de ownership en production). Talkeo + Alveusgg + Telos cargan el lado AI.

**Tagline candidato (a iterar):**
- *"AI engineer. I ship production-ready software."*
- *"I build AI-powered products."*
- *"AI engineer building tools that ship."*

Decidir cuando el about esté drafteado.

---

## Decisiones de diseño / arquitectura

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-05-02 | Stack: Next.js 15 App Router + MDX + Tailwind + Vercel + Vercel KV | Mismo stack que Rauch. Miguel ya lo maneja. KV gratis tier para view counts. |
| 2026-05-02 | Repo público open source desde día 1 | Pattern Rauch (`Source` link). Demuestra confianza, parte del look. |
| 2026-05-02 | Solo `/`, `/about`, `/[year]/[slug]` | Mínimo viable Rauch. No agregar `/projects`, `/work`, `/contact`. |
| 2026-05-02 | Idioma: inglés único | Target US/YC. `/sobre-mi` ES descartado por simplicidad y signal (somos serios). |
| 2026-05-02 | Dominio: `mirchez.com` | Username consistente (LinkedIn, X, GitHub). Memorable. |
| 2026-05-02 | Brightlight: nombrar empleador, descripción genérica de features, NO nombrar clientes ni compañeros | Empleador es público (LinkedIn). Confidencialidad de cliente/datos sigue. Ver `CLAUDE.md` sección Confidencialidad. |
| 2026-05-02 | Balance posicionamiento: hero AI eng, Technical contributions balanceado | Brightlight es XP real, no esconder. Pero la identidad se vende AI. |
| 2026-05-02 | Auto light/dark via `prefers-color-scheme` (sin toggle UI) | Rauch lo hace así. Match a la inspiración + zero JS overhead + respeta preferencia del visitante. |
| 2026-05-02 | Posts route-based (`app/(post)/<year>/<slug>/page.mdx`) + manifest `app/posts.json`, NO carpeta `posts/` con dynamic route | Espejo 1:1 de Rauch. Menos deps (sin gray-matter ni zod). Frontmatter via `export const metadata`. Trade-off: agregar post requiere line en posts.json. |

---

## Technical contributions (draft, para `/about`)

Orden propuesto (más fuerte primero — Rauch ordena por relevancia, no cronológico):

1. **Talkeo.ai** — Co-founder and engineer at Talkeo, an AI-powered language tutor that teaches English to Spanish and Portuguese speakers through voice. Built the pedagogy prompts (CEFR-aligned, code-switching policy, L1 transfer error correction), the LiveKit voice pipeline, and the Fish Audio TTS integration.
2. **Brightlight Health** — Software engineer at Brightlight Health, a healthcare SaaS / EMR. Shipped multi-timezone scheduling with drag-and-drop, billing with Stripe, PDF forms using Adobe's API with LLM autofill, video sessions with JWT auth and AI transcription, and a storage migration from Azure to AWS S3 in production.
3. **Telos** — AI website builder that generates full sites from prompts. Built with Next.js, tRPC, Prisma, and OpenAI. Async AI workflows with Inngest, type-safe end to end.
4. **Alveusgg** — Open source contributor. Twitch extension used by 10k+ daily users supporting Alveus Sanctuary's livestream.
5. **DevTree** — Developer-focused link aggregator. REST API with JWT auth, real-time updates over WebSockets.

Iterar redacción cuando esté el draft del about completo.

---

## Backlog de posts (ideas)

Sin presión de publicar. Cuando uno esté listo, sale.

- **"Building an EMR's calendar from scratch in 4 months"** — multi-timezone, drag-and-drop, shifts con repeat. Técnico, demuestra ownership. Sin nombrar Brightlight si Miguel prefiere abstraerlo, o con nombre y sin clientes.
- **"Why we're building Talkeo"** — founder voice. Por qué un AI tutor con voz, qué falla en Duolingo Max / TalkPal / Quazel. Link a YC application si aplican.
- **"Pedagogy prompts: what we learned shipping voice tutoring"** — técnico, cita papers, muestra ejemplos do/don't. Contenido que ya existe en Talkeo (`base_system.md`, `pedagogy.md`).
- **"Migrating an EMR's storage from Azure to S3 in production"** — runbook, qué salió bien y qué pateó. Sin clientes nombrados.
- **"On vibecoding (and how to stop being one)"** — honesto, autocrítico, ángulo Latam. Rauch-friendly, founder-friendly. Riesgo: sobreexponer debilidad.

Decidir el primero cuando el site esté deployado.

---

## TODO inmediato

- [ ] Confirmar dominio `mirchez.com` (registrar si no está, apuntar DNS a Vercel).
- [ ] Scaffold Next.js 15 + Tailwind + Geist + MDX.
- [ ] Setup Vercel KV (view counts).
- [ ] Layout base (header + container + footer monospace).
- [ ] `/` con lista vacía o con 1 post placeholder.
- [ ] `/about` con bio drafted + Technical contributions + foto.
- [ ] OG image dinámica.
- [ ] RSS, sitemap, robots.
- [ ] Deploy a `mirchez.com`.
- [ ] Reemplazar links en LinkedIn portfolio + GitHub bio cuando esté live.

---

## Backlog post-launch

- [ ] Primer post real (decidir cuál del backlog).
- [ ] OG image específica por post (si aporta).
- [ ] Newsletter? — descartado por ahora, fricción innecesaria. Reevaluar a los 3 posts.
- [ ] Comentarios? — no. Rauch no tiene. Cero fricción.
- [ ] Dark/light toggle UI? — no. Auto via `prefers-color-scheme` (igual que Rauch). Sin toggle, sin localStorage. El OS manda.
