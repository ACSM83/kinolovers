import '../App.css'
import SeriesNowPlaying from './SeriesNowPlaying';
import SeriesTopRated from './SeriesTopRated';

function Series() {
    
    return (
        <div>
            <h1 className='categorias-filmes'>Now Playing</h1>
            <SeriesNowPlaying tipo='tv'/>
            <h1 className='categorias-filmes'>Top Rated</h1>
            <SeriesTopRated tipo='tv'/>                            
        </div>
    );
}

export default Series;