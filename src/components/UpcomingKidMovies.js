import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import responsive from './Responsive';
import MovieCard from './MovieCard';

const Featured_API = 'https://api.themoviedb.org/3/discover/movie?api_key=396396a62b712667981a8f668ce12839&with_genres=16&primary_release_date.gte=2020-12-29&sort_by=popularity.desc&page=1';

function UpcomingKidMovies() {
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
        <div key={'Upcoming_' + movie.id}>
          <MovieCard movie={movie} /></div>
      ))}
    </Carousel>    
  );
}

export default UpcomingKidMovies;