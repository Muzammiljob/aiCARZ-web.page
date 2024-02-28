"use client"
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import "./page.css"
import Image from 'next/image'
import Logo from '../../public/aseets/aircarzlogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import AOS from "aos";
import "aos/dist/aos.css";
import Like from "../../public/aseets/like.svg"
import Dislike from "../../public/aseets/dislike.svg"
import Bmw22 from '../../public/aseets/Bmw33.svg'
import CarImage from "../../public/aseets/carfigma.svg"
import Qr from "../../public/aseets/qrcode.svg"
import Swipvedioone from '../../public/aseets/swipf.mp4'
import Swipvediotwo from '../../public/aseets/voicef.mp4'
import Swipvediothree from '../../public/aseets/addf.mp4'
import Swipvediofour from '../../public/aseets/gapf.mp4'
import Swipvediofive from '../../public/aseets/tyref.mp4'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Qrwhite from "../../public/aseets/qrwhitw.svg"
import FAQ from "./FAQ/app"
import Doubleimage from "../../public/aseets/double2.png"
import Play from "../../public/aseets/applee.svg"
import Google from "../../public/aseets/google.svg"
import Bulb from "../../public/aseets/Bulb.png"
import Scroolar from '../../app/scrool/page'
import Benz from '../../public/aseets/brabus.png'
import Merstadies from "../../public/aseets/Mer.svg"
import Car4 from "../../public/aseets/newroyals.png"
import Car6 from "../../public/aseets/alpha.png"
import Royals from "../../public/aseets/logo99.png"
import Alphalogo from "../../public/aseets/alphalogo2.png"
import Wwgolf from "../../public/aseets/volks2.png"
import Volkslogo from "../../public/aseets/volks.png"
import Ferrari from "../../public/aseets/ferari.png"
import Ferrarilogo from "../../public/aseets/mcleran.png"
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
        setDirection('left');
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





    const [direction, setDirection] = useState('left');
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log("crrrentindex", currentIndex)

    const vedios = [
        Swipvedioone,
        Swipvediotwo,
        Swipvediothree,
        Swipvediofour,
        Swipvediofive,
    ];
    const titles = [
        "Swiping Interface",
        "Meet Adam, your AI Chatbot!",
        "Place an Advert Now ! ",
        "AI Panel Gap Checker!",
        "Your Personal Tyre Inspector!",


    ];
    const paragraphs = [

        <>
            Easily like with a right swipe or dislike with a left! Find your perfect car effortlessly as our smart system learns your preferences, refining suggestions the more you swipe.
        </>,
        "Welcome to the future of car shopping with our Voice Search feature, making finding your dream car as simple as chatting.",

        "Just enter your car registration, and our intelligent system will auto-fill your vehicle details.",

        <>Easily assess damage with our AI tool that scans for gaps and imperfections in bodywork through pictures.</>,

        <>Use our AI tool to scan tyre photos, assess wear-n-tear to avoid penalties, hazards, or unexpected costs before buying.</>,
    ];

    const handleNext = () => {
        // Increment the current index to move to the next video
        console.log("Current index before increment:", currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % vedios.length);
        console.log("Current index after increment:", currentIndex);
        // Check if the next index will be at index 3
        if ((currentIndex + 1) % vedios.length === 4) {
            // If the next index is at index 3, set the direction to 'right'
            setDirection('right');
        } else {
            // If not at index 3, set the direction to 'left'
            setDirection('left');
        }
    };

    const handleBack = () => {
        // Decrement the current index to move to the previous video
        console.log("Current index before decrement:", currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + vedios.length) % vedios.length);
        console.log("Current index after decrement:", currentIndex);
        // Check if the current index is at index 0
        if (currentIndex === 0) {
            // If at index 0, set the direction to 'right'
            setDirection('left');
        } else {
            // If not at index 0, set the direction to 'left'
            setDirection('right');
        }
    };





    const videoRef = useRef(null);
    const [likedCards, setLikedCards] = useState([]);
    const [dislikedCards, setDislikedCards] = useState([]);
    const [key, setKey] = useState(0);

    const cardContent = [
        { id: 1, image: CarImage, paragraph: "London, United Kingdom", logo: Bmw22, title: "BMW X5 M Competition" },
        { id: 2, image: Car4, paragraph: "Canterbury, United Kingdom", logo: Royals, title: "Rolls Royce Phantom" },
        { id: 3, image: Ferrari, paragraph: "Bristol, United Kingdom", logo: Ferrarilogo, title: "McLaren 750S" },
        { id: 4, image: Car6, paragraph: "Milton Keynes, United Kingdom", logo: Alphalogo, title: "Alfa Romeo Giulia" },
        { id: 5, image: Wwgolf, paragraph: "Plymouth, United Kingdom", logo: Volkslogo, title: "Volkswagen Tiguan" },
        { id: 6, image: Benz, paragraph: "Ripon, United Kingdom", logo: Merstadies, title: "Mercedes-Benz-G-Class" },
    ];

    const handleLikeClick = () => {
        setLikedCards([...likedCards, cardContent[currentIndex]]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardContent.length);
        setKey(prevKey => prevKey + 1); // Increment the key to force re-render
    };

    const handleagainclick = () => {
        setDislikedCards([...dislikedCards, cardContent[currentIndex]]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardContent.length);
        setKey(prevKey => prevKey + 1); // Increment the key to force re-render
    };

    const handleVideoEnded = () => {
        handleNext();
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
                            <span className="dislike" onClick={handleagainclick}>
                                <Image src={Dislike} alt='dislike button' width={40} height={40}

                                />
                            </span>
                            {ShowBulb && (
                                <span
                                    className="bulb"
                                    data-aos="fade-up"
                                    data-aos-duration="9000"
                                ></span>
                            )}


                            <div className="holder">
                                <div className="card" id='card1' data-aos="fade-left" key={key}> {/* Use the key prop */}
                                    <span className="companylogo">
                                        <Image id='logo11' src={cardContent[currentIndex].logo} alt='company logo' width={58} height={58} />
                                    </span>
                                    <span className="image">
                                        <Image
                                            data-aos="zoom-in-left"
                                            data-aos-duration="2000"
                                            src={cardContent[currentIndex].image} alt='car image' height={450} width={599}
                                            style={{ height: "auto" }}
                                        />
                                    </span>
                                    <div className="text">
                                        <h1>{cardContent[currentIndex].title}</h1>
                                        <p>{cardContent[currentIndex].paragraph}</p>
                                    </div>

                                </div>
                            </div>
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
                                        {/* <video className="video" autoPlay muted loop playsInline key={vedios[currentIndex]} playbackRate={6} data-aos="fade-left"
                                            data-aos-duration="4000" >
                                            <source src={vedios[currentIndex] + `?t=${Date.now()}`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video> */}
                                        <video className="video" autoPlay muted key={vedios[currentIndex]} data-aos="fade-left" data-aos-duration="4000" ref={videoRef}
                                            onEnded={handleVideoEnded}>
                                            <source src={vedios[currentIndex] + `?t=${Date.now()}`} type="video/mp4" />
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
                                        {/* <h1 id='two'>Swiping Makes it easy to manage ads you are much interested in</h1> */}
                                        <h1 id='two'>Swiping Simplifies Managing Your Favorite Ads</h1>
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
                                <p>© 2024 AICarz</p>
                                <p>All Rights Reserved CARZAI LTD.</p>
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
