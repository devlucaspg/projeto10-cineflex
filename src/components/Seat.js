import { useState } from "react";
import styled from "styled-components"

export default function Seat({seats, id, setId}) {

    function click () {

        (!seats.isAvailable) ? window.alert('Escolha outro assento') : id.includes(seats.id) ? setId(id.filter((el) => el !== seats.id)) : setId(id => [...id, seats.id])
    }
    
    if (seats.isAvailable === true) {
        return (
            <>
                <Available arrayId={id} id={seats.id} onClick={()=> click()} >
                    {seats.name}
                </Available>
            </>
        )
    } 

    else {
        return (
            <>
                <Unavailable onClick={()=> click()}>
                        {seats.name}
                </Unavailable>
            </>    
        )    
    }
};

const Available = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${props => props.arrayId.includes(props.id) ? "#1AAE9E" : "#C3CFD9"};
    border: 1px solid ${props => props.arrayId.includes(props.id) ? "#0E7D71" : "#7B8B99"};
    text-align: center;
    padding: 7px 0px;
    margin: 9px 7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
`;

const Unavailable = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #FBE192;
    border: 1px solid #F7C52B;
    text-align: center;
    padding: 7px 0px;
    margin: 9px 7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
`;