import GallerySection from '../components/GallerySection'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'MILICUTE',
      url: 'https://www.milicute.id/',
      logo: 'https://www.milicute.id/mili_emblem_png.webp',
      sameAs: [
        'https://discord.gg/gYdXg6uQ3M',
        'https://www.roblox.com/share/g/858803229',
        'https://www.tiktok.com/@milicuteofficial',
        'https://saweria.co/milicuteofficial',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'MILICUTE',
      url: 'https://www.milicute.id/',
      description: 'Komunitas Roblox Indonesia resmi MILICUTE dengan Discord, group Roblox, TikTok, dan gallery komunitas.',
      inLanguage: 'id-ID',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa itu MILICUTE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MILICUTE adalah komunitas Roblox Indonesia dengan identitas visual cute tactical, tempat member berkumpul untuk event, showcase, dan aktivitas komunitas resmi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana cara join komunitas MILICUTE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kamu bisa join lewat Discord resmi MILICUTE dan group Roblox yang tersedia di halaman utama situs ini.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa saja aktivitas di MILICUTE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MILICUTE membagikan highlight TikTok, gallery komunitas, info member, update event, dan ruang interaksi member lewat Discord serta Roblox group.',
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>

      <main className="page">
        <section className="hero">
          <div className="badge">Official Community</div>
          <h1>MILICUTE</h1>
          <p className="tagline">Sweet. Small. Specialized.</p>
          <p className="about">
            Milicute adalah sebuah konsep kreatif yang menggabungkan ide ‘military’ (militer) dan ‘cute’ (imut), membentuk gaya karakter atau dunia unik di mana elemen taktis dan peran ala tentara dipadukan dengan estetika yang lucu, ceria, dan menggemaskan. Dalam konsep Milicute, karakter-karakternya sering terlihat kecil, imut, dan ramah, tetapi mereka beroperasi seperti pasukan atau tim yang disiplin dengan misi, markas, dan aksi strategis layaknya unit militer. Kontras antara visual yang lembut dan menggemaskan dengan perilaku yang terstruktur dan berorientasi pada misi menciptakan identitas khas yang menarik sekaligus mudah diingat secara visual.
          </p>
        </section>

        <section className="actions" aria-label="Main actions">
          <a className="action-card" href="https://discord.gg/gYdXg6uQ3M" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Join Discord</div>
            <div className="action-desc">Masuk server utama MILICUTE buat ngobrol, update, dan event komunitas.</div>
            <div className="action-link">Open Discord</div>
            <img className="action-logo" src="/mili_emblem_png.webp" alt="MILICUTE logo" />
          </a>

          <a className="action-card" href="https://www.roblox.com/share/g/858803229" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Join Community Roblox</div>
            <div className="action-desc">Gabung group Roblox resmi untuk aktivitas game dan circle member.</div>
            <div className="action-link">Open Roblox Group</div>
            <img className="action-logo" src="/mili_emblem_png.webp" alt="MILICUTE logo" />
          </a>

          <a className="action-card" href="https://saweria.co/milicuteofficial" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Support on Saweria</div>
            <div className="action-desc">Dukung perkembangan komunitas dan project MILICUTE lewat Saweria.</div>
            <div className="action-link">Open Saweria</div>
            <img className="action-logo" src="/mili_emblem_png.webp" alt="MILICUTE logo" />
          </a>

          <a className="action-card" href="https://discord.com/users/1426195958688911474" target="_blank" rel="noopener noreferrer">
            <div className="action-title">Contact Us</div>
            <div className="action-desc">Hubungi admin MILICUTE lewat Discord untuk add friend dan info komunitas.</div>
            <div className="action-link">Open Discord Profile</div>
            <img className="action-logo" src="/mili_emblem_png.webp" alt="MILICUTE logo" />
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
              <div className="tiktok-frame">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7608502441935490324?background=transparent"
                  title="MILICUTE TikTok 7608502441935490324"
                  loading="lazy"
                  allow="encrypted-media; fullscreen"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </article>

            <article className="tiktok-card">
              <div className="tiktok-frame">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7614323871549869333?background=transparent"
                  title="MILICUTE TikTok 7614323871549869333"
                  loading="lazy"
                  allow="encrypted-media; fullscreen"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </article>

            <article className="tiktok-card">
              <div className="tiktok-frame">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7615864179416780052?background=transparent"
                  title="MILICUTE TikTok 7615864179416780052"
                  loading="lazy"
                  allow="encrypted-media; fullscreen"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          </div>
        </section>

       

        <GallerySection />

         <section className="seo-block" aria-label="Tentang komunitas MILICUTE Roblox Indonesia">
          <h2 className="seo-title">Komunitas Roblox Indonesia: MILICUTE Official</h2>
          <p className="seo-copy">
            MILICUTE adalah komunitas Roblox Indonesia untuk player yang suka teamwork, event komunitas, showcase member, dan update konten kreatif. Fokus utama kami: ruang komunitas yang aktif, ramah, dan konsisten lewat Discord resmi, group Roblox, TikTok highlight, dan gallery aktivitas member.
          </p>
          <p className="seo-copy">
            Jika kamu cari komunitas Roblox Indonesia yang aktif dan punya identitas kuat, MILICUTE jadi titik mulai paling cepat untuk join, kenalan dengan member lain, dan ikut aktivitas resmi komunitas.
          </p>
        </section>

        <section className="seo-block" aria-label="FAQ komunitas MILICUTE">
          <h2 className="seo-title">FAQ MILICUTE</h2>
          <div className="faq-list">
            <article className="faq-item">
              <h3>Bagaimana cara join komunitas MILICUTE?</h3>
              <p>Join lewat tombol Discord dan Roblox Group di halaman ini, lalu ikuti info channel untuk update event dan aktivitas komunitas.</p>
            </article>
            <article className="faq-item">
              <h3>Apa bedanya MILICUTE dengan komunitas Roblox lain?</h3>
              <p>MILICUTE menggabungkan konsep cute tactical dengan struktur komunitas yang rapi, jadi member dapat ruang interaksi, showcase, dan update konten resmi dalam satu tempat.</p>
            </article>
            <article className="faq-item">
              <h3>Apa ada konten rutin dari MILICUTE?</h3>
              <p>Ada. Highlight video TikTok, update komunitas Discord, dan dokumentasi momen mabar member di gallery jadi bagian rutin dari aktivitas MILICUTE.</p>
            </article>
          </div>
        </section>

        <footer>MILICUTE · Official Entry Page</footer>
      </main>
    </>
  )
}
