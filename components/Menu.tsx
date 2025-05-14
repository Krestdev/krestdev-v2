"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import { navigationLinks } from "@/data/navigation"
import { cn } from "@/lib/utils"
import { LucideMenu, LucideX } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

export function Menu() {
    const isActive = (path: string) => {
        return pathname === path ||
            (path !== '/' && pathname.startsWith(path));
    };
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false)

    return (
        <Drawer open={open} onOpenChange={setOpen} direction="left">
            <DrawerTrigger className="text-white size-10 flex lg:hidden justify-center items-center">
                    <LucideMenu size={24}/>
            </DrawerTrigger>
            <DrawerContent className="bg-black">
                    <DrawerHeader className="flex flex-row justify-between items-center">
                        <DrawerTitle>
                            <Link href={"/"}>
                                <img src={'/images/logo.png'} alt={'Logo'} className='h-[32px] w-auto object-cover flex gap-2' />
                            </Link>
                        </DrawerTitle>
                        <DrawerClose><LucideX className="text-white"/></DrawerClose>
                    </DrawerHeader>
                    <ul role="list" className='flex flex-col gap-2 px-3 mt-5'>
                        {
                            navigationLinks.map(x=><li key={x.url}><Link href={x.url} className={cn("px-7 h-12 inline-flex items-center capitalize text-white", isActive(x.url) && "text-primary")}>{t(x.title)}</Link></li>)
                        }
                    </ul>
            </DrawerContent>
        </Drawer>
    )
}
