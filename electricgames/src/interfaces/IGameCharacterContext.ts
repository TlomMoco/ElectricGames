import IGameCharacter from "./IGameCharacter";

interface IGameCharacterContext {
    gameCharacters: IGameCharacter[];
    getGameCharactersFromService: () => void;
    getGameCharacterById: (id: number) => void;
    getGameCharacterByName: (name: string) => void;
    deleteGameCharacterById: (id: number) => void;
    postGameCharacter: (gameCharacter: IGameCharacter, image: File) => void;
}

export default IGameCharacterContext;