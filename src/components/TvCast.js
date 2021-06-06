import React, {useState, useEffect} from 'react';
import responsive from './Responsive';
import {Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import default_picture from '../images/default_picture.jpg';

const TvCast = (props) => {
  let id = props.id;
  const [cast, setCast] = useState([]);
  const Featured_API = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=396396a62b712667981a8f668ce12839&language=en-US`;
  const Img_API = "https://image.tmdb.org/t/p/w1280";
    
  useEffect(() => {
    const getCast = (API) => {
      fetch(API)
      .then((result) => result.json())
      .then((data) => {
      //console.log(data);
      setCast(data.cast);
    })
    }
      getCast(Featured_API);
  }, [Featured_API])
  
    return (
      <Carousel responsive={responsive}>
        {cast.length > 0 && cast.map((a)=> (
          <div key={'tvcast' + a.id}>     
            <Card style={{ width: '18rem', heigth: 'auto'}}>
              <Card.Img variant="top" src={a.profile_path ? Img_API + a.profile_path : default_picture} alt={a.name} />
                <Card.Body>
                  <Card.Title>{a.name}</Card.Title>
                  <Card.Text>{a.character}</Card.Text>
                </Card.Body>          
            </Card>
        </div> 
        ))} 
      </Carousel>
    )
}
export default TvCast;