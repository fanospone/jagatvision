# JagatVision Copilot Instructions

## Project Overview
**JagatVision** is a Next.js 16+ e-commerce web application for CCTV surveillance products. It uses dynamic routing to browse products organized by brand (Hikvision, Hilook, etc.) and categories, with all product data stored centrally in JSON.

## Architecture

### Data Flow
- **Central Data Source**: [data/products.json](data/products.json) - nested structure: `{brand: {category: [{id, name, price, picture}]}}`
- **Dynamic Routing**: `/paketcctv/[brand]/[category]/` - each segment maps to product hierarchy
- **Home Composition**: [app/page.tsx](app/page.tsx) orchestrates 9+ section components; no external APIs

### Route Structure
```
/                          → Home (hero + 9 sections)
/paketcctv                 → Brand picker
/paketcctv/hikvision       → Category selector (layout + children)
/paketcctv/hikvision/basic → Product grid with pricing
```

### Key Component Patterns
- **Reusable Sections**: Components like [UsagePanel.tsx](components/UsagePanel.tsx), [Services.tsx](components/Services.tsx) render self-contained page sections with hardcoded data or Image components
- **Layout Components**: [Header.tsx](components/Header.tsx) (client-side nav), [Footer.tsx](components/Footer.tsx)
- **Dynamic Pages**: [BrandLayout](app/paketcctv/[brand]/layout.tsx) validates params and renders category links; [CategoryPage](app/paketcctv/[brand]/[category]/page.tsx) loads filtered products

## Critical Conventions

### **⚡ Dynamic Route Params: ALWAYS AWAIT**
```tsx
// ✅ CORRECT
export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params  // 🔥 REQUIRED
}
// ❌ WRONG
const { brand } = params  // Will cause type errors
```

### Imports & Path Aliases
- Use `@/` prefix for all relative imports: `import Header from "@/components/Header"`
- Configured in [tsconfig.json](tsconfig.json): `{"@/*": ["./*"]}`

### Client vs Server Components
- Mark interactive components (nav, toggles) with `"use client"`
- Keep dynamic pages/layouts as async server components (default)
- Example: [Header.tsx](components/Header.tsx) is client; [CategoryPage](app/paketcctv/[brand]/[category]/page.tsx) is server

### Image Optimization
- Use Next.js `Image` component with `fill` for responsive containers
- Pattern: `<Image src={url} alt={text} fill className="object-cover" />`
- See [UsagePanel.tsx](components/UsagePanel.tsx) and [CategoryPage](app/paketcctv/[brand]/[category]/page.tsx)

### Localization (Indonesian)
- Number formatting: use `toLocaleString("id-ID")` for prices (e.g., "3.599.000")
- Visible in [CategoryPage](app/paketcctv/[brand]/[category]/page.tsx): `Rp {price.toLocaleString("id-ID")}`

## Styling Approach
- **Framework**: Tailwind CSS v4 with PostCSS
- **Responsive Pattern**: `grid md:grid-cols-4 sm:grid-cols-1` (mobile-first)
- **Layout Container**: `max-w-7xl mx-auto px-6` standard wrapper
- **Hover Effects**: `hover:scale-110`, `hover:bg-blue-600` for interactivity

## Development Workflow

### Commands
```bash
npm run dev      # Start local server (http://localhost:3000)
npm run build    # Production build
npm start        # Serve production build
npm run lint     # Run ESLint (TypeScript + Next.js rules)
```

### Code Quality
- **TypeScript**: Strict mode enabled; all components are typed
- **ESLint**: Uses Next.js core rules + Tailwind CSS linting
- **Patterns**: Type safety enforced (e.g., `type ProductsType = typeof products`)

## Common Tasks

### Adding a New Product Brand
1. Add entry to [products.json](data/products.json): `"newbrand": { "category1": [...], ... }`
2. Auto-discovered by [paketcctv/page.tsx](app/paketcctv/page.tsx) brand mapper

### Adding a Product Section to Home
1. Create component in [components/](components/) (e.g., `NewsSection.tsx`)
2. Import and render in [app/page.tsx](app/page.tsx)
3. Follow layout pattern: `max-w-7xl mx-auto px-8 py-24`

### Updating Static Content
- Product data → [data/products.json](data/products.json)
- Section content → Hardcoded in components (no CMS)
- Images → Store in [public/images/](public/images/)

## Type Safety
- Import product types from data: `type ProductsType = typeof products`
- Validate dynamic segments before accessing: `if (!brandData) { notFound() }`
- See [CategoryPage](app/paketcctv/[brand]/[category]/page.tsx) for full pattern

## File Organization
```
app/              # App Router pages/layouts
  page.tsx        # Home - section orchestrator
  layout.tsx      # Root layout + Header/Footer
  paketcctv/      # Dynamic product routes
components/       # Reusable section components
data/             # Static JSON (products, metadata)
public/           # Static assets (images, icons)
```

## Notes for AI Agents
- **No external APIs**: All data is static JSON—no fetch calls needed unless adding integrations
- **Type inference**: TypeScript infers product structure from `products.json`; avoid casting unless validating untrusted input
- **Responsive first**: Always use Tailwind's `md:`, `sm:` breakpoints in grid-based layouts
- **Accessibility**: Use semantic HTML; ensure alt text on all images (already in Image components)
