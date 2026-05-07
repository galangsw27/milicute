import GallerySection from '../components/GallerySection'

export default function Page() {
  return (
    <>
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>

      <main className="page">
        <section className="hero">
          <div className="badge">Official Community</div>
          <h1>MILICUTE</h1>
          <p className="tagline">Sweet. Small. Specialized.</p>
          <p className="about">
            MILICUTE komunitas kecil dengan identitas cute tactical, fokus ke circle solid, interaksi positif, dan ruang nyaman buat member berkembang bareng. Halaman ini jadi pintu resmi sebelum nanti berkembang ke official gallery.
          </p>
        </section>

        <section className="actions" aria-label="Main actions">
          <a className="action-card" href="https://discord.gg/gYdXg6uQ3M" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Join Discord</div>
            <div className="action-desc">Masuk server utama MILICUTE buat ngobrol, update, dan event komunitas.</div>
            <div className="action-link">Open Discord</div>
          </a>

          <a className="action-card" href="https://www.roblox.com/share/g/858803229" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Join Community Roblox</div>
            <div className="action-desc">Gabung group Roblox resmi untuk aktivitas game dan circle member.</div>
            <div className="action-link">Open Roblox Group</div>
          </a>

          <a className="action-card" href="https://saweria.co/milicuteofficial" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Support on Saweria</div>
            <div className="action-desc">Dukung perkembangan komunitas dan project MILICUTE lewat Saweria.</div>
            <div className="action-link">Open Saweria</div>
          </a>
        </section>

        <section className="featured-shot" aria-label="MILICUTE featured image">
          <img src="/1.jpg" alt="MILICUTE community hero photo" />
          <div className="featured-overlay">
            <div className="featured-copy">
              <div className="featured-kicker">MILICUTE Official Presence</div>
              <h2 className="featured-title">Circle kecil. Vibe kuat. Community nyata.</h2>
              <p className="featured-desc">Foto ini jadi pembuka sebelum gallery — nunjukin energy member, identitas komunitas, dan suasana official MILICUTE.</p>
            </div>
          </div>
        </section>

        <GallerySection />

        <footer>MILICUTE · Official Entry Page</footer>
      </main>
    </>
  )
}
