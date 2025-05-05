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
                <div className='flex flex-col items-center justify-center gap-[60px] px-7 w-full'>
                    <div className='flex flex-col items-center justify-center max-w-[1280px] w-full gap-5 text-center pt-10'>
                        <h1 className='text-white w-[735px]'>
                            {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                        </h1>
                        <p className='text-[#D9EBFF] w-[640px]'>{t("description")}</p>
                        <div className='flex flex-row gap-7'>
                            <Button className='text-black bg-white'>{t("services")}</Button>
                            <Button>{t("contact")}</Button>
                        </div>
                    </div>
                    <img
                        src='/images/projet.png'
                        alt='projet'
                        className='object-center max-w-[1400px] w-[80%] -mb-50'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
