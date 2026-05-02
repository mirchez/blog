# mirchez.com — Personal Site

> Personal site de Miguel Miranda (mirchez). Inspirado en rauchg.com. Posicionamiento: **AI engineer que ships production-ready software**. Target: YC + roles AI eng remoto US.

**Idioma:** site en inglés. Conversación de trabajo Miguel ↔ Claude en español. Código y commits en inglés.

**Última actualización:** 2026-05-02

---

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Content:** MDX para posts (`/[year]/[slug]`)
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans + Geist Mono (via `next/font`)
- **Hosting:** Vercel
- **Analytics / view counts:** Vercel KV (Redis) — like Rauch
- **Repo:** público desde día 1, `Source` link al final de cada post

No agregar dependencias por agregar. Si una librería no está justificada, no entra.

---

## Reglas de trabajo

### Rol de Miguel
- Define visión, voz, contenido (drafts de posts, bio, copy).
- Aprueba decisiones de diseño y arquitectura.
- Revisa cada cambio en preview antes de merge a main.

### Rol de Claude (CC)
- Implementa: scaffold, componentes, MDX pipeline, deploy.
- Propone decisiones técnicas con tradeoff antes de ejecutar.
- **No vibecoding ciego.** Antes de copiar pattern de internet/repo de Rauch, entender qué hace y por qué. Si Miguel pregunta "¿por qué esto así?", la respuesta tiene que existir.
- Standards no negociables (aplican siempre, sin que Miguel los pida):
  - TypeScript estricto. Sin `any` salvo justificado.
  - Error handling en server actions / API routes / fetches externos. Nada de "happy path only".
  - Validación con Zod en cualquier input externo (form, query param, env var).
  - Env vars tipadas y validadas al boot (`@t3-oss/env-nextjs` o equivalente liviano).
  - SEO: `metadata` por página, OG image, sitemap, robots, RSS feed para posts.
  - Accesibilidad: contraste AA, semántica HTML correcta, focus visible.
  - Performance: imágenes con `next/image`, fonts con `display: swap`, no JS en páginas estáticas si no se usa.

### Cómo trabajamos
1. Miguel pide algo (feature, sección, post).
2. Claude propone approach corto (3-5 líneas) si hay más de una forma de hacerlo. Si es trivial, ejecuta directo.
3. Claude implementa. Commit por unidad lógica, mensaje en inglés explicando el WHY.
4. Miguel revisa preview en Vercel.
5. Si pasa, merge a main.

### Lo que NO hacemos
- **No copiar el portfolio actual** (`miguel-miranda-portfolio.vercel.app`). Cards "Quick Stats", "Years Coding 3+", tags coloreadas — todo eso es lo opuesto al look. Reemplazo total.
- **No agregar páginas que Rauch no tiene.** No `/projects`, no `/work`, no `/contact`. Todo vive en `/`, `/about`, y posts.
- **No inventar métricas.** Si dice "10k users" tiene que ser real y verificable (ej. Alveusgg).
- **No gritar.** Sin "🚀 Building the future of X". Voz sobria.

---

## Confidencialidad — Brightlight

Miguel trabaja en **Brightlight Health** (LinkedIn lo declara público, el empleador no es confidencial). Pero el contrato tiene cláusula de confidencialidad que sobrevive terminación.

**Sí podemos decir:**
- "Brightlight Health, healthcare SaaS / EMR for clinics."
- Tecnologías genéricas que usé (React, Node, MongoDB, Stripe, Adobe API, Jitsi, AWS).
- Features que construí, descritas en términos genéricos: calendar multi-timezone, billing + Stripe, PDF forms with Adobe API + LLM autofill, video with JWT auth + AI transcription, Azure→AWS migration.

**NO podemos decir:**
- Nombres de clientes individuales (HavenPoint, Atma Cena, Bed Skin Clinic, Canadian Health Labs, etc.).
- URLs internas (`*.brightlight.ai` subdominios).
- Detalles de arquitectura interna que no son públicos (estructura de datos, decisiones de schema, problemas internos).
- Nombres de compañeros o jefes (Grant, Om, Rafa, Sergio, etc.).
- Métricas internas (número exacto de clínicas, pacientes, MRR).

**Regla práctica:** si un competidor leyera el about, ¿le serviría? Si sí, sacar.

---

## Estructura de archivos (target)

```
personal-website/
├── CLAUDE.md           # este archivo
├── COWORK.md           # brain persistente (visión, voz, backlog, decisiones)
├── app/
│   ├── layout.tsx
│   ├── page.tsx        # home (lista posts)
│   ├── about/page.tsx
│   ├── [year]/[slug]/page.tsx
│   ├── rss.xml/route.ts
│   ├── sitemap.ts
│   └── og/route.tsx    # OG image dinámica
├── posts/              # MDX
│   └── 2026/the-first-post.mdx
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   └── post-meta.tsx
├── lib/
│   ├── posts.ts        # parse MDX, sort, group por año
│   └── kv.ts           # view counts
├── public/
└── mdx-components.tsx
```

---

## Workflow comandos

- `pnpm dev` — local dev en `localhost:3000`
- `pnpm build && pnpm start` — verificar build prod antes de pushear
- `pnpm lint && pnpm typecheck` — gates antes de merge
- Deploy: push a `main` → Vercel auto deploy. Preview deploys en PRs.

---

## Documentación viva

- **`CLAUDE.md`** (este archivo) — reglas operativas. Cambia cuando cambia el cómo.
- **`COWORK.md`** — visión, voz, contenido, decisiones de diseño, backlog de posts, drafts. Cambia cada vez que tomamos una decisión o avanzamos.
- Plans tácticos (paso a paso de una feature) — en plan mode, temporales.
