"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import "./page.css"
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
import Swipimageone from '../../public/aseets/swip.mp4'
import Swipimagetwo from '../../public/aseets/carimage2.svg'
import Swipimagethree from '../../public/aseets/swipsimage.svg'
import Swipimagefour from '../../public/aseets/swipsimage.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Qrwhite from "../../public/aseets/qrwhitw.svg"
import FAQ from "./FAQ/app"
import Doubleimage from "../../public/aseets/doublemobile.svg"
import Play from "../../public/aseets/applee.svg"
import Google from "../../public/aseets/google.svg"
import Bulb from "../../public/aseets/Bulb.png"
import Scroolar from '../../app/scrool/page'
import Benz from '../../public/aseets/benz3.png'
import Merstadies from "../../public/aseets/Mer.svg"

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
    const images = [
        Swipimageone,
        Swipimagetwo,
        Swipimagethree,
        Swipimagefour,
        Swipimagefour, // Add the fifth image here
    ];
    const titles = [
        "Swiping Interface",
        "Place an Advert Now ! ",
        "Your Personal Tyre Inspector!",
        "Meet Your New AI Powered Chatbot ",
        "Discover Flawless Precision: AI Panel Gap Checker!" // Add the fifth title here
    ];
    const paragraphs = [
        // `Swipe Right to Like, Swipe Left to Dislike! <br>
        //  Discovering your ideal car is now effortless with our intuitive swiping feature. 
        //  By swiping right on cars you fancy and swiping left on those that don't 
        //  quite meet your criteria, you're helping our recommendation
        //   engine fine-tune its suggestions to better suit your preferences.`,
        <>
        Swipe Right to Like, Swipe Left to Dislike! <br />
        Discovering your ideal car is now effortless with our intuitive swiping feature. By swiping right on cars you fancy and swiping left on those that don't quite meet your criteria, you're helping our recommendation engine fine-tune its suggestions to better suit your preferences.
    </>,
        "Showcase your cars with stunning images and detailed descriptions, giving potential buyers a comprehensive view of what you have to offer. From luxury sedans to rugged SUVs, our platform accommodates all types of vehicles, ensuring that your listings stand out from the crowd.",
        " Worried about the hassle of manual inspections? Say goodbye to the guesswork and hello to peace of mind. With AI Tyre Scan, you'll receive accurate assessments in seconds, empowering you to make informed decisions about your tyre maintenance and replacement needs.",
        "Say hello to the future of car shopping! Introducing our latest feature: Voice Search Chatbot. Now, finding your dream car is as easy as having a conversation.",
        " Powered by advanced AI Computer Vision our Panel Gap Checker ensures that every detail of your car is meticulously inspected for flawless alignment and precision. Whether it's the gap between panels our AI leaves no stone unturned in its quest for perfection." // Add the fifth paragraph here
    ];



    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Check if the next index will be the last index
        if ((currentIndex + 1) % images.length === images.length - 1) {
            setDirection('right');
        } else {
            setDirection('left');
        }
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        // Check if the current index is at the beginning
        if (currentIndex === 0) {
            setDirection('left');
        } else {
            setDirection('right');
        }
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
                        {/* <span className="burgermenu">
                            <MenuIcon sx={{ fontSize: 24 }} />
                        </span> */}
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
                                    data-aos-duration="9000"
                                ></span>
                            )}
                            {ShowCard1 && (
                                <div className="holder">
                                    <div className="card" id='card1' data-aos="fade-left" >
                                        <span className="companylogo"> <Image src={Bmw22} alt='comapny logo' width={58} height={58} />
                                        </span>
                                        <span className="image">

                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000"
                                                src={CarImage} alt='carimage' height={450} width={599}
                                            />

                                        </span>
                                        <div className="text">
                                            <h1>BMW X5 M3 Competetion</h1>
                                            <p>London, United Kingdom</p>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {!ShowCard1 && (
                                <div className="holder">
                                    <div className="card" id='card2' data-aos="fade-left" data-aos-duration="1000">

                                        <span className="companylogo">
                                            <Image src={Merstadies} alt='comapny logo' width={58} height={58} />

                                        </span>
                                        <span className="image">

                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000"
                                                src={Benz} alt='carimage'
                                                height={450} width={599}
                                            />

                                        </span>
                                        <div className="text">
                                            <h1>MERCEDES-Benz ML-CLASS</h1>
                                            <p>London, United Kingdom</p>
                                        </div>
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
                            <Scroolar />
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
                                        {/* <Image src={images[currentIndex]} alt='qrcode' width={250} height={504} /> */}
                                        <video className="video" autoPlay loop controls>
                                            <source src={images[currentIndex]} type="video/mp4"  />
                                            Your browser does not support the video tag.
                                        </video>

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
                                        <Image src={Play} />
                                        <Image src={Google} />
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
