import Layout from './modules/Layout'
import Home from './modules/Home'
import About from './modules/About'
import NoPage from './modules/NoPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Public from "./modules/Public.jsx";
import Private from "./modules/Private.jsx";
import Login from "./components/Login.jsx";
import AuthService from "./services/auth.service.js";
import MovieList from "./pages/MovieList.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="public" element={<Public />} />
        <Route path="private" element={<Private />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="login" element={<Login  />}  />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )

}

export default App
