import { Link } from 'react-scroll';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
        <div className='banner-text'>
          <p className='banner-text-1'>Hi! I'm</p>
          <p className='banner-text-2'>Luciano</p>
          <p className='banner-text-3'>FullStack Developer</p>
          <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          <button className='banner-button'><span className='text'>ABOUT ME</span></button>
          </Link>
        </div>
      </div>   
    </div>
  )
}

export default Banner