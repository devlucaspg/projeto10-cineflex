import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Session from "./Session";

export default function MovieSessions() {
    const [date, setDate] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const {movieId} = useParams();
  
    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);

        promisse.then((res) => {
            console.log(res.data)
            setDate(res.data.days);     
            setMovieInfo(res.data);
        });

        promisse.catch((err) => console.log(err + " - Falha na solicitação. Por favor, tente novamente"));
    },[ movieId ]);
    
    return(
        <>
            <Title>
                <p>Selecione o horário</p>
            </Title>
            <Container>
                {date.map((info) => <Session key={info.id} info={info} showTimes={info.showtimes}/>)} 
            </Container>
            <Footer>
                <div>
                    <img src={movieInfo.posterURL} alt="Poster do filme"/>
                    <p>{movieInfo.title}</p>
                </div>
            </Footer>     
        </>
    )
};

const Title = styled.div`
    height: 110px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.04em;
        text-align: center;
    }
`;

const Container = styled.div`
    margin-bottom: 160px;
`;

const Footer = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    
    div {
        margin: auto 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 64px;
        border: 8px solid #FFFFFF;
        border-radius: 2px;
    }

    p {
        width: auto;
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        margin: auto 10px;

    }
`;
