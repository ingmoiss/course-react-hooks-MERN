import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useRaducer/todoReducer';

const  init = () =>{
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    const [state, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( state ));
    }, [state])
    

    const handleNewTodo = ( todo ) => {
      const action = {
        type: '[TODO] add todo',
        payload: todo
      }
      dispatch( action );     
    }

    const handleDeleteTodo = ( id ) =>{
      dispatch({
        type: '[TODO] delete todo',
        payload: id
      });
    }

    const handleToggleTodo = ( id ) =>{
      dispatch({
        type: '[TODO] toggle todo',
        payload: id
      });
    }

    return {
        state,
        todosCount: state.length,
        pendingTodosCount: state.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}
