import {useState, useContext, ChangeEvent, useEffect} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const DeleteGameItem = () => {

    const [id, setId] = useState<number>(0);
    const { games, getGamesFromService, deleteGameById } = useContext(GameContext) as IGameContext;

    useEffect(() => {
        getGamesFromService();
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt(e.currentTarget.value) )
    }

    const deleteGame = () => {
        deleteGameById( id );
    }

    return(
        <section>
                <h3>Delete a game</h3>
                <p>Amount of game in database: {games.length}</p>
                    <div className="cotainer bg-light rounded">
                        <div className="row mb-3">
                            <div className="col-sm">
                                <label>Write ID to delete:</label>
                            </div>
                            <div className="col-sm">
                                <input value={id} onChange={handleChange} type="number" />
                            </div>
                            <div className="col-sm">
                            <button onClick={deleteGame} className="btn btn-warning">Delete game</button>
                            </div>
                        </div>
                    </div>
                <div>
            </div>
        </section>
    )
}
export default DeleteGameItem;