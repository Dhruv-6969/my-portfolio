type Props = {
  videoSrc: string
  title: string
  tag: string
}

export default function ShortCard({ videoSrc, title, tag }: Props) {
  return (
    <div style={{
      position: 'relative',
      background: 'var(--surface)',
      border: '0.5px solid var(--border)',
      overflow: 'hidden'
    }}>
      <iframe
        src={videoSrc}
        loading="lazy"
        allow="autoplay"
        style={{ width: '100%', aspectRatio: '9/16', border: 'none', display: 'block' }}
      />
      <div style={{ padding: '0.85rem' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text)' }}>{title}</p>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent2)' }}>{tag}</span>
      </div>
    </div>
  )
}