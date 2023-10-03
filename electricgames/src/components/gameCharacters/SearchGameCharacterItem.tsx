import {useState, useContext, ChangeEvent, useEffect} from "react";
import { GameCharacterContext } from "../../context/GameCharacterContext";
import IGameCharacterContext from "../../interfaces/IGameCharacterContext";

const SearchGameCharacterItem = () => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");

    const {getGameCharactersFromService ,getGameCharacterById, getGameCharacterByName } = useContext(GameCharacterContext) as IGameCharacterContext;

    
    useEffect(() => {
        getGameCharactersFromService();
    }, [])

    const resetList = () => {
        getGameCharactersFromService();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        switch (name){
            case "name":
                setName( value );
                break;
            case "id":
                setId( parseInt( value ));
                break;
            default:
        }
    }


    const getId =  () => {
        getGameCharacterById(id);
    }

    const getName = () => {
        console.log(name)
        getGameCharacterByName(name);
    }

    return(
        <section>
            <h3>Search for a game character</h3>
            <div className="container bg-light rounded">
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Search by Name:</label>
                        <input name="name" value={name} onChange={handleChange} type="text" />
                        <button onClick={getName} className="btn btn-warning">Search</button>
                    </div>
                    <div className="col-sm text-center">
                        <button onClick={resetList} className="btn btn-primary">Reset List</button>
                    </div>
                    <div className="col-sm">
                        <label>Search by ID:  </label>
                        <input name="id" value={id} onChange={handleChange} type="number" />
                        <button onClick={getId} className="btn btn-warning">Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchGameCharacterItem