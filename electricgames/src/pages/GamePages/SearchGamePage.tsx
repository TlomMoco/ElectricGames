import SearchGameItem from "../../components/games/SearchGameItem";
import GameList from "../../components/games/GameList";

const SearchGamePage = () => {

    return(
        <main>
            <div className="container text center">
                <div className="row">
                    <div className="col-sm">
                        <SearchGameItem/>
                    </div>
                </div>
                <div>
                    <GameList/>
                </div>
            </div>
        </main>
    )
}

export default SearchGamePage;