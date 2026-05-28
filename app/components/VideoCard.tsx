type Props = {
  videoSrc: string
  title: string
  category: string
  duration: string
}

export default function VideoCard({ videoSrc, title, category, duration }: Props) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '0.5px solid var(--border)',
      overflow: 'hidden'
    }}>
      <iframe
        src={videoSrc}
        loading="lazy"
        allow="autoplay"
        style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
      />
      <div style={{ padding: '1.25rem' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.5rem' }}>
          {category}
        </p>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{duration}</span>
      </div>
    </div>
  )
}