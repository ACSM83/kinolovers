import React, {useState, useEffect} from 'react';
import {Card, Accordion, Button} from 'react-bootstrap';

const Reviews = (props) => {
    let id = props.id;
    //console.log(id);
    const [reviews, setReviews] = useState([]);
    const Featured_API = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=396396a62b712667981a8f668ce12839&language=en-US`
    
    useEffect(() => {
        const getReviews = (API) => {
            fetch(API)
            .then((result) => result.json())
            .then((data) => {
              console.log(data);
              setReviews(data.results);
            })
          }
        getReviews(Featured_API);
    }, [Featured_API])

   

      return (          
        <Accordion defaultActiveKey="0">
            {reviews.length > 0 ? reviews.map((r)=> (    
            <div key={'reviews_' + r.id}>
                <Card >
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {r.author}
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>{r.content}</p>
                                <p>{r.created_at}</p>
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>
            </div>  
            )) : <p>No Reviews to Show</p>} 
        </Accordion>
        )
}
export default Reviews;