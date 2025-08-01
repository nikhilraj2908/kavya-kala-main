import './header.css';
import logo from '../../assets/logo.png'; // Update as needed
import { FaMoon, FaSun } from 'react-icons/fa';
export function Header({ theme, toggleTheme }) {
  return (
    <header className="custom-header shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-2">

        {/* LEFT: Logo & Navigation */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <img src={logo} width={50} height={55} alt="logo" className="logo-img" />
            <h4 className="m-0 fw-bold ">काव्यकला</h4>
          </div>
          <div className="d-flex align-items-center gap-3 ms-4">
            <div className=" bi bi-house-fill nav-link">गृह</div>
            <div className="nav-link">कवि</div>
            <div className="nav-link">रचनाएं</div>
            <button className="btn btn-sm btn-secondary mx-4  d-flex align-items-center gap-1">
              <i className="bi bi-plus-lg"></i> कवि जोड़ें
            </button>
          </div>
        </div>

        {/* RIGHT: Search, Login, Icons */}
        <div className="d-flex align-items-center gap-4">
          {/* Search Bar */}
          <div className="search-box d-flex align-items-center px-2 py-1 rounded border border-secondary">
            <i className="bi bi-search me-2 style={{ color: 'var(--text-color)' }}"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none bg-transparent"style={{ color: 'var(--text-color)' }}
              placeholder="खोजिए"
            />
            <i className="bi bi-mic-fill ms-2 style={{ color: 'var(--text-color)' }}"></i>
          </div>

          {/* Login */}
          <div className="login-text">लॉग-इन</div>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3 fs-5 social-icons">
            <i className="bi bi-grid-3x3-gap-fill"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
          </div>
           <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </header>
  );
};

// export default Header;
