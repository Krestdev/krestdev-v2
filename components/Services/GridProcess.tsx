import { div } from 'framer-motion/client'
import { useTranslations } from 'next-intl'
import React from 'react'
import Process from './Process'

const GridProcess = () => {
    const t = useTranslations("Services.Process")
    const process = [
        {
            num: "001",
            title: t("besoin.title"),
            description: t("besoin.description")
        },
        {
            num: "002",
            title: t("solution.title"),
            description: t("solution.description")
        },
        {
            num: "003",
            title: t("developpement.title"),
            description: t("developpement.description")
        },
        {
            num: "004",
            title: t("test.title"),
            description: t("test.description")
        },
        {
            num: "005",
            title: t("suivi.title"),
            description: t("suivi.description")
        },
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap0'>
            {
                process.map((x, i) => {
                    return (
                        <div key={i}>
                            <Process {...x} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GridProcess
