import { Link } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogoutHandler = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("loginUser");
    dispatch({ type: actionTypes.FETCH_LOGIN_REMOVE });
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <FallingLines
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto text-primary">
              <h1>
                TO-<span className="text-danger">DO</span>{" "}
              </h1>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active fs-2 text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
             

              <li className="nav-item">
                <Link
                  className="nav-link fs-2 text-danger "
                  onClick={LogoutHandler}
                >
                  <i className="fa-solid fa-power-off"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
