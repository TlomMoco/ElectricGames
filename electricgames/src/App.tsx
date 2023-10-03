import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageHeader from "./components/shared/MainPageHeader";
import MainPageFooter from "./components/shared/MainPageFooter";
import { 
  HomePage, 
  SearchGamePage, 
  SearchGameCharacterPage,
  DeleteGamePage, 
  DeleteGameCharacterPage,
  AddGamePage,
  AddGameCharacterPage,
  UpdateGamePage,
  UpdateGameCharacterPage, 
    } from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css'
//import MainPageFooter from "./components/shared/MainPageFooter";

function App() {
  return (
    
    <BrowserRouter>
      <MainPageHeader/>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/search-game" element={<SearchGamePage/>}></Route>
            <Route path="/search-gameCharacter" element={<SearchGameCharacterPage/>}></Route>
            <Route path="/update-games" element={<UpdateGamePage/>}></Route>
            <Route path="/update-gameCharacters" element={<UpdateGameCharacterPage/>}></Route>
            <Route path="/delete-games" element={<DeleteGamePage/>}></Route>
            <Route path="/delete-gameCharacters" element={<DeleteGameCharacterPage/>}></Route>
            <Route path="/add-games" element={<AddGamePage/>}></Route>
            <Route path="/add-gameCharacters" element={<AddGameCharacterPage/>}></Route>
        </Routes>
      <MainPageFooter/>
    </BrowserRouter>


  );
}

export default App;
