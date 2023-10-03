import { useState, ChangeEvent } from "react";
import IGames from "../../interfaces/IGames";
import ElectricGamesService from "../../services/ElectricGamesService";
import ImageUploadService from "../../services/ImageUploadService";

const UpdateGame = () => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);
    
    
    const gameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, files} = e.currentTarget; // objectDestructuring
        
        switch(name){
            case "id":
                setId( parseInt(value) );
            break;
            case "title":
                setTitle(value)
            break;
            case "image":
                
                if(files != null){
                    const file = files[0];
                    setImage(file.name);
                    setImageFile(file);
                }
            break;
            case "description":
                setDescription(value);
                break;
            case "platform":
                setPlatform(value);
            break;
            case "releaseYear":
                setReleaseYear(parseInt(value))
            break;
        }
    }

    const getGameFromService = async () => {
        const game = await ElectricGamesService.getGamesById(id);
        setTitle(game.title);
        setImage(game.image);
        setDescription(game.description);
        setPlatform(game.platform);
        setReleaseYear(game.releaseYear);

        if(imageFile != null){
            await ImageUploadService.UploadImage(imageFile);
        }
    }

    const updateSelectedGame = () => {
        const updatedGame : IGames = {
            id: id,
            title: title,
            image: image,
            description: description,
            platform: platform,
            releaseYear: releaseYear

        };
        ElectricGamesService.putGame(updatedGame)
    }

    return (
        <section>
            <h3>Update game</h3>
            <p>Reset webpage to see de updated game!</p>
            <div className="container bg-light rounded p-2">
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Id</label>
                        <input name="id" onChange={gameHandler} type="number" value={id}/>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning" onClick={getGameFromService}>Find game by Id </button>
                    </div>
                    <div className="col-sm">
                        <label>Title: </label>
                        <input name="title" value={title} onChange={gameHandler} type="text" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Image: </label>
                        <input name="image" onChange={gameHandler} type="file" />
                    </div>
                    <div className="col-sm">
                        <label>Description: </label>
                        <input name="description" value={description} onChange={gameHandler} type="text" />
                    </div>
                    <div className="col-sm">
                        <label>Platform: </label>
                        <input name="platform" value={platform} onChange={gameHandler} type="text" />
                    </div>
                </div>
                <div className="row mb-3">
                <div className="col-sm">
                        <label>Releaseyear: </label>
                        <input name="releaseYear" value={releaseYear} onChange={gameHandler} type="number" />
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning" onClick={updateSelectedGame}>Update game</button>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default UpdateGame; 