import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import Image from 'next/image';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <div className='w-full h-[629px] md:mb-[145px] lg:mb-10 lg:h-[1024px] flex flex-col items-start md:items-center'>
            <div
                className='w-full h-[80%] bg-cover bg-no-repeat flex justify-center items-start md:items-center '
                style={{
                    backgroundImage: `url('/images/hero.png')`,
                    backgroundSize: 'cover',
                    overflow: 'visible',
                }}
            >
                <div className='flex flex-col items-center justify-center gap-[40px] w-full px-7'>
                    <div className='flex flex-col items-center justify-center w-full gap-5 text-center pt-10'>
                        <h1 className='text-white sm:w-[668px] md:w-[735px]'>
                            {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                        </h1>
                        <p className='text-[#D9EBFF] w-[317px] md:w-[640px]'>{t("description")}</p>
                        <div className='flex flex-col gap-4 sm:flex-row sm:gap-7 w-full md:w-fit'>
                            <Button className='text-black bg-white'>{t("services")}</Button>
                            <Button>{t("portofolio")}</Button>
                        </div>
                    </div>
                    <img
                        src='/images/projet.png'
                        alt='projet'
                        className='object-center max-w-[1400px] w-[80%] -mb-50 md:-mb-60 lg:-mb-65'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
