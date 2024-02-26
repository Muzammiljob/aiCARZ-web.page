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
import Swipvedioone from '../../public/aseets/swiping.mp4'
import Swipvediotwo from '../../public/aseets/voicesearch.mp4'
import Swipvediothree from '../../public/aseets/caradd.mp4'
import Swipvediofour from '../../public/aseets/pannelgap.mp4'
import Swipvediofive from '../../public/aseets/tyrecheaker.mp4'
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



    // const handleLikeClick = () => {
    //     setShowCard1((prevShowCard1) => !prevShowCard1);
    //     setAnimationTriggered(true);
    // };

    // const handleagainclick = () => {
    //     setShowCard1((prevShowCard1) => !prevShowCard1);
    //     setAnimationTriggered(false);
    // };


    const [direction, setDirection] = useState('right');
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
        "Meet Your New AI Powered Chatbot ",
        "Place an Advert Now ! ",
        "Discover Flawless Precision: AI Panel Gap Checker!",
        "Your Personal Tyre Inspector!",


    ];
    const paragraphs = [

        <>
            Swipe Right to Like, Swipe Left to Dislike! <br />
            Discovering your ideal car is now effortless with our intuitive swiping feature. By swiping right on cars you fancy and swiping left on those that don't quite meet your criteria, you're helping our recommendation engine fine-tune its suggestions to better suit your preferences.
        </>,
        "Say hello to the future of car shopping! Introducing our latest feature: Voice Search Chatbot. Now, finding your dream car is as easy as having a conversation.",
        "Showcase your cars with stunning images and detailed descriptions, giving potential buyers a comprehensive view of what you have to offer. From luxury sedans to rugged SUVs, our platform accommodates all types of vehicles, ensuring that your listings stand out from the crowd.",
        " Powered by advanced AI Computer Vision our Panel Gap Checker ensures that every detail of your car is meticulously inspected for flawless alignment and precision. Whether it's the gap between panels our AI leaves no stone unturned in its quest for perfection.", // Add the fifth paragraph here
        " Worried about the hassle of manual inspections? Say goodbye to the guesswork and hello to peace of mind. With AI Tyre Scan, you'll receive accurate assessments in seconds, empowering you to make informed decisions about your tyre maintenance and replacement needs.",
    ];

    const handleNext = () => {
        // Increment the current index to move to the next video
        console.log("Current index before increment:", currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % vedios.length);
        console.log("Current index after increment:", currentIndex);
        // Check if the next index will be at index 3
        if ((currentIndex + 1) % vedios.length === 3) {
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





    // const [currentIndex, setCurrentIndex] = useState(0);
    const [likedCards, setLikedCards] = useState([]);
    const [dislikedCards, setDislikedCards] = useState([]);
    const [key, setKey] = useState(0); // Add a state for the key

    const cardContent = [
        { id: 1, image: CarImage, paragraph: "Paragraph 1 goes here", logo: Bmw22, title: "Title 1" },
        { id: 2, image: Benz, paragraph: "Paragraph 2 goes here", logo: Merstadies, title: "Title 2" },
        { id: 3, image: CarImage, paragraph: "Paragraph 3 goes here", logo: Bmw22, title: "Title 3" },
        { id: 4, image: Benz, paragraph: "Paragraph 4 goes here", logo: Merstadies, title: "Title 4" },
        { id: 5, image: CarImage, paragraph: "Paragraph 5 goes here", logo: Bmw22, title: "Title 5" },
        { id: 6, image: Benz, paragraph: "Paragraph 6 goes here", logo: Merstadies, title: "Title 6" },
        { id: 7, image: CarImage, paragraph: "Paragraph 7 goes here", logo: Bmw22, title: "Title 7" },
        { id: 8, image: Benz, paragraph: "Paragraph 8 goes here", logo: Merstadies, title: "Title 8" },



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


                            <div className="holder">
                                <div className="card" id='card1' data-aos="fade-left" key={key}> {/* Use the key prop */}
                                    <span className="companylogo">
                                        <Image src={cardContent[currentIndex].logo} alt='company logo' width={58} height={58} />
                                    </span>
                                    <span className="image">
                                        <Image
                                            data-aos="zoom-in-left"
                                            data-aos-duration="2000"
                                            src={cardContent[currentIndex].image} alt='car image' height={450} width={599}
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
                                        <video className="video" autoPlay loop key={vedios[currentIndex]} playbackRate={2} data-aos="fade-left"
                                            data-aos-duration="4000" >
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
