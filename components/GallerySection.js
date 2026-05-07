'use client'

import { useEffect, useMemo, useState } from 'react'

const items = [
  {
    title: 'Member Shot',
    desc: 'Placeholder buat foto member official dengan vibe cute tactical.',
    tone: 'pink',
    cls: 'gallery-item gallery-item--wide gallery-item--hero',
    icon: '🎀',
    meta: 'Preview',
    label: 'Member Shot',
    img: 'https://placehold.co/900x520/201018/ffb7c8?text=Member+Shot',
  },
  {
    title: 'Event Moment',
    desc: 'Placeholder buat dokumentasi event komunitas MILICUTE.',
    tone: 'red',
    cls: 'gallery-item gallery-item--tall',
    icon: '🔥',
    meta: 'Event',
    label: 'Event Moment',
    img: 'https://placehold.co/520x760/23080d/ff4f68?text=Event+Moment',
  },
  {
    title: 'Cute Tactical',
    desc: 'Placeholder buat style board cute tactical official.',
    tone: 'violet',
    cls: 'gallery-item',
    icon: '⚔️',
    meta: 'Style',
    label: 'Cute Tactical',
    img: 'https://placehold.co/520x420/171126/d8a6ff?text=Cute+Tactical',
  },
  {
    title: 'Roblox Crew',
    desc: 'Placeholder buat screenshot dan aktivitas group Roblox.',
    tone: 'blue',
    cls: 'gallery-item',
    icon: '🎮',
    meta: 'Roblox',
    label: 'Roblox Crew',
    img: 'https://placehold.co/520x420/101826/9dccff?text=Roblox+Crew',
  },
  {
    title: 'Community Art',
    desc: 'Placeholder buat artwork, poster, dan karya member.',
    tone: 'gold',
    cls: 'gallery-item gallery-item--wide',
    icon: '✨',
    meta: 'Artwork',
    label: 'Community Art',
    img: 'https://placehold.co/900x420/24160c/ffd18a?text=Community+Art',
  },
  {
    title: 'Official Drop',
    desc: 'Placeholder buat announcement visual dan official release.',
    tone: 'mono',
    cls: 'gallery-item',
    icon: '◈',
    meta: 'Drop',
    label: 'Official Drop',
    img: 'https://placehold.co/520x420/151515/f2f2f4?text=Official+Drop',
  },
]

export default function GallerySection() {
  const [selected, setSelected] = useState(null)

  const isOpen = useMemo(() => selected !== null, [selected])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <>
      <section className="gallery" aria-label="Official gallery preview">
        <div className="gallery-head">
          <h2 className="gallery-title">Official Gallery</h2>
          <p className="gallery-sub">Preview area buat visual komunitas, member moments, dan official showcase MILICUTE nanti.</p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <button
              key={item.title}
              className={item.cls}
              type="button"
              data-tone={item.tone}
              onClick={() => setSelected(item)}
            >
              <img src={item.img} alt={`${item.title} placeholder`} />
              <span className="gallery-icon">{item.icon}</span>
              <span className="gallery-meta">{item.meta}</span>
              <span className="gallery-label">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className={`gallery-lightbox ${isOpen ? 'open' : ''}`} id="galleryLightbox" aria-hidden={isOpen ? 'false' : 'true'}>
        <div className="lightbox-card" role="dialog" aria-modal="true" aria-labelledby="lightboxTitle">
          <button className="lightbox-close" type="button" aria-label="Close gallery preview" onClick={() => setSelected(null)}>
            ×
          </button>
          <div className="lightbox-tag">Official Gallery Preview</div>
          <h2 className="lightbox-title" id="lightboxTitle">{selected?.title ?? 'Gallery Item'}</h2>
          <p className="lightbox-desc" id="lightboxDesc">{selected?.desc ?? 'Preview placeholder.'}</p>
        </div>
      </div>
    </>
  )
}
