"use client"

import Head from '@/components/Projet/Head'
import Port from '@/components/Projet/Port'
import { useProjetData } from '@/data/data'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}

const Page = ({ params }: PageProps) => {
  const [slug, setSlug] = useState<string | null>(null)
  const projets = useProjetData()
  
  useEffect(() => {
    params.then(resolvedParams => {
      setSlug(resolvedParams.slug)
    })
  }, [params])

  if (!slug) return <div>Loading...</div>

  const projet = projets.find(p => p.slug === slug)

  if (!projet) return notFound()

  return (
    <>
      <Head nom={projet.nom} preview={projet.preview} />
      <Port
        nom={projet.nom}
        service={projet.service}
        desc={projet.description}
        image={projet.image}
        slug={projet.slug}
        lien={projet.lien}
      />
    </>
  )
}

export default Page