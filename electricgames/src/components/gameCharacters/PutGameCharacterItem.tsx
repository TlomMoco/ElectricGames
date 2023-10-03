import { useState, ChangeEvent } from "react";
import IGameCharacter from "../../interfaces/IGameCharacter";
import ElectricGamesService from "../../services/ElectricGamesService";
import ImageUploadService from "../../services/ImageUploadService";

const UpdateGameCharacter = () => {

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>("");
    const [game, setGame] = useState<string>("");
    
    
    const gameCharacterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, files} = e.currentTarget; // objectDestructuring
        
        switch(name){
            case "id":
                setId( parseInt(value) );
            break;
            case "name":
                setName(value)
            break;
            case "image":
                
                if(files != null){
                    const file = files[0];
                    setImage(file.name);
                    setImageFile(file);
                }
            break;
            case "game":
                setGame(value);
            break;
        }
    }

    const getGameCharacterFromService = async () => {
        const gameCharacter = await ElectricGamesService.getGameCharactersById(id);
        setName(gameCharacter.name);
        setImage(gameCharacter.image);
        setGame(gameCharacter.game);

        if(imageFile != null){
            await ImageUploadService.UploadImage(imageFile);
        }
    }

    const updateSelectedGame = () => {
        const updatedGameCharacter : IGameCharacter = {
            id: id,
            name: name,
            image: image,
            game: game

        };
        ElectricGamesService.putGameCharacter(updatedGameCharacter)
    }

    return (
        <section>
            <h3>Update game character</h3>
            <p>Reset webpage to see de updated game character!</p>
            <div className="container bg-light rounded p-2">
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Id</label>
                        <input name="id" onChange={gameCharacterHandler} type="number" value={id}/>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning" onClick={getGameCharacterFromService}>Find Character by Id</button>
                    </div>
                    <div className="col-sm">
                        <label>Name: </label>
                        <input name="name" value={name} onChange={gameCharacterHandler} type="text" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Image: </label>
                        <input name="image" onChange={gameCharacterHandler} type="file" />
                    </div>
                    <div className="col-sm">
                        <label>Game: </label>
                        <input name="game" value={game} onChange={gameCharacterHandler} type="text" />
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning" onClick={updateSelectedGame}>Update Character</button>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default UpdateGameCharacter; 