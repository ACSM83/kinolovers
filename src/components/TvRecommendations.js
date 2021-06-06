import React, {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import responsive from './Responsive';
import {Link} from 'react-router-dom';

const TvRecommendations = (props) => {
    let id = props.id;
    //console.log(id);
    const [recommendations, setRecommendations] = useState([]);
    const Featured_API = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=396396a62b712667981a8f668ce12839&language=en-US&page=1`
    const Img_API = "https://image.tmdb.org/t/p/w1280";

    const setVoteClass = (vote) => {
      if(vote >= 8){
        return 'green';
      } else if (vote >= 6){
        return 'orange'
      } else {
        return 'red'
      }
    }
    
    useEffect(() => {
      const getRecommendations = (API) => {
        fetch(API)
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setRecommendations(data.results);
        })
      }
        getRecommendations(Featured_API);
    }, [Featured_API])
    
    return (
      <Carousel responsive={responsive}>
        {recommendations.length > 0 ? recommendations.map((r)=> (      
          <Link to={`/tvdetails/${r.id}`}><div key={'recommendation_'+ r.id}className='movie'>
            <img src={
              r.poster_path ? Img_API + r.poster_path
                : 'http://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80'
            }
              alt={r.name} />
            <div className='movie-info'>
              <h3>{r.name}</h3>
              <span className={`tag ${setVoteClass(r.vote_average)}`}>{r.vote_average}</span>
            </div>
            <div className='movie-over'>
              <h2>Overview:</h2>
              <p>{r.overview}</p>
            </div>
          </div></Link>
        )) : <p>No Recommendations to Show</p>} 
      </Carousel>
    )
}
export default TvRecommendations;