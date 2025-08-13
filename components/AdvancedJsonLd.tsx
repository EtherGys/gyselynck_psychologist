import Script from 'next/script'

interface JsonLdProps {
  data: any
}

export default function AdvancedJsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="advanced-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Données structurées avancées pour la page d'accueil
export const advancedHomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Eléonore Gyselynck - Psychologue clinicienne agréée",
  "alternateName": "Psychologue Overijse, Consultation psychologique Belgique",
  "description": "Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l'accompagnement des adultes et adolescents. Approche centrée sur la personne (ACP).",
  "url": "https://eleonore-gyselynck-psychologue.com",
  "telephone": "+32460214773",
  "email": "eleonore.gyselynck@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue Langeweg 128",
    "addressLocality": "Overijse",
    "postalCode": "3090",
    "addressCountry": "BE",
    "addressRegion": "Flandre"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.7689,
    "longitude": 4.5347
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Mobile Payment", "Payconiq"],
  "currenciesAccepted": "EUR",
  "medicalSpecialty": "Psychologie clinique",
  "areaServed": {
    "@type": "Place",
    "name": "Overijse, Belgique"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.7689,
      "longitude": 4.5347
    },
    "geoRadius": "25000"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Consultation psychologique adulte",
      "description": "Consultation individuelle pour adultes et jeunes adultes. Thérapie ACP, accompagnement personnalisé.",
      "serviceType": "Psychothérapie",
      "category": "Santé mentale"
    },
    {
      "@type": "MedicalService", 
      "name": "Consultation psychologique adolescent",
      "description": "Consultation individuelle pour adolescents à partir de 15 ans. Espace sécurisé et confidentiel.",
      "serviceType": "Psychothérapie adolescent",
      "category": "Santé mentale jeunesse"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de psychologie",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalService",
          "name": "Consultation psychologique",
          "description": "Séance de 50 minutes"
        },
        "price": "65",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "sameAs": [
    "https://rosa.be/fr/hp/eleonore-gyselynck/",
    "https://www.compsy.be/nl_BE/psychologist/6383"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Marie D."
      },
      "reviewBody": "Excellente psychologue, très professionnelle et à l'écoute. L'approche ACP est vraiment efficace."
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Eléonore Gyselynck",
    "jobTitle": "Psychologue clinicienne agréée",
    "description": "Formée en psychologie clinique à l'UCL, spécialisée en Approche Centrée sur la Personne (ACP)"
  },
  "foundingDate": "2020",
  "knowsAbout": [
    "Psychologie clinique",
    "Approche Centrée sur la Personne",
    "Thérapie ACP",
    "Carl Rogers",
    "Psychologie humaniste",
    "Accompagnement adolescent",
    "Accompagnement adulte",
    "Gestion du stress",
    "Anxiété",
    "Dépression",
    "Difficultés relationnelles"
  ],
  "keywords": "psychologue overijse, consultation psychologique, thérapie ACP, psychologue adolescent, psychologue adulte, approche centrée personne"
}

// Données structurées pour les FAQ
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment prendre rendez-vous avec Eléonore Gyselynck ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous pouvez prendre rendez-vous via Rosa.be, par téléphone au 0460 21 47 73, ou par email à eleonore.gyselynck@gmail.com. Les consultations se déroulent à Overijse ou en ligne."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que l'Approche Centrée sur la Personne (ACP) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'ACP est une méthode de psychothérapie humaniste développée par Carl Rogers, basée sur la tendance actualisante. Elle met l'accent sur l'empathie, la congruence et l'acceptation inconditionnelle."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une consultation psychologique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une consultation de 50 minutes coûte 65 euros. Le paiement peut se faire en espèces ou par Payconiq. Certaines mutuelles remboursent partiellement les consultations."
      }
    },
    {
      "@type": "Question",
      "name": "À partir de quel âge peut-on consulter ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les consultations sont ouvertes à partir de 15 ans. Eléonore Gyselynck reçoit les adolescents et les adultes pour des consultations individuelles."
      }
    }
  ]
}

// Données structurées pour l'organisation
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eléonore Gyselynck - Psychologue clinicienne",
  "url": "https://eleonore-gyselynck-psychologue.com",
  "logo": "https://eleonore-gyselynck-psychologue.com/assets/logos/logo_yellow_on_white.png",
  "description": "Cabinet de psychologie à Overijse, spécialisé dans l'Approche Centrée sur la Personne (ACP)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue Langeweg 128",
    "addressLocality": "Overijse",
    "postalCode": "3090",
    "addressCountry": "BE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+32460214773",
    "contactType": "customer service",
    "availableLanguage": ["French", "Dutch"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
  "sameAs": [
    "https://rosa.be/fr/hp/eleonore-gyselynck/",
    "https://www.compsy.be/nl_BE/psychologist/6383",
    "https://www.afpc.be/"
  ]
} 