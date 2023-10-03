import IGameCharacter from "../../interfaces/IGameCharacter";

const GameCharacterItem = ({id, name, image, game} : IGameCharacter) => {

    const imgstyle = {
        height: '16rem'
    }

    return(
        <article className="col-xg-3 col-lg-4 col-sm-12">
                <div className="p-3 bg-dark text-white text-center rounded">
                    <h3>{name} ({id})</h3>
                    <img className="img-thumbnail" style={imgstyle} src={`https://localhost:7063/images/${image}`}/>
                    <p>{game}</p>
                </div>
        </article>
    )

}

export default GameCharacterItem;    