'use client'
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { RevealGroup } from '../reveal';
import { usePathname } from 'next/navigation';

interface Props {
    nom: string;
    preview: string;
}

const Head = ({ nom, preview }: Props) => {
    const t = useTranslations("Portfolio");
    const pathname = usePathname();
    const paths = pathname.split("/").toSpliced(0,1);
    console.log(paths[0]);

    return (
        <div className='w-full flex flex-col items-center pb-14 sm:pb-20 pt-28 sm:pt-32 lg:pt-40 relative'>
            <img src="/images/hero.webp" alt="default background" className='absolute w-full h-full -z-10 top-0 left-0' />
            <img src={preview} alt={nom} className='absolute w-full h-full top-0 left-0 object-cover opacity-20 mix-blend-screen' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent' />
            <RevealGroup y={15} blur={6} className='flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 px-7 max-w-7xl w-full z-10'>
                    <div className='flex flex-row items-center gap-3 w-fit'>
                        <Link href={"/portfolio"} className='subtitle text-subtitle-blue text-sm text-center max-w-[640px] w-full'>{t("title")}</Link>
                        <ChevronRight className='text-subtitle-blue' />
                        <p className='text-subtitle-blue text-sm font-semibold text-center max-w-[640px] w-full text-nowrap'>{nom}</p>
                    </div>
                    <h1 className='text-white'>{nom}</h1>
                </RevealGroup>
        </div>
    );
};

export default Head;
