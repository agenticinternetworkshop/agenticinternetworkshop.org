import Image from 'next/image'

interface SponsorCardProps {
  logo: string
  alt: string
  title: string
  width?: number
  height?: number
}

export default function SponsorCard({ 
  logo, 
  alt, 
  title, 
  width = 180, 
  height = 90 
}: SponsorCardProps) {
  return (
    <div className="sponsor-card">
      <Image 
        src={logo} 
        alt={alt} 
        width={width} 
        height={height}
        className="sponsor-card-image"
      />
      <h4>{title}</h4>
    </div>
  )
}
