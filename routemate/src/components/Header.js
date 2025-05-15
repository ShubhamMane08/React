import Logo from "../../assests/logo.png";
export const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
      <img src={Logo} alt="Routemate Logo" />
      <span>Routemate</span>
      </a>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>

      </nav>

    </header>
  )
}
