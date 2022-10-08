import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../css/GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import MovieSessions from "./MovieSessions";
/* import MovieSeats from "./MovieSeats";
import Success from "./Success"; */

export default function App(){
    
    return (
        <>
            <GlobalStyle />   
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessions/:movieId" element={<MovieSessions />} />
                    {/* <Route path="/assento/:idSessao" element={<MovieSeats />} />
                    <Route path="/sucesso" element={<Success />} /> */}
                </Routes>
            </BrowserRouter>     
        </>
    )
}