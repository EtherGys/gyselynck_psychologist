import Link from 'next/link'

export default function SEOFooter() {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Eléonore Gyselynck</p>
              <p>Psychologue clinicienne agréée</p>
              <p>Rue Langeweg 128</p>
              <p>3090 Overijse, Belgique</p>
              <p>Tél: <a href="tel:+32460214773" className="text-green-600 hover:text-green-800">0460 21 47 73</a></p>
              <p>Email: <a href="mailto:eleonore.gyselynck@gmail.com" className="text-green-600 hover:text-green-800">eleonore.gyselynck@gmail.com</a></p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/consultations" className="hover:text-green-600">Consultations adultes</Link></li>
              <li><Link href="/consultations" className="hover:text-green-600">Consultations adolescents</Link></li>
              <li><Link href="/approche_acp" className="hover:text-green-600">Thérapie ACP</Link></li>
              <li><Link href="/rendez-vous" className="hover:text-green-600">Prise de rendez-vous</Link></li>
            </ul>
          </div>

          {/* Approche thérapeutique */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Approche</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/approche_acp" className="hover:text-green-600">Approche Centrée sur la Personne</Link></li>
              <li><Link href="/formation" className="hover:text-green-600">Formation et qualifications</Link></li>
              <li><Link href="/approche_acp" className="hover:text-green-600">Carl Rogers</Link></li>
              <li><Link href="/approche_acp" className="hover:text-green-600">Psychologie humaniste</Link></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://rosa.be/fr/hp/eleonore-gyselynck/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Prendre rendez-vous (Rosa.be)</a></li>
              <li><a href="https://www.compsy.be/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Commission des Psychologues</a></li>
              <li><a href="https://www.afpc.be/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Association Francophone ACP</a></li>
              <li><Link href="/sitemap" className="hover:text-green-600">Plan du site</Link></li>
            </ul>
          </div>
        </div>

        {/* Informations légales */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Eléonore Gyselynck - Psychologue clinicienne agréée</p>
              <p>Inscrite à la Commission des Psychologues (912231069)</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="hover:text-green-600">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-green-600">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 