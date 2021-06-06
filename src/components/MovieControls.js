import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({movie}) => {
    console.log(movie.id)
    const { removeMovieFromMyList } = useContext(GlobalContext);
    
    return (
        <div className='text-center'>
            <button 
            className='btn bg-dark text-white'
            onClick={() => removeMovieFromMyList(movie.id)}
            >Remove</button>
        </div>
    )
}
export default MovieControls;