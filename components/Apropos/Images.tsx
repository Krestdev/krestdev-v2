import React from 'react'

const Images = () => {
    return (
        <div className='flex justify-center pb-[400px] py-10 sm:py-[60px] sm:gap-8 lg:py-[96px] lg:gap-[60px] w-full gap-7'>
            <div className='max-w-[1280px] max-h-[636px] grid grid-cols-1 md:grid-cols-2 place-items-stretch justify-center w-full px-7 gap-5 sm:gap-8 lg:gap-10'>
                <div className='flex flex-col max-h-[636px] gap-5 sm:gap-8 lg:gap-10'>
                    <img src="/images/salle.png" alt="Salle" className='w-full h-[320px] rounded-[12px] object-cover' />
                    <div className='flex flex-row gap-5 w-full max-h-[276px]'>
                        <div className="w-1/2 pr-2.5 rounded-[12px]">
                            <img src="/images/ecran.jpg" alt="Écran" className='w-full aspect-square object-cover rounded-[12px]' />
                        </div>
                        <div className="w-1/2 pl-2.5 rounded-[12px]">
                            <img src="/images/homme.png" alt="Écran" className='w-full aspect-square object-cover rounded-[12px]' />
                        </div>
                    </div>
                </div>
                <img src="/images/manipule.png" alt="Salle" className='rounded-[12px] object-cover max-h-[636px] h-auto' />
            </div>
        </div>
    );
};

export default Images;

