'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export default function ClientBreadcrumb() {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])
  
  useEffect(() => {
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
      const paths = pathname.split('/').filter(Boolean)
      
      const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Accueil', href: '/' }
      ]
      
      let currentPath = ''
      paths.forEach((path, index) => {
        currentPath += `/${path}`
        const label = getBreadcrumbLabel(path)
        breadcrumbs.push({
          label,
          href: currentPath,
          current: index === paths.length - 1
        })
      })
      
      return breadcrumbs
    }
    
    setBreadcrumbs(generateBreadcrumbs())
  }, [pathname])
  
  const getBreadcrumbLabel = (path: string): string => {
    const labels: { [key: string]: string } = {
      'consultations': 'Consultations',
      'approche_acp': 'Approche ACP',
      'formation': 'Formation',
      'rendez-vous': 'Rendez-vous'
    }
    return labels[path] || path.charAt(0).toUpperCase() + path.slice(1)
  }
  
  // Ne pas afficher sur la page d'accueil
  if (breadcrumbs.length <= 1) {
    return null
  }
  
  return (
    <div className="w-full bg-gray-50 py-3 px-4 rounded-lg mb-6">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="mx-2 h-4 w-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {breadcrumb.current ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="hover:text-green-600 hover:underline transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
} 