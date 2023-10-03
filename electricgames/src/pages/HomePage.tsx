import imageHomePage from "../images/gameHomePage.jpg";


const HomePage = () => {
    return(
        <main>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm">
                        <img className="img-thumbnail rounded mx-auto d-block" src={imageHomePage} alt="Picture of a gaming hall"></img>
                    </div>
                    <div className="col-sm bg-dark text-white rounded ">
                        <h3 className="mt-5 p-5">Welcome to ElectricGames</h3>
                        <p className="mt-5 p-3">Welcome to ElectricGames! If you are 
                            looking for a digital storefront for games that is
                            easy to navigate, this is your answer. It was created 
                            with a universal design that is user-friendly for everyone 
                            that wants to use the page. The ElectricGames team wanted 
                            to give back to gamers by letting them add their own 
                            and show them to the world. We hope you enjoy your stay, 
                            and hopefully get that electrical vibe you have been looking for.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
    
    }

export default HomePage;
