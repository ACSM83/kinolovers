import '../App.css';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import React, { useContext } from 'react';


function MovieCard({movie}) {
    const { addMovieToMyList, mylist } = useContext(GlobalContext);
    
    let storedMovie = mylist.find(o => o.id === movie.id);

    const mylistDisabled = storedMovie ? true : false;

    const Img_API = "https://image.tmdb.org/t/p/w1280"
    const setVoteClass = (vote) => {
        if(vote >= 8){
            return 'bg-success';
        } else if (vote >= 6){
            return 'bg-warning'
        } else {
            return 'bg-danger'
        }
    }
    return (
        <>
            <div className='movie'>
                <Link to={`/details/${movie.id}`} className="cartao-filme">
                <img src={
                    movie.poster_path ? Img_API + movie.poster_path
                    : 'http://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80'
                }
                    alt={movie.title} />
                </Link>
                <div className='movie-info'>
                    <h3>{movie.title}</h3>
                    <span className={`average ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                </div>
                <div className='movie-over'>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <button 
                        className='btn bg-dark text-white'
                        disabled={mylistDisabled}
                        onClick={() => addMovieToMyList(movie)}
                    >Add MyList</button>
                </div>
            </div>
        </>
    );
}
export default MovieCard;