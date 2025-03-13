import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/header/header"
import { Pokemon } from "./pokemon"
import { Home } from "./home"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemon/:id" element={<Pokemon />}/>
        </Routes>
        </BrowserRouter>
    )
}