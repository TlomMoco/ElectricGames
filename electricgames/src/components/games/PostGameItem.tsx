import {useState, useContext, ChangeEvent} from "react";
import {GameContext} from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import IGames from "../../interfaces/IGames";


const PostGameItem = () => {

    const {postGame} = useContext(GameContext) as IGameContext;

    const [game, setGame] = useState<IGames>({title:"", image:"", description:"", platform:"", releaseYear: 0});

    const [title, setTitle] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value, files} = e.currentTarget;

        switch(name) {
            case "title":
                setTitle( value );
                break;
            case "image":
                if(files != null ){
                    const file = files[0]
                    setImage( file.name );
                    setImageFile(file)
                }
                break;
            case "description":
                setDescription( value );
                break;
            case "platform":
                setPlatform( value );
                break;
            case "releaseYear":
                setReleaseYear( parseInt(value) );
                break;
        }

        setGame({
            title: title,
            image: image,
            description: description,
            platform: platform,
            releaseYear: releaseYear
        })
    }

    const postNewGame = () => {
        if(imageFile != null){
            postGame ( game, imageFile )
        }
    }

    return(
        <section className="bootstrap-styling mt-4">
            <h3>Add a game!</h3>
            <p>Reset webpage to get the updated game list!</p>
                <div className="container bg-light rounded">
                    <div className="row mb-3">
                        <div className="col-sm">
                            <label>Title: </label>
                            <input name="title" value={title} onChange={handleChange} type="text" />
                        </div>
                        <div className="col-sm">
                            <label>Image: </label>
                            <input name="image" onChange={handleChange} type="file" />
                        </div>
                        <div className="col-sm">
                            <label>Description: </label>
                            <input name="description" value={description} onChange={handleChange} type="text" />
                        </div>
                        <div className="col-sm">
                            <label>Platform: </label>
                            <input name="platform" value={platform} onChange={handleChange} type="text" />
                        </div>
                        <div className="col-sm">
                            <label>Releaseyear: </label>
                            <input name="releaseYear" value={releaseYear} onChange={handleChange} type="number" />
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-warning" onClick={postNewGame}>Add game</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default PostGameItem;