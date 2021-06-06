import '../App.css'
import PopularKidMovies from './PopularKidMovies';
import UpcomingKidMovies from './UpcomingKidMovies';
import BestRevenueKidMovies from './BestRevenueKidMovies';
import Fantasy from './Fantasy';
import Family from './Family';

function Movies() {
    
    return (
        <div>
            <h1 className='categorias-filmes'>Upcoming</h1>
            <UpcomingKidMovies tipo='movie'/>
            <h1 className='categorias-filmes'>Popular</h1>
            <PopularKidMovies tipo='movie'/>
            <h1 className='categorias-filmes'>Best Revenues</h1>
            <BestRevenueKidMovies tipo='movie'/>
            <h1 className='categorias-filmes'>Fantasy</h1>
            <Fantasy tipo='movie'/>
            <h1 className='categorias-filmes'>Family</h1>
            <Family tipo='movie'/>              
        </div>
    );
}

export default Movies;