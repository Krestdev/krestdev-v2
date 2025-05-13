"use client"

import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

interface NombreProps {
    nombre: number;
    uni?: string;
    title?: string;
}

const Nombre = ({ nombre, uni, title }: NombreProps) => {

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, nombre, { duration: 5 })
        return () => controls.stop()
    }, [])

    return (
        <div className='flex flex-col items-center xl:items-start'>
            <p>{title}</p>
            <div className='flex flex-row '>
                <motion.h1 className='font-semibold text-[48px] md:text-[60px] xl:text-[80px] text-white h-[124px] flex items-center'>{rounded}</motion.h1>
                <p className='font-semibold text-[48px] md:text-[60px] xl:text-[80px] text-white flex items-center'>{uni}</p>
            </div>
        </div>
    )
}

export default Nombre


const text = {
    fontSize: 64,
    color: "#8df0cc",
}
