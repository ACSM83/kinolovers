import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import '../css/styles.css';
import '../App.css';
import {Link} from 'react-router-dom';
import movies_home from '../images/movies_home.png';
import tvseries from '../images/tvseries.png';
import kids from '../images/kids.png';

function Home() {
  const Featured_API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=396396a62b712667981a8f668ce12839&language=en-US';
  const Img_API = "https://image.tmdb.org/t/p/w1280"
  
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
      <>
      <Carousel>
      {movies.length > 0 && movies.map((movie) => (
        <Carousel.Item interval={4000} key={movie.id}>
            <Image
              className='home_img'
              src={Img_API + movie.backdrop_path}
              alt={movie.original_title}
          />
          <Carousel.Caption>
          <Link className="titulo_carrossel" to={`/details/${movie.id}`}>
            <h1>{movie.title}</h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}  
      </Carousel>
        <Container id='portfolio' className='home'>
          <Row>
              <Col sm={2} lg={4}>
                <div className='portfolio-item'>
                  <Link className='portfolio-link' to='/movies'>
                    <div className='portfolio-hover'>
                      <h1 className='portfolio-hover-content'>MOVIES</h1>
                    </div>                  
                    <Image src={movies_home} fluid></Image>
                  </Link>
                </div>
                    
              </Col>
              <Col sm={2} lg={4}>
              <div className='portfolio-item'>
                <Link className='portfolio-link' to='/series'>
                  <div className='portfolio-hover'>
                    <h1 className='portfolio-hover-content'>SERIES</h1>
                  </div>                  
                  <Image src={tvseries} fluid></Image>
                </Link>
              </div>
              </Col>
              <Col sm={2} lg={4}>
              <div className='portfolio-item'>
                <Link className='portfolio-link' to='/kids'>
                  <div className='portfolio-hover'>
                    <h1 className='portfolio-hover-content'>KIDS</h1>
                  </div>                  
                  <Image src={kids} fluid></Image>
                </Link>
              </div>                                      
              </Col>
          </Row>
        </Container>
        </>      
    );
}

export default Home;