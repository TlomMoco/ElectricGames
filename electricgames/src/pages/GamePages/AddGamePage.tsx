import GameList from "../../components/games/GameList";
import PostGameItem from "../../components/games/PostGameItem";

const AddGamePage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-sm">
                    <PostGameItem/>
                </div>
                <div>
                    <GameList/>
                </div>
            </div>
        </main>
    )
}

export default AddGamePage;