import "./BlobButton.scss";
import {Link} from 'react-scroll'
const BlobButton = () => {
  
  return (
    <div className="buttons">
      <Link 
      to="footer" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={750}
      className="blob-btn" href="../../App.tsx" style={{ textTransform: "none" }}>
        Let's talk
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </Link>
      <br />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ignore">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlobButton;
