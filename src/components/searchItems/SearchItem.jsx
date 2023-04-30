import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43617163.jpg?k=f4e89ef03588b07ed1d894e0d475563cddc17ee44240b2128d8db195aedb927e&o=&hp=1" alt="" className="searchItemImg" />
            <div className="searchItemDesc">
                <h1 className="placeTitle">Hotel Mozart</h1>
                <span className="dfc">300 meters from center</span>
                <span className="placeTaxi">Free taxi pick-up from the airport</span>
                <span className="placeFacilities">Entire apartment - 1 bathroom - 20m<sup>2</sup> </span>
                <span className="cancelMethod">Free cancellation</span>
                <span className="cancelMethodText">You can alway cancel, so lock in this great deal!</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span className="ratingText">Perfect</span>
                    <button className="ratingNumber">9.4</button>
                </div>
                <div className="searchItemPrice">
                    <span>200 EUR</span>
                    <button>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem