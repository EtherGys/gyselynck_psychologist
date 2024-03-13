import React from 'react'

function Footer() {
    return (
        <div>
            {/* <!-- Footer container --> */}
            <footer
                className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
                <div className="px-6 py-10 text-center md:text-left bg-[#E7A100] w-full">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                                    </svg>
                                </span>
                                Éléonore Gyselynck
                            </h6>
                            <p>
                                Psychologue clinicienne agréée
                            </p>
                            <div className="px-4 pt-6">
                                <h3 className="text-lg font-semibold text-gray-900">ADRESSE</h3>
                                <p className="mt-1">rue Langeweg 128,</p>
                                <p className="mt-1">3090, Overijse</p>
                            </div>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Menu
                            </h6>
                            <p className="mb-4">
                                <a href="/">Accueil</a>
                            </p>
                            <p className="mb-4">
                                <a href="/formation">Ma formation</a>
                            </p>
                            <p className="mb-4">
                                <a href="/consultation">Consultations</a>
                            </p>
                            <p className="mb-4">
                                <a href="/approche_acp">L'approche ACP</a>
                            </p>
                            <p>
                                <a href="/rendez-vous">Prendre rendez-vous</a>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        {/* <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-4">
                                <a href="#!">Pricing</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!">Settings</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!">Orders</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </div> */}
                        {/* <!-- Contact section --> */}
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E7A100" className="w-6 h-6">
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
                                steve_beahan@hane.com
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
                                0400 00 00 00
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className="bg-black text-white p-6 text-center">
                    <span>© 2024 Éléonore Gyselynck, Tous droits réservés. Conçu par Victoria Gyselynck</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
