import Image from 'next/image'

interface SponsorCardProps {
  logo: string
  alt: string
  title: string
  websiteUrl?: string
  width?: number
  height?: number
  isSold?: boolean
  isAvailable?: boolean
}

export default function SponsorCard({
  logo,
  alt,
  title,
  websiteUrl,
  width = 180,
  height = 90,
  isSold = false,
  isAvailable = false
}: SponsorCardProps) {
  const isPlaceholder = logo.includes('placeholder')
  const hasLink = websiteUrl && websiteUrl !== '#'

  const content = isPlaceholder ? (
    <div className="sponsor-placeholder-content">
      <div className="sponsor-placeholder-icon">🎯</div>
      <h4>{title}</h4>
    </div>
  ) : (
    <>
      {logo.endsWith('.svg') ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={alt}
          className="sponsor-card-image"
          style={{ width: `${width}px`, height: 'auto' }}
        />
      ) : (
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
          className="sponsor-card-image"
        />
      )}
      <h4>{title}</h4>
    </>
  )

  return (
    <div className={`sponsor-card ${isPlaceholder ? 'sponsor-card-placeholder' : ''}`}>
      {(isSold || isAvailable) && (
        <div className="sponsor-card-badge-wrapper">
          {isSold && <span className="sponsor-badge sponsor-badge-sold">SOLD</span>}
          {isAvailable && <span className="sponsor-badge sponsor-badge-available">AVAILABLE</span>}
        </div>
      )}
      {hasLink ? (
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}
