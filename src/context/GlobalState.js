import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

//initial value state
const initialState = {
    mylist: localStorage.getItem('mylist') ? JSON.parse(localStorage.getItem('mylist')) : []
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('mylist', JSON.stringify(state.mylist))
    }, [state])

    //actions
    const addMovieToMyList = movie => {
        dispatch({type: "ADD_MOVIE_TO_MYLIST", payload: movie})
    }

    const removeMovieFromMyList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_MYLIST", payload: id});
    }

    return(
        <GlobalContext.Provider 
        value={{mylist: state.mylist,
        addMovieToMyList,
        removeMovieFromMyList,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )

}