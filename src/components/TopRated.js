import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import responsive from './Responsive';
import MovieCard from './MovieCard';


function TopRated(props) {
  let tipo = props.tipo;
  const Featured_API = `https://api.themoviedb.org/3/${tipo}/top_rated?api_key=396396a62b712667981a8f668ce12839&language=en-US`;
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const getMovies = (API) => {
      fetch(API)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
    }
      getMovies(Featured_API);
  }, [Featured_API])

  return (
    <Carousel responsive={responsive} className="now-playing">      
      {movies.length > 0 && movies.map((movie) => (
        <div key={'TopRated_' + movie.id}>
          <MovieCard movie={movie} /></div>
      ))}
    </Carousel>    
  );
}

export default TopRated;