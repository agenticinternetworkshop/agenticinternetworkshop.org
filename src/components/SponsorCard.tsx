import Image from 'next/image'

interface SponsorCardProps {
  logo: string
  alt: string
  title: string
  width?: number
  height?: number
  isSold?: boolean
  isAvailable?: boolean
}

export default function SponsorCard({
  logo,
  alt,
  title,
  width = 180,
  height = 90,
  isSold = false,
  isAvailable = false
}: SponsorCardProps) {
  const isPlaceholder = logo.includes('placeholder')

  return (
    <div className={`sponsor-card ${isPlaceholder ? 'sponsor-card-placeholder' : ''}`}>
      {(isSold || isAvailable) && (
        <div className="sponsor-card-badge-wrapper">
          {isSold && <span className="sponsor-badge sponsor-badge-sold">SOLD</span>}
          {isAvailable && <span className="sponsor-badge sponsor-badge-available">AVAILABLE</span>}
        </div>
      )}
      {isPlaceholder ? (
        <div className="sponsor-placeholder-content">
          <div className="sponsor-placeholder-icon">🎯</div>
          <h4>{title}</h4>
        </div>
      ) : (
        <>
          <Image
            src={logo}
            alt={alt}
            width={width}
            height={height}
            className="sponsor-card-image"
          />
          <h4>{title}</h4>
        </>
      )}
    </div>
  )
}
