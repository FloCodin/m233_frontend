import {Route, Routes} from "react-router-dom";
import Layout from "./modules/Layout";
import Home from "./modules/Home";
import About from "./modules/About";
import NoPage from "./modules/NoPage";
import Public from "./modules/Public";
import Private from "./modules/Private";
import Login from "./components/Login";
import MovieList from "./pages/MovieList";
import {ToastContainer} from "react-toastify";

function App() {
    return (

        <div className="App">
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="public" element={<Public/>}/>
                    <Route path="private" element={<Private/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="movies" element={<MovieList/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
