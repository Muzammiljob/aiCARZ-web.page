"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import "./pppage.css"
import Image from 'next/image'
import Logo from '../../public/aseets/aircarzlogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import AOS from "aos";
import "aos/dist/aos.css";
import Like from "../../public/aseets/like.svg"
import Dislike from "../../public/aseets/dislike.svg"
import CompanyLogo from "../../public/aseets/minpng.png"
import Bmw22 from '../../public/aseets/Bmw33.svg'
import CarImage from "../../public/aseets/carfigma.svg"
import CarImage2 from "../../public/aseets/carimage2.svg"
import Qr from "../../public/aseets/qrcode.svg"
import Swipimageone from '../../public/aseets/swipone.png'
import Swipimagetwo from '../../public/aseets/carimage2.svg'
import Swipimagethree from '../../public/aseets/swipsimage.svg'
import Swipimagefour from '../../public/aseets/swipsimage.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Qrwhite from "../../public/aseets/qrwhitw.svg"
import FAQ from "./FAQ/app"
import Doubleimage from "../../public/aseets/doublemobile.svg"
import Play from "../../public/aseets/applee.svg"
import Google from "../../public/aseets/google.png"
import Bulb from "../../public/aseets/Bulb.png"
import Scroolar from '../../app/scrool/page'



const Page = () => {

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


    const [direction, setDirection] = useState('right');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Swipimageone, Swipimagetwo, Swipimagethree, Swipimagefour];
    const titles = ["Swiping Interface 1", "Swiping Interface 2", "Swiping Interface 3", "Swiping Interface 4"];
    const paragraphs = [
        "Effortlessly swipe through a variety of car listings, making the search for your dream car an engaging and enjoyable experience.",
        "Another set of content for image 2...",
        "Content for image 3...",
        "Content for image 4..."
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setDirection('left'); // Set direction to 'left' when user clicks on next
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setDirection('right'); // Set direction to 'right' when user clicks on back
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
                                    <span className="companylogo"> <Image src={Bmw22} alt='comapny logo' width={58} height={58} />
                                    </span>
                                    <span className="image">
                                        {ShowCar && (
                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000" src={CarImage} alt='carimage' height={450} width={599}
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
                                <div className="card" id='card2'>

                                    <span className="companylogo2">
                                        <Image src={CompanyLogo} alt='comapny logo'  />
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
                            <div className="dealtext">Never miss out on a great deal with AiCarz</div>
                            <div className="qrtext">
                                <span id="qrtext">Download our app <br /> by scanning the QR</span>
                                <span className="qr"><Image src={Qr} alt='qrcode' width={78} height={78} /></span>
                            </div>
                        </div>



                       
                        <div className="scroolar">
                        <hr />
                        <Scroolar/>
                        <hr />
                        </div>


                        <div className="tagline">
                            <h1 >Driven by the most intelligent car recommendation engine</h1>
                            <p>Our Innovative App Brings Together a Curated Selection  Of Cars Tailored To Your Preferences.</p>
                        </div>


                        {/* SWIPER CARD SWIPER INTERFACE */}





                        <section id='swipercard'>
                            <div className="swipcard">
                                <div className="swipslider">
                                    <div className="swipcontent">
                                        <h1>{titles[currentIndex]}</h1>
                                        <p>{paragraphs[currentIndex]}</p>
                                        <div className="swipbutton"> <span className={direction === 'left' ? "left" : "right"} onClick={handleNext}>
                                            <EastIcon />
                                        </span>
                                            <span className={direction === 'left' ? "right" : "left"} onClick={handleBack}>
                                                <KeyboardBackspaceIcon />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swipimage">
                                        <Image src={images[currentIndex]} alt='qrcode' width={250} height={504} />


                                    </div>
                                    <span className="qrseconde">
                                        <span><Image src={Qrwhite} alt='qrcode' width={78} height={78} /> </span>
                                    </span>
                                    {/* <div className="bulbswip">
                                  
                                </div> */}
                                </div>
                               
                            </div>
                        </section>


                        <FAQ />


                        <footer>

                            <div className="footer">

                                <div className="image2">
                                    <Image src={Bulb} id='bulb' height={400} width={600} />
                                    <Image id='image' src={Doubleimage} width={637} height={732} />
                                </div>

                                <div className="footercontent">
                                    <span className="text2">
                                        <h1 id='two'>Swiping Makes it easy to manage ads you are much interested in</h1>
                                        <p >Our Innovative App Brings Together a Curated Selection Of Cars Tailored To Your Preferences.</p>
                                    </span>
                                    <div className="socialbutton">
                                        <Image src={Play} width={210} height={55} />
                                        <Image src={Google} width={214} height={80} />
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

export default Page
