import { Route, Routes } from "react-router";
import Details from "./Component/Details";
import Movie from "./Component/Movie";
import Nav from "./Component/Nav";
import Tvshow from "./Component/Tvshow";
function App() {
  return (
    <>
    <div style={{backgroundColor:"rgb(3,36,63)",overflow:"hidden", fontFamily:"gilroy"}}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Movie/>}>
          <Route path="/:id" element={<Details/>}></Route>
        </Route>
        <Route path="/tvshow" element={<Tvshow/>}></Route>

      </Routes>
    </div>
    
    </>
    
  );
}

export default App;
