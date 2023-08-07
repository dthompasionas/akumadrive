import Carousel from "react-bootstrap/Carousel";
import chainsawMan from "../assets/images/chainsaw-man.jpg";
import slime from "../assets/images/slime.jpg";
import onePiece from "../assets/images/straw_hat_pirates.jpg";

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chainsawMan}
          alt="Chainsaw Man image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slime}
          alt="Reincarnated as a slime image"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={onePiece} alt="One Piece image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
