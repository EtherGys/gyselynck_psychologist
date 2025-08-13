import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eléonore Gyselynck - Psychologue clinicienne',
    short_name: 'Gyselynck Psychologue',
    description: 'Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l\'accompagnement des adultes et adolescents.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#689F38',
    icons: [
      {
        src: '/assets/logos/logo_yellow_on_white.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/logos/logo_yellow_on_white.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['health', 'medical'],
    lang: 'fr',
    dir: 'ltr',
  }
} 