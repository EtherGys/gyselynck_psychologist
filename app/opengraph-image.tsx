import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Eléonore Gyselynck - Psychologue clinicienne à Overijse'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #689F38 0%, #BBE090 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Eléonore Gyselynck
          </h1>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              margin: '0 0 30px 0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Psychologue clinicienne agréée
          </h2>
          <p
            style={{
              fontSize: '24px',
              margin: '0 0 40px 0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              lineHeight: '1.4',
            }}
          >
            Consultations psychologiques à Overijse et en ligne
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: '500',
              }}
            >
              Adultes & Adolescents
            </span>
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: '500',
              }}
            >
              Approche ACP
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 