import {useState, useContext, ChangeEvent, useEffect} from "react";
import { GameCharacterContext } from "../../context/GameCharacterContext";
import IGameCharacterContext from "../../interfaces/IGameCharacterContext";


const DeleteGameCharacter = () => {

    const [id, setId] = useState<number>(0);
    const { gameCharacters, getGameCharactersFromService, deleteGameCharacterById,  } = useContext(GameCharacterContext) as IGameCharacterContext;

    useEffect(() => {
        getGameCharactersFromService();
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt(e.currentTarget.value) )
    }

    const deleteGameCharacter = () => {
        deleteGameCharacterById( id );
    }

    return(
        <section>
            <h3>Delete a game character</h3>
            <p>Amount of game characters in database: {gameCharacters.length}</p>
                <div className="container bg-light rounded">
                    <div className="row mb-3">
                        <div className="col-sm">
                            <label>Write ID to delete: </label>
                        </div>
                        <div className="col-sm">
                            <input value={id} onChange={handleChange} type="number"/>
                        </div>
                        <div className="col-sm">
                        <button onClick={deleteGameCharacter} className="btn btn-warning">Delete game character</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default DeleteGameCharacter;