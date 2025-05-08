import { ArrowRight, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

interface Props {
    nom: string;
    preview: string;
}

const Head = ({ nom, preview }: Props) => {
    const t = useTranslations("Portfolio");

    return (
        <div className='bg-black pt-24 w-full'>
            <div
                className="relative flex flex-col gap-10 items-center justify-center px-[10px] py-[80px] overflow-hidden"
                style={{
                    backgroundImage: `url("${preview}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* superposition avec image locale (en plus du preview) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-30 opacity-80" />
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center opacity-80"
                        style={{
                            backgroundImage: "url('/images/proj.png')",
                        }}
                    />
                </div>

                <div className='flex flex-col items-center gap-10 px-7 max-w-[1280px] w-full relative z-30'>
                    <div className='flex flex-row items-center gap-3 w-fit'>
                        <p className='subtitle text-[#D9EBFF] text-[14px] text-center max-w-[640px] w-full'>{t("title")}</p>
                        <ChevronRight className='text-[#D9EBFF] text-[16px] font-semibold' />
                        <p className='text-[#D9EBFF] text-[14px] font-semibold text-center max-w-[640px] w-full text-nowrap'>{nom}</p>
                    </div>
                    <h1 className='text-white'>{nom}</h1>
                </div>
            </div>
        </div>
    );
};

export default Head;
