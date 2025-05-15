import Logo from "../assests/logo.png";
import {Link , Navlink} from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Link href="/" className="logo">
      <img src={Logo} alt="Routemate Logo" />
      <span>Routemate</span>
      </Link>
      <nav className="navigation">
        <Link href="/" className="link">Home</Link>
        <Link href="/products" className="link">Products</Link>
        <Link href="/contact" className="link">Contact</Link>

      </nav>

    </header>
  )
}
