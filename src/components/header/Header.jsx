import { faBed, faGlasses, faTaxi, faPlane, faCar, fa, faMagnifyingGlass, faPerson, faL } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import { Children, useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";


const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [dest, setDest] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 2,
        children: 0,
        rooms: 1,
    });

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "inc" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate()

    const handleSearchBtn = () => {
        navigate("/hotels", { state: { dest, date, options } })
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faGlasses} style={{ "--fa-primary-color": "#246936", "--fa-secondary-color": "#246936", }} />
                        <span>Atrractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headertitle">
                            You deserve the best everything in the best anywhere
                        </h1>
                        <p className="headerDesc">
                            You will find the best deals and savings here
                        </p>
                        <button className="headerButton">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <input type="text" placeholder="Destination" className="headerSearchInput" onChange={e => setDest(e.target.value)} />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    rangeColors={['#246936', '#246936', '#246936']}
                                    className="datePicker"
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} />
                                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adults} adults - ${options.children} children - ${options.rooms} rooms`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adults</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" disabled={options.adults <= 1} onClick={() => handleOption("adults", "dec")}>-</button>
                                            <span className="optionAdultCounter">{options.adults}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("adults", "inc")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" disabled={options.children <= 0} onClick={() => handleOption("children", "dec")}>-</button>
                                            <span className="optionChildrenCounter">{options.children}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("children", "inc")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" disabled={options.rooms <= 1} onClick={() => handleOption("rooms", "dec")}>-</button>
                                            <span className="optionRoomsCounter">{options.rooms}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("rooms", "inc")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearchBtn}>Search</button>
                            </div>
                        </div> </>}
            </div>
        </div>
    )
}

export default Header