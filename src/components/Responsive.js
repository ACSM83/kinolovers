const responsive = {
    //consultado em https://www.npmjs.com/package/react-multi-carousel
      superLargeDesktop: {
        // o nome pode ser qualquer um, dependo do desejado
        breakpoint: { max: 4000, min: 3000 },
        items: 8
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    export default responsive;