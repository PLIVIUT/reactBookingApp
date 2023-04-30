import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCircle, faCircleXmark, faLocation, faLocationDot, faMapLocationDot, faSquareCheck, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
    const [sliderIndex, setSlideIndex] = useState(0);
    const [sliderOpen, setSliderOpen] = useState(false);

    const handleOpen = (i) => {
        setSlideIndex(i);
        setSliderOpen(true);
    }

    const handleArrow = (direction) => {
        let newIndexNum;

        if (direction === "left") {
            newIndexNum = sliderIndex === 0 ? 5 : sliderIndex - 1
        }
        else {
            newIndexNum = sliderIndex === 5 ? 0 : sliderIndex + 1
        }

        setSlideIndex(newIndexNum)
    }

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/95436864.jpg?k=2b9455b6e86e6234ad00c70717c62ee21b35e0858deaea1d3d0b81d71d605143&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43616788.jpg?k=8a6ef2c0984ad2386d9bde153b8c4825b54c8d337f453958be4796dcc5c9bb45&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/95436861.jpg?k=fda8d2521d1192afb7e7828f2e88bff418d699a15a6d79975c86775f37058596&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43616647.jpg?k=4e9f4212c1315e1faec12b88813f5369d9cca34479e86fc0d7e076a5c57be509&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/95436889.jpg?k=ff719409796542ebfe32be152fe919243e52347497b2a1d4ddf768f2f080f5a8&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43616840.jpg?k=2dc60a8aa01b2b135c509e8d15327e828ac10a1131e7e1ff38b013e1b60569cd&o=&hp=1"
        }
    ];

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {sliderOpen && (<div className="imgSlider">
                    <FontAwesomeIcon icon={faCircleXmark} className="closeBtn" onClick={() => setSliderOpen(false)} />
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={() => handleArrow("left")} />
                    <div className="imgSliderWrapper">
                        <img src={photos[sliderIndex].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={() => handleArrow("right")} />
                </div>)}
                <div className="hotelWrapper">
                    <h1 className="hotelName">Hotel Mozart</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <span>Nordbergstraße 4, 1090 Wien, Austria</span>
                    </div>
                    <span className="dfc">300 meters from center</span>
                    <div className="taxiPickup">
                        <FontAwesomeIcon icon={faTaxi} style={{ color: "#5ea046" }} />
                        <span>Free taxi pick-up from the airport</span>
                    </div>
                    <div className="hotelPhotos">
                        {photos.map((photo, i) => (
                            <div className="hotelPhotoWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelPhoto" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelText">
                            <p className="hotelTextDescr">
                                Directly opposite the Franz Josef Train Station, Hotel Mozart is only 200 m from the Friedensbrücke Underground Station. It features a bar and a 24-hour front desk.
                                The Mozart Hotel’s rooms all come with satellite TV, a seating area, and a bathroom. All water in the hotel is heated by solar energy. Guests staying in business rooms can benefit from free WiFi.

                                The Donauradweg (bicycle trail) is just outside, and free secure bicycle storage is provided on site.

                                Vienna’s city centre can be reached by underground (line U4) in less than 10 minutes.

                                This is our guests' favourite part of Vienna, according to independent reviews.

                                Couples particularly like the location — they rated it 8.7 for a two-person trip.
                            </p>
                        </div>
                        <div className="hotelHighlights">
                            <h1>Property highlights</h1>
                            <span>Situated in the best rated area in Vienna, this hotel has an excellent location score of 8.7</span>
                            <div className="reserveButton">
                                <FontAwesomeIcon icon={faSquareCheck} bounce size="2xl" style={{ color: "#ffffff", }} />
                                <button>Reserve</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Hotel