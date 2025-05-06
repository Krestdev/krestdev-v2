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
        <div className='flex flex-col items-center lg:items-start'>
            <p>{title}</p>
            <div className='flex items-center'>
                <motion.h1 className='font-semibold text-[80px] text-black '>{rounded}</motion.h1>
                <p className='font-semibold text-[80px] text-black '>{uni}</p>
            </div>
        </div>
    )
}

export default Nombre


const text = {
    fontSize: 64,
    color: "#8df0cc",
}
