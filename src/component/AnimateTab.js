import { useState, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

const AnimateTab = ({ bannerData }) => {

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
                key={slide.id}
                className={`slide-1 ${index === currentSlide ? 'active' : ''}`}
                style={
                    {
                        background: `url(${slide.logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexBasis: '50%',
                        position: 'relative',
                        width: '400px',
                        height: '400px',
                        borderRadius: '10px',
                        opacity: '0'
                    }
                }

            >
                <div className='slide--overlay'>
                    <div className='nft--animate--details'>
                        <img src={slide.logo} width="60px" className='animate--img' />
                        <h3 className='banner--nft--name' style={{ color: '#fff' }}>{slide.name} <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} /></h3>
                    </div>
                </div>
                <button onClick={prevSlide} className='slider-1-previous-btn'> <FontAwesomeIcon onClick={prevSlide} icon={faLessThan} style={{ color: '#fff', fontSize: '17px' }} /> </button>
                <button onClick={nextSlide} className='slider-1-next-btn'> <FontAwesomeIcon onClick={nextSlide} icon={faGreaterThan} style={{ color: '#fff', fontSize: '17px' }} /> </button>
            </div>
        ))
    )

    return (
        <>
        {slideContainer}
        </>
        )
}

export default AnimateTab
    // <div className='slider-1' style={{ background: `url(${slides.logo})` }}>
    //     <div className='slide--overlay'>
    //         <div className='nft--animate--details'>

    //             <img src={slides.logo} width="60px" className='animate--img' />
    //             <h3 className='banner--nft--name' style={{ color: '#fff' }}>dein <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} /></h3>
    //         </div>
    //     </div>
    //     <button onClick={prevSlide} className='slider-1-previous-btn'> <FontAwesomeIcon onClick={prevSlide} icon={faLessThan} style={{ color: '#fff', fontSize: '17px' }} /> </button>
    //     <button onClick={nextSlide} className='slider-1-next-btn'> <FontAwesomeIcon onClick={nextSlide} icon={faGreaterThan} style={{ color: '#fff', fontSize: '17px' }} /> </button>
    // </div>