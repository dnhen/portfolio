import '../Styles/Navbar.css';

const Navbar = ( { cartState, removeFromCart } ) => {
  const handleBurgerClick = () => { // Func to show the menu when hamburger clicked
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".navItems");

    navbar.classList.toggle("burgerActive");
    burger.classList.toggle("toggle");
  }

  document.addEventListener("click", function(e) { // Close hamburger when clicked
    if(e.path[0].localName === "a" && e.path[1].localName === "li" && e.path[2].className === "navItems burgerActive"){ // When the element is a navbar item
      document.getElementsByClassName("burger")[0].click();
    }
  });

  return (
    <div className="navbar">
      <div className="navLogo">
        <p><span className="logoText">dnhen.</span></p>
      </div>
      <ul className="navItems">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#extras">Contact</a></li>
      </ul>
      <div className="burger" onClick={handleBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;
