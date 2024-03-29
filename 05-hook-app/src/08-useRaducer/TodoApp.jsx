import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const { state, todosCount, pendingTodosCount ,handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    return (
      <>
        <h1>
          TodoApp: { todosCount }, <small>earrings: { pendingTodosCount }</small>
        </h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <TodoList 
              todos = { state } 
              onDeleteTodo={ handleDeleteTodo }
              onToggleTodo={ handleToggleTodo }
              />
          </div>

          <div className="col-5">
            <h4>Add TODO</h4>
            <hr />
            <TodoAdd onNewTodo={ handleNewTodo }/>
          </div>
        </div>
      </>
    );
}
