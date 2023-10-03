import {ReactNode, useEffect, useState, createContext } from "react";
import IGameCharacterContext from "../interfaces/IGameCharacterContext";
import IGameCharacter from "../interfaces/IGameCharacter";
import ElectricGamesService from "../services/ElectricGamesService";
import ImageUploadService from "../services/ImageUploadService";

export const GameCharacterContext = createContext<IGameCharacterContext | null>(null)

type Props = {
    children: ReactNode
}

const GameCharacterProvider = ({children} : Props) => {

    const [gameCharacters, setGameCharacters] = useState<IGameCharacter[]>([]);

    useEffect(() => {
        getGameCharactersFromService();
    }, [])

    const getGameCharactersFromService = async () => {
        const gameCharactersFromService = await ElectricGamesService.getAllGameCharacters();
        setGameCharacters( gameCharactersFromService );
    }

    const deleteGameCharacterById = async (id: number) => {
        await ElectricGamesService.deleteGameCharacter(id);
        const newArray = gameCharacters.filter( ( character ) => character.id !== id );
        setGameCharacters(newArray);
    }

    const getGameCharacterByName = async (name: string) => {
        const gameCharacterByName = await ElectricGamesService.getGameCharactersByName(name);
        setGameCharacters(gameCharacterByName);
    }

    const getGameCharacterById = async (id: number) => {
        const gameById = await ElectricGamesService.getGamesById(id);
        const newArray = [];
        newArray.push(gameById);
        setGameCharacters(newArray);
        console.log(newArray)
    }

    const postGameCharacter = async (gameCharacter: IGameCharacter, image: File) => {
        if(image != null){
            await ImageUploadService.UploadImage(image);
        }
        await ElectricGamesService.addNewGameCharacter(gameCharacter);
        gameCharacters.push(gameCharacter);
        setGameCharacters(gameCharacters);
    }



    return <GameCharacterContext.Provider 
        value={{
            gameCharacters,
            getGameCharactersFromService,
            deleteGameCharacterById,
            getGameCharacterByName,
            getGameCharacterById,
            postGameCharacter
            }}>

        {children}
    </GameCharacterContext.Provider>
}

export default GameCharacterProvider; 