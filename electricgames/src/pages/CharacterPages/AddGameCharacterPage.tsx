import GameCharacterList from "../../components/gameCharacters/GameCharacterList";
import PostGameCharacterItem from "../../components/gameCharacters/PostGameCharacterItem";

const AddGameCharacterPage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-sm">
                    <PostGameCharacterItem/>
                </div>
                <div>
                    <GameCharacterList/>
                </div>
            </div>
        </main>
    )
}

export default AddGameCharacterPage;