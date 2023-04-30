import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItems/SearchItem.jsx'

const List = () => {
    const location = useLocation();
    const [dest, setDest] = useState(location.state.dest)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listSearchItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={dest} />
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="">Date for Check-In</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                rangeColors={['#246936', '#246936', '#246936']}
                            />}
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                        <span className='lsItemText'>Minimum price <small>per night:</small></span>
                                        <input type="number" min={0} className='lsItemOptionInput' placeholder='Min price' />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className='lsItemText'>Maximum price <small>per night:</small></span>
                                        <input type="number" min={0} className='lsItemOptionInput' placeholder='Min price' />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className='lsItemText'>Adults: </span>
                                        <input type="number" min={1} className='lsItemOptionInput' placeholder='Min price' />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className='lsItemText'>Children: </span>
                                        <input type="number" min={0} className='lsItemOptionInput' placeholder='Min price' />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className='lsItemText'>Rooms: </span>
                                        <input type="number" min={1} className='lsItemOptionInput' placeholder='Min price' />
                                    </div>
                                </div>
                                <button>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default List