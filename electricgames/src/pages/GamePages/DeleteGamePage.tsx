import DeleteGameItem from "../../components/games/DeleteGameItem";
import GameList from "../../components/games/GameList";


const DeleteGamePage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col-md-6 primay">
                    <DeleteGameItem/>
                </div>
                <div>
                    <GameList/>
                </div>
            </div>
        </main>
    )
}

export default DeleteGamePage;