
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { useTodo } from "../hooks"

export const TodoApp = () => {

    //useTodo 
    //exponer todos los handlers
    const{ todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo()

  
    return (
    <>
        <h1>Todo App: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
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

