import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";


describe('Pruebas en el componente <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el todo pendiente de completar', () => { 

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')

     })

     test('Debe de mostrar el Todo Completado', () => { 

        todo.done = true;

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

     })

     test('El span debe de llama el toggle todo onClick', () => { 

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

      })

     test('El boton debe de llamar el deleteTodo', () => { 

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

      })

 });