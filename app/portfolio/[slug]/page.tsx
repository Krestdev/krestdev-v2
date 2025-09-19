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
  const projects = useProjetData()
  
  useEffect(() => {
    params.then(resolvedParams => {
      setSlug(resolvedParams.slug)
    })
  }, [params])

  if (!slug) return <div>{"Loading..."}</div>

  const project = projects.find(p => p.slug === slug)

  if (!project) return notFound()

  return (
    <>
      <Head nom={project.nom} preview={project.preview} />
      <Port {...project}/>
    </>
  )
}

export default Page