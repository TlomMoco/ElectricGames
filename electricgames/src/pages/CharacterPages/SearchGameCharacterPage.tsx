import SearchGameCharacterItem from "../../components/gameCharacters/SearchGameCharacterItem";
import GameCharacterList from "../../components/gameCharacters/GameCharacterList";

const SearchGameCharacterPage = () => {

    return(
        <main>
            <div className="container text center">
                <div className="row">
                    <div className="col-sm">
                        <SearchGameCharacterItem/>
                    </div>
                </div>
                <div>
                    <GameCharacterList/>
                </div>
            </div>
        </main>
    )
}

export default SearchGameCharacterPage;