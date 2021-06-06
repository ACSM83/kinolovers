import '../App.css'
import ComedyMovies from './ComedyMovies';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import UpcomingMovies from './UpcomingMovies';
import ActionAdventureMovies from './ActionAdventureMovies';
import HorrorMovies from './HorrorMovies';
import RomanceMovies from './RomanceMovies';


function Movies() {
    
  return (
    <div>
      <h1 className='categorias-filmes'>Upcoming</h1>
      <UpcomingMovies tipo='movie'/>
      <h1 className='categorias-filmes'>Now Playing</h1>
      <NowPlaying tipo='movie'/>
      <h1 className='categorias-filmes'>Top Rated</h1>
      <TopRated tipo='movie'/>
      <h1 className='categorias-filmes'>Comedy</h1>
      <ComedyMovies tipo='movie'/>
      <h1 className='categorias-filmes'>Action & Adventure</h1>
      <ActionAdventureMovies tipo='movie'/>
      <h1 className='categorias-filmes'>Romance</h1>
      <RomanceMovies tipo='movie'/>
      <h1 className='categorias-filmes'>Horror</h1>
      <HorrorMovies tipo='movie'/>                    
    </div>
  );
}
export default Movies;