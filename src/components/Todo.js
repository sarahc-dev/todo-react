import styled from 'styled-components'
import px2rem from '../utils/px2rem'

const Form = styled.form`
    margin-top: ${px2rem(33)};
    text-align: center;
    
    
    
`

const Input = styled.input`
    border: none;
    background: ${({ theme }) => theme.listBackground};
    border-radius: 0 5px 5px 0;
    color: ${({ theme }) => theme.inputText};
    font-size: ${px2rem(12)};
    padding: ${px2rem(20)} 0;
    box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};

    &::placeholder {
        color: ${({ theme }) => theme.placeholderText};
    }
`

const Button = styled.button`
    border: none;
    background: ${({ theme }) => theme.listBackground};
`

export const Todo = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            // replace Math.random with package for generating unique ids
        ])
        setInputText("")
    }

    return (
        <Form>
            <Button onClick={submitTodoHandler} type="submit">+</Button>
            <Input onChange={inputTextHandler} placeholder="Create a new todo..." type="text" value={inputText}/>
        </Form>
    )
}