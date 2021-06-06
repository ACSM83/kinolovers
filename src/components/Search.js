import React, {useEffect, useState} from 'react';
import '../App.css';
import MovieCard from './MovieCard';
import SerieCard from './SerieCard';
import Select from 'react-select';
import {Container, Row, Col} from 'react-bootstrap';

function Search() {
  const Featured_API = 'https://api.themoviedb.org/3/discover/movie?api_key=396396a62b712667981a8f668ce12839&language=en-US';
  const Search_API = 'https://api.themoviedb.org/3/search/multi?&api_key=396396a62b712667981a8f668ce12839&query=';
  const Genres_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=396396a62b712667981a8f668ce12839&language=en-US';
  const PopularPeople_API = 'https://api.themoviedb.org/3/person/popular?api_key=396396a62b712667981a8f668ce12839&language=en-US';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState({});//armazena a lista de géneros que vêm da API
  const [genre, setGenre] = useState(null);//armazena o género selecionado
  const [order, setOrder] = useState(null);
  const [year, setYear] = useState(null);
  const [persons, setPersons] = useState([]);//armazena a lista de pessoas que vêm da API
  const [person, setPerson] = useState(null);//armazena a pessoa selecionada
  const [url, setUrl] = useState(Featured_API);
  
  useEffect(() => {
      getMovies(url+ '&page='+ 1);
      getGenres(Genres_API);
      getPopularPeople(PopularPeople_API);      
  }, [])

  const getMovies = (url) => {
    fetch(url)
    .then((result) => result.json())
    .then((data) => {
      setMovies(data.results);  
      console.log(data.results)    
      setTotalPages(data.total_pages);
    })
  }
  const getGenres = (API) => {
    fetch(API)
    .then((result) => result.json())
    .then((data) => {
      setGenres(data.genres);
    })
  }
  
  const getPopularPeople = (API) => {
    fetch(API)
    .then((result) => result.json())
    .then((data) => {
      setPersons(data.results);      
    })
  }

  const options = 
    genres.length > 0 && genres.map((genre) => (
      {value: genre.id, label: genre.name}
    ));

  const orderOptions = [
    {value: 'popularity.desc', label: 'Popularity'},
    {value: 'vote_average.desc', label: 'Vote Average'},
    {value: 'revenue.desc', label: 'Revenue'},
    {value: 'release_date.desc', label: 'Release Date'},
    {value: 'vote_count.desc', label: 'Vote Count'},
  ]
  
  const yearOptions = [
    {value: '2020', label: '2020'},
    {value: '2019', label: '2019'},
    {value: '2018', label: '2018'},
    {value: '2017', label: '2017'},
    {value: '2016', label: '2016'},
    {value: '2015', label: '2015'},
    {value: '2014', label: '2014'},
    {value: '2013', label: '2013'},
    {value: '2012', label: '2012'},
    {value: '2011', label: '2011'},
    {value: '2010', label: '2010'},
    {value: '2009', label: '2009'},
    {value: '2008', label: '2008'},
    {value: '2007', label: '2007'},
    {value: '2006', label: '2006'},
    {value: '2005', label: '2005'},
    {value: '2004', label: '2004'},
    {value: '2003', label: '2003'},
    {value: '2002', label: '2002'},
    {value: '2001', label: '2001'},
    {value: '2000', label: '2000'},
  ]

  const peopleOptions = 
    persons.length > 0 && persons.map((person) => (
      {value: person.id, label: person.name}
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (searchTerm){
      console.log('searchTerm') 
      setUrl(Search_API + searchTerm);
      getMovies(Search_API + searchTerm + '&page=1')
      setCurrentPage(1);
    }       
  }
  
  const handleSubmitMovies = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentPage(1);
    let localURL = Featured_API

    if (genre!==null){
      localURL  += '&with_genres=' + genre.value        
    } 
    if (order!==null){ 
      localURL  += '&sort_by=' + order.value
    }
    if (year!==null){ 
      localURL  += '&primary_release_year=' + year.value
    }
    if (person!==null){ 
      localURL  += '&with_people=' + person.value
    }
    setUrl(localURL);
    getMovies(localURL + '&page=1')
  }

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
  }

  const next = () => {
    let page = Math.min(currentPage + 1, totalPages);
    setCurrentPage(page);
      getMovies(url + '&page=' + page );
  }
    
  const prev = () => {
    let page = Math.max(currentPage - 1, 1);
    setCurrentPage(page);
    getMovies(url + '&page=' + page );
    
  }
  
  return (
      <>
      <Container className='mt-4'>
        <Row className='border p-4 mb-2'>
        <Col md={12}>
              <form onSubmit={handleSubmit}>
                  <input 
                    className='form-control w-100 p-2 px-4 rounded-pill' 
                    type='text' 
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleOnChange} 
                  />      
                  <button type='submit' className='btn botao-login px-4 rounded-pill my-2'>Submit</button>
              </form>
        </Col>
        </Row>
        <Row className='border p-4'>
        <Col md={12}>
            <form onSubmit={handleSubmitMovies}>        
                <div className='pb-3'>
                  <p>Movie filters</p>
                  <Select 
                    options={options}
                    value={genre}
                    placeholder='Select movie genre'
                    onChange={setGenre}
                    className='w-100' />
                </div>
                <div className='pb-3'>
                    <Select
                      options={orderOptions}
                      value={order}
                      placeholder='Order by...'
                      onChange={setOrder}
                      className='w-100' />
                </div>
                <div className='pb-3'>
                    <Select
                      options={yearOptions}
                      value={year}
                      placeholder='Year'
                      onChange={setYear}
                      className='w-100' />
                </div>
                <div className='pb-3'>
                    <Select
                      options={peopleOptions}
                      value={person}
                      placeholder='Person...'
                      onChange={setPerson}
                      className='w-100' />
                </div>
                <button type='submit' className='btn botao-login px-4 rounded-pill my-2'>Submit</button>         
            </form>
            </Col>
          </Row>
        </Container>
        <div className="movie-container"> 
            {movies.length > 0 && movies.map((movie) => (
              movie.media_type==='tv' ? <SerieCard key={movie.id} movie={movie} /> : <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <div className='buttons'>
        <button className="btn btn-light border px-4" onClick={prev}>Previous</button>
        <span>{` ${currentPage} / ${totalPages} `}</span>
        <button className="btn btn-light border px-4" onClick={next}>Next</button>
      </div>
    </>
  );
}

export default Search;