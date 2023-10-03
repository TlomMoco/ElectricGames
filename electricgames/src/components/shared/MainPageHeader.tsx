import {Link} from "react-router-dom"

const MainPageHeader = () => {

    return(
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link className="text-success navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav">
                    <div className="btn-group mt-3">
                        <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Search
                        </button>
                        <div className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/search-game">Search a game </Link></li>
                                <li><Link className="dropdown-item" to="/search-gameCharacter">Search a character</Link></li>
                        </div>
                    </div>
                    <div className="btn-group mt-3">
                        <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Update
                        </button>
                        <div className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/update-games">Update a game </Link></li>
                                <li><Link className="dropdown-item" to="/update-gameCharacters">Update a character</Link></li>
                        </div>
                    </div>
                    <div className="btn-group mt-3">
                        <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Delete
                        </button>
                        <div className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/delete-games">Delete a game </Link></li>
                                <li><Link className="dropdown-item" to="/delete-gameCharacters">Delete a character</Link></li>
                        </div>
                    </div>
                    <div className="btn-group mt-3">
                        <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Add
                        </button>
                        <div className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/add-games">Add a game </Link></li>
                                <li><Link className="dropdown-item" to="/add-gameCharacters">Add a character</Link></li>
                        </div>
                    </div>
                </ul>
            </nav>
            <div className="mb-3 text-center">
                <h1>ElectricGames - The best digital storefront for games</h1>
            </div> 
        </header>
    )
    }
    
    export default MainPageHeader;
