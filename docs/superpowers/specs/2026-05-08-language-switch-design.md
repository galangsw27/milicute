# EN/ID language switch design

## Context
MILICUTE landing page currently serves only Indonesian copy on a single route. User wants English and Indonesian language support. Because site also targets SEO, language switching should produce separate indexable URLs instead of changing text only on client.

## Chosen approach
Use locale routes plus remembered user preference:
- `/id` for Indonesian
- `/en` for English
- `/` redirects to `/id`
- language choice stored in browser for future visits

This keeps multilingual SEO strong while improving return-visitor UX.

## Goals
- Add visible EN/ID switch to landing page
- Serve translated UI copy, metadata, FAQ, and structured data per locale
- Keep current visual design and interactions
- Ensure each language has its own canonical URL and `hreflang`

## Non-goals
- No CMS
- No automatic machine translation service
- No extra locales beyond `id` and `en`
- No redesign of gallery/lightbox behavior

## Routes
- `app/page.js` becomes redirect entrypoint to `/id`
- `app/[locale]/page.js` renders localized landing page
- `app/[locale]/layout.js` or locale-aware metadata pattern handles per-locale metadata if needed
- invalid locale should return not-found or redirect to default locale; prefer strict locale validation

## Content model
Create dictionaries for static copy:
- `content/i18n/id.js`
- `content/i18n/en.js`

Dictionary includes:
- hero badge, tagline, about
- action card titles/descriptions/links text
- featured image text
- TikTok section labels if any
- gallery heading/subheading and lightbox fallback text
- SEO sections and FAQ
- metadata strings
- structured data strings
- language switch labels

## Component boundaries
### Page shell
Localized route reads `params.locale`, validates locale, loads dictionary, then renders page.

### Language switch
Small component near hero/header area.
- current locale visibly active
- click moves between `/id` and `/en`
- store choice in `localStorage`
- optional hydration-safe effect updates stored locale after navigation

### GallerySection
Accept localized strings via props instead of hardcoded Indonesian.
Keep image data and behavior unchanged.

## SEO behavior
For each locale:
- localized title/description/keywords
- localized structured data text
- canonical URL points to locale path
- `alternates.languages` includes both `/id` and `/en`
- `openGraph.url` and Twitter metadata use locale path
- sitemap includes both localized URLs
- robots stays same

## Redirect behavior
- `/` redirects to `/id`
- remembered locale affects future explicit switch behavior and can optionally inform a client-side “back to preferred language” flow later, but server default remains `/id`

## Error handling
- unsupported locale values do not render mixed-language page
- strict locale validation prevents bad metadata/indexing

## Verification
1. Run `npm run build`
2. Visit:
   - `/id`
   - `/en`
   - `/` and confirm redirect to `/id`
3. Verify switch changes route and text
4. Refresh after switching and confirm preference persists for switch state
5. Inspect page source for each locale:
   - canonical URL
   - `hreflang`
   - localized metadata
   - localized JSON-LD
6. Confirm sitemap contains both locale URLs
7. Confirm gallery and TikTok sections still work

## Files likely affected
- `app/page.js`
- `app/layout.js`
- `app/robots.js`
- `app/sitemap.js`
- `app/[locale]/page.js`
- `components/GallerySection.js`
- `components/LanguageSwitch.js`
- `content/i18n/id.js`
- `content/i18n/en.js`
- optional locale helper such as `lib/i18n.js`

## Tradeoff summary
Locale routes add more files than client-only toggle, but they are correct for multilingual SEO, sharing, and indexing. Remembered preference adds small client complexity for better UX without weakening route-based SEO.
