import { useContext } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {GlobalContext} from '../context/GlobalState';
import MovieControls from './MovieControls';


function MyList() {
    const {mylist} = useContext(GlobalContext);
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
        mylist.length > 0 ? (
            <div className="movie-container">
            {mylist.map((movie) => (
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
                    {movie.media_type==='tv' ? <h3>{movie.name}</h3> : <h3>{movie.title}</h3>}
                    <span className={`average ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                </div>
                <div className='movie-over'>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <MovieControls movie={movie}/>
                </div>
            </div>
            </>
            ))}
        </div>
        ) : (<h2>No movies in your list.</h2>)   
    );
}
export default MyList;