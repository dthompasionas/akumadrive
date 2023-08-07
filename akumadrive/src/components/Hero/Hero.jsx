import Carousel from "react-bootstrap/Carousel";
import chainsawMan from "../../assets/images/chainsaw-man.jpg";
import slime from "../../assets/images/slime.jpg";
import onePiece from "../../assets/images/straw_hat_pirates.jpg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block h-500px w-100"
            src={chainsawMan}
            alt="Chainsaw Man image"
          />
          <Carousel.Caption className="mt-5">
            <h1>Anime Recommendations</h1>
            <p>
              Want a random anime recommendation based on the genre you pick?
            </p>
            <button className="btn btn-primary">Generate</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slime}
            alt="Reincarnated as a slime image"
          />
          <Carousel.Caption className="mt-8">
            <h1>Browse Anime</h1>
            <p>Browse our wide selection of anime.</p>
            <button className="btn btn-primary">Browse</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={onePiece} alt="One Piece image" />
          <Carousel.Caption className="mt-8">
            <h1>Sign Up</h1>
            <p>
              Sign up and make a personal list of anime and manga you watched or
              read.
            </p>
            <button className="btn btn-primary">Sign up</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero;
