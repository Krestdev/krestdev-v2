"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { LucideMenu, LucideX } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

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
            <DrawerTrigger asChild>
                <LucideMenu className='flex md:hidden gap-2 px-2 size-10 text-white' />
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full max-w-sm">
                    <DrawerHeader className="flex flex-row justify-between items-center bg-black ">
                        <DrawerTitle>
                            <Link href={"/"}>
                                <img src={'/images/logo.png'} alt={'Logo'} className='h-[32px] w-auto object-cover flex gap-2' />
                            </Link>
                        </DrawerTitle>
                        <DrawerClose><LucideX className="text-white"/></DrawerClose>
                    </DrawerHeader>
                    <span className='text-black flex flex-col gap-4 px-5 pt-7 divide-y'>
                        <Link
                        onClick={() => setOpen(false)}
                            href={"/"}
                            className={`hover:underline font-medium ${isActive('/') ? 'text-[#3684DB]' : ''}`}
                        >
                            {t("accueil")}
                        </Link>
                        <Link
                        onClick={() => setOpen(false)}
                            href={"/services"}
                            className={`hover:underline font-medium ${isActive('/services') ? 'text-[#3684DB]' : ''}`}
                        >
                            {t("services")}
                        </Link>
                        <Link
                        onClick={() => setOpen(false)}
                            href={"/apropos"}
                            className={`hover:underline font-medium ${isActive('/apropos') ? 'text-[#3684DB]' : ''}`}
                        >
                            {t("about")}
                        </Link>
                        <Link
                        onClick={() => setOpen(false)}
                            href={"/tarification"}
                            className={`hover:underline font-medium ${isActive('/tarification') ? 'text-[#3684DB]' : ''}`}
                        >
                            {t("tarif")}
                        </Link>
                        <Link
                        onClick={() => setOpen(false)}
                            href={"/portfolio"}
                            className={`hover:underline font-medium ${isActive('/portfolio') ? 'text-[#3684DB]' : ''}`}
                        >
                            {t("porto")}
                        </Link>
                    </span>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
