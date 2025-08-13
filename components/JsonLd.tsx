import Script from 'next/script'

interface JsonLdProps {
  data: any
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Données structurées pour la page d'accueil
export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Eléonore Gyselynck - Psychologue clinicienne",
  "description": "Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l'accompagnement des adultes et adolescents.",
  "url": "https://eleonore-gyselynck-psychologue.com",
  "telephone": "+32460214773",
  "email": "eleonore.gyselynck@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue Langeweg 128",
    "addressLocality": "Overijse",
    "postalCode": "3090",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.7689,
    "longitude": 4.5347
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Mobile Payment"],
  "currenciesAccepted": "EUR",
  "medicalSpecialty": "Psychologie clinique",
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Consultation psychologique adulte",
      "description": "Consultation individuelle pour adultes et jeunes adultes"
    },
    {
      "@type": "MedicalService", 
      "name": "Consultation psychologique adolescent",
      "description": "Consultation individuelle pour adolescents à partir de 15 ans"
    }
  ],
  "sameAs": [
    "https://rosa.be/fr/hp/eleonore-gyselynck/"
  ]
}

// Données structurées pour les consultations
export const consultationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": "Consultations psychologiques",
  "description": "Consultations psychologiques à Overijse et en ligne pour adultes et adolescents",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Eléonore Gyselynck",
    "medicalSpecialty": "Psychologie clinique"
  },
  "serviceType": "Consultation psychologique",
  "areaServed": {
    "@type": "Place",
    "name": "Overijse, Belgique"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://rosa.be/fr/hp/eleonore-gyselynck/"
  }
}

// Données structurées pour l'approche ACP
export const acpJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Approche Centrée sur la Personne (ACP)",
  "description": "Méthode de psychothérapie humaniste développée par Carl Rogers, basée sur la tendance actualisante",
  "founder": {
    "@type": "Person",
    "name": "Carl Rogers",
    "birthDate": "1902",
    "deathDate": "1987"
  },
  "category": "Psychothérapie humaniste"
} 