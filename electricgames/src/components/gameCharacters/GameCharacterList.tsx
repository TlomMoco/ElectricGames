import { useContext } from "react";
import IGameCharacterContext from "../../interfaces/IGameCharacterContext";
import IGameCharacter from "../../interfaces/IGameCharacter";
import GameCharacterItem from "./GameCharacterItem";
import { GameCharacterContext } from "../../context/GameCharacterContext";

const GameCharacterList = () => {

    const {gameCharacters} = useContext(GameCharacterContext) as IGameCharacterContext;


    const getGameItem = () => {


        return gameCharacters.map( (gameCharacter, i) => (
            <GameCharacterItem
                key={`game-${i}`}
                id={gameCharacter.id}
                name={gameCharacter.name}
                image={gameCharacter.image}
                game={gameCharacter.game}
            />
        ));
    }

    return(
        <section className="row gx-3 gy-3">
            {getGameItem()}
        </section>
    )

}

export default GameCharacterList;