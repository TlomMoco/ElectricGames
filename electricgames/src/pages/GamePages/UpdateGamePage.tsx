import GameList from "../../components/games/GameList";
import UpdateGameItem from "../../components/games/PutGameItem";

const UpdateGamePage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-sm mb-3">
                    <UpdateGameItem/>
                </div>
                <div>
                    <GameList/>
                </div>
            </div>
        </main>
    )
}

export default UpdateGamePage;