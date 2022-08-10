import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="collapse">
          <ul>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
