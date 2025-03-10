import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home/:id" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}