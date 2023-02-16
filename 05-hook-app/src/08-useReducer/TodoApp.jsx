import { useEffect, useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del poder',
    //     done: false,
    // },
]

const init = () =>{
    return JSON.parse(localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    const [ todos , dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    //funciones de despacho del reducer
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch( action );
    }

    return (
    <>
        <h1>Todo App: 10, <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
            </div>
            <div className="col-5">
                
               <h4>Agregar TODO</h4>
               <hr />
            
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>

    </>
  )
}

