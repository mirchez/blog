# Plan 01 — Launch

> Roadmap ejecutable a `mirchez.com` live. Bloques chicos, cada uno testeable solo. Si un bloque falla el test, no avanzamos. No batch merge — cada fase es un PR/commit revisable en preview.

**Última actualización:** 2026-05-02
**Estado global:** 🟡 Phase 0-4 + 6-8 done, Phase 5/9 pendientes

> **Nota arquitectónica (2026-05-02):** Phase 2 cambió respecto al plan original. Posts viven como rutas nativas (`app/(post)/<year>/<slug>/page.mdx`) + manifest `app/posts.json`, igual que rauchg/blog — NO en una carpeta `posts/` con dynamic route. Plan detallado de la fase: `~/.claude/plans/image-24-unified-goose.md`. También se sumó light/dark auto via `prefers-color-scheme` (no estaba en el plan original).

Leyenda: ⚪ pendiente · 🟡 en progreso · 🟢 done · ❌ bloqueado

---

## Pre-requisitos (Miguel)

Antes de Phase 0, Miguel resuelve:

- [ ] **Dominio `mirchez.com`** — ¿ya registrado? Si no, comprar (Vercel Domains recomendado, integración directa).
- [ ] **Cuenta Vercel** — confirmada con email `mmirandasanchez16@gmail.com` o crear.
- [ ] **Cuenta Vercel KV** — incluida en plan free, se crea desde dashboard cuando llegue la fase.
- [ ] **Foto B/N para `/about`** — opcional al inicio, bloquea solo Phase 5. Arrancamos sin.
- [ ] **GitHub repo** — Miguel decide nombre. Sugerencia: `mirchez/personal-website` o `mirchez/blog` (siguiendo Rauch). Public.

---

## Phase 0 — Repo init & scaffolding 🟢

**Goal:** repo Git inicializado, Next.js 15 corriendo en localhost.

**Resultado (2026-05-02):**
- Next.js 16.2.4 + React 19.2.4 + Tailwind v4 + TS 5.9 + ESLint 9 + Turbopack
- Repo: `github.com/mirchez/blog`
- Vercel project: `prj_fiJtkqAiUA3lzOAr2Z0xEX4GqoX3`, framework auto-detected
- URL limpia: `blog-phi-ten-96.vercel.app`
- typecheck + lint + build limpios
- Auto-deploy en push a `main` activo

**Tareas:**
- [ ] `git init` en `personal-website/`. `.gitignore` standard Next.js.
- [ ] `pnpm create next-app@latest .` con: TypeScript ✓, Tailwind ✓, App Router ✓, src/ ✗, import alias `@/*` ✓.
- [ ] Verificar Next.js 15 + React 19 + Tailwind v4 en `package.json`.
- [ ] Push a `github.com/mirchez/<repo-name>` public.
- [ ] Conectar repo a Vercel (auto-deploy en `main`).

**Test de fase:**
- `pnpm dev` → localhost:3000 muestra Next.js default.
- Push a `main` → Vercel preview deploya en `<project>.vercel.app`.
- Build limpio: `pnpm build` sin errores.

**Done criteria:** localhost y preview Vercel funcionan, repo en GitHub.

---

## Phase 1 — Look & feel base 🟢

**Goal:** Layout global con header + container + footer, fonts Geist, fondo negro, tipografía Rauch-like. Página home placeholder.

**Resultado (2026-05-02):**
- `app/layout.tsx`: container max-w-2xl, Geist Sans + Mono via next/font, metadata real (title, OG, Twitter, robots)
- `app/globals.css`: bg #000, color-scheme dark, font-feature ss01+cv11
- `components/header.tsx`: nombre bold + links About / Follow me con SVG X inline
- `components/footer.tsx`: placeholder mono dimmed
- `app/page.tsx`: "Posts coming soon."
- Public assets default removidos
- typecheck + lint + build limpios

**Tareas:**
- [ ] `app/layout.tsx`: `lang="en"`, fondo `bg-black`, texto `text-zinc-100`, Geist Sans + Geist Mono via `next/font/google` (o `geist` package oficial).
- [ ] `components/header.tsx`: nombre bold izq, links `About` + `Follow me` (X) der. Sticky? — no, scroll natural como Rauch.
- [ ] `components/footer.tsx`: line monospace dimmed. Vacío en home, llenado en posts.
- [ ] Container centrado: max-width ~640-680px (medir Rauch real con DevTools si dudas).
- [ ] `app/page.tsx`: solo título "Posts coming soon" o vacío.
- [ ] `app/globals.css`: reset mínimo, prose styles base.
- [ ] Metadata global: title, description, theme-color.

**Test de fase:**
- Visual side-by-side con `rauchg.com`: header alineado, container ancho similar, fondo negro.
- Lighthouse: Performance >95, Accessibility >95.
- `pnpm typecheck && pnpm lint` clean.

**Done criteria:** la página vacía ya parece "el site de alguien", no un Next.js default.

---

## Phase 2 — MDX pipeline 🟢

**Goal original:** posts en MDX en `posts/<year>/<slug>.mdx` parseados con gray-matter.
**Goal real ejecutado:** posts route-based estilo Rauch (`app/(post)/<year>/<slug>/page.mdx`) + manifest `app/posts.json`.

**Resultado (2026-05-02):**
- @next/mdx + @mdx-js/react + @mdx-js/loader + @types/mdx instalados
- `next.config.ts` con `withMDX`, `pageExtensions`, `experimental.mdxRs: true`
- `mdx-components.tsx` root con overrides: a, p, h1-h3, code (inline + block), ul, ol, li, blockquote
- `app/(post)/layout.tsx` shared para todos los posts
- `app/(post)/components/*.tsx` (8 archivos de prose)
- `app/posts.json` manifest, `app/get-posts.ts` con `Post` type
- Test post: `app/(post)/2026/hello-world/page.mdx`
- `app/page.tsx`: home con lista mínima `[year] [title] [—]` (lista pulida → Phase 3)
- **Bonus:** light/dark auto via `prefers-color-scheme` (todos los componentes Phase 1 + 2 ajustados)
- typecheck + lint + build limpios

**Tareas:**
- [ ] Instalar `@next/mdx`, `gray-matter`, `remark-gfm`, `rehype-slug`, `rehype-pretty-code` (syntax highlight).
- [ ] `mdx-components.tsx`: overrides para `h1/h2/p/a/code/pre/img` con prose styles.
- [ ] `lib/posts.ts`: leer `posts/`, parse frontmatter (`title, date, slug, year`), retornar lista ordenada desc.
- [ ] Frontmatter schema validado con Zod.
- [ ] Posts de prueba: 2 fake posts en años distintos (`posts/2026/hello.mdx`, `posts/2025/draft.mdx`) — borrables después.

**Test de fase:**
- Dropear un `.mdx` nuevo → aparece sin tocar código.
- `lib/posts.ts` retorna posts ordenados, año correcto.
- Frontmatter inválido → build falla con error claro (no silencioso).

**Done criteria:** pipeline funciona, los 2 fake posts existen para Phase 3.

---

## Phase 3 — Home (lista de posts) 🟢

**Goal:** `/` renderiza lista Rauch-style: año dimmed mono | título | views dimmed mono.

**Resultado (2026-05-02):**
- `app/page.tsx`: agrupación por año (año solo en el primer post de cada año), año en mono dimmed izq, título center, views mono dimmed der
- Hover state: pill gris sutil con `rounded-md px-1.5 py-0.5` bajo el título (group-hover)
- Color tokens consistentes con light/dark
- Server component sin SWR (live updates → Phase 6 con KV)

**Tareas:**
- [ ] `app/page.tsx`: importar lista de `lib/posts.ts`.
- [ ] Componente `<PostList />`: agrupa por año, año aparece solo en el primer post de su año (resto vacío en col izq).
- [ ] Hover state: pill gris sutil bajo el título (`hover:bg-zinc-900 rounded`).
- [ ] Views column: por ahora hardcoded `—` o `0`. Wire-up real en Phase 6.
- [ ] Fila completa = `<Link>` al post.
- [ ] Responsive: mobile collapsa año arriba del título.

**Test de fase:**
- Visual side-by-side con Rauch: agrupación, alineación, hover.
- Click en cualquier fila → navega a la URL del post (404 OK por ahora).
- Mobile (375px): legible, sin overflow.

**Done criteria:** home se ve como Rauch con tus fake posts.

---

## Phase 4 — Post page (`/[year]/[slug]`) 🟢

**Goal:** página de post completa con meta line, prose, footer con Source link.

**Resultado (2026-05-02):**
- `<PostMeta id={...} />` server component: lee posts.json, renderiza `@mirchez · <date>` izq + `<views> views` der en monospace dimmed
- `<PostFooter id={...} />` server component: byline `Miguel Miranda (@mirchezz)` izq + `Source` der (link al `.mdx` en GitHub) en monospace dimmed
- Ambos imports manuales en cada `.mdx` (explícito > magia). Pattern simple: cada post agrega `<PostMeta id="X" />` y `<PostFooter id="X" />`
- H1 ajustado: `mb-3` (era mb-6) para que la meta line quede visualmente atada al título
- 404 ya manejado por Next.js _not-found

**Tareas:**
- [ ] `app/[year]/[slug]/page.tsx`: dynamic route, leer MDX correspondiente.
- [ ] `generateStaticParams` para SSG.
- [ ] `generateMetadata` por post (title, description, OG).
- [ ] Componente `<PostMeta />`: línea monospace `@mirchez | <date> | <views>`. Date formateada `Oct 17, 2025 (Xd ago)`.
- [ ] Footer del post: `Miguel Miranda (@mirchez)` izq mono, `Source` der → link a `github.com/mirchez/<repo>/blob/main/posts/<year>/<slug>.mdx`.
- [ ] Prose styles: link underline, code inline + bloques con highlight, italics, em-dash list `—`.
- [ ] 404 propio si slug no existe.

**Test de fase:**
- Cada fake post: navegación funciona, meta + body + footer presentes.
- Source link abre el archivo en GitHub.
- 404 en `/2099/fake` se ve consistente con el site.
- View source en navegador: HTML semántico (`article`, `time`, `h1`).

**Done criteria:** post page replica Rauch en estructura. Solo falta view counts reales.

---

## Phase 5 — About page

**Goal:** `/about` con bio + Technical contributions + foto (o placeholder).

**Tareas:**
- [ ] `app/about/page.tsx`: 2 cols desktop, stack mobile.
- [ ] Bio drafted en inglés (Miguel itera con Claude). Origen Paraguay, primer trabajo en Brightlight, Talkeo, target AI eng.
- [ ] Sección **Technical contributions**: lista con `—` em-dash. Items del backlog en `COWORK.md` (Talkeo → Brightlight → Telos → Alveusgg → DevTree).
- [ ] Foto: si Miguel tiene una B/N redonda, usar. Si no, placeholder gris circular del mismo tamaño (no romper layout).
- [ ] Footer con `Source` igual que posts.

**Test de fase:**
- Lectura cold (Miguel o un amigo) — ¿suena a Miguel o a ChatGPT? Si suena a ChatGPT, reescribir.
- Confidencialidad pass: ningún cliente, compañero, URL interna, ni métrica privada de Brightlight.
- Mobile legible, foto no rompe layout.

**Done criteria:** Miguel lo aprueba en voz alta. Si duda, reescribir.

---

## Phase 6 — View counts (Upstash Redis) 🟢

**Goal:** view counts reales por post, persistentes.

**Resultado (2026-05-02):**
- Upstash for Redis instance creada via Vercel marketplace (Free tier, 500K commands/mes)
- Database name: `blog-views`, region: iad1, eviction: false
- Vercel auto-injecta env vars: `KV_REST_API_URL`, `KV_REST_API_TOKEN` (más extras de Upstash)
- `app/redis.ts` + `app/get-posts.ts` mergea views del hash redis 'views'
- `app/api/incr` POST: incrementa `redis.hincrby('views', id, 1)`, filtra bots por UA
- `app/api/incr` GET (debug): retorna `{redis, views}` para diagnóstico
- `<ViewCounter />` client fires once on mount (no UI, fire-and-forget)
- Verificado end-to-end: `curl /api/incr?id=hello-world` → `{redis:true, views:5}`
- ISR revalidate=300 en home y post → counts se refrescan cada 5 min

**Tareas:**
- [ ] Crear KV store en Vercel dashboard. Conectar al proyecto. `pnpm i @vercel/kv`.
- [ ] Env vars `KV_REST_API_URL`, `KV_REST_API_TOKEN` en Vercel + `.env.local`.
- [ ] `lib/kv.ts`: `getViews(slug)`, `incrementViews(slug)`.
- [ ] En post page: server component que incrementa en cada visita (excluir bots por User-Agent + tu IP en dev).
- [ ] En home: leer counts en parallel (`Promise.all`), mostrar.
- [ ] Cache: Next.js `revalidate = 60` en home para no leer KV en cada request.

**Test de fase:**
- Visitar post → reload → count sube.
- Bot (`curl -A "Googlebot"`) no incrementa.
- Home muestra counts correctos.
- KV down → site sigue funcionando, count = `—`.

**Done criteria:** counts vivos, robustos a fallo de KV.

---

## Phase 7 — SEO, RSS, sitemap, OG 🟢

**Goal:** site indexable y compartible.

**Resultado (2026-05-02):**
- `app/sitemap.ts` → `/sitemap.xml`: home + about + todos los posts del manifest
- `app/robots.ts` → `/robots.txt`: allow all + sitemap reference
- `app/rss.xml/route.ts` → `/rss.xml`: feed 2.0 con XML escape, atom self-link, revalidate 1h
- `app/opengraph-image.tsx`: OG dinámica 1200x630 negra con nombre + tagline (Next.js `ImageResponse`)
- `app/layout.tsx`: agregado `alternates.canonical` + `alternates.types['application/rss+xml']` para auto-discovery de feed
- Build muestra 9 rutas estáticas (home, post, _not-found, opengraph-image, robots.txt, rss.xml, sitemap.xml)

**Tareas:**
- [ ] `app/sitemap.ts`: home + about + todos los posts.
- [ ] `app/robots.ts`: allow all + sitemap URL.
- [ ] `app/rss.xml/route.ts`: feed RSS 2.0 con últimos N posts.
- [ ] `app/og/route.tsx`: OG image dinámica (Next.js `ImageResponse`). Genérica primero (nombre + título), específica por post después.
- [ ] Verificar `metadata` en todas las páginas: title, description, openGraph, twitter, canonical.
- [ ] Favicon + apple-touch-icon. SVG simple (inicial M en Geist).

**Test de fase:**
- `curl mirchez.com/sitemap.xml` válido.
- `curl mirchez.com/rss.xml` válido (validar con un RSS validator online).
- Compartir post en X / Slack → preview con OG image correcto.
- Search Console (después del DNS): submit sitemap.

**Done criteria:** todos los `curl` y previews pasan.

---

## Phase 8 — Domain & production deploy 🟢

**Goal:** `mirchez.com` live con HTTPS.

**Resultado (2026-05-02):**
- Dominio comprado en Cloudflare Registrar (1 año, $10.46)
- Vercel project linkeado a `mirchez.com` como production
- DNS: 1 CNAME en Cloudflare apex → `72607eeec2b43c0b.vercel-dns-016.com` (DNS only, sin proxy naranja)
- SSL emitido automáticamente por Vercel
- Verificado: `curl https://mirchez.com` → HTTP/2 200, server: Vercel, todos los meta tags correctos
- Pendiente menor: agregar `www.mirchez.com` como redirect al apex

**Tareas:**
- [ ] Comprar `mirchez.com` (si no comprado).
- [ ] Vercel: agregar dominio al proyecto. Apuntar nameservers o A/CNAME según provider.
- [ ] Forzar `https://` y `www` → apex (o al revés, decidir).
- [ ] Verificar SSL activo.
- [ ] Performance final: Lighthouse mobile + desktop, ambos >95 en Performance/Accessibility/Best Practices/SEO.

**Test de fase:**
- `mirchez.com` carga, redirect HTTP→HTTPS funciona.
- `www.mirchez.com` redirige al canónico.
- Compartir en X → preview con OG correcto.

**Done criteria:** site live, indexable, fast.

---

## Phase 9 — First post + cleanup

**Goal:** un post real publicado, fakes borrados, links externos actualizados.

**Tareas:**
- [ ] Borrar fake posts.
- [ ] Decidir el primer post (de `COWORK.md` backlog). Recomendación: empezar con uno técnico cerrado (calendar EMR, o storage migration) — más fácil que un essay de visión.
- [ ] Drafting: Miguel escribe outline, Claude pulea redacción inglés.
- [ ] Pre-publish review: confidencialidad + voz + tipos + dead links.
- [ ] Publicar.
- [ ] Update LinkedIn portfolio link → `mirchez.com`.
- [ ] Update GitHub bio link → `mirchez.com`.
- [ ] Update X bio link → `mirchez.com`.

**Test de fase:**
- Lectura cold del post — ¿agregar el post mejora o empeora la impresión del site?
- Si empeora, no publicar, iterar.

**Done criteria:** site live con 1 post real, links externos apuntando.

---

## Out of scope (post-launch)

Si surgen, agregar a `COWORK.md` Backlog. NO meter en este plan.

- Newsletter, comentarios, light/dark toggle, multi-idioma.
- Analytics más allá de view counts (Plausible/Vercel Analytics — decidir post-launch).
- Búsqueda en posts.
- Tags / categorías.
- "Now" page.

---

## Reglas del plan

- **Una fase = un PR.** No batch.
- **No avanzar sin pasar el test de fase.** Si algo falla, parar y arreglar.
- **Marcar progreso acá** (⚪ → 🟡 → 🟢) al iniciar y terminar cada fase.
- **Decisiones nuevas → `COWORK.md`**, no acá. Este doc es ejecución, COWORK es por qué.
