import React, {useState, useEffect} from 'react';
import {Modal, Button, ResponsiveEmbed} from 'react-bootstrap';

function WatchSerieTrailer(props) {
  let id = props.id;
  const [trailer, setTrailer] = useState([]);
  const Featured_API = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=396396a62b712667981a8f668ce12839&language=en-US`;

  useEffect(() => {
    const getTrailer = (API) => {
      fetch(API)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setTrailer(data.results);
    
      })
    }
    getTrailer(Featured_API);
}, [Featured_API])

    return (
      trailer.length > 0 && trailer.map((t)=> (
        <div key={'WatchTrailer' + t.key[0]}>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {t.name}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ResponsiveEmbed playsInline aspectRatio="16by9" autoPlay loop="loop">
                <embed type="video/mp4" src={`https://www.youtube.com/embed/${t.key}`} />
            </ResponsiveEmbed>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
      ))
    );
  }
  export default WatchSerieTrailer;