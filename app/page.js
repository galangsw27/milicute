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
            Milicute adalah sebuah konsep kreatif yang menggabungkan ide ‘military’ (militer) dan ‘cute’ (imut), membentuk gaya karakter atau dunia unik di mana elemen taktis dan peran ala tentara dipadukan dengan estetika yang lucu, ceria, dan menggemaskan. Dalam konsep Milicute, karakter-karakternya sering terlihat kecil, imut, dan ramah, tetapi mereka beroperasi seperti pasukan atau tim yang disiplin dengan misi, markas, dan aksi strategis layaknya unit militer. Kontras antara visual yang lembut dan menggemaskan dengan perilaku yang terstruktur dan berorientasi pada misi menciptakan identitas khas yang menarik sekaligus mudah diingat secara visual
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
              <div className="featured-kicker">MINI SQUAD BUT WE DOMINATED</div>
            </div>
          </div>
        </section>

        <section className="tiktok" aria-label="MILICUTE TikTok videos">
          <div className="tiktok-grid">
            <article className="tiktok-card">
              <iframe
                src="https://www.tiktok.com/embed/v2/7608502441935490324?background=transparent"
                title="MILICUTE TikTok 7608502441935490324"
                loading="lazy"
                allow="encrypted-media; fullscreen"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </article>

            <article className="tiktok-card">
              <iframe
                src="https://www.tiktok.com/embed/v2/7614323871549869333?background=transparent"
                title="MILICUTE TikTok 7614323871549869333"
                loading="lazy"
                allow="encrypted-media; fullscreen"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </article>

            <article className="tiktok-card">
              <iframe
                src="https://www.tiktok.com/embed/v2/7615864179416780052?background=transparent"
                title="MILICUTE TikTok 7614323871549869333 duplicate"
                loading="lazy"
                allow="encrypted-media; fullscreen"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </article>
          </div>
        </section>

        <GallerySection />

        <footer>MILICUTE · Official Entry Page</footer>
      </main>
    </>
  )
}
