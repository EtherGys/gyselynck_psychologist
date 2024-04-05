import React from 'react'

function Footer() {
    return (
        <div>
            {/* <!-- Footer container --> */}
            <footer
                className="text-center text-surface/75  lg:text-left font-roboto text-white">
                <div className="px-6 py-10 text-center md:text-left bg-[#292222] w-full">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                                    <img className='w-6 h-6' src="/assets/logos/logo_yellow_on_black.png" alt="logo d'Éléonore Gyselynck" />
                                </span>
                                Éléonore Gyselynck
                            </h6>
                            <p>
                                Psychologue clinicienne agréée
                            </p>
                            <div className="px-4 pt-6">
                                <h3 className="text-lg font-semibold">ADRESSE</h3>
                                <a href="https://maps.app.goo.gl/q74f2ZcP68GGd2Rt9" rel="noopener noreferrer" target='_blank'>
                                    <p className="mt-1">rue Langeweg 128,</p>
                                    <p className="mt-1">3090, Overijse</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Menu
                            </h6>
                            <p className="mb-4 underline-offset-4 underline">
                                <a href="/">Accueil</a>
                            </p>
                            <p className="mb-4 underline-offset-4 underline">
                                <a href="/formation">Ma formation</a>
                            </p>
                            <p className="mb-4 underline-offset-4 underline">
                                <a href="/consultations">Consultations</a>
                            </p>
                            <p className="mb-4 underline-offset-4 underline">
                                <a href="/approche_acp">Mon approche</a>
                            </p>
                            <p className="underline-offset-4 underline">
                                <a href="/rendez-vous">Prendre rendez-vous</a>
                            </p>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#4F4141" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                Sur RDV, le mardi et jeudi de 9h à 17h

                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </span>
                                <a href="mailto:eleonore.gyselynck@gmail.com" className='underline'>
                                    eleonore.gyselynck@gmail.com
                                </a>
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                                <a href="tel:0400000000" className='underline'>
                                    0400 00 00 00
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className="bg-black text-white  p-2 lg:p-6 text-sm lg:text-base text-center">
                    <span>© 2024 Éléonore Gyselynck, Tous droits réservés. Conçu par Victoria Gyselynck</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
