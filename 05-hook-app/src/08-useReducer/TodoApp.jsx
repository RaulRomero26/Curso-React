import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        desciption: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        desciption: 'Recolectar la piedra del poder',
        done: false,
    },
]


export const TodoApp = () => {

    const [ todos , dispatch] = useReducer( todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({todo});
    }
    return (
    <>
        <h1>Todo App: 10, <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* todo list */}
                <ul className="list-group">
                    {/* todo item */}
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">item1</span> 
                        <button
                            className="btn btn-danger"
                        >
                            Borrar
                        </button>
                    </li>
                     {/* todo item */}
                </ul>
                {/* fin todo list */}
            </div>
            <div className="col-5">
                
               <h4>Agregar TODO</h4>
               <hr />
               {/* todo add onNewTodo( todo )*/}
               {/* {id: new Date(),..,description, done} */}
               <form>
                    <input 
                        type="text"
                        placeholder="¿Que hay que hacer?"
                        className="form-control"
                    />
                    <button 
                        type="submit"
                        className="btn btn-primary mt-2"
                    >
                        AgregarTodo
                    </button>
               </form>
               {/* fin todo add */}
            </div>
        </div>

    </>
  )
}

