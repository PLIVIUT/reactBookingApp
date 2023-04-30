import "./propertyList.css"

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=1200&h=-1&s=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>400 available</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.amaviacollection.com/wp-content/uploads/2022/05/Villa-Gaia-1-1536x1150.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>300 available</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.apartments.com/images/default-source/2019-naa/parkline-apartment-in-miami-fla2dc2731-e6f2-4dca-89c5-38245ccacea1.tmb-featuredim.jpg?sfvrsn=55bc41ed_1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>550 available</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.dailydreamdecor.com/wp-content/uploads/2016/07/sungarden-resort-cover.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>150 available</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring-lg.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>220 available</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList