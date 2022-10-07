import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import MovieSession from "./MovieSession";
import MovieSeats from "./MovieSeats";
import Success from "./Success";

export default function App(){
    return (
        <>
            <GlobalStyle />   
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessao/:idFilme" element={<MovieSession />} />
                    <Route path="/assento/:idSessao" element={<MovieSeats />} />
                    <Route path="/sucesso" element={<Success />} />
                </Routes>
            </BrowserRouter>     
        </>
    )
}