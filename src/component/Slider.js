import React, { useState, useEffect, useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DataContext from '../context/DataContext';


const Slider = () => {
  const {getImgUrl, bannerData} = useContext(DataContext)

 

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = bannerData

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };

  const slideContainer = (
    slides.map((slide, index) => (
      <div
        key={slide._id}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
        style={{
          background: `url('${getImgUrl(slide.image)}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}

      >
        <div className='over-lay'>
        </div>
        <div className='small--img--name'>

          <img src={getImgUrl(slide.image)} className='banner--img' />
          <h3 className='banner--nft--name' style={{ color: '#fff' }}>{slide.name} <FaCheckCircle style={{ color: '#547dc4', marginLeft: '2px',marginTop: '2px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} /></h3>
        </div>

      </div>
    ))
  )

  return (
    <section className="slider-container">
      {slideContainer}
      <button className='slider--prev--btn' onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px', margin: 'auto' }} /></button>
      <button className='slider--ntx--btn' onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>
    </section>
  );
};

// export default Slider;


// import React, { useState, useEffect } from 'react';

// const Slider = ({ bannerData }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   console.log(bannerData)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Increment the current slide index
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerData.length);
//     }, 10000); // Change slide every 10 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [bannerData]);

//   return (
//     <div className="slider" style={{width : '200px'}}>
//       {bannerData.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentSlide ? 'active' : ''}`}
//           style={{background : `url('${slide.logo}')`}}
//         >
//           <div className='new--overlay'></div>
//           <img src={slide.logo} />
//         </div>
//       ))}
//     </div>
//   );
// };

export default Slider;
