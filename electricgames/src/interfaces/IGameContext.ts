import IGames from "./IGames"


interface IGameContext {
    games: IGames[];
    getGamesFromService: () => void;
    getGameById: (id: number) => void;
    getGameByTitle: (title: string) => void;
    deleteGameById: (id: number) => void;
    postGame: (game: IGames, image: File) => void;
}

export default IGameContext;