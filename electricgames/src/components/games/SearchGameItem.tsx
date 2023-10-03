import {useState, useContext, ChangeEvent, useEffect} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const SearchGameItem = () => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");

    const { getGamesFromService, getGameById, getGameByTitle } = useContext(GameContext) as IGameContext;

    useEffect(() => {
        getGamesFromService();
    }, [])

    const resetList = () => {
        getGamesFromService();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        switch (name){
            case "title":
                setTitle( value );
                break;
            case "id":
                setId( parseInt( value ));
                break;
            default:
        }
    }


    const getId =  () => {
        getGameById(id);
    }

    const getTitle = () => {
        console.log(title)
        getGameByTitle(title);
    }

    return(
        <section>
            <h3>Search for a game</h3>
            <div className="container bg-light rounded">
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Search by title:</label>
                        <input name="title" value={title} onChange={handleChange} type="text" />
                        <button onClick={getTitle} className="btn btn-warning">Search</button>
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
export default SearchGameItem;