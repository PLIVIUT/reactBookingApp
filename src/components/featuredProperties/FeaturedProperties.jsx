import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="featuredProperties">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/256068889.jpg?k=8f3899888770396706ccf5f65117f2d81c184684b49c130615c6eaaefd81e79e&o=&hp=1" alt="" className="fpImg" />
                <span className="fpName">Drachenhaus</span>
                <span className="fpCity">Brașov</span>
                <span className="fpPrice">Starting from 250RON/night</span>
                <div className="fpRating">
                    <button>8.5</button>
                    <span>Superb</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/385143879.jpg?k=33356fd22a61ad2c0e58ca7b9d260e1022cf222843d5fe005cfc22374e6757b1&o=&hp=1" alt="" className="fpImg" />
                <span className="fpName">The Leo Grand</span>
                <span className="fpCity">Viena</span>
                <span className="fpPrice">Starting from 150EUR/night</span>
                <div className="fpRating">
                    <button>9.4</button>
                    <span>Amazing</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://bstatic.com/data/xphoto/1182x887/305/30537925.jpg?size=S" alt="" className="fpImg" />
                <span className="fpName">Il Sereno Lago di Como</span>
                <span className="fpCity">Torno</span>
                <span className="fpPrice">Starting from 120EUR/night</span>
                <div className="fpRating">
                    <button>8.5</button>
                    <span>Superb</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://www.worldhotels.com/content/dam/worldhotels/destinations/bergen-norway-card.jpg" alt="" className="fpImg" />
                <span className="fpName">Bergen Harbour Hotel</span>
                <span className="fpCity">Bergen</span>
                <span className="fpPrice">Starting from 350EUR/night</span>
                <div className="fpRating">
                    <button>9.2</button>
                    <span>Superb</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
