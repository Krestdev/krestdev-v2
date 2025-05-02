import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import Image from 'next/image';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <div className='w-full flex flex-col items-center'>
            <div
                className='w-full bg-cover bg-no-repeat flex justify-center items-center'
                style={{
                    backgroundImage: `url('/images/hero.png')`,
                    backgroundSize: 'cover',
                    height: '80%', 
                    overflow: 'visible',
                }}
            >
                <div className='flex flex-col items-center justify-center gap-10 px-7 max-w-[1280px] w-full'>
                    <div className='flex flex-col items-center justify-center max-w-[735px] w-full gap-5 text-center pt-10'>
                        <h1 className='text-white'>
                            {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                        </h1>
                        <p className='text-[#D9EBFF]'>{t("description")}</p>
                        <div className='flex flex-row gap-7'>
                            <Button className='text-black bg-white rounded-none'>{t("services")}</Button>
                            <Button className='rounded-none'>{t("contact")}</Button>
                        </div>
                    </div>
                    <div className='-mb-10'> 
                        <Image
                            src='/images/projet.png'
                            alt='projet'
                            width={735}
                            height={500}
                            className='object-center'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
