import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import responsive from './Responsive';
import MovieCard from './MovieCard';


function HorrorMovies(props) {
  let tipo = props.tipo;
  const Featured_API = `https://api.themoviedb.org/3/discover/${tipo}?api_key=396396a62b712667981a8f668ce12839&with_genres=27&sort_by=revenue.desc&page=1`;

  const [movies, setMovies] = useState();
    
  useEffect(() => {
      getMovies(Featured_API);
  }, [Featured_API])

  const getMovies = (API) => {
    fetch(API)
    .then((result) => result.json())
    .then((data) => {
      console.log(data.results);
      setMovies(data.results);
    })
  }

  return (
    <Carousel responsive={responsive} className="now-playing">      
      {movies !== undefined && movies.length > 0 && movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </Carousel>    
  );
}

export default HorrorMovies;