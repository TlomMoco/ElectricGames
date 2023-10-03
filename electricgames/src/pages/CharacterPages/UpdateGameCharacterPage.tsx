import GameCharacterList from "../../components/gameCharacters/GameCharacterList";
import UpdateGameCharacter from "../../components/gameCharacters/PutGameCharacterItem";


const UpdateGameCharacterPage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-sm mb-3">
                    <UpdateGameCharacter/>
                </div>
                <div>
                    <GameCharacterList/>
                </div>
            </div>
        </main>
    )
}

export default UpdateGameCharacterPage;