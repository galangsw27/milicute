'use client'

import { useEffect, useMemo, useState } from 'react'

const items = [
  {
    title: 'MILICUTE Photo 2',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'pink',
    cls: 'gallery-item gallery-item--wide gallery-item--hero',
    icon: '🎀',
    img: '/2.jpg',
  },
  {
    title: 'MILICUTE Photo 4',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'red',
    cls: 'gallery-item gallery-item--tall',
    icon: '🔥',
    img: '/4.jpg',
  },
  {
    title: 'MILICUTE Photo 5',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'violet',
    cls: 'gallery-item',
    icon: '⚔️',
    img: '/5.jpg',
  },
  {
    title: 'MILICUTE Photo 6',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'blue',
    cls: 'gallery-item',
    icon: '🎮',
    img: '/6.jpg',
  },
  {
    title: 'MILICUTE Photo 7',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'gold',
    cls: 'gallery-item gallery-item--wide',
    icon: '✨',
    img: '/7.jpg',
  },
  {
    title: 'MILICUTE Photo 8',
    desc: 'Foto komunitas MILICUTE.',
    tone: 'mono',
    cls: 'gallery-item',
    icon: '◈',
    img: '/8.jpg',
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
