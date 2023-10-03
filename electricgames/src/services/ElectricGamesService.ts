import axios from "axios";
import IGameCharacter from "../interfaces/IGameCharacter";
import IGames from "../interfaces/IGames";
/* import IGameCharacter from "../interfaces/IGameCharacter";
import IGames from "../interfaces/IGames"; */

const ElectricGamesService = (() => {

    // endpoint from
    const electricGamesEndpoints = {
        games: "https://localhost:7063/game",
        gameCharacters: "https://localhost:7063/gameCharacter",
        getGameByTitle: "https://localhost:7063/game/getByTitle",
        getGameCharacterByName: "https://localhost:7063/gameCharacter/getByName"
    };



    // Game Services
    const getAllGames = async () => {
        const result = await axios.get(electricGamesEndpoints.games);
        return result.data;
    }
    const deleteGame = async (id: number) => {
        try{
            const result = await axios.delete(`${electricGamesEndpoints.games}/${id}`);
            return result;
        }catch(error){
            console.log(error)
        }
    }
    const getGamesById = async (id:number) => {
        const result = await axios.get(`${electricGamesEndpoints.games}/${id}`)
        return result.data;
    }
    const getGamesByTitle = async (title:string) => {
        try{
            const result = await axios.get(`${electricGamesEndpoints.getGameByTitle}/${title}`)
            return result.data;

        }catch(error){
            console.log(error)
        }
    }
    const addNewGame = async (game: IGames) => {
        const result = await axios.post(electricGamesEndpoints.games, game)
        return result.data;
    }

    const putGame = async (editedGame: IGames) => {
        const result = await axios.put(electricGamesEndpoints.games, editedGame);
        return result.data;
    }

    // GameCharacter Services
    const getAllGameCharacters = async () => {
        const result = await axios.get(electricGamesEndpoints.gameCharacters);
        return result.data;
    }
    const deleteGameCharacter = async (id: number) => {
        try{
            const result = await axios.delete(`${electricGamesEndpoints.gameCharacters}/${id}`);
            return result;
        }catch(error){
            console.log(error)
        }
    }
    const getGameCharactersById = async (id:number) => {
        const result = await axios.get(`${electricGamesEndpoints.gameCharacters}/${id}`)
        return result.data;
    }
    const getGameCharactersByName = async (name:string) => {
        try{
            const result = await axios.get(`${electricGamesEndpoints.getGameCharacterByName}/${name}`)
            return result.data;

        }catch(error){
            console.log(error)
        }
    }
    const addNewGameCharacter = async (gameCharacter: IGameCharacter) => {
        const result = await axios.post(electricGamesEndpoints.gameCharacters, gameCharacter)
        return result.data;
    }

    const putGameCharacter = async (editedGameCharacter: IGameCharacter) => {
        const result = await axios.put(electricGamesEndpoints.gameCharacters, editedGameCharacter);
        return result.data;
    }


    return{
        getAllGames, 
        getGamesById, 
        getGamesByTitle,
        deleteGame,
        addNewGame,
        putGame,

        getAllGameCharacters,
        deleteGameCharacter,
        getGameCharactersById,
        getGameCharactersByName,
        addNewGameCharacter,
        putGameCharacter
    }
})();

export default ElectricGamesService;