import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            AkumaDrive
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Random Generator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./public/signup.html">
                  Sign in
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" id="search-bar">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Navigation;
