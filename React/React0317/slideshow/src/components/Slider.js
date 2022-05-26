import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ index, setIndex, image }) => {
  const slideHandlerPlus = () => {
    if (index === image.length-1) return null;
    setIndex(++index);
  };

  const slideHandlerMinus = () => {
    if (index === 0) return null;
    setIndex(--index);
  };

  return (
    <div  className="slider">
      <div className="nav-left"><FontAwesomeIcon onClick={slideHandlerMinus} icon={faChevronLeft} /></div>
      <img alt="asd" src={image[index]} />
      <div className="nav-right"> <FontAwesomeIcon onClick={slideHandlerPlus} icon={faChevronRight} /></div>
    </div>
  );
};

export default Slider;
