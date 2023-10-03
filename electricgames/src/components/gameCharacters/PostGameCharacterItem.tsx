import {useState, useContext, ChangeEvent} from "react";
import { GameCharacterContext } from "../../context/GameCharacterContext";
import IGameCharacterContext from "../../interfaces/IGameCharacterContext";
import IGameCharacter from "../../interfaces/IGameCharacter";


const PostGameCharacterItem = () => {

    const {gameCharacters, postGameCharacter} = useContext(GameCharacterContext) as IGameCharacterContext;

    const [gameCharacter, setGameCharacter] = useState<IGameCharacter>({name: "", image: "", game: ""});

    const [name, setName] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>("");
    const [game, setGame] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value, files} = e.currentTarget;

        switch(name) {
            case "name":
                setName( value );
                break;
            case "image":
                if(files != null ){
                    const file = files[0]
                    setImage( file.name );
                    setImageFile(file)
                }
                break;
            case "game":
                setGame( value );
                break;
        }

        setGameCharacter({
            name: name,
            image: image,
            game: game
        })
    }


    const postNewGameCharacter = () => {
        if(imageFile != null){
            postGameCharacter ( gameCharacter, imageFile )
        }
    }

    return(
        <section className="bootstrap-styling mt-4">
            <h3>Add a game character</h3>
            <p>Reset webpage to get the updated game character list!</p>
            <div className="container bg-light rounded">
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Name: </label>
                        <input name="name" value={name} onChange={handleChange} type="text" />
                    </div>
                    <div className="col-sm">
                        <label>Image: </label>
                        <input name="image" onChange={handleChange} type="file" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm">
                        <label>Which game is your character in: </label>
                        <input name="game" value={game} onChange={handleChange} type="text" />
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning" onClick={postNewGameCharacter}>Add game</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostGameCharacterItem;