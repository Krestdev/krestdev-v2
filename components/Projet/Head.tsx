import React from 'react'

interface Props {
    nom: string;
    preview: string;
}

const Head = ({ nom, preview }: Props) => {
    return (
        <div
            className="relative flex items-center justify-center px-[10px] py-[80px] overflow-hidden"
            style={{
                backgroundImage: `url("${preview}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <h1 className="relative text-white z-10">{nom}</h1>
        </div>
    );
};

export default Head;
