"use client"
import React from 'react'
import "./notfound.css"
import Image from 'next/image'
import Logo from '../../public/aseets/aircarzlogo.png'
import Downbutton from '../../public/aseets/Button.png'
import Dontenter from '../../public/aseets/return.png'
import Play from "../../public/aseets/applee.svg"
import Google from "../../public/aseets/google.svg"

const page = () => {
    return (
        <div className='mainbody'>


            <div className="body">
                <nav>

                    <div className="nav">
                        <span className="image"><Image src={Logo} alt="logo" width={120} height={49} /></span>
                        <span className="downbutton"> <Image src={Downbutton} /></span>
                    </div>
                </nav>

                <section>
                    <div className="section">
                        <div className="middlebody">
                            <span className="imagedont">
                                <Image src={Dontenter} />
                            </span>
                            <span className="contents">
                                <h1>Error 404</h1>
                                <p>Woops! Looks like this area is restricted for drivers. Make a u turn to home page to explore your new route.</p>
                            </span>
                            <span className="button">

                                Reroute to Home

                            </span>
                        </div>
                        <div className="taglines-buttons">
                            <span className="tagline">
                                <p>Download our App and search for your dream car.</p>
                            </span>
                            <span className="buttons">
                                <span>
                                    <Image src={Google} />
                                </span>
                                <span>
                                    <Image src={Play} />
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <footer>
                    <span className="rights">
                        <p>© 2023 AiCarz</p>
                        <p>All Rights Reserved CARZAI PVT LTD</p>
                    </span>
                </footer>

            </div>


        </div>
    )
}

export default page
