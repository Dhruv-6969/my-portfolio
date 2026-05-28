"use client"

import VideoCard from './components/VideoCard'
import ShortCard from './components/ShortCard'

const shorts = [
  { id: 1, videoSrc: "https://drive.google.com/file/d/1CLaKPRXSlQ82PNvin8Ez8ROxigiSiodz/preview", title: "Why Savers are LOSERS", tag: "Finance" },
  { id: 2, videoSrc: "/short2.mp4", title: "Gym Motivation", tag: "Sport" },
  { id: 3, videoSrc: "/short3.mp4", title: "Event Aftermovie", tag: "Events" },
  { id: 4, videoSrc: "/short4.mp4", title: "Tech Reveal", tag: "Tech" },
]

const longVideos = [
  { id: 1, videoSrc: "https://drive.google.com/file/d/1JSEoYMAE6MRV__GhUDkN6R1AxBedxdDr/preview", title: "I Became Shizuka and Went on a Date", category: "Entertainment", duration: "08:04" },
  { id: 2, videoSrc: "/finance2.mp4", title: "Asset allocation guide", category: "Investing", duration: "8:32" },
  { id: 3, videoSrc: "/finance3.mp4", title: "Why your savings lose money", category: "Macro", duration: "6:18" },
]

const motionShorts = [
  { id: 1, videoSrc: "https://drive.google.com/file/d/18C0MQYcTyVbA7OVw7BvXKeKF10Ge2hsj/preview", title: "Payment Gateway", tag: "Motion" },
  { id: 2, videoSrc: "/motion2.mp4", title: "Text Animation", tag: "Motion" },
  { id: 3, videoSrc: "/motion3.mp4", title: "Intro Sequence", tag: "Motion" },
  { id: 4, videoSrc: "/motion4.mp4", title: "Transition Pack", tag: "Motion" },
]

const clients = [
  { id: 1, name: "Ridey Behl", handle: "@rideyay", what: "Have edited several short-form content", instagram: "https://www.instagram.com/rideyay?igsh=a3MwZWM4MGxva3I1" },
  { id: 2, name: "Deepika Mishra", handle: "@medeeepika", what: "Have edited Long form content for YouTube", instagram: "https://www.instagram.com/medeeepika?igsh=MXV3cHhocHo4aWFsZg==" },
]

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ padding: '8rem 3rem 4rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '1rem' }}>
          Video Editor · Motion Designer
        </p>
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3.5rem,7vw,6.5rem)', lineHeight: 0.95, marginBottom: '1.5rem' }}>
          Frames That<br /><span style={{ color: 'var(--accent2)' }}>Hit Different.</span>
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', marginBottom: '2.5rem' }}>
          High-retention short-form and clean data-driven long-form content. DaVinci Resolve · Fusion.
        </p>
        <a href="#shorts" style={{
          display: 'inline-block', background: 'var(--accent2)', color: '#111',
          padding: '0.85rem 2rem', fontSize: '0.8rem', letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500
        }}>
          View Work ↓
        </a>
      </section>

      {/* SHORTS */}
      <section id="shorts" style={{ padding: '5rem 3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.5rem' }}>Short-form</p>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '3rem', borderBottom: '0.5px solid var(--border)', paddingBottom: '1rem' }}>
          High-Energy Cuts
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {shorts.map(s => <ShortCard key={s.id} {...s} />)}
        </div>
      </section>

      {/* LONG FORM */}
      <section id="longform" style={{ padding: '5rem 3rem', background: 'var(--surface)' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.5rem' }}>Long-form</p>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '3rem', borderBottom: '0.5px solid var(--border)', paddingBottom: '1rem' }}>
          Clean, As per Client&apos;s Necessity
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {longVideos.map(v => <VideoCard key={v.id} {...v} />)}
        </div>
      </section>

      {/* MOTION GRAPHICS */}
      <section id="motion" style={{ padding: '5rem 3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.5rem' }}>Motion Graphics</p>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '3rem', borderBottom: '0.5px solid var(--border)', paddingBottom: '1rem' }}>
          Motion & Animation
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {motionShorts.map(s => <ShortCard key={s.id} {...s} />)}
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" style={{ padding: '5rem 3rem', background: 'var(--surface)' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.5rem' }}>Experience</p>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '3rem', borderBottom: '0.5px solid var(--border)', paddingBottom: '1rem' }}>
          Who I&apos;ve Worked With
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {clients.map(c => (
            <div key={c.id} style={{ background: 'var(--bg)', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <p style={{ fontFamily: 'Bebas Neue', fontSize: '1.6rem', letterSpacing: '0.04em', color: 'var(--text)' }}>
                  {c.name}
                </p>
                <a
                  href={c.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--muted)', textDecoration: 'none', border: '0.5px solid var(--border)', padding: '4px 10px' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent2)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent2)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  {c.handle}
                </a>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginTop: '0.75rem' }}>
                {c.what}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '6rem 3rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem,8vw,7rem)', lineHeight: 0.9, marginBottom: '1.5rem' }}>
          Let&apos;s Make<br /><span style={{ color: 'var(--accent2)' }}>Something Sharp.</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>Available for short-form, long-form, and motion graphics projects.</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <a href="mailto:dhrubakshay@email.com" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '0.5px solid var(--border)', paddingBottom: '2px' }}>Email</a>
          <a href="https://www.instagram.com/dhruvnogrades?igsh=aDg5N3U1NHp2cGJz" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '0.5px solid var(--border)', paddingBottom: '2px' }}>Instagram</a>
        </div>
      </section>

    </main>
  )
}