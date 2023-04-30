import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save some time and send us your email!</h1>
            <h2>Sign up to see the best offers for you</h2>
            <div className="mailEntry">
                <input type="text" placeholder="Your email here" />
                <button>Subscribe now</button>
            </div>
        </div>
    )
}

export default MailList