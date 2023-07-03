import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IState from "../../types/StateType";
import "./NavBar.scss";
import SearchInputs from "../../features/search/components/searchinputs/SearchInputs";

const NavBar = () => {
  const isLogged = useSelector((state: IState) => state.login.isLogged);
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__list">
          <div className="navbar__links--left">
            <li>
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
          </div>
          <SearchInputs />
          <div className="navbar__links--right">
            <li>
              <Link className="navbar__link" to="/cart">
                Cart
              </Link>
            </li>
            {!isLogged && (
              <li>
                <Link className="navbar__link" to="/login">
                  Log in
                </Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
