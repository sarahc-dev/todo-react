import styled from 'styled-components'
import px2rem from '../utils/px2rem'
import { MEDIA } from '../styles/media'

const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
    display: flex;
    margin: ${px2rem(33)} 0 ${px2rem(16)};
    padding: ${px2rem(16)} ${px2rem(20)};
    width: 100%;

    ${MEDIA.desktop} {
        margin-bottom: ${px2rem(24)};
        padding: ${px2rem(20)} ${px2rem(24)};
    }
`

const Input = styled.input`
    background: ${({ theme }) => theme.listBackground};
    border: none;
    color: ${({ theme }) => theme.inputText};
    font: inherit;
    width: 90%;
    
    &::placeholder {
        color: ${({ theme }) => theme.placeholderText};
    }

    &:active, &:focus {
        outline: none;
    }

    ${MEDIA.desktop} {
        font-size: ${px2rem(18)};
    }
`

const Button = styled.button`
    background: ${({ theme }) => theme.listBackground};
    border: 1px solid ${({ theme }) => theme.checkBorder};
    border-radius: 50px;
    height: 20px;
    margin-right: ${px2rem(12)};
    width: 20px;

    &:active, &:focus {
        outline: none;
    }

    ${MEDIA.desktop} {
        height: 24px;
        margin-right: ${px2rem(24)};
        width: 24px;
    }
`

export const Todo = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (inputText) {
            setTodos([
            ...todos, {text: inputText, completed: false, id: String(Math.random() * 1000)}
            // replace Math.random with package for generating unique ids
        ])
        }
        setInputText("")
    }

    return (
        <form>
            <Container>
                <Button onClick={submitTodoHandler} type="submit"></Button>
                <Input onChange={inputTextHandler} placeholder="Create a new todo..." type="text" value={inputText}/>
            </Container>
        </form>
    )
}