"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import "./page.css"
import Image from 'next/image'
import Logo from '../../public/aseets/logoaicarz.svg'
import MenuIcon from '@mui/icons-material/Menu';
import AOS from "aos";
import "aos/dist/aos.css";
import Like from "../../public/aseets/like.svg"
import Dislike from "../../public/aseets/dislike.svg"
import CompanyLogo from "../../public/aseets/companylogo.svg"
import CarImage from "../../public/aseets/carfigma.svg"
import CarImage2 from "../../public/aseets/carimage2.svg"
import Qr from "../../public/aseets/qrcode.svg"
import Hundyai from "../../public/aseets/hundyai.svg"
import Swipimageone from '../../public/aseets/swipsimage.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Qrwhite from "../../public/aseets/qrwhitw.svg"
import FAQ from "../FAQ/page"
import Doubleimage from "../../public/aseets/doublemobile.svg"
import Play from "../../public/aseets/apple.svg"
import Google from "../../public/aseets/google.png"
import Bulb from "../../public/aseets/Bulb.png"

import Audi from './logos/audi.png'
import BMW from './logos/bmw.png'
import Ford from './logos/ford.png'
import Tesla from "./logos/tesla.png"
import Volvo from './logos/volvo.png'
import Toyota from './logos/toyota.png'
import Lion from './logos/lion.png'
import Bird from './logos/bird.png'
import Bently from './logos/bently.png'
import Jaguar from './logos/jaguar.png'
import Kia from './logos/kia.png'
import Landover from './logos/landrover.png'


const page = () => {

    const [ShowBulb, setShowBulb] = useState(false);
    const [ShowCar, setShowcar] = useState(false);
    const [Section, setSection] = useState(false)
    const [ShowCard1, setShowCard1] = useState(true);
    const [Nav, setNav] = useState(true);
    const [AnimationTriggered, setAnimationTriggered] = useState(true);



    // USE AOS FOR ANIMATION
    useEffect(() => {
        AOS.init();
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setNav(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSection(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBulb(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowcar(true);
        }, 600);

        return () => clearTimeout(timer);
    }, []);



    const handleLikeClick = () => {
        setShowCard1((prevShowCard1) => !prevShowCard1);
        setAnimationTriggered(true);
    };

    const handleagainclick = () => {
        setShowCard1((prevShowCard1) => !prevShowCard1);
        setAnimationTriggered(false);
    };

    return (
        <div >
            <div className="animate">

            </div>
            <div className="background-image"></div>

            {/* SECTION ONE */}

            {Nav && (
                <section data-aos="fade-down"
                    data-aos-duration="4000" >
                    {/* NAV BAR */}

                    <nav>
                        <span className="logo">
                            <Image src={Logo} alt='logo' width={114} height={47} />
                        </span>
                        <span className="burgermenu">
                            <MenuIcon sx={{ fontSize: 24 }} />
                        </span>
                    </nav>

                    {/* HEADING OR PARAGRAPH */}

                    <div className="head-main">
                        <div className="head-container">
                            <span id='way'>SWIPE YOUR WAY</span>
                            <h1 id='h1'>To your new ride with Artificial Intelligence</h1>
                        </div>
                    </div>
                </section>
            )}
            {/* SECTION TWO */}


            {Section && (
                <section className="two" data-aos="fade-up" data-aos-duration="9000">
                    <div className="swip_main">
                        <div className="swipbody">
                            <span className="dislike">
                                <Image src={Dislike} alt='dislike button' width={40} height={40}
                                    onClick={handleagainclick}
                                />
                            </span>
                            {ShowBulb && (
                                <span
                                    className="bulb"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                ></span>
                            )}
                            {ShowCard1 && (
                                <div className="card" id='card1'>
                                    <span className="companylogo">
                                        <Image src={CompanyLogo} alt='comapny logo' width={58} height={58} />
                                    </span>
                                    <span className="image">
                                        {ShowCar && (
                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000"
                                                //  data-aos-offset="360"
                                                src={CarImage} alt='carimage' height={450} width={599}
                                            />
                                        )}
                                    </span>
                                    <div className="text">
                                        <h1>BMW X5 M3 Competetion</h1>
                                        <p>London, United Kingdom</p>
                                    </div>
                                </div>
                            )}
                            {!ShowCard1 && (
                                <div className="card" id='card2' data-aos="zoom-in"
                                    data-aos-offset="300" >

                                    <span className="companylogo">
                                        <Image src={CompanyLogo} alt='comapny logo' width={58} height={58} />
                                    </span>
                                    <span className="image">
                                        {ShowCar && (
                                            <Image
                                                data-aos="zoom-in"
                                                data-aos-duration="3000"
                                                src={CarImage2} alt='carimage' height={450} width={599}
                                            />
                                        )}
                                    </span>
                                    <div className="text">
                                        <h1>Mini Cooper Countrymen</h1>
                                        <p>London, United Kingdom</p>
                                    </div>
                                </div>
                            )}
                            <span className="like" onClick={handleLikeClick}
                            >
                                <Image src={Like} alt='like button' width={40} height={40} />
                            </span>
                        </div>
                    </div>

                    {/* SECTION TWO WHITE BODY SCROLL BAR AND FAQ SWIPING VEDIO */}


                    <div className="secsecpart2">
                        <div className="deals">
                            <div className="dealtext">Never miss out on <br />a great deal with AiCarz</div>
                            <div className="qrtext">
                                <span id="qrtext">Download our app <br /> by scanning the QR</span>
                                <span className="qr"><Image src={Qr} alt='qrcode' width={78} height={78} /></span>
                            </div>
                        </div>



                        <div className="scrollar">
                            <hr />
                            <span>
                                <span className="carlogos">
                                    <Image src={Hundyai} alt='Hundyai' width={150} height={100} />
                                </span>
                                <span className="carlogos">
                                    <Image src={Jaguar} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={Toyota} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={Tesla} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={BMW} alt='Hundyai'  />
                                </span>
                                <span className="carlogos">
                                    <Image src={Ford} alt='Hundyai'  />
                                </span>
                                <span className="carlogos">
                                    <Image src={Bently} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={Bird} alt='Hundyai'  />
                                </span>
                                <span className="carlogos">
                                    <Image src={Kia} alt='Hundyai'  />
                                </span>
                                <span className="carlogos">
                                    <Image src={Volvo} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={Audi} alt='Hundyai' />
                                </span>
                                <span className="carlogos">
                                    <Image src={Landover} alt='Hundyai'  />
                                </span>
                                <span className="carlogos">
                                    <Image src={Lion} alt='Hundyai'  />
                                </span>
                               
                            </span>
                            <hr />
                        </div>


                        <div className="tagline">
                            <h1 >Driven by the most intelligent car <br /> recommendation engine</h1>
                            <p>Our Innovative App Brings Together a Curated Selection <br /> Of Cars Tailored To Your Preferences.</p>
                        </div>


                        {/* SWIPER CARD SWIPER INTERFACE */}


                        <section id='swipercard'>


                            <div className="swipcard">

                                <div className="swipslider">

                                    <div className="swipcontent">

                                        <h1>Swiping Interface.</h1>
                                        <p>Effortlessly swipe through a variety of car listings, making the search for your dream car an engaging and enjoyable experience.</p>
                                        <div className="swipbutton">
                                            <sapn className="left"><EastIcon sx={{ fontSize: 54 }} /></sapn>
                                            <span className="right"><KeyboardBackspaceIcon sx={{ fontSize: 36 }} /></span>
                                        </div>
                                    </div>

                                    <div className="swipimage">
                                        <Image src={Swipimageone} alt='qrcode' width={350} height={664} />

                                    </div>
                                    <span className="qrseconde"><span><Image src={Qrwhite} alt='qrcode' width={78} height={78} /> </span></span>

                                </div>
                            </div>
                        </section>

                        <FAQ />


                        <footer>

                            <div className="footer">

                                <div className="image2">
                                    <Image src={Bulb} id='bulb' height={400}width={600} />
                                    <Image id='image' src={Doubleimage} width={637} height={732} />
                                </div>

                                <div className="footercontent">
                                    <span className="text2">
                                        <h1 id='two'>Swiping Makes it easy to manage ads you are much interested in</h1>
                                        <p >Our Innovative App Brings Together a Curated Selection Of Cars Tailored To Your Preferences.</p>
                                    </span>
                                    <div className="socialbutton">
                                        <Image src={Play} width={214} height={55} />
                                        <Image src={Google} width={214} height={75} />
                                    </div>
                                </div>


                            </div>



                        </footer>

                        <div className="policy">
                            <span><div className="righTS">
                                <p>© 2023 AiCarz</p>
                                <p>Al Rights Reserved CARZAI LTD.</p>
                            </div>
                                <div className="polices">
                                    <p> Privacy Policy</p>
                                    <p>Terms of use</p>
                                    <p>User Data Deletion</p>
                                </div></span>

                        </div>


                    </div>








                </section>
            )}


        </div>
    )
}

export default page
