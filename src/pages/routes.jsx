import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../components/home/home"
import { Header } from "../components/header/header"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home/:id" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}