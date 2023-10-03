import DeleteGameCharacter from "../../components/gameCharacters/DeleteGameCharacter";
import GameCharacterList from "../../components/gameCharacters/GameCharacterList";

const DeleteGameCharacterPage = () => {
    return(
        <main className="container">
            <div className="row">
                <div className="col-md-6 primary">
                    <DeleteGameCharacter/>
                </div>
                <div>
                    <GameCharacterList/>
                </div>
            </div>
        </main>
    )
}

export default DeleteGameCharacterPage;