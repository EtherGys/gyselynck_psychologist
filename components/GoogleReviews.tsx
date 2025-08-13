'use client'

import { useState } from 'react'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  source: 'Google' | 'Rosa.be' | 'Site'
}

export default function GoogleReviews() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      author: 'Lili',
      rating: 5,
      text: 'Mon fils a été suivi par Éléonore pour des difficultés liées au stress scolaire et à l\'estime de soi. Dès les premières séances, il a senti une vraie connexion et une approche adaptée aux adolescents. Son cabinet, à deux pas de La Hulpe, est un endroit apaisant, et elle sait nous mettre à l\'aise en tant que parent, dès les premiers échanges. On se sent vraiment chanceux d\'avoir trouvé une psychologue si compétente. Merci encore !',
      date: '2024-07-16',
      source: 'Google'
    },
    {
      id: '2',
      author: 'Emma S.',
      rating: 5,
      text: 'Je recommande Eléonore Gyselynck, une psychologue avec qui il est à la fois simple et agréable de travailler. Elle se distingue par sa grande qualité d\'écoute, une présence attentive et un réel sens clinique. Son accompagnement est à la fois humain, respectueux et ancré dans la réalité des personnes. Sa bienveillance et sa capacité à agir avec justesse font d\'elle une professionnelle de qualité. Elle parvient à créer un espace sécurisant et respectueux, propice à l\'expression.',
      date: '2024-05-13',
      source: 'Google'
    },
    {
      id: '3',
      author: 'Louis',
      rating: 5,
      text: 'J\'ai consulté Éléonore dans un moment très difficile de ma vie. Sa délicatesse, son écoute, toujours calme et sans jugement, m\'a permis de traverser cette période avec plus de douceur. Je recommande vivement cette psychologue, elle donne un vrai espace d\'accueil, près de La Hulpe.',
      date: '2024-07-16',
      source: 'Google'
    },
    {
      id: '4',
      author: 'Julie D.',
      rating: 5,
      text: 'Eléonore est une personne douce, une oreille attentive et délicate qui vous aide à trouver des solutions à vos problèmes. On se sent soutenu.e et bien accompagné.e.',
      date: '2024-07-13',
      source: 'Google'
    }
  ])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Avis de nos patients
        </h2>
        <div className="flex items-center justify-center space-x-1 mb-2">
          {renderStars(Math.round(averageRating))}
        </div>
        <p className="text-gray-600">
          Note moyenne : <span className="font-semibold">{averageRating.toFixed(1)}/5 </span> 
          basée sur <span className="font-semibold">{reviews.length +1}</span> avis
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
            <div className="flex items-center mb-2">
              <div className="flex space-x-1 mr-2">
                {renderStars(review.rating)}
              </div>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                {review.source}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-3 italic">
              "{review.text}"
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">{review.author}</span>
              <span className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString('fr-FR')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="https://share.google/OKo57W5TXo8fIx3xe"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Voir tous les avis
        </a>
      </div>
    </div>
  )
} 