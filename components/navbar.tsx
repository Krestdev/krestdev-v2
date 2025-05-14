"use client"

import { navigationLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocaleSwitcher from './locale-switcher';
import { Menu } from './Menu';
import Reveal from './reveal';
import { Button } from './ui/button';

function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ||
      (path !== '/' && pathname.startsWith(path));
  };

  return (
    <Reveal y={-5} className='fixed top-3 z-40 max-w-7xl px-3 w-[calc(100%-12px)] left-1/2 -translate-x-1/2 backdrop-blur-md'>
      <div className='w-full h-[70px] px-7 flex flex-row items-center justify-between bg-black/80 rounded-xl'>
        <div className='flex items-center gap-2'>
          <Menu />
          <Link href={"/"}>
            <img src={'/images/logo.png'} alt={'Logo'} className='h-8 w-auto object-cover flex gap-2'/>
          </Link>
        </div>
        <span className='hidden lg:flex flex-row items-center gap-4'>
          {navigationLinks.filter(x=>x.url!=="/contact").map(link=><Link key={link.url} href={link.url}><Button variant={"navlink"} className={cn(isActive(link.url) && "text-primary hover:text-primary/80", "cursor-pointer")}>{t(link.title)}</Button></Link>)}
        </span>
        <div className='flex items-center gap-3'>
          <LocaleSwitcher />
          {navigationLinks.filter(x=> x.url==="/contact").map(el=><Link key={el.url} href={el.url} className='hidden sm:inline-flex'><Button>{t(el.title)}</Button></Link>)}
        </div>
      </div>
    </Reveal>
  )
}

export default Navbar