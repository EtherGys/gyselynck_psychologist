
'use client'
import GreenBorderButton from '@/components/buttons/GreenBorderButton';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

function Nav() {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    const pathname = usePathname();

    const generalLinkstyle = "p-4 hover:bg-[#4F4141]"
    const selectedLinkstyle = "p-4 hover:bg-[#4F4141] bg-gray-300 text-gray-700 hover:text-gray-500 font-semibold border-b-4 border-[#E7A100]"
    
    return (
        <div className='font-roboto'>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 md:flex hidden">
                <div className="flex flex-wrap justify-between w-screen items-center mx-auto max-w-screen-xl p-4">
                    <a  rel="canonical" href="https://eleonore-gyselynck-psychologue.com/" className="text-[#292222]">
                        <p className="self-center text-2xl font-semibold flex"><img className='w-6 h-6 mt-1 mr-2' src="/assets/logos/logo_black_on_white.png" alt="logo d'Éléonore Gyselynck" />Eléonore Gyselynck</p>
                        <p className="self-center text-xl font-semibold">Psychologue clinicienne agréée</p>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <GreenBorderButton target='_blank' href="https://rosa.be/fr/hp/eleonore-gyselynck/" 
                        content='Prendre rendez-vous (Overijse)'/>
                        <GreenBorderButton target='_blank' href="https://centremergences.be/nos-therapeutes/gyselynck-eleonore" 
                        content='Prendre rendez-vous (Louvain-La-Neuve)'/>
                        <a  href="tel:0460214773">
                        <button type="button" className="py-4 px-8  flex flex-row text-white bg-[#9CCC65] hover:bg-[#BBE090] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center me-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span className=''>
                            0460 21 47 73
                            </span>
                        </button>
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-[#292222] md:flex hidden">
                <div className="max-w-screen-xl mx-auto">
                    <div className="">
                        <ul className="flex flex-row justify-around text-white">
                            <li className={pathname == "/" ? selectedLinkstyle : generalLinkstyle}>
                                <a  rel="canonical" href="https://eleonore-gyselynck-psychologue.com/" aria-current="page">Accueil</a>
                            </li>
                            <li className={pathname == "/formation" ? selectedLinkstyle : generalLinkstyle}>
                                <a href="/formation">Ma formation</a>
                            </li>
                            <li className={pathname == "/consultations" ? selectedLinkstyle : generalLinkstyle}>
                                <a href="/consultations">Consultations</a>
                            </li>
                            <li className={pathname == "/approche_acp" ? selectedLinkstyle : generalLinkstyle}>
                                <a href="/approche_acp">Mon approche</a>
                            </li>
                            <li className={pathname == "/rendez-vous" ? selectedLinkstyle : generalLinkstyle}>
                                <a href="/rendez-vous">Prendre rendez-vous</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile navigation */}
            <div className='md:hidden flex fixed z-40 w-screen'>
                {/* burger menu */}
                <div className='flex justify-between w-full bg-[#292222]'>
                    <a  rel="canonical" href="https://eleonore-gyselynck-psychologue.com/" className="text-white ml-4 py-2">
                        <p className="self-center text-base"><img className='w-3 h-3 mt-1 mr-2' src="/assets/logos/logo_white_on_black.png" alt="logo d'Éléonore Gyselynck" />Eléonore Gyselynck</p>
                        <p className="self-center text-xs">Psychologue clinicienne agréée</p>
                    </a>
                    <div onClick={() => { setToggleDropdown((prev) => !prev) }} className='mr-4 my-auto w-6 h-6 z-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    {toggleDropdown && (
                        <div className='absolute right-0 top-full rounded-bl-lg w-[50%] p-5 bg-[#292222] min-w-[210px] flex flex-col gap-2 justify-end items-end text-white'>
                            <Link  rel="canonical" href='https://eleonore-gyselynck-psychologue.com/' className='my-4 text-lg' onClick={() => { setToggleDropdown(false) }}>
                                Accueil
                            </Link>
                            <Link href='/formation' className='my-4 text-lg' onClick={() => { setToggleDropdown(false) }}>
                                Ma formation
                            </Link>
                            <Link href='/consultations' className='my-4 text-lg' onClick={() => { setToggleDropdown(false) }}>
                                Consultations
                            </Link>
                            <Link href='/approche_acp' className='my-4 text-lg' onClick={() => { setToggleDropdown(false) }}>
                                L'approche ACP
                            </Link>
                            <Link href='/rendez-vous' className='my-4 text-lg' onClick={() => { setToggleDropdown(false) }}>
                                Prendre rendez-vous
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav
