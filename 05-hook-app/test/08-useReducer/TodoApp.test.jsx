import { render, screen } from "@testing-library/react"
import {TodoApp} from '../../src/08-useReducer/TodoApp'
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')


describe('Pruebas en el <TodoApp />', () => { 
    
    useTodo.mockReturnValue({
        todos:[
            {id: 1,description: 'todo #1',done:false},
            {id: 2,description: 'todo #2',done:true},
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1,
    });

    test('Debe de mostrar el componente correctanente', () => { 
        
        render(<TodoApp />)
       // screen.debug()
        expect(screen.getByText('todo #1')).toBeTruthy()
        expect(screen.getByText('todo #2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
     })

 })