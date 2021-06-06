import React, {useState, useEffect} from 'react';
import { Row, Col, Jumbotron, Image, Button} from 'react-bootstrap';
import '../App.css';
import TvCast from './TvCast';
import WatchSerieTrailer from './WatchSerieTrailer';
import {useLocation} from 'react-router-dom';
//import MyList from './MyList';
import TvReviews from './TvReviews';
import TvRecommendations from './TvRecommendations';

const TvDetails = () => {
    const Location = useLocation();
    let id = Location.pathname.split('/')[2];
    const [details, setDetails] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const Featured_API = `https://api.themoviedb.org/3/tv/${id}?api_key=396396a62b712667981a8f668ce12839&language=en-US`;
    const Img_API = "https://image.tmdb.org/t/p/w1280"

    const setVoteClass = (vote) => {
        if(vote >= 7.5){
            return 'success';
        } else if (vote >= 6){
            return 'warning'
        } else {
            return 'danger'
        }
    }
    const genres = (arr) => {
        let genre = ''
        if (arr !== undefined){
            for(let i = 0; i < arr.length; i++){
                genre +=  `${arr[i].name} `
            }
        }
        
        return genre;
    }

    const count = (arr) => {
        let count = 0;
        if (arr !== undefined){
            for(let i=0; i< arr.length; i++){
                count += 1;
            }
        }
        return count;
    }

    useEffect(() => {
        const getDetails = (API) => {
            fetch(API)
            .then((result) => result.json())
            .then((data) => {
              console.log(data);
              setDetails(data);
            })
          }
        getDetails(Featured_API);
    }, [Featured_API])
        
    return(
        <>
        <Jumbotron className='m-auto'>
            <Row>
                <Col xs lg='4' className='poster'>
                    <Image src={details.poster_path ? Img_API + details.poster_path
                : 'http://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80'} className='img-details'>
                    </Image>
                </Col>
                <Col xs lg='5'className='details'>
                    <h1>{details.name}<span> - {details.status}</span></h1>
                    <p>{details.first_air_date}/ {genres(details.genres)}/ total seasons: {count(details.seasons)}</p>
                    Rate: <span className={`bg-${setVoteClass(details.vote_average)} average`}>{details.vote_average}</span>
                    <h5 className='mt-4'>{details.tagline}</h5>
                    <h5 className='mt-4'>Overview:</h5>
                    <p>{details.overview}</p>
                    <Col>
                        <Button className='mr-4' variant="primary" onClick={() => setModalShow(true)}>
                            Trailer
                        </Button>
                        <Button className='mr-4' variant="primary">
                            +MY LIST
                        </Button>
                       { /* <MyList id={id}/> */}
                    </Col>
                </Col>
            </Row>
        </Jumbotron>
        <h2>Elenco</h2>
        <TvCast id={id}/>
        <h2>Reviews</h2>
        <TvReviews id={id}/>
        <h2>Recommendations</h2>
        <TvRecommendations id={id}/>
        <WatchSerieTrailer
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={id}
        />
</>
    )
}
export default TvDetails;