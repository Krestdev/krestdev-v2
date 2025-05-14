import React from 'react'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface Props {
    slug: string,
    preview: string,
    nom: string,
}

const Projet = ({ preview, nom, slug }: Props) => {
    return (
        <Link href={`/portfolio/${slug}`} className='flex flex-col gap-5'>
            <img src={preview} alt={nom} className='w-full h-auto aspect-video object-cover border border-subtitle-blue' />
            <div className='flex flex-row items-center gap-3'>
                <h3 className='text-start uppercase text-white'>{nom}</h3>
                <LucideArrowUpRight className='text-white' />
            </div>

        </Link>
    )
}

export default Projet
