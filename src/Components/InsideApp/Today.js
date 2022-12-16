import Top from "./Top"
import Progress from "./Progress"
import MenuBottom from "./MenuBottom"
import styled from "styled-components"
import { useState } from "react"

export default function Today() {

    const [habit, setHabit] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
    
    return (
        <Div>
            <Top />
            <Body>
                <Title>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Title>
                <Habits>
                    {habit}
                </Habits>
            </Body>
            <Progress />
            <MenuBottom />
        </Div>
    )
}

const Div = styled.div`
    background-color: #e5e5e5;
    margin: 80px 0 70px 0;
    width: 375px;
`
const Body = styled.div`
    margin: 28px 17px 28px 18px;
    height: 597px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #666666;
    font-size: 18px;
`
const Title = styled.div`
    display: flex;
    margin: 28px 0 28px 0;
    justify-content: space-between;
    p{
        font-size: 23px;
        color: #126BA5;
    }
    button{
        color: #FFFFFF;
        font-size: 27px;
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        :hover{
        cursor: pointer;
        }
    }
`
const Habits = styled.div`
`