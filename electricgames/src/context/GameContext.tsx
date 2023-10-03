import {ReactNode, useEffect, useState, createContext } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGames from "../interfaces/IGames";
import ElectricGamesService from "../services/ElectricGamesService";
import ImageUploadService from "../services/ImageUploadService";

export const GameContext = createContext<IGameContext | null>(null)

type Props = {
    children: ReactNode
}

const GameProvider = ({children} : Props) => {

    const [games, setGames] = useState<IGames[]>([]);

    useEffect(() => {
        getGamesFromService();
    }, [])

    const getGamesFromService = async () => {
        const gamesFromService = await ElectricGamesService.getAllGames();
        setGames( gamesFromService );
        console.log(games)
    }

    const deleteGameById = async (id: number) => {
        await ElectricGamesService.deleteGame(id);
        const newArray = games.filter( ( game ) => game.id != id );
        setGames(newArray);
    }

    const getGameByTitle = async (title: string) => {
        const gameByTitle = await ElectricGamesService.getGamesByTitle(title);
        setGames(gameByTitle);
    }

    const getGameById = async (id: number) => {
        const gameById = await ElectricGamesService.getGamesById(id);
        const newArray = [];
        newArray.push(gameById);
        setGames(newArray);
        console.log(newArray)
    }


    const postGame = async (game: IGames, image: File) => {
        if(image != null){
            await ImageUploadService.UploadImage(image);
        }
        await ElectricGamesService.addNewGame(game);
        games.push(game);
        setGames(games);
    }




    return <GameContext.Provider 
        value={{
            games, 
            getGamesFromService, 
            getGameById, 
            getGameByTitle, 
            deleteGameById, 
            postGame,
            }}>

        {children}
    </GameContext.Provider>
}

export default GameProvider; 