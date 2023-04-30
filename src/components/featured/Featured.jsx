import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredPlace">
                <img src="https://mldvwwasb8tu.i.optimole.com/cb:esbD~6200b/w:1300/h:867/q:mauto/https://travelaway.me/wp-content/uploads/2022/02/cluj-napoca-skyline.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Romania</h1>
                    <h2>200 available accommodations</h2>
                </div>
            </div>
            <div className="featuredPlace">
                <img src="https://cdn.britannica.com/20/191120-050-B6C0B7E9/village-Hallstatt-Alps-Austria.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austria</h1>
                    <h2>150 available accommodations</h2>
                </div>
            </div>
            <div className="featuredPlace">
                <img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/033/273/slideshow/fe4b9c40eeb71b3290d068a92061770a/slide-italy-main-cinque-terre-manarola.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Italy</h1>
                    <h2>280 available accommodations</h2>
                </div>
            </div>
            <div className="featuredPlace">
                <img src="https://static.euronews.com/articles/stories/07/24/79/72/773x435_cmsv2_bc9d0e61-1cf1-5674-bcd2-8ac6247d74e6-7247972.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Norway</h1>
                    <h2>60 available accommodations</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured