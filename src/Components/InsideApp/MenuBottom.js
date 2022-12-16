import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MenuBottom() {
    return (
        <>
        <Div>            
            <div>
                <Link>Hábitos</Link>
                <Circle> Hoje </Circle>
                <Link>Histórico</Link>
            </div>
        </Div>
        </>
    )
}

const Div = styled.div`
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 375px;    
    color: #52B6FF;
    font-size: 18px;
    display: flex;
    div{
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
`
const Circle = styled.div`
    width: 91px;
    height: 91px;
    color: white;
    background-color: #52B6FF;
    border-radius: 91px;
`
