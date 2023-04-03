import { Route, Routes } from "react-router";
import Movie from "./Component/Movie";
import Nav from "./Component/Nav";
import SingleImage from "./Component/SingleImage";
import Singletvshow from "./Component/Singletvshow";
import Tvshow from "./Component/Tvshow";
function App() {
  return (
    <>
    <div style={{backgroundColor:"rgb(3,36,63)",overflow:"hidden", fontFamily:"gilroy"}}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Movie/>}>     
        </Route>
        <Route path="/single-m/:id" element={< SingleImage/>}></Route>
        <Route path="/single-show/:id" element={< Singletvshow/>}></Route>
        <Route path="/tvshow" element={<Tvshow/>}></Route>

      </Routes>
    </div>
    
    </>
    
  );
}

export default App;
