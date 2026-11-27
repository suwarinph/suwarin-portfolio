export default function ProjectImage({ image, className = '', aspect = '16/10', loading = 'lazy' }) {
  return (
    <figure className={`project-image ${className}`} style={{ '--image-ratio': aspect }}>
      <img
        src={image.src}
        alt={image.alt || image.title}
        loading={loading}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'low' : 'auto'}
      />
    </figure>
  )
}
